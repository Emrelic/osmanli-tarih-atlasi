# ŞARTNAME — Kutu ekran görüntüsüne **KÜNYE** eklensin

> **Emre, 9 Ekim 2026:** *"koordinat ve tarihi resmin altına eklesin · koordinat,
> tarih ve kronoloji maddesinin ne olduğu bilgisini eklesin · başka lazım
> olabilecek ne var ise onu da ekleyebilirsin."*
> ⚠️ Bu belge **Atlas deposunda** duruyor ama iş **`C:\claudemre\kutu\`**tadır
> (ClaudEmre sistemi, ayrı depo). Atlas'ın şartnamesi değil, Atlas'ın **isteği**dir.

---

## 0. ÖLÇÜLEN DURUM — 🔴 BU BİR **GERİLEME**; özellik VARDI ve KAYBOLDU
> ⚠️ **Bu bölümün ilk hâli YANLIŞTI ve düzeltildi.** Koordinatör *"hiç olmamış
> bir özellik"* yazmıştı. Emre itiraz etti (*"eski paketlere bak, orada
> görürsün"*) ve **haklıydı**. Hatanın sebebi: `PARTI.json`un **alanları** ve
> görsellerin **ölçüleri** ölçüldü, ama **resmin kendisine BAKILMADI.** Ölçülen
> şey yanlıştı, hüküm kendinden emindi. (`§11`: *ölçüm doğru, çıkarım yanlış* —
> burada ölçümün kendisi başka bir soruyu cevaplıyordu.)

**KANIT — `parti-0002/H-0006-1.png`, resmin altındaki şerit AYNEN:**
```
1331-01-01 · 35.26–43.68N · 23.85–40.02E · z5.7 · Osmanlı Tarih Atlası
Madde: İznik'te ilk Osmanlı medresesinin kuruluşu
```
⇒ Tarih · **kesit kutusu** · yakınlaştırma · uygulama adı · **kronoloji maddesi**.
Yani bu şartnamenin istediği şeyin neredeyse tamamı **bir zamanlar çalışıyordu.**

**BUGÜN (`parti-0085/H-0008-1.png`, 1439×823):** şerit **YOK**, ham kırpıntı.
`PARTI.json`da da iz yok: 1.834 maddenin hepsinde yalnız
`no · baslik · metin · gorseller`.

### 🔴 KAYBIN ÂNI — ölçüldü
```
ESKİ YOL  UI Inspector (Ctrl+F9/F11) çekerdi ve ALTYAZIYI O KOYUYORDU.
          Kutu yalnız o klasörü İZLİYORDU — `kutu.py:256`,
          "~/OneDrive/Desktop/UI Inspector Exports"  ← BUGÜN DE İZLİYOR
YENİ YOL  `kutu/bolge_yakala.py` kendisi sürükle-bırakla kırpıyor.
          Altına yazı koyan kod YOK.
```
Emre'nin cümlesi bunu birebir anlatıyor: *"o programın elinden bu işi aldık ve
kutu programına devrettik; o anda kaybolmuş demek ki."*
🔴 **Ve kaybın SESSİZ olmasının sebebi ayrıca ölçüldü:** `bolge_yakala.py`
**git'te izlenmiyor** ve `ALETLER.md`de kayıtlı değil — açılış denetimi her gün
*"diskte VAR, ALETLER.md'de YOK"* diye bunu basıyor. ⇒ **Kayıtsız bir alet,
kayıtlı bir aletin işini devraldı ve yeteneğin bir parçasını düşürdü.** Hiçbir
kapı sormadı çünkü yeni aletin ne yapması gerektiği hiçbir yerde yazılı değildi.

### 🟢 VE ÖZELLİK ÖLMEMİŞ — UIBUL'DA ÇALIŞIYOR, BAŞKA YERE YAZIYOR
`%LOCALAPPDATA%\uibul\settings.json` ölçüldü:
```json
"AtlasKisayolu":      "F4"                               ← F11 değil, F4
"AtlasKlasoru":       "…\\AppData\\Local\\TarihAtlasiKare"
"AtlasEnUzunKenar":   1200
"AtlasSonKareSayisi": 50
"AtlasDamgasizIzin":  true      ← "DAMGASIZ izin": damga okunamazsa yine kaydet
```
Ve o klasörde **100 kare** var; bilgi **dosya adında**:
```
1871-04-20 · 24.47-26.36N 50.63-51.90E · Midhat Paşa'nın Necid seferi… .png
1833-05-14 · 36.55-40.03N 29.92-37.63E · Kütahya Sözleşmesi - Suriye ve Adana… .png
```
⇒ **Tarih · kesit kutusu · kronoloji maddesi** — istenenin tamamı, zaten üretiliyor.
Son kare **4 Ekim** tarihli; yani F4 yolu bir süredir kullanılmıyor.

### ⇒ İŞ "YENİDEN YAZMAK" DEĞİL, "BAĞLANTIYI KURMAK"
```
① kutu.py'nin izlediği klasör listesine TarihAtlasiKare EKLENSİN
   (liste zaten var: kutu.py:256) — TEK SATIR
② Dosya adındaki tarih · kesit · madde AYRIŞTIRILIP PARTI.json'a
   `gorsel_kunye` olarak yazılsın (makine okusun diye)
③ bolge_yakala.py ile kırpılanlar için damga oradan alınsın —
   ya da paket yapılırken kırpma yerine F4 kullanılsın
```
📌 **En ucuz çözüm belki hiç kod istemiyor:** paketleri **F4 ile** çek, kutu o
klasörü izlesin. Emre'nin *"ben bunu yapıyordum"* dediği yol budur ve **hâlâ ayakta.**
⚠️ Dikkat: `AtlasSonKareSayisi: 50` ama klasörde **100** dosya var ⇒ temizlik
kuralı ya çalışmıyor ya ayar sonradan değişmiş. Paket yapılırken kare silinmiş
olmasın; ayrı küçük kalem.

## 0.0 🔴 ASIL AMAÇ: **RESMİ AÇMADAN KARAR VEREBİLMEK**
> **Emre, 9 Ekim 2026:** *"Program öncelikle resimlerin koordinat, tarih ve
> kronoloji maddesi bilgisine bakıp **buradan karar vermeli**. Eğer resmi
> açmadan işi çözebiliyorsa çözmeli; çözemiyorsa, resmi açması gerekiyorsa o
> zaman açmalı. **Resmi açmak gereksiz token kaybettiriyor — biz bunu token
> sarfı olmasın diye yaptık.**"*

⚠️ **Bu, künyenin "faydalı ek bilgi" değil, bir KAPI olduğu anlamına gelir.**
Ve koordinatör bu gece **tam tersini yaptı**: altı görseli doğrudan açtı, sonra
içlerinden şehir adı okumaya çalıştı. Künye olsaydı çoğu hiç açılmayacaktı.

### İŞLEYİŞ — üç adım, sırası bağlayıcı
```
① KÜNYEYİ OKU      tarih · kesit kutusu · kronoloji maddesi · katmanlar
② SORUYU SINIFLA   aşağıdaki tabloya göre: VERİ sorusu mu, GÖRÜNTÜ sorusu mu?
③ SADECE GEREKİRSE RESMİ AÇ
```

### HANGİ SORU RESİM İSTER, HANGİSİ İSTEMEZ
| soru cinsi | örnek (gerçek maddeler) | resim? |
|---|---|---|
| **KİMLİK/TARİH** — *"burası bu devirde X'e mi ait"* | `H-0001` Celayirli · `H-0024` Akkoyunlu iki parça · `H-0026` Erciş · `H-0027` Cizre | ❌ **HAYIR.** Künyedeki tarih + kesit kutusu, veriden doğrudan sorgulanır: *o kutudaki noktaların o gündeki `s:`i ne?* Resim bunu daha kötü anlatır |
| **VARLIK** — *"burada yerleşim yok mu"* | `0086/H-0004·05·06` | ❌ **HAYIR.** Kesit kutusu + nokta sorgusu yeter |
| **GÖRÜNTÜ/RENDER** — *"renk koyu çıkıyor"*, *"bu zikzak neden"*, *"bozuk gösterim"*, *"sivri yapı"* | `H-0008` renk kipi · `0085/H-0011` zikzak · `0087/H-0014` · `0087/H-0022` | ✅ **EVET.** Soru **çizimin kendisi** hakkında; veri doğru olsa bile görüntü yanlış olabilir |
| **İŞARETLEME** — *"işaretlediğim bölge"*, ok/çizgi çizilmiş kare | `0086/H-0010` | ✅ **EVET.** İşaret yalnız resimde var |

📌 **Ölçülmüş emsal:** bu gecenin 36 görselli maddesinin çoğu birinci sınıftandı.
`H-0002` çözüldü çünkü resimde **şehir adları** vardı — ama künye olsaydı o adlara
hiç gerek kalmazdı, kesit kutusu doğrudan veriyi verirdi. Buna karşılık `H-0008`
(renk kipi) künyeyle **çözülemezdi**; orada resim şarttı ve `katmanlar` alanı bile
tek başına yetmezdi.
🔴 ⇒ Künye, resmi **gereksizleştirmek** için değil, **ne zaman gerektiğini
BİLMEK** için var. "Her zaman aç" kadar "hiç açma" da yanlıştır.

## 0.1 NİÇİN GEREKLİ — ölçülmüş bedel
9 Ekim gecesi parti-0085/0086/0087'nin **36 maddesi** görsele bağlıydı ve
**26 görsel 240 pikselden dar**tı (en küçüğü **58×47**, biri **28×64**).
Maddeler *"**burada**"*, *"**bu bölge**"*, *"**bu devirde**"* diyor;
kırpıntıda ne şehir adı var ne tarih ⇒ **koordinatör maddeyi işçiye
gönderemedi.** Bir makine (HAVVA) 9 görsele hiç ulaşamadı, bir başkası
(EEK-DOGU) `H-0028` için **`olculemedi`** yazmak zorunda kaldı.
📌 Çözülenlerde ise fark açık: `H-0002`nin görseli **415×482**'ydi, içinde
Divriği/Çemişgezek/Malatya/Mardin yazıyordu — okundu, madde çözüldü, `main`e indi.
🔴 **Ama doğru çare "daha geniş çek" DEĞİL.** Uygulama o bilgiyi **zaten
biliyor**; onu pikselden okumaya çalışmak, elde olan veriyi tahmine çevirmektir.

---

## 1. 🔴 ÖNCE ÇÖZÜLMESİ GEREKEN TASARIM SORUSU
**`bolge_yakala.py` ekranın bir dikdörtgenini kırpar; Atlas'ın ne gösterdiğini
BİLMEZ.** İki ayrı program. ⇒ Künye bilgisi bir yerden **gelmeli**:
```
(a) PANO (clipboard)   Atlas'ta "📋 durumu kopyala" düğmesi; kutu yakalama anında
    ✔ ÖNERİLEN          panoyu okur. Basit, iki programı birbirine bağlamaz,
                        tarayıcıdan dosya yazmayı gerektirmez.
(b) DURUM ŞERİDİ       Atlas haritanın köşesine küçük bir durum satırı çizer;
                        kırpma onu içine alırsa bilgi RESMİN İÇİNDE gelir.
                        ✔ (a) ile BİRLİKTE yapılsın: yedeği olur ve kullanıcıya
                        da fayda sağlar. Tek başına yetmez (kırpma dışarıda kalabilir).
(c) Elle giriş         ✘ HAYIR. Her yakalamada soru sormak, yakalamayı yavaşlatır
                        ve ilk sıkışıklıkta boş geçilir.
```
⇒ **(a) + (b)**. Atlas tarafı `Z2`nin işi (`js/app.js`), kutu tarafı ClaudEmre'nin.

---

## 2. KÜNYE ALANLARI — hangi bilgi, niçin
Her biri **ölçülmüş bir ihtiyaca** dayanıyor; "iyi olurdu" diye eklenen yok.

| alan | örnek | niçin — bu gece hangi işi tıkadı |
|---|---|---|
| `tarih` | `1514-09-06` | 🔴 **EN GEREKLİSİ.** Maddeler *"bu devirde"* diyor, hiçbir karede tarih yok. Devri bu gece **devletlerin dizilişinden tahmin ettim** (Artuklu+Akkoyunlu+Karakoyunlu bir arada ⇒ "kabaca 1390-1409"). Bu bir **çıkarım**, ölçüm değil |
| `kesit_kutusu` | `[38.2, 37.9, 41.6, 39.8]` | "burada"nın cevabı. Merkez+yakınlaştırmadan **daha iyi**: doğrudan hangi coğrafyanın göründüğünü verir |
| `merkez` + `yakinlastirma` | `41.0,39.0 · z6.4` | kesit kutusu üretilemezse yedek |
| `surum` | `r11964` | 🔴 Bu gece birkaç bulgu *"zaten düzeltilmiş"* ya da *"paket bayat"* çıktı. Hangi yayına bakıldığı bilinmeden **bayat şikâyet ile gerçek kusur ayırt edilemiyor** |
| `kronoloji_maddesi` | `{id, baslik, gun}` | Emre'nin istediği. O an açık/seçili madde varsa |
| `odak_kimlik` | `akkoyunlu` | Bir devlete tıklanmışsa. `H-0002`de *"kuzeybatı parça kimin"* sorusu tam buydu |
| `katmanlar` | `ufuk:7 · renk:yumusak · tabi:acik` | 🔴 **`H-0008`in TAMAMI bu bilgiydi** ("7 günlükte renk koyu çıkıyor") ve karede yoktu; hangi kipte çekildiğini **tahmin ettik** |
| `olcek_cubugu` | `100 km` | mesafe sorularında (`D206` iki uç ölçümü) |
| `ekran_olcusu` | `1439×823 · DPI 1.25` | `bolge_yakala.py` oranı **zaten hesaplıyor** (satır 21-24); yazmak bedava |

### Ayrıca — küçük ama bu gece lazım oldu
- `yakalama_ani` — paketin `damga`sı paketin yapıldığı an; **görselin alındığı an değil**. İkisi günlerce ayrışabilir.
- `pencere_basligi` — hangi uygulamadan alındığı (Atlas mı, başka bir şey mi).

---

## 3. NEREYE YAZILSIN — **İKİSİNE BİRDEN**
```
① RESMİN ALTINA ŞERİT (Emre'nin istediği)
   PNG'nin altına 2-3 satırlık bir bant eklenir, okunur punto:
     1514-09-06  ·  38.2,37.9 – 41.6,39.8  ·  r11964
     ufuk 7 gün · yumuşak renk · tâbi açık
     madde: "Yavuz Sultan Selim'in Tebriz'e girişi" (1514-09-06)
   ⇒ Kopyalanıp yapıştırılınca da bilgi RESİMLE BİRLİKTE gider.

② PARTI.json'a ALAN (makine okusun diye)
   maddeler[].gorsel_kunye = [ { dosya: "H-0003-1.png", tarih: …, kesit: …,
                                 surum: …, katmanlar: …, madde: … }, … ]
   ⇒ Şerit insan içindir ve AYRIŞTIRILAMAZ; JSON makine içindir ve KESİNDİR.
      İkisi aynı kaynaktan üretilir, biri ötekinin yerine geçmez.
```

---

## 4. 🔴 BİLGİ YOKSA — "SESSİZCE ATLA" YASAK
Pano boşsa, Atlas açık değilse, biçim tanınmıyorsa:
```
şeride         "KÜNYE YOK — durum okunamadı"  yazılır
PARTI.json'a   gorsel_kunye: { "durum": "okunamadi", "neden": "<sebep>" }
```
**Alanı hiç yazmamak YASAK.** Sebebi bu projede ölçülmüş: *bir şeyin yokluğu,
yokluğunun SEBEBİ görünmüyorsa, en kötü kusur sınıfıdır.* Bu gece paketlerin
görünmemesinin sebebi `.git/info/exclude`daydı ve **o dosya da hiçbir makineye
gitmediği için sebep de görünmüyordu**. Aynı tuzağa düşülmesin.

---

## 5. SINAV — iki yönde, yazılmadan önce
```
① KÜNYELİ      Atlas açık, durum panoda → şerit ve JSON DOLU, alanlar doğru
② KÜNYESİZ     pano boş → şerit "KÜNYE YOK", JSON'da durum:"okunamadi"
                🔴 bu kol GERÇEKTEN koşulacak (bu gece yamasız kolu koşmayan
                hiçbir sınav kabul edilmedi)
③ GERİLEME     künye eklenmeden önceki paketler aynen okunabiliyor mu
                (1.834 eski madde alansız; okuyucu çökmemeli)
④ BİÇİM        şerit eklenince PNG hâlâ geçerli, boyut makul (şerit ≤ %15)
```

---

## 6. SINIR
- Bu iş **ClaudEmre deposunda** (`C:\claudemre\kutu\`), Atlas'ta değil.
- Atlas tarafı (durum nesnesi + "durumu kopyala" düğmesi + durum şeridi) `Z2`nin
  kalemi, `js/app.js`.
- 🔴 **Mevcut 26 görselin künyesi GERİ GETİRİLEMEZ** — o bilgi hiç kaydedilmedi.
  Onlar için ya yeniden çekim, ya Emre'nin madde başına tek satırlık tarifi.
  Bu şartname **bundan sonrasını** çözer.

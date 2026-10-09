# ŞARTNAME — Kutu ekran görüntüsüne **KÜNYE** eklensin

> **Emre, 9 Ekim 2026:** *"koordinat ve tarihi resmin altına eklesin · koordinat,
> tarih ve kronoloji maddesinin ne olduğu bilgisini eklesin · başka lazım
> olabilecek ne var ise onu da ekleyebilirsin."*
> ⚠️ Bu belge **Atlas deposunda** duruyor ama iş **`C:\claudemre\kutu\`**tadır
> (ClaudEmre sistemi, ayrı depo). Atlas'ın şartnamesi değil, Atlas'ın **isteği**dir.

---

## 0. ÖLÇÜLEN DURUM — bu bir gerileme DEĞİL, hiç olmamış bir özellik
```
parti-emrelic-0087/PARTI.json
  üst düzey  : damga (paketin YAPILMA saati) · proje · maddeler
  madde başına: no · baslik · metin · gorseller      ← HEPSİ BU
  koordinat / harita tarihi / kronoloji bağı : HİÇBİRİ
```
🔴 Ve bu yalnız son pakete ait değil: **bugüne kadarki BÜTÜN paketlerde, 1.834
maddenin hepsinde** aynı dört alan var, başka alan **sıfır**. `bolge_yakala.py`
sürükle-bırakla bir dikdörtgen kırpıp ham PNG yazıyor; altına yazı koyan kod yok.
⇒ Emre'nin hatırladığı özellik **UIBUL/uielementinspector**tan; kutuya taşınmamış.

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

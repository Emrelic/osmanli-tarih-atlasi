# ARAYUZ-0077 — sartname

> PAKET-0077 kolu · 15 madde · model Opus
> Bolme plani ve gerekcesi: [`oturumlar/PAKET-0077-BOLME.md`](PAKET-0077-BOLME.md)
> Paketin kaynagi: `C:/claudemre/kutu/giden/parti-emrelic-0077/`
> (gorseller ayni dizinde `H-00NN-1.png` adiyla — maddende `[gorsel]` yaziyorsa AC)

## Amac

Cizim katmani bozukluklari + yukleme/islem animasyonu + zaman cubugu

## 🔴 Dosya sahipligi — BUNLARIN DISINA YAZMA

- `js/app.js`
- `css/style.css`
- `data/hukuki_sinirlar.js`
- `data/savaslar.js — YALNIZ H-0003'un zaman penceresi icin`

Baska bir dosya gerekiyorsa **tahtadan sor** (§7: her dosyanin tek sahibi var;
emin degilsen SOR). Rapor/denetim dosyan: `denetim/ARAYUZ-0077.md` — o senin.

## Sana ozel

🔴 SEN `js/app.js`IN TEK SAHIBISIN (13.914 satir). Baska hicbir kol bu
dosyaya yazmayacak; sen de `data/` altindaki baska dosyalara yazmayacaksin.
📌 KOK SEBEP ZATEN BULUNDU (HARITA-0076 §1): app.js:1873
`hukuki-sinir-dolgu` katmani `fill-opacity:1` ile `kapsama.kutu`yu
EKSEN HIZALI OPAK DIKDORTGEN olarak boyuyor; dikdortgen antlasma
hattiyla kosegeninden bolunup iki rengin basilmasi 'karesel bozukluk'u
uretiyor. Veride boyle bir govde YOK (71557+6082 halka tarandi).
⇒ H-0013 · H-0032 · H-0076 · H-0082 · H-0083 buyuk olcude AYNI kusur.
Once SINIFLANDIR: hangisi bu kusur, hangisi degil — hepsini ayni yamayla
kapatma refleksine kapilma (§3.5 'uc sinif, careleri ters').
🔴 **H-0020 ve H-0049 SENDEN ALINDI — FAZ 2'ye ertelendi.** Ikisi de YENI
OZELLIK (kronoloji ici derin pencere · madde ici asama asama oynatma) ve
app.js'i uzun sure mesgul eder. Kusurlar ozelliklerden once gelir; sen
bitirip 'dosya senin' deyince ARAYUZ-0077-B onlari devralacak. Onlara
BASLAMA.

🔴 **PAKET-0078'DEN GELEN BES MADDE — ve bir HIPOTEZ (hukum DEGIL):**
H-78:1 diyor ki *'5 gun A / 5 gun secili / 7 gun / 10 gun gibi B gorunumu
ayarlarini TIKLAYAMIYORUM, calismiyor o ayar.'*
H-78:2 (Bosna, Banaluka-Bihac, 1281) ve H-78:5 (Aydin, 1281) ise *'bu
noktalar hicbir yerlesime 5 gunluk surtunmeli yurumeden daha yakin
degil mi'* diye bos alan gosteriyor.
⇒ HIPOTEZ: ayar tiklanmiyorsa yurume yaricapi UYGULANMIYOR olabilir ve
iki bosluk onun SONUCU olabilir. **Bu bir teshis degil, sinanacak bir
iddiadir.** Once H-78:1'i olc (ayar gercekten olu mu, hangi katmanda).
  · DOGRULANIRSA  → tek kusur, uc madde birden kapanir
  · CURURSE       → H-78:2 ve H-78:5 GERCEK nokta yogunlugu bosluklaridir,
                    senin kalemin DEGIL: tahtadan koordinatore bildir,
                    nokta koluna sevk edilecek. Kendin nokta EKLEME.
⚠️ `C13` iki yonde sinama: ayarin CALISTIGI bir hali de gostermelisin.
H-78:3 (savas simgesi butun zamanlarda mi gorunuyor) ayri bir sinif:
bir simgenin ZAMAN PENCERESI kusuru. H-78:6 (Hisn-i Keyfa Eyyubileri,
iki renk ust uste) buyuk olasilikla HARITA-0076 kok sebebiyle AYNI aile.

## Devralacagin olcum — YENIDEN OLCME, OKU

- `denetim/HARITA-0076.md §1 — KOK SEBEP OLCULDU, tekrar olcme`
- `denetim/HARITA-0076-YAMA-hukuki_sinirlar.md — hazir yama`
- `denetim/HARITA-0076-kutu-kapisi.py — kapi aleti`

📌 Bunlar diskte duruyor; ilgili oturumlar soguk ama **bilgileri yazili.**
Taze acilmanin sebebi bu: soguk agir bir oturumu uyandirmak baglamin TAMAMINI
tam fiyat odetir (olculdu: 365.096'ya karsi 82.561 + tek dosya).

## Maddeler — 15 adet

### H-0002

  harita sayfası ilk açıldığında belli bir süre sayfa yükleniyor kullanıcı o aşamada bekliyor. o kısma bir animasyon ile birlikte sayfanın yüklendiğini ve beklenmesi gerektiğini anlatan uyarı konmalı
  animasyonda bir yuvarlak dünya döner iken teker teker bu dönen dünyadan bazı ülkelerin haritaları fırlayıp gelebilir. türkiye fransa ingiltere italya rusya ispanya  japonya çin hindistan eski alman imparatorluğu avusturya macaristan eski osmanlı imparatorluğu roma imparatorluğu cengiz imparatrluğu iskender imparatorluğu islam imparatorluğu gibi çok insanınn gözünün aşina olduğu haritalar teker teker fırlayıp gelebilir

### H-0013  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0013-1.png`**

  bu tür gösterim bozuklukları neden oluyor bunu çzöelim ve sebebini bulup düzeltelim

### H-0021

  ileri tuşuna basınca sayfalar zor ilerliyor ağırlık var. birden fazla tıklayınca en son birikip 3-4 madde birden gidiyor

### H-0030  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0030-1.png`**

  neden aynı devletin gösterimi birden fazla tekrarlanıyor bunu düzeltelim her devlete bir gösterim yeter

### H-0032

  renklerin katmanların üstüste binmesinin sebeblerini araşltıralım ve bu bozukluğu giderelim.
  bazende uç uca gelmiyor ve arada boşluklarda kalabiliyor

### H-0034

  butona bastık ve İŞLEM SÜRÜYOR BEKLYORUZ .HERHANGİBİR SÜRECİN DEAM ETTİĞİNİ GÖSTEREN BİR ANİMASYO KOYALIM SİSTEMEÇ KULANICI BEKLEMESİ GEREKTİĞİNİ İŞLEMİN UZUN SÜRDÜĞÜNÜ ANLASIN . GİDİP GELEN BİR SÜREÇ OLABİLİR KUM SAATİ G,Bİ BÜR SÜREÖ OLABİLİR EN İYİ ALGIYI HANGİSİ OLUŞTURUYOR İSE O İMGEYİ KOYALIM

### H-0063  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0063-1.png`**

  bu tarihte taralı görünen yerler fransız işgali altında mıydı nden iki farklı tarama var

### H-0076  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0076-1.png`**

  üstüste binmiş katmanlar var sebbibi araştıralım ve çözelim

### H-0082  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0082-1.png`**

  bu bozukluk gözünüm bozukluğunu düzeltelim

### H-0083  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0083-1.png`**

  bu çizginin sebebi nedir görünüm bozulşuüu düzeltelim

### H-78:1  *(paket 0078)*

  ayarlarda 5gün A 5gün seçili 7 gün  10 GÜN GİBİ B GÖRÜNÜMÜ AYARLARINI TIKLAYAMIYORUM.
  ÇALIŞMIYOR O AYAR.

### H-78:2  *(paket 0078)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0078\H-0002-1.png`**

  BURADAKİ BOŞLUĞUN SEBEBİ NEDİR BURADAKİ NOKTALAR HİÇBİR YERLEŞİM YERİNE 5 GÜNLÜK SÜRTÜNMELİ YÜRÜMEDEN DAHA YAKIN DEĞİLMİ

### H-78:3  *(paket 0078)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0078\H-0003-1.png`**

  BURADAKİ ŞEHİR MERKEZLERİNDEKİ SEMBOLLER NEDEN BU ŞEKİLDE GÖRÜNÜYOR BU SEMBOL SAVAŞ MEYDAN MUHAREBESİ SİMGESİ Mİ . TARİHİN BİR DÖNEMİNDE BİR YERDE SAVAŞ OLUNCA TÜM ZAMANLARDA GÖSTERİLİYORMU BU SİMGE.

### H-78:5  *(paket 0078)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0078\H-0005-1.png`**

  BU ALAN BOŞ GÖRÜNÜYOR NEDEN. HİÇBİR YERLEŞİM YERİNE 5 GÜNLÜK SÜRTÜNMELİ YÜRÜYÜŞTEN DAHA YAKIN DEĞİLMİ

### H-78:6  *(paket 0078)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0078\H-0006-1.png`**

  HISNI KEYFA EYYÜBİLERİ  BÖYLE İKİ RENK ÜSTÜSTE BİRBİRİNE GİRMİŞ ÜSTÜSTE BİNMİŞ KATMANLARLA MI GÖSTERİLİYOR


## Teslim olcutu

① Her maddeye bir HUKUM (sozluk: cozuldu · sirada · kosu-bekliyor · olculecek ·
senin-kararin · zaten-dogru · gerek-yok · yapilamaz · cozulemedi · kapsam-disi).
🔴 `gerek-yok` · `senin-kararin` · `yapilamaz` · `cozulemedi` · `kapsam-disi`
**gerekcesiz yazilamaz.**
② Hukumleri `denetim/ARAYUZ-0077.md`e yaz. `CEVAP.json`a **DOKUNMA** — birlestirmeyi
koordinator yapar (0076'da iki oturum ayni dosyayi yazip 19 anahtar kayboldu).
③ Degisen dosyalari commit et (yukaridaki kalip), sonra TEK tahta mesaji.
④ Son satir: **"bekcimi oldureyim mi?"**

⚠️ **Yarim is, yanlis istan iyidir.** Bir maddeyi cozemiyorsan `cozulemedi`
yazip sebebini soyle; ucunu birden yarim yapmaktansa birini tam yap.

## Haberlesme — ucu de ZORUNLU

**① Kanal = TAHTA.** Ekrana yazdigin rapor koordinatore ULASMAZ.
```
py arac/tahta.py yaz --kim "ARAYUZ-0077" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <yol>
```
Cok satirli mesaji `--mesaj` ile gecirme, PowerShell keser: once dosyaya yaz,
`--mesaj-dosya` ile gonder. Kritik mesaji `oturumlar/tahta.json`dan GERI OKU.
🔴 `--kime "HERKES"` YAZMA. Emre 27 Eylul: *"kendisi ile ilgili olmayan konu
icin bekciler uyandirilip token harcanmamali."* Olculdu: bir bilgi duyurusu
sekiz oturumu uyandirip sekiz tam turluk baglam yakti. Mesaj kimi
ilgilendiriyorsa ONUN adina yazilir. ACIL/DURDURUCU degilse `HERKES` zaten
kimseyi uyandirmaz ama yine de yazilmaz.

**② Bekci.** Bash `run_in_background` ile:
```
py arac/tahta_bekci.py --kim "ARAYUZ-0077" --cik
```
Cikinca mesaji isle ve AYNI komutla **SESSIZCE** yeniden kur. 🔴 Bos
uyandiysan — sana ait hicbir sey yoksa — EKRANA HICBIR SEY YAZMA; "benlik bir
sey yok" cumlesinin kendisi bir tur maliyetidir. "Bekliyorum" YAZILMAZ.
🔴 **Bekcin "exit code 4" ile dustuyse KUSUR SENDE DEGIL** — sebebi
bilgisayarin kapanmasidir, olculdu ve yazildi (`dersler/D236`). Teshis etmeye
calisma, arastirma, rapor yazma: sessizce yeniden kur ve isine don.

**③ Teslim — TEK mesaj, uc sey + bir soru** (§7.1 ④):
```
① ne olctum (SAYIYLA)   ② ne bulamadim ("bulunamadi" bir SONUCTUR)
③ ne istiyorum          + degisen dosya listesi
son satir:  "bekcimi oldureyim mi?"
```
🔴 O son satir ZORUNLU (Emre, 27 Eylul: *"isciler bos yere calisip RAM ve
islemci harcamamali"*). Koordinator **EVET** ya da **HAYIR BEKLE** der.
Cevap gelmeden bekcini OLDURME — bekcisiz oturum tahtadan uyanmaz.
**Commit teslim DEGILDIR; teslim mesajdir.**

**④ Aksaklik BEKLEMEZ:** baska oturumun dosyasi gerekiyor · kaynaklar
celisiyor · sartname yanlis · sayi beklenenden cok farkli · kalem yetkini
asiyor · is cok uzayacak → HEMEN tahtaya yaz, bitmesini bekleme.

## Yasaklar — hook ZORLUYOR, ihlal komutu reddeder (§11)

```
bash icinde ` (backtick)         YASAK        heredoc (<<EOF)            YASAK
git commit -m "<turkce>"         YASAK   ⇒    git commit -F <dosya>
py -c "<turkce>"                 YASAK   ⇒    Write + py <yol>
python                           YASAK   ⇒    py
git add -A / dizin pathspec'i    YASAK   ⇒    git add -- <tek tek adlar>
```
Her py betiginin basina: `sys.stdout.reconfigure(encoding="utf-8", errors="replace")`

🔴 **MOTOR KODU DONDURULDU (§9.1).** Su dort dosya onbellegin TUZUdur ve
biri degisirse butun onbellek olur (18 saatlik kosu bedeli):
`arac/uret_petek.py` · `arac/renkler.py` · `arac/girdi.py` · `arac/motor_onbellek.py`
⇒ **Yorum satiri bile ekleme.** `girdi.py`ye satir eklemesi gereken kol
bunu TAHTADAN BILDIRIR, kendi basina yapmaz.
🔴 **`py arac/uret_petek.py` KOSTURMA** — kosuyu yalniz Oturum 0 baslatir.

## Commit — kendi urettigini, ADIYLA

```
git add -- <adlar>
git commit -F <mesaj-dosyasi> -- <ayni adlar>
git show --name-only        ← DOGRULA
```
Paylasilan dosyayi (`data/` uretilmisler, `CLAUDE.md`, kok `*.md`) koordinator
commitler. `push` ETME.

## Kaynak — §4, tartisilmaz

TDV Islam Ansiklopedisi **birincil**; celisirse TDV esastir. TDV'nin
kapsamadigi cografyada akademik kaynak mesrudur ve `kaynak:` alanina ACIKCA
yazilir. **Vikipedi tek dayanak DEGILDIR.** Forum · blog · icerik ciftligi ·
kaynaksiz derleme · YZ uretimi metin · populer tarih sitesi KULLANILMAZ.
**Atlas referans degil mamul urundur:** atlasin kendi kaydi, komsu kaydin gunu
ve atlas koordinati DAYANAK OLAMAZ; celiskide ATLAS duzelir.
**Tarih uydurma:** gun bilinmiyorsa `YYYY-01-01`; yil bilinmiyorsa YIL YAZILMAZ.
Bulunamayan sey `bulunamadi` diye yazilir — bos birakilmaz, tahmin edilmez.

## Ongoru kurali (§11)

Yeni bir olcum/denetim yazacaksan **ongoruyu ONCE yaz** (sinavani + evreniyle),
sonra olc. Ve yeni denetim **iki yonde** sinanmadan calisiyor sayilmaz: hem
kusurlu vakayi yakaladigini, hem temiz vakayi yakalamadigini gostermelisin.
📌 Bos kume her ongoruyu dogrular — "0 bulundu" demek icin aletin ATESLENDIGINI
ispat et.

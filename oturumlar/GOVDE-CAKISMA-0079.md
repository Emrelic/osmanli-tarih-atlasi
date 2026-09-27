# GOVDE-CAKISMA-0079 — sartname

> PAKET-0079 kolu · 9 madde · model Opus
> Bolme plani: [`oturumlar/PAKET-0077-BOLME.md`](PAKET-0077-BOLME.md) (0079 ayni olcutle bolundu)
> Paket kaynagi: `C:/claudemre/kutu/giden/parti-emrelic-0079/` (ve 0077)

## Amac

Ust uste binen govdeler + duz dikdortgen/ucgen yapilar — KOK SEBEP

## 🔴 Dosya sahipligi — BUNLARIN DISINA YAZMA

- `denetim/GOVDE-CAKISMA-0079.md (raporun)`
- `data/hukuki_sinirlar.js — YALNIZ kutu kayitlari icin`

Baska dosya gerekiyorsa **tahtadan sor** (§7). Rapor dosyan: `denetim/GOVDE-CAKISMA-0079.md`.
⚠️ Bugun BES oturum "paylasilan kaynak" izin reddi aldi. Sen de alirsan
**ZORLAMA** — dosyayi/yamayi birak, tahtadan bildir, koordinator commitler.

## Sana ozel

🔴 **H-79:2 BIR TEKRAR — ve bu bir suclama degil, ONCELIK.**
Emre'nin kendi sozu: *"harita ustuste binmelerinin sebebini arastirip
cozmemiz lazim DEMISTIM, bunu yaptin mi bilmiyorum ama bu da bir ornek."*
Ikinci kez soruluyor ⇒ ilkinde COZULMEDI. `CLAUDE.md §3.1 ②`: tekrar eden
madde yeni maddelerden ONCE gelir. **Ilk isin bu.**

📌 AMA ONCEKI KOL BOS DONMEDI — olctu, cozemedi cunku govde isi onun
dosyasi degildi. Devraldigin olcumler (ARAYUZ-0077):
```
bulgaristan × romanya      16 / 7650 hucre   (Nigbolu 1915)
sovyet-rusya × tbmm-turkiye 92 / 6897 hucre  (1921, zikzak + kosegen ucgen)
misir-sudan-22-paralel      kutu kapisi: 5 kayit · 4 muaf · 1 CIZEN
```
Ucu de KOSU 15 GOVDESINDE DE suruyor — yani taze govdeyle gitmedi.

🔴 **IKI AYRI KUSUR SINIFI, CARELERI TERS — karistirma:**
① **KUTU (duz dikdortgen/ucgen)** = `hukuki_sinirlar.js`'te `kapsama.kutu`
   eksen hizali OPAK dikdortgen olarak boyaniyor (app.js:1873
   `hukuki-sinir-dolgu`, `fill-opacity:1`), antlasma hattiyla kosegeninden
   bolunup iki renge basiliyor. H-79:5 ve H-79:6 BU sinif.
   ⚠️ `dolgu:false` kareyi kaldirir AMA tasidigi BILGIYI de kaldirir
   (Misir-Sudan 22. paralel ornegi: o kusakta yerlesim yok denecek kadar az).
   ⇒ Once "bu kutunun tasidigi bilgi baska yerde var mi" diye SOR.
② **GOVDE CAKISMASI (ust uste binme)** = iki devletin govdesi ayni hucreyi
   paylasiyor. H-79:1, H-79:2 ve 0077'nin bes maddesi BU sinif.
   🔴 `kd:` BUNU DUSURMEZ — `CLAUDE.md §3` bunu acikca yaziyor ve bir oturum
   tam bu yuzden 40 dakikalik kosuyu bosuna istedi. Kusur
   `donemler.js` + `devletler_harita.js` GOVDELERINDE.

🔴 **SEN DUZELTME YAZMIYORSUN, KOK SEBEBI BULUYORSUN.** `data/` uretilmisler
ve `yerlesimler.js` Oturum 0'da. Senin teslimin: kusurun UREDIGI YER
(motor kodunda hangi asama, hangi satir), boyutu (kac govde, kac hucre,
haritada gorulur mu), ve care SECENEKLERI bedelleriyle.
⚠️ `arac/uret_petek.py` MOTOR TUZUNDA — OKU ama DOKUNMA (`§9.1`).
⚠️ `py arac/uret_petek.py` KOSTURMA.

## Devralacagin olcum — YENIDEN OLCME, OKU

- `denetim/ARAYUZ-0077.md — 0077'nin BES maddesini SINIFLANDIRDI, oku`
- `denetim/HARITA-0076.md §1 + HARITA-0076-YAMA-hukuki_sinirlar.md`
- `denetim/HARITA-0076-kutu-kapisi.py — kutu kapisi aleti`

📌 Bunlar diskte. Ilgili oturumlar emekli ama bilgileri YAZILI — taze
acilmanin sebebi bu.
🟢 **GOVDE TAZE:** kosu 15 cikti main'e indi (27 Eylul, `9ce6c942`);
`data/donemler.js` ve `devletler_harita.js` 4.296 yerlesimli yeni govdedir.
Eski raporlardaki "22 Eylul govdesi" olcumleri BAYATTIR.

## Maddeler — 9 adet

### H-79:1  *(paket 79)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0079\H-0001-1.png`**

  BİRBİRİ ÜSTÜNE BİNMİŞ YAPILAR BU GÖRÜNÜM BOZUKLUĞUNUN SEBEBİNİ ARAŞTIRALIM VE BUNA ENGEL OLMAK İÇİN ÇARE ARAŞTIRALIM KODU DÜZELTELİM

### H-79:2  *(paket 79)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0079\H-0002-1.png`**

  HARİTANIN ÜSTÜSTE BİNMELERİNİN SEBEBİNİ ARAŞTIRIP ÇÖZMEMİZ LAZIM DEMİŞTİM BUNU YAPTINMI BİLMİYORUM AMA BU DA BİR ÖRNEK

### H-79:5  *(paket 79)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0079\H-0005-1.png`**

  BU DÜZ DİKDÖRTGENSEL YAPILARIN SEBEBİ NEDİR. NEDEN BÖYLE BİR HARİTASAL GÖSTERİM VAR. NEDEN DÜZ ÇİZVİLER VE ÜÇKENLER VAR

### H-79:6  *(paket 79)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0079\H-0006-1.png`**

  DÜZ DİKDÖRTGENSEL YAPILARA BİR ÖRNEK DAHA

### H-77:13  *(paket 77)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0013-1.png`**

  bu tür gösterim bozuklukları neden oluyor bunu çzöelim ve sebebini bulup düzeltelim

### H-77:32  *(paket 77)*

  renklerin katmanların üstüste binmesinin sebeblerini araşltıralım ve bu bozukluğu giderelim.
  bazende uç uca gelmiyor ve arada boşluklarda kalabiliyor

### H-77:76  *(paket 77)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0076-1.png`**

  üstüste binmiş katmanlar var sebbibi araştıralım ve çözelim

### H-77:82  *(paket 77)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0082-1.png`**

  bu bozukluk gözünüm bozukluğunu düzeltelim

### H-77:83  *(paket 77)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0083-1.png`**

  bu çizginin sebebi nedir görünüm bozulşuüu düzeltelim


## Teslim olcutu

① Her maddeye bir HUKUM (cozuldu · sirada · kosu-bekliyor · olculecek ·
senin-kararin · zaten-dogru · gerek-yok · yapilamaz · cozulemedi ·
kapsam-disi · tekrar). 🔴 Son bes gerekcesiz YAZILAMAZ.
② Hukumleri `denetim/GOVDE-CAKISMA-0079.md`e yaz. `CEVAP.json`a **DOKUNMA**.
③ Degisenleri commitle (asagidaki kalip), sonra TEK tahta mesaji.
④ Son satir: **"bekcimi oldureyim mi?"**

⚠️ **Yarim is, yanlis istan iyidir.** Cozemedigin maddeye `cozulemedi` yazip
sebebini soyle; ucunu yarim yapmaktansa birini tam yap.

## Haberlesme — ucu de ZORUNLU

**① Kanal = TAHTA.** Ekrana yazdigin rapor koordinatore ULASMAZ.
```
py arac/tahta.py yaz --kim "GOVDE-CAKISMA-0079" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <yol>
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
py arac/tahta_bekci.py --kim "GOVDE-CAKISMA-0079" --cik
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

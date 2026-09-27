# ARAYUZ-0077-B — sartname

> PAKET-0079 kolu · 7 madde · model Opus
> Bolme plani: [`oturumlar/PAKET-0077-BOLME.md`](PAKET-0077-BOLME.md) (0079 ayni olcutle bolundu)
> Paket kaynagi: `C:/claudemre/kutu/giden/parti-emrelic-0079/` (ve 0077)

## Amac

Odak devleti mimarisi + kronoloji ici derin pencere + ipucu balonlari

## 🔴 Dosya sahipligi — BUNLARIN DISINA YAZMA

- `js/app.js`
- `css/style.css`

Baska dosya gerekiyorsa **tahtadan sor** (§7). Rapor dosyan: `denetim/ARAYUZ-0077-B.md`.
⚠️ Bugun BES oturum "paylasilan kaynak" izin reddi aldi. Sen de alirsan
**ZORLAMA** — dosyayi/yamayi birak, tahtadan bildir, koordinator commitler.

## Sana ozel

🔴 SEN ARAYUZ-0077'NIN DEVAMISIN. `js/app.js` (13.914 satir) SENIN
TEK SAHIPLIGINDE. Selefin teslim etti ve dosyayi sana devretti; raporu
`denetim/ARAYUZ-0077.md` — ONCE ONU OKU, olctugu seyi yeniden olcme.

🔴 BIR HIPOTEZ — hukum DEGIL, sinanacak iddia:
H-79:8 (tarih kutusu), H-79:15 (kronoloji maddesine tiklayinca odak Osmanli'ya
donuyor) ve H-79:16 (birden fazla devlet secip kronolojileri tek havuzda
birlestirme) UC AYRI ISTEK gibi duruyor ama **tek bir mimari kusurdan**
gelebilir: *"odak devleti" kavrami yalniz Osmanli icin calisiyor.*
⇒ ONCE bunu olc: odak devleti nerede tutuluyor, hangi islevler onu okuyor,
hangileri `osmanli`yi SABIT varsayiyor?
  · DOGRULANIRSA → tek duzeltme uc maddeyi birden kapatir
  · CURURSE      → uc ayri is, ayri ayri coz. Cururse bunu SOYLE; hipotezi
                   kurtarmaya calisma.
⚠️ `C13` iki yonde sinama: hem Osmanli'da hem BASKA bir devlette calistigini
goster. Tek yonlu sinav "calisiyor" saymaz.

📌 H-79:9 (3 sn bekleyince ipucu balonu) BUTUN UI elemanlarini istiyor —
once KAC eleman oldugunu SAY, sonra kapsamini bana bildir. 200 elemana
elle metin yazmak bir oturumluk is degildir; oncelik gorunur/sik kullanilan
elemanlardir.

⚠️ H-77:20 ve H-77:49 SELEFINDEN ERTELENEN iki BUYUK ozellik (kronoloji ici
derin pencere + zoom + mini kronoloji · madde ici asama asama oynatma).
KUSURLAR ONCE: H-79:14 (sag tik kopyala menusu Rusya'da cikmiyor) ve odak
mimarisi bittikten SONRA onlara gec. Yetismezse YARIM birak ve soyle.

## Devralacagin olcum — YENIDEN OLCME, OKU

- `denetim/ARAYUZ-0077.md — SELEFININ RAPORU, once bunu oku`
- `denetim/HARITA-0076.md §1`

📌 Bunlar diskte. Ilgili oturumlar emekli ama bilgileri YAZILI — taze
acilmanin sebebi bu.
🟢 **GOVDE TAZE:** kosu 15 cikti main'e indi (27 Eylul, `9ce6c942`);
`data/donemler.js` ve `devletler_harita.js` 4.296 yerlesimli yeni govdedir.
Eski raporlardaki "22 Eylul govdesi" olcumleri BAYATTIR.

## Maddeler — 7 adet

### H-79:8  *(paket 79)*

  AŞAĞIDAKİ TARİH YAZIP İLGİLİ TARİHE GİTMEMİZİ SAĞLAYAN TEXTBOX ODAK NOKTASI HANGİ ÜLKEDE İSE O ÜLKENİN KRONOLOJİSİNE GİTMESİ GEREKİR. SADECE OSMANLI İÇİN ÇALIŞIYOR OLMAMALIDIR

### H-79:9  *(paket 79)*

  BUTONLAR BÖLÜMÜNDEKİ VE ANA EKRANDAKİ TÜM YAPILAR BUTONLAR Uİ ELEMENTLERİNİN NE İŞE YARADIKLARINI MAUSE İLE İLGİLİ ELEMENTİN ÜSTÜNDE 3 SANİYE HAREKETSİZ DURUNCA ANLATAN TOAST MESAJI OLMALIDIR

### H-79:14  *(paket 79)*

  rusya imparatorluğunu odak kronoloji noktası yaptım fakat rusya kronoloji maddelerine sağ tıklayarak madde başlığı ve ya madde içeriği kopyala tuşu çıkmıyor

### H-79:15  *(paket 79)*

  moskova imparatorluğunun ilk maddesine tıklayınca harita oraya doğru odaklanıyor ama aşağıdaki bir sonraki kronoloji maddesine tıklayınca sistem osmanlı imparatorluğuna geçiyor her devletin kronolojisi kendi içinde çalışmalı bu butonlar sadece osmanlı imparatorluğunda değil odağa hangi devleti alır isek onda çalışmalı

### H-79:16  *(paket 79)*

  kronolojiden birden fazla devlet seçebilmeliyiz mesela aynı anda osmanlı rusya avusturya macaristan imparatırluğu venedik lehistan iran seçebilmeliyiz böyle olunca bu ülkelerin tüm kronolojileri iç içe geçerrek aynı havuza dökülecek ve sıra ile oynatılabilecektir

### H-77:20  *(paket 77)*

  belli kronolojilerin içine girilip kronoloji içi gösterimler olabilsin.
  mesela çanakkale savaşı maddesinin içine girişi tüm çanakkale savaşının hikayesini detaylı okuyabilelim. böyle olunca bu detay pasaja giriince bir ek  pencere çıkar çanakkale gelibolu yarımadası zoom ile tüm ekrana yayılır. ve ayrı bir mini kronoloji bölümü olur. sırf bu kronoloji maddesinin içindeki butona tıklayp açılan bu penerede açılan kronolojide 20-30-50 her ne kadar madde var ise tüm çanakkale savaşı bu pencerede detaylı bir şekilde verili buna dair altyapıyı kuralım. çanakkale savaşı ve istanbulun fethi gibi büyük olaylarda bunu pilot olarak deneyelim

### H-77:49  *(paket 77)*  ·  **gorsel: `C:\claudemre\kutu\giden\parti-emrelic-0077\H-0049-1.png`**

  avusturya macaristan imparatorluğunun bölünmesini ve kaybettiği toprakları teyid edelim düzgün gösterelim hatalar var gibi.
  madde içinde bir buton ile aşama aşama oynatma sağlayalım
  italyaya kayberilen toprakalr
  polonyaya kaybedilen topraklar
  romanyaya kaybedilen toprakalr
  çekoslovakya sırbistan macaristan avustruya olarak bölünen topraklar.
  hepsini aşama aşama madde içi buton ile aşama aşama gösteren bir yapı kuralım


## Teslim olcutu

① Her maddeye bir HUKUM (cozuldu · sirada · kosu-bekliyor · olculecek ·
senin-kararin · zaten-dogru · gerek-yok · yapilamaz · cozulemedi ·
kapsam-disi · tekrar). 🔴 Son bes gerekcesiz YAZILAMAZ.
② Hukumleri `denetim/ARAYUZ-0077-B.md`e yaz. `CEVAP.json`a **DOKUNMA**.
③ Degisenleri commitle (asagidaki kalip), sonra TEK tahta mesaji.
④ Son satir: **"bekcimi oldureyim mi?"**

⚠️ **Yarim is, yanlis istan iyidir.** Cozemedigin maddeye `cozulemedi` yazip
sebebini soyle; ucunu yarim yapmaktansa birini tam yap.

## Haberlesme — ucu de ZORUNLU

**① Kanal = TAHTA.** Ekrana yazdigin rapor koordinatore ULASMAZ.
```
py arac/tahta.py yaz --kim "ARAYUZ-0077-B" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <yol>
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
py arac/tahta_bekci.py --kim "ARAYUZ-0077-B" --cik
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

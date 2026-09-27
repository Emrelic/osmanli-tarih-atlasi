# SEFER-OK-0077 — sartname

> PAKET-0077 kolu · 5 madde · model Opus
> Bolme plani ve gerekcesi: [`oturumlar/PAKET-0077-BOLME.md`](PAKET-0077-BOLME.md)
> Paketin kaynagi: `C:/claudemre/kutu/giden/parti-emrelic-0077/`
> (gorseller ayni dizinde `H-00NN-1.png` adiyla — maddende `[gorsel]` yaziyorsa AC)

## Amac

Harekat oklari: Sarikamis, Kanal, Karadeniz Baskini, Kafkasya, Mondros

## 🔴 Dosya sahipligi — BUNLARIN DISINA YAZMA

- `data/seferler_p0077.js  (window.SEFERLER_P0077)`
- `index.html — YALNIZ kendi <script> satirini ekler, baska satira dokunmaz`

Baska bir dosya gerekiyorsa **tahtadan sor** (§7: her dosyanin tek sahibi var;
emin degilsen SOR). Rapor/denetim dosyan: `denetim/SEFER-OK-0077.md` — o senin.

## Sana ozel

🟢 KATMAN ZATEN VAR — yeni ozellik YAZMIYORSUN. index.html'de '③b
Harekat oklari' anahtari, app.js'te 184 atif mevcut. Isin VERI GIRISI.
⚠️ `js/app.js`e DOKUNMA — o dosyanin sahibi ARAYUZ-0077.
H-0008, H-0009, H-0054'un ek okuma yuzu EKOKUMA kollarinda; sen yalniz
OK guzergahini yazarsin. H-0016 patlama imgesi istiyor: mevcut sema
bunu destekliyor mu OLC, desteklemiyorsa app.js sahibine tahtadan sor.

## Devralacagin olcum — YENIDEN OLCME, OKU

- `denetim/SEFER-OK-0070.md — katmanin dogus olcumu + ③b anahtari`
- `denetim/SEFER-OK-0075.md`
- `data/seferler_p0074.js — SEMA KALIBI`

📌 Bunlar diskte duruyor; ilgili oturumlar soguk ama **bilgileri yazili.**
Taze acilmanin sebebi bu: soguk agir bir oturumu uyandirmak baglamin TAMAMINI
tam fiyat odetir (olculdu: 365.096'ya karsi 82.561 + tek dosya).

## Maddeler — 5 adet

### H-0016

  29 Ekim 1914 — Karadeniz Baskını: Osmanlı donanmasının Rus limanlarını bombalaması
  osmanlı donanmasının güzergahını ve baskın verdiği yerleri işaretleyelim hatta işaretimiz bombalama etkisi olması için patlama emojisi ile gösterelim

### H-0018

  22 Aralık 1914 - 4 Ocak 1915 — Sarıkamış Harekâtı: Kafkas cephesinde felaket
  sefer okları koyalım sarıkamış harekatı için

### H-0019

  14 Ocak - 15 Şubat 1915 — Birinci Kanal Harekâtı: Süveyş'e Sina çölü üzerinden taarruz
  birinci kanal harekatı için sefer oku koyalım

### H-0044

  15 Eylül 1918 — Kafkas İslâm Ordusu'nun Bakü'yü alması
  OSMANLI ORDUSUNUN KAFKASYADAKİ İLERLEMESİNİ HARİTADA  DA GÖRMELİYİZ

### H-0047

  MONDROS ATEŞKES ANLAŞMASI SIRASINDAKİ OSMANLI SINIRLARINI E MONDROS ATEŞKESİMDEN SONRA MÜTTEİK DEVLETLERİN İLELRLEMESİNİ GÖSTERELİM


## Teslim olcutu

① Her maddeye bir HUKUM (sozluk: cozuldu · sirada · kosu-bekliyor · olculecek ·
senin-kararin · zaten-dogru · gerek-yok · yapilamaz · cozulemedi · kapsam-disi).
🔴 `gerek-yok` · `senin-kararin` · `yapilamaz` · `cozulemedi` · `kapsam-disi`
**gerekcesiz yazilamaz.**
② Hukumleri `denetim/SEFER-OK-0077.md`e yaz. `CEVAP.json`a **DOKUNMA** — birlestirmeyi
koordinator yapar (0076'da iki oturum ayni dosyayi yazip 19 anahtar kayboldu).
③ Degisen dosyalari commit et (yukaridaki kalip), sonra TEK tahta mesaji.
④ Son satir: **"bekcimi oldureyim mi?"**

⚠️ **Yarim is, yanlis istan iyidir.** Bir maddeyi cozemiyorsan `cozulemedi`
yazip sebebini soyle; ucunu birden yarim yapmaktansa birini tam yap.

## Haberlesme — ucu de ZORUNLU

**① Kanal = TAHTA.** Ekrana yazdigin rapor koordinatore ULASMAZ.
```
py arac/tahta.py yaz --kim "SEFER-OK-0077" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <yol>
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
py arac/tahta_bekci.py --kim "SEFER-OK-0077" --cik
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

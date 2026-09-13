# ① BİTLİS — ÖLÇÜM · KITA 13 · paket 0044 (0043 Çaldıran koridorunun son kalemi)

```
OTURUM   KITA 13 · 13 Eylül 2026 · koşu 10 sürüyor → data/ DONUK, YAZILMADI
TABAN    girdi.yukle() · 79 dosya · 3818 nokta
ÖNGÖRÜ   denetim/ONGORU-KITA13-VANBITLIS-0913.md · commit 544cbcc (TDV okunmadan)
ALETLER  ARAC-KITA13-TDVPASAJ-0913.py (cümleyi önceki/sonraki cümleyle basar)
```

## ⓪ ATLASTAKİ KAYIT — `data/yerlesimler.js:238`

```
s: ilhanli 1281→1351 · karakoyunlu →1467 · akkoyunlu →1502 · safevi 1502→1515-09-15
d: OSMANLI 1515-09-15 → 1920-04-23        (tek, KESİNTİSİZ blok)
kaynak: "ankraj Van (72 km) · Erciş — akkoyunlu'nun bitişi külliyatta 1501-07-01/1502-01-01"
neden : "... Osmanlı günü 1515-09-15 DEĞİŞMEDİ."
```
⚠️ **Şartnamedeki okumayı bir kademe inceltiyorum (`D142`):** `ankraj Van`
beyanı kaydın **akkoyunlu→safevî sınırı (1502)** için yazılmış; **Osmanlı
günü için hiçbir kaynak beyanı YOK.** Yani "gün ankraj türevi" değil,
**"gün BEYANSIZ"**. Sonuç aynı (kaynaksız), sınıf farklı.

## ①a GÜN — `1515-09-15` NEREDEN GELİYOR

```
TDV bitlis · idris-i-bitlisi · biyikli-mehmed-pasa · seref-han  → "15 Eylül 1515" YOK
külliyatta o günün tek karşılığı:
   data/olaylar_ek.js:61   t:"1515-09-15"  b:"Doğu Anadolu'nun katılışı"
                           gun:"1515-1516"   yer:"Diyarbakır, Mardin, Erzurum"
                           kaynak:"diyarbakir"
   data/kronoloji_safevi.js:105  (kuyruk, aynı gün)
atlasta bu günü sınır olarak taşıyan kayıt: 1 (yalnız Bitlis)
```
⇒ 🔴 **Bitlis'in günü, kendi `gun:` alanı "1515-1516" diyen BÖLGESEL bir
toplu maddenin gününe yaslanmış.** Madde Bitlis'i adıyla bile anmıyor
(yer: Diyarbakır, Mardin, Erzurum). Hassasiyet kaynağı aşıyor (`§4`).

**YIL — iki TDV maddesi, iki aşama (çelişki DEĞİL, `D092`):**
```
bitlis [~61]   "Çaldıran Seferi dönüşünde (1514) İdrîs-i Bitlisî'nin de
                gayretleriyle Bitlis'teki mahallî beyler Osmanlı Devleti'ne
                BAĞLILIKLARINI BİLDİRDİLER."
seref-han [11] "Bitlis ve çevresine hâkim olan dedesi, 921'de (1515)
                Osmanlı EGEMENLİĞİNİ KABUL EDEN ve 940'ta (1533) Tekelü
                Ulama Han tarafından öldürülen Şeref Han'dır."
```
921 h. = 15 Şubat 1515 – 3 Şubat 1516. ⇒ bağlılık bildirimi **1514**,
egemenlik kabulü **921/1515**. Atlasın **1515 yılı** ikinciyle **uyumlu**;
**gün kaynaksız**. Hiçbir TDV maddesi Bitlis için GÜN vermiyor.

## ①b 🔴 ASIL BULGU — KESİNTİSİZ `d:` BLOĞU BİR SAFEVÎ ARASINI YUTUYOR

```
bitlis [62] "Fakat bu bağlılık sürekli olmadı."
       [63] "Bitlis'i idare eden mahallî idareciler zaman zaman İran'a meylettiler."
       [65] "Şeref Han, Kanûnî döneminde Osmanlı tâbiiyetinden ayrılıp yeniden
             İran himayesine sığınmıştı."
       [66] "... Ulama Han (Paşa) Bitlis'in geri alınmasıyla görevlendirilmiş,
             İLK TEŞEBBÜSÜNDE SONUÇ ALAMAMIŞSA DA sonradan başarı kazanarak
             Bitlis'i 1534'te KESİN OLARAK Osmanlı topraklarına katmıştır."
       [67] "... 1 Haziran 1555'te imzalanan Amasya Antlaşması ile de Bitlis
             üzerindeki Osmanlı hâkimiyeti Safevîler'ce tanınmış oldu."
irakeyn-seferi [14]  1533-34 seferinin görünür sebeplerinden biri: "Bitlis
             hâkimi Şeref Han'ın Safevîler'e sığınması"
seref-han [11]       Şeref Han 940 h. (23 Tem 1533 – 11 Tem 1534) Ulama tarafından öldürüldü
amasya-antlasmasi [23] 1555: "... Van, Bitlis, Erzurum ... üzerindeki Osmanlı
             hâkimiyetinin Safevîler'ce tanınması"
```
⇒ Bitlis **Kanûnî devrinde (1520-09 sonrası) Osmanlı dışına çıktı**, Osmanlı
onu **geri almak zorunda kaldı** ("ilk teşebbüste sonuç alamadı") ve **1534'te
kesin olarak** aldı. Atlasta bu dönem **HİÇ YOK**.

⚠️ `D080` sınavı (*"bir isyanın varlığı tasarrufu değiştirmez, sonucu
değiştirir"*): burada sonuç **tasarruf değişimi** — şehir İran himayesine
geçti ve **askerî geri alma** gerekti. Yani yalnız bir isyan değil.

```
BAŞLANGIÇ   ⚪ BULUNAMADI — TDV yalnız "Kanûnî döneminde" diyor; irakeyn-seferi
            onu 1533 seferinin sebebi sayıyor ⇒ üst sınır ≤1533.
            (van [115] ~1529'da Safevî nâiblerinin Şeref Han'la "sürekli
            mücadele" ettiğini söylüyor ⇒ o sırada henüz Safevî yanlısı
            değildi — ZAYIF alt sınır, cümle yıl vermiyor.)
BİTİŞ       1534 yılı (TDV bitlis) · gün BULUNAMADI
AKADEMİK    Şerefnâme neşri tarihi verebilir — ARANMADI (D107: aranmadı ≠ bulunamadı)
```
⇒ **YAMA YAZILAMIYOR** (başlangıç yok). Uydurmak yerine borç olarak kayıt.

## ①c `d:` mi `v:` mi — ÖNERİ (karar DEĞİL)

**TDV ne diyor:**
```
bitlis [68]     "Bitlis Osmanlı idaresinde önceleri Erzurum eyaletinin Muş
                 sancağına bağlı bir kaza merkezi idi."
van             "Klasik Osmanlı sancakları ve OCAKLIK diye nitelendirilen
                 sancaklar Adilcevaz, BİTLİS, Erciş, Muş, Bargiri, Hizan,
                 Hakkâri, Müküs, ... Mahmudi ve Kotur, Van eyaleti bünyesinde"
seref-han [33]  1592: "Bitlis, Adilcevaz, Van ve Muş sancaklarına ... OCAKLIK
                 STATÜSÜNDE mutasarrıf"
hakkari [44]    Hakkâri de "sahiplerine ait olarak kabul edilen sancaklardan (ocaklık)"
```
⇒ Bitlis **eyalet sisteminin İÇİNDE** bir **ocaklık sancak** (irsî idare,
ama beylerbeyilik hiyerarşisine bağlı) — Eflak/Kırım gibi **haraçgüzâr bir
tâbi DEVLET değil.**

**Önerim: `d:` KALSIN.** Gerekçe:
1. Atlasta `v:` = tâbi devlet tonu (Eflak · Boğdan · Kırım · Erdel). Ocaklık
   sancağı oraya koymak onu **ayrı bir devlet gibi** gösterir.
2. `VERI-YAPISI.md`de `v:` statü sözlüğünde `ocaklık` anahtarı **var** ama
   veride **0 kayıt** ve harita onu yine **tâbi tonuyla** çiziyor (app.js
   STATU_YAZI) ⇒ görsel olarak Eflak'la aynı kovaya düşer.
3. 🔴 **Karar BİTLİS'E ÖZGÜ OLAMAZ (`D171`):** aynı statü Hakkâri · Mahmudi ·
   Kotur · Bargiri · Adilcevaz · Erciş · Cizre (yurtluk-ocaklık) için de
   geçerli ve hepsi bugün `d:`. Tek başına Bitlis'i `v:` yapmak bölgede
   tutarsızlık doğurur.
⇒ Ocaklık görünür olsun isteniyorsa doğru yol **bölge çapında bir statü
kararı** (Emre/koordinatör), tek kayıt yaması değil.

## ÖNGÖRÜ KARNESİ (①)
```
①a gün TDV'de yok, ankraj/toplu madde türevi          🟢 TUTTU (sınıf: "beyansız")
①b kesintisiz d: bir Safevî arasını yutuyor           🟢 TUTTU (başlangıç ⚪ bulunamadı)
①c TDV irsî statü anlatacak, öneri bölge çapı          🟡 YARIM — TDV "ocaklık" diyor
                                                          (irsî), bitlis gövdesi ise düz
                                                          "kaza merkezi" diliyle anlatıyor
```

## NE ÖLÇEMEDİM
```
⚪ Şeref Han'ın İran himayesine geçiş YILI     bulunamadı (TDV: "Kanûnî döneminde")
⚪ 1534 geri alış GÜNÜ                          bulunamadı
⚪ akademik kaynak (Şerefnâme neşri, Kırzıoğlu) ARANMADI
⚪ Bitlis'in 1535 İran seferi sırasındaki durumu  okumadım (irakeyn [61] yalnız
                                                  "Ahlat'tan Bitlis'e" geçiş diyor)
```

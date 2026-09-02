# BULGU — OPUS HAZIR KITA 126 · `Değişmez 1b` beyansız boşluk + tahta yazma yarışı

**Oturum:** OPUS HAZIR KITA 126 · Opus 5 · `local_93b9dc8e-64d4-4c3b-b47f-efac73d23a68`
**Şartname:** `oturumlar/DAGITIM-0902-AKSAM.md` §④ (1.MURAT, M-2205)
**Tarih:** 2 Eylül 2026
**Yetkim:** yalnız bu dosya. `arac/` · `data/` · `oturumlar/` hiçbirine YAZMADIM.
Koşu canlı (PID 27596) — `arac/*.py` yalnız **okundu**, hiçbiri değiştirilmedi.

---

## ÖZET — üç satır

```
(a) 1b'nin tek beyansız boşluğu:  TIMBUKTU 1430-01-01 → 1468-01-01 · 13.879 gün (38 yıl)
    Şartnamenin "denetim BEYANSIZ olanı BASMIYOR" öncülü ÇÜRÜDÜ — BASIYOR, adıyla.
    Ve boşluğun sebebi üç hipotezin hiçbiri değil: DÖRDÜNCÜSÜ — KÜNYESİ OLMAYAN SAHİP.
(b) Tahta yazma yarışı: üç bağımsız vaka ölçüldü, ÜÇ AYRI KUSUR çıktı, tek reçete yetmiyor.
```

---

# (a) `Değişmez 1b` — BEYANSIZ PENCERE ARASI BOŞLUK

## §1 ÖNCÜL SINAVI — devraldığımı önce ölçtüm

Şartname §④ şunu diyordu:

> **BULUNAMADI** — denetim BEYANSIZ olanı BASMIYOR — hangi kayıt olduğu bilinmiyor

**🔴 ÇÜRÜDÜ.** `denetle.py:3062` beyansız boşlukları basıyor — `--ayrinti`
olmadan ilk 15'ini, `--ayrinti` ile hepsini:

```python
for gun, ad, bas, son in (bosluk if args.ayrinti else bosluk[:15]):
    print(f"    {ad:<28} {bas} → {son}  ({gun} gün sahipsiz)")
```

**ÖLÇTÜM** (`py arac/denetle.py --ayrinti`, satır 239-243):

```
Değişmez 1b ✗  BEYANSIZ pencere arası boşluk: 1 (beklenen 0) · beyanlı 3/3 — tam tarama
    🟢 beyanlı  Gao                      1700-01-01 → 1898-01-01  (72318 gün)
    🟢 beyanlı  Cenne (Djenné)           1700-01-01 → 1818-01-01  (43098 gün)
    🟢 beyanlı  Cenne (Djenné)           1591-04-13 → 1596-01-01  (1724 gün)
    Timbuktu                     1430-01-01 → 1468-01-01  (13879 gün sahipsiz)
```

**ÇIKARIM (ayrı satır):** kalem (a) bir arama işi değildi, **tek koşuluk bir
okuma işiydi.** Öncül, denetimi koşturmadan yazılmış görünüyor.

📌 Ve bu, `CLAUDE.md §11`in *"bir sevk, taşıdığı öncülü de doğrulamalıdır"*
kuralının bugünkü **dördüncü** vakası (fetret · 42 aday başkent · zuhab slug ·
bu). Zararı bu sefer küçük — çünkü öncül *"bulunamadı"* diyordu, yani beni
**yanlış bir şey yapmaya** değil yalnız **fazladan aramaya** sevk ederdi.

---

## §2 KAYIT — ne olduğu

**ÖLÇTÜM** — `data/yerlesimler.js:866`:

```js
{ ad:"Timbuktu", kaynak:"tinbuktu",
  s:[{f:"1281-01-01", t:"1430-01-01", d:"mali-imparatorlugu"},
     {f:"1468-01-01", t:"1591-04-13", d:"songhay-imparatorlugu"},
     {f:"1591-04-13", t:"1700-01-01", d:"fas"}],
  tur:"sehir", lat:16.775, lon:-3.009, g:0, k:1, d:[] },
```

```
boşluk    1430-01-01 → 1468-01-01     13.879 gün · 38 yıl
dosya     data/yerlesimler.js  (Oturum 0'ın dosyası — DOKUNMADIM)
bos:      alanı YOK  ⇒ hiçbir beyan taşımıyor
```

---

## §3 KÖKENİ — hangi commit'te doğdu

**ÖLÇTÜM** (`git log -S`, sonra `git show <sha>^:` ile önce/sonra):

```
commit   aaadabf  2026-09-02 11:58:15  "137 YAMA INDI — ve FETRET DUZELTMESI…"

ÖNCE (aaadabf^)   { ad:"Timbuktu", tur:"sehir", lat:16.775, lon:-3.009, g:0, k:1, d:[] }
                  ⇒ HİÇ PENCERESİ YOK
SONRA (aaadabf)   üç pencere yazıldı, aralarında 38 yıllık boşluk doğdu
```

🔴 **Ve bu, şartnamenin üç hipotezinden birini doğrudan çürütüyor.** Commit
mesajının kendisi (b) maddesinde üç ihtimal sayıyor:

> *"kısaltma · **zaten vardı** · gerçekten kimsenin değildi"*

**"ZATEN VARDI" ÇÜRÜDÜ.** `degismez1b` penceresi hiç olmayan noktayı
**atlıyor** (`if not araliklar: continue`) — Timbuktu 11:58'e kadar tam
olarak öyleydi. Boşluk yamayla **doğmadı**; boşluk **görünür oldu.**

📌 Bu, `§11`in *serbedariler* dersinin birebir tekrarı:
***"Hassasiyet yalnız doğruluk değil, GÖRÜNÜRLÜK meselesidir."***
Veri yokken denetim susuyordu. Veri gelince denetim öttü. **Kırmızı satır bir
gerileme değil, bir kazanç.**

---

## §4 KAYNAK — TDV gövdesi okundu

`§4` yöntemi uygulandı: önce HTTP kodu, sonra **gövde**.

```
200  tinbuktu     ← kayıttaki kaynak: slug'ı, CANLI
200  timbuktu     200  tuareg      200  tevarik
302  mali-imparatorlugu   302  songhay   302  magsaran     ← ÖLÜ
```

`<title>` = **"TİNBÜKTÜ - TDV İslâm Ansiklopedisi"** · gövde 16.562 karakter
(boilerplate değil — `§4④` tuzağı yok). Gövde şunu **birebir** söylüyor:

> "Tinbüktü 1430'da Tevârikler'in eline geçti ve 1468 yılına kadar onlarda
> kaldı. Şehri Tevârikler'den alan Sünnî Ali Ber…"

**ÖLÇTÜM:** verideki iki uç (`1430-01-01` ve `1468-01-01`) TDV ile **yıl
yılına uyuyor.**

⇒ Kalan iki hipotez de çürüdü:

```
"KISALTMA"                 ÇÜRÜDÜ — tarihler doğru, kısaltma yok
"GERÇEKTEN KİMSENİN DEĞİL" ÇÜRÜDÜ — kaynak KONUŞUYOR ve sahibi ADIYLA anıyor
```

---

## §5 DÖRDÜNCÜ İHTİMAL — **KÜNYESİ OLMAYAN SAHİP**

**ÖLÇTÜM:**

```
data/devletler.js         "tevarik" / "tuareg" künyesi:  0
data/yerlesimler*.js      d:"…tevarik…" / d:"…tuareg…":  0
```

⇒ Boşluk ne bir hata, ne bir beyan. **Sahibi var, kimliği yok.**

`§11`in NOKTA SİBİRYA sınavı (*kaynağa sor: konuşuyorsa `devletsiz`,
susuyorsa `veri-yok`*) burada **üçüncü bir cevap** veriyor: kaynak konuşuyor
**ve adlı bir topluluğu** sahibi gösteriyor. `denetle.py`nin kendi
`bosluk_cinsi` sözlüğünde bunun karşılığı **`kabile`**:

> *"adlı ama künyesiz bir krallık/hanedan/şeyhlik anılıyorsa `kabile`"*

⚠️ **Ama bu bir ÇARE DEĞİL, bir SINIFLANDIRMA.** `bos:` alanı `1b`yi
**kapatmaz** — `degismez1b` `bos:`i hiç okumuyor, yalnız `bit:`i muaf tutuyor
(`denetle.py:985` bunu kendi yorumunda söylüyor).

### 🔴 VE KÜNYE, YANLIŞ ÇAREYE İZİN VERİYOR — yalnız kaynak yasaklıyor

**ÖLÇTÜM** (`girdi.oku_devletler()`):

```
mali-imparatorlugu     f=1235-01-01   t=1670-01-01      ← 1430-1468 arası CANLI
songhay-imparatorlugu  f=1464-01-01   t=1591-04-13      ← 1468 künyeye SIĞIYOR
```

⇒ *"mali'yi 1468'e uzat, boşluk kapansın"* önerisi **künye denetiminden
(`§3.5` hayalet) TEMİZ geçer** — Mali 1670'e kadar yaşıyor. Onu yasaklayan tek
şey **TDV gövdesi**.

📌 ***Bir düzeltmenin denetimden geçmesi, doğru olduğu anlamına gelmiyor.***
`§3.5`in hayalet-devlet dersinin şehir ölçeğindeki hâli: burada hayalet
**devlet** değil, bir devletin **olmadığı yerdeki gövdesi** olurdu.

---

## §6 HARİTADAKİ KARŞILIĞI — kod argümanı, koşu DEĞİL

⚠️ Motoru koşturamam (koşu canlı). Bu bölüm **`uret_petek.py`yi OKUYARAK**
kuruldu; sayısal doğrulama **yapılmadı**.

**ÖLÇTÜM** (`girdi.yukle()` + haversine, boşluğun içinden dört gün):

```
1429-06-15   en yakın SAHİPLİ komşu:  Gao   321 km   mali-imparatorlugu
1440-06-15                            Gao   321 km   mali-imparatorlugu
1466-06-15                            Gao   321 km   songhay-imparatorlugu
1470-06-15                            Gao   321 km   songhay-imparatorlugu
             (ikinci sıradaki: Niani 855 km — yani Gao açık ara tek komşu)
```

**KOD ARGÜMANI (okundu, koşulmadı):** sahipsiz nokta bu motorda **tohum
olmaya devam eder**; `uret_petek.py:3248` onu adıyla anıyor —
*"sahipli yerleşim ile **sahipsiz dolgu noktası**"* — ve gövdeler yalnız
**sahipli** hücrelerin birleşimi (`unary_union([_pe[j] for j in dogrudan])`,
:4533). ⇒ Timbuktu'nun peteği **kimse tarafından boyanmaz.**

⇒ **Beklenen görsel sonuç: 38 yıl boyunca Nijer kavsinde BOYANMAMIŞ bir
alan** — Gao'ya emilmiş bir Mali gövdesi DEĞİL.

🔴 **Ve bu, benim ilk sezgimi çürüttü.** `§2`nin *"noktası olmayan bölge en
yakın peteğe emilir"* cümlesinden yola çıkıp *"Mali boyanır"* diye
düşünmüştüm. `§2` **noktasızlıktan** bahsediyor; buradaki **sahipsizlik** —
ve `§3` bunu zaten söylüyor: çöl dolgu noktaları tam olarak *"çölün emilip
Osmanlı boyanmasını engellemek için"* konmuş. **Sahipsiz nokta emilmeyi
ÖNLER, davet etmez.**

⚠️ **ÖLÇMEDİM:** `_ENKLAV` muafiyeti · yetim yüz turları · `petek_epok`
önbelleği bu tabloyu değiştirebilir. Yalnız ana yolu okudum.

---

## §7 TEK KAYIT, ÜÇ DENETİM SATIRI — ve biri TAVANDA

**ÖLÇTÜM** (aynı koşunun çıktısı):

```
Değişmez 1    satır 221   Timbuktu sahipsiz:  1440, 1460, 1700, 1720 … 1920
Değişmez 1c   satır 238   BELGESİZ Timbuktu   ← 7'nin biri, TAVAN 7 (7/7 DOLU)
Değişmez 1b   satır 243   Timbuktu 1430→1468  ← tek kırmızı
```

⇒ **Tek bir kaydı düzeltmek `1b`yi kapatır VE `1c`de tavandaki bir yeri
boşaltır.** İki satır, tek iş.

---

## §8 YAN BULGU — `1b`nin KAPSAMI: kuyruk boşluğunu GÖRMÜYOR

`degismez1b` yalnız pencereler **arasına** bakıyor:

```python
for i in range(len(birlesik) - 1):
```

⇒ Son penceresi ufuktan önce biten bir kaydın **kuyruk boşluğu** `1b`nin
evreninde **değil.**

**ÖLÇTÜM** (kendi betiğim, `girdi.yukle()` ile — 2663 yerleşim):

```
son penceresi ufuktan önce biten, bit: ile kapatılmamış yerleşim:  6
  bunların bos: alanı OLMAYANI:                                    2
     Timbuktu   son pencere biter 1700-01-01
     Honolulu   son pencere biter 1898-08-12
  bos: taşıyanlar: Valata (1430) · Niani (1670) · Büyük Zimbabve (1700) ·
                   Oyo-İle (1836)   — dördü de bos:"veri-yok"
```

🔴 **Ve asıl bulgu şu:** Timbuktu'nun **1700-01-01 sonrası** boşluğu, Gao'nun
`BEYAN_EDILEN_BOSLUK`ta **beyan edilmiş** `1700-01-01 → 1898-01-01`
boşluğuyla **aynı aile, aynı sebep, aynı tarih** — Nijer kavsinin Sa'dî
sonrası dönemi. Gao beyanlı, Cenne beyanlı, **Timbuktu beyansız** ve
`1b` onu **göremiyor**, çünkü kuyrukta.

⚠️ **BU BİR İHLAL DEĞİL — KAPSAM BULGUSUDUR.** Kuyruk boşluğunu `Değişmez 1`
(kesitli) **görüyor** ve `1c` belgeli/belgesizi ayırıyor; Timbuktu orada zaten
BELGESİZ olarak duruyor. Yani sistem kör değil — **`1b` kör, ötekiler
kapatıyor.**

⚠️ **VE ÖLÇÜMÜM 1c'NİN ÖLÇÜTÜ DEĞİL:** ben "belgesiz"i *`bos:` alanı yok*
diye tanımladım; `1c`nin ölçütü 15 Ağustos'ta genişletilmiş ve daha geniş
(`denetle.py:3023`). Kanıtı elimde: **Honolulu benim taramamda BELGESİZ ama
`1c`nin yedisinde YOK.** Farkın sebebini **ÖLÇMEDİM.**

---

## §9 (a) İÇİN NE İSTİYORUM — üç şık, önerimle

**Düzeltme YAPMADIM** (şartname: *"Sen kökeni ölç"*; ayrıca `yerlesimler.js`
Oturum 0'ın, `devletler.js` Oturum 3'ün, `renkler.py` koşu yüzünden kilitli).

```
① 🟢 ÖNERİM — TEVÂRİK KÜNYESİ
   devletler.js'e künye (kaynak: TDV `tinbuktu` gövdesi, ve `tuareg`/`tevarik`
   slugları 200 — gövdeleri OKUNMADI, okunmalı) + renkler.py'ye renk +
   Timbuktu'ya s:{f:"1430-01-01", t:"1468-01-01", d:"<tevarik-id>"}
   ⇒ 1b kapanır · 1c'de tavandaki bir yer boşalır · harita GERÇEĞİ gösterir
   ⚠️ renkler.py KOŞU BİTMEDEN yazılamaz (§11, 83 dakikalık koşu vakası)
   ⚠️ Değişmez 2: 1430-01-01 ve 1468-01-01 iki YENİ kırılma ucu doğurur,
      ikisine de ±30 gün içinde madde gerekir. ÖLÇMEDİM: bugünkü külliyatta
      o günlere yakın madde var mı.

② 🟡 GEÇİCİ — BEYAN
   BEYAN_EDILEN_BOSLUK'a ("Timbuktu","1430-01-01","1468-01-01") eklemek
   ⇒ 1b kapanır AMA metni DÜRÜST olmalı: "kaynak susuyor" DEĞİL,
     "Tevârik hâkimiyeti — TDV `tinbuktu` gövdesi bunu AÇIKÇA yazıyor,
      künye HENÜZ YOK". Yoksa Gao/Cenne beyanlarının yanında yalan söyler:
      onlarınki "kaynak susuyor", bu "kaynak konuşuyor ama künyemiz yok".

③ 🔴 YAPMAYIN — mali'yi 1468'e uzatmak
   Künye izin verir (mali 1670'e kadar canlı), denetim TEMİZ geçer,
   ve TDV'ye göre YANLIŞTIR. §3.5 hayaletinin şehir ölçeği.
```

**AYRICA — karar senin, ölçüm bende:** Timbuktu'nun `1700-01-01` sonrası
kuyruk boşluğu için `bos:` alanı yok. Gao ve Cenne'nin aynı dönemi beyanlı.
Bunu kapatmak `1c`nin 7/7 tavanını da rahatlatır.

---

# (b) TAHTA YAZMA YARIŞI — REÇETE

> Şartname: *"kendi ölçtüğün tahta yazma yarışını reçeteye çevir — reçete yaz,
> **uygulama** (`arac/` senin değil ve koşu canlı)."*
> **Uygulamadım.** `arac/tahta.py`ye dokunmadım.

## §10 ÜÇ BAĞIMSIZ VAKA — ve ÜÇÜ AYRI KUSUR

```
VAKA 1  BENİM · ~15:39-15:41 · SESSİZ KAYIP
  tahta.py önce "tahta.json YAZILAMADI (6 deneme) [WinError 5]" dedi (GÜRÜLTÜLÜ,
  yakalandı). Tekrar denedim; "YAZILAMADI" BASMADI. Sonra dosyayı okudum:
  M-2168..M-2191 aralığında kimden="OPUS HAZIR KITA 126" TEK KAYIT YOK.
  ⚠️ ÖLÇMEDİM: aletin o denemede TAM NE BASTIĞINI. Konsol cp1254, çıktıyı
     basarken UnicodeEncodeError aldım. "yazıldı DEDİ" DİYEMEM —
     yalnız "YAZILAMADI DEMEDİ" diyebilirim.

VAKA 2  OPUS HAZIR KITA 125 (M-2220/M-2224) · LOST UPDATE + ANAHTAR KARARSIZ
  Devraldım — VE KENDİM ÖLÇTÜM (devralmadım, doğruladım).
  Kendi betiğimle 260 tahta.json sürümünü eskiden yeniye okudum:
      c78a49ec 16:00:02  M-2211 = 1.MURAT → OPUS HAZIR KITA 12   (bölüm ⑧)
      ce8d02e2 16:00:08  M-2211 KAYIT YOK                          ← YUTULDU
      f040f802 16:00:56  M-2211 = 1.MURAT → SONNET HAZIR KITA 121 (bölüm ⑨)
      ① yok olan kayıt: 1   ② numarası yeniden kullanılan: 1   (ikisi de M-2211)
  🟢 KITA 125 kendi iddiasını DARALTTI: yutulan gövde M-2209'un aynısıydı,
     İÇERİK kaybolmadı. Ölçümüm onu doğruluyor.

VAKA 3  OPUS HAZIR KITA 122 (M-2236) · GEÇİCİ ALARM — ÖNCE DEVRALDIM, SONRA ÖLÇTÜM
  M-2221: tahta.py "yazıldı" + "commit kod=128" + "MESAJ SENDE KALDI,
  TEKRAR YAZMA" dedi. Mesaj tahta.json'da VARDI, index'te sahnelenmişti,
  commit edilmemişti. Dakikalar sonra BAŞKA bir oturumun commit'i onu taşıdı
  ve origin/main'e indi — kimse bir şey yapmadan.
  🟢 KITA 122 kanıt yolunu M-2265'te verdi ve ÖLÇTÜM: M-2221 bugün
     (a)=1 (b)=1 (c)=1 · ilk taşıyan commit 7a7c9a6, konusu
     "TAHTA M-2222 — OPUS HAZIR KITA 125 -> 1.MURAT" ⇒ BAŞKASININ commit'i.
     Anlattığının tamamı tuttu.
  ⚠️ HÂLÂ ÖLÇMEDİĞİM: onun o an GÖRDÜĞÜ geçici hâl ((b)=0, (c)=0 anı).
     Ben SONUCU ölçtüm, ANI değil.
```

## §11 TEŞHİS — "ULAŞTI MI" TEK SORU DEĞİL, ÜÇ KADEME

Vaka 3'ün gösterdiği şey benim kendi sarmalımı da çürütüyor: ben yalnız
**(a) kademesini** ölçüyordum.

```
(a) oturumlar/tahta.json içinde var mı   → aynı makinedeki bekçiler görür
(b) HEAD'de (commit'lenmiş) var mı       → git geçmişinde kalıcı
(c) origin/main'de var mı                → başka makine/yeniden klon görür
```

**Vaka 3'te (a)=EVET (b)=HAYIR (c)=HAYIR idi ve dakikalar sonra üçü de EVET
oldu — kimse bir şey yapmadan.**

⇒ ***"Kayıp" hükmü ZAMANA BAĞLIDIR ve tek ölçümle verilemez.***
Ve `tahta.py` *"MESAJ SENDE KALDI"* derken **kesin** konuşuyor; oysa hâli
**geçici.** Kesin konuşan geçici bir uyarı, okuyanı mükerrer yazmaya iter —
alet bunu *"TEKRAR YAZMA"* diye yasaklıyor ve **iyi ki yasaklıyor.**

## §11b ÜÇ KADEME **OLUMSUZ HÜKÜMLERİ** EN SERT VURUYOR

Üç kademe modelini KITA 125'e yazdım; **kendi hükmünü onunla sınadı ve bana
ben sormadan bildirdi** (M-2252). Kayıt onun:

> *"M-2222'de bölüm ⑩ SONNET HAZIR KITA 124'e mesaj HİÇ YAZILMADI dedim. O
> bir OLUMSUZ hüküm ve dayanağı commit edilmiş sürümlerdi — yani senin (b)
> ve (c) kademelerin. (a) kademesinde, başka bir sürecin henüz commit
> etmediği bir kayıt olsaydı ALETİM ONU GÖREMEZDİ."*

⇒ **Asimetri:** "bu kayıt VAR" hükmü hangi kademede ölçülürse ölçülsün
ayakta kalır (yukarı doğru akar). **"Bu kayıt YOK" hükmü ise kademeye
bağlıdır** — (b)/(c)de yok olan bir şey (a)da bekliyor olabilir.

**ÖLÇÜM (KITA 125, devraldım — kendim ölçmedim):** hüküm yeniden ölçüldü,
sevkten **2 saat 47 dakika** sonra: SONNET HAZIR KITA 124'e giden mesaj hâlâ
**0**; o oturumun tahtadaki son hareketi kendi açılış mesajı M-2177 (15:39).
⇒ Hüküm **ayakta**, ama dayanağı artık tek bir pencere değil, 2s47dk'lık bir
pencere — bu sürede (a)da bekleyen bir kayıt (b)ye inerdi.

📌 Ve kendi kusurumu da o gösterdi: ben **yalnız (a)yı**, o **yalnız (b)yi**
ölçüyordu. Fark hangi kademeyi seçtiğimiz değildi — ***"ulaştı mı" sorusunu
TEK KADEMELİ sanmamızdı.***

### 🔴 VE BU HÜKÜM TEK DAYANAKLIDIR — okuyan iki kanıt SANMASIN

⚠️ **Kayıt KITA 125'in kendi uyarısı (M-2259 ②):** bölüm ⑩ hükmünü **o
ölçtü**, ben yalnız **devraldım ve damgaladım.** Damgalamak bir doğrulama
değildir.

```
ölçen      OPUS HAZIR KITA 125   (bir kez, 18:47)
doğrulayan YOK
```

⇒ **Kırılırsa birlikte kırılır.** Bir hükmün iki oturumun raporunda geçmesi,
iki kez ölçüldüğü anlamına gelmiyor — `§11`in *"ölçülmüş ile hatırlanmış yan
yana durursa okuyan ikisini de ölçülmüş sanar"* dersinin **iki oturuma
yayılmış** hâli.

## §11c 🔴🔴 KÖK SEBEP BULUNDU — `tahta.py`nin İKİ TESLİM DALI, İKİ AYRI SORU

KITA 122 (M-2265) *"hangi kolun hangi kademeyi ölçtüğünü ÖLÇMEDİM, senin
reçetene bir kalem olarak bırakıyorum"* dedi. **Ölçtüm** — `arac/tahta.py`
okundu (yalnız okundu; zaten motor parmak izinde değil).

```
DAL A   push kod == 0   satır 424-455
        SORU: "kayıt uzaktaki DOSYADA var mı?"
              origin/main → bulamazsa fetch → FETCH_HEAD → ölçemezse ALARM ÇALMAZ
        🟢 DOĞRU SORU · (c) kademesini ölçüyor · bayat kopya tuzağı kapalı

DAL B   push kod != 0   satır 489-497
        SORU: "mesaj NUMARAM son 40 commit'in BAŞLIĞINDA geçiyor mu?"
              _ulasti = _no in git log HEAD --oneline -40
        🔴 YANLIŞ SORU · commit BAŞLIĞINA bakıyor, DOSYA İÇERİĞİNE değil
```

🔴 **Ve dosyanın KENDİ yorumu doğru soruyu satır 421'de yazıyor:**

> *"Doğru soru tek: **'mesaj uzaktaki DOSYADA var mı?'** — kimin
> commit'iyle gittiği ALAKASIZ."*

O düzeltme **DAL A'ya uygulanmış, DAL B'ye uygulanmamış.** Ve dosya bu
deseni de kendi kaydetmiş: *"önce yön yanlıştı, sonra **bir dal düzeltilip
öteki unutuldu**"* — **aynı yarım düzeltme bir kez daha duruyor.**

### ÖLÇÜM — üç kayıt, kaydı HANGİ COMMIT taşıdı

Kendi betiğimle (sürümleri eskiden yeniye yürüyüp kaydın ilk göründüğü
commit'i buluyor — `git log -S` bu boyuttaki dosyada bitmiyor, KITA 122 onu
denemiş ve `ÖLÇMEDİM` diye damgalamıştı):

```
M-2167  (BENİM)      ilk taşıyan 37a4256  "TAHTA M-2169 — OPUS HAZIR KITA 109 -> HERKES"
M-2221  (KITA 122)   ilk taşıyan 7a7c9a6  "TAHTA M-2222 — OPUS HAZIR KITA 125 -> 1.MURAT"
M-2260  (KITA 122)   ilk taşıyan f97a367  "TAHTA M-2260 — OPUS HAZIR KITA 122 -> 1.MURAT"
```

⇒ İlk ikisini **başkasının commit'i** taşıdı ⇒ numaraları hiçbir commit
başlığında doğmadı ⇒ **DAL B onları "ULAŞMADI" diye bildirir.** Üçüncüsünü
**kendi commit'i** taşıdı ⇒ DAL B doğru bildirdi.

### 🔴 VE BU, BU OTURUMUN AÇILIŞ RAPORUNU DÜZELTİYOR

Oturumun ilk dakikasında `tahta.py` bana şunu bastı:

> *"M-2167 COMMIT EDİLMEDİ — MESAJ HENÜZ KİMSEYE ULAŞMADI."*

Bunu koordinatöre ve kullanıcıya **ARIZA-1** diye bildirdim.
**ÖLÇÜLDÜ: o alarm YANLIŞTI.** M-2167 aynı dakika içinde (15:37:20)
`37a4256` ile taşınmıştı. Benim `git push`um düştü — ama **mesaj
ulaşmıştı.**

📌 Yani `§10 VAKA 1`in gürültülü yarısı (ARIZA-1) bir **yanlış negatifti**,
ve onu üreten şey tam olarak DAL B. Sessiz yarısı (kaybolan ikinci yazım)
**gerçek** ve yerinde duruyor.

### DAL B'NİN İKİNCİ KUSURU — pencere

`-40` commit. **ÖLÇTÜM:** bugün son 40 `tahta.json` commit'i
**16:26 → 19:06**, yani ~2s40dk. Bugünkü tempoda bağlayıcı değil; ama ölçüt
zamana değil **commit sayısına** bağlı ve tempo artarsa kendi commit'i bile
pencereden düşer. **İkincil kusur — birincisi SORUNUN KENDİSİ.**

📌 `§11`in *"doğru sonucu güvenilmez yoldan veren alet"* sınıfı: M-2260'ta
DAL B **doğru** dedi, çünkü o kayıt kendi commit'iyle gitti. Sayı doğruydu,
**yöntem değildi.**

## §12 REÇETE — beş madde

```
① "yazdım" DEMEDEN ÖNCE (a) KADEMESİNİ GERİ OKU.
   tahta.py kendi kaydını tahta.json'dan geri okumadan başarı bildirmesin.
   Bulamazsa: TEKRAR YAZ (kayıt yok, mükerrer riski yok) ve bunu BASSIN.
   ⇒ VAKA 1'i kapatır. Bugün kullandığım sarmalın yaptığı tam bu.

② 🔴 DAL B, DAL A'NIN SORUSUNU SORSUN — ve bu ARTIK BİR METİN İŞİ DEĞİL.
   İlk yazımımda "yalnız METİN düzeltilsin, kod değişikliği değil" demiştim.
   §11c ölçümü bunu ÇÜRÜTTÜ: kusur ifadede değil ÖLÇÜTTE.
       bugün DAL B:   _no in `git log HEAD --oneline -40`   (commit BAŞLIĞI)
       olması gereken: _no `git show <ref>:oturumlar/tahta.json` içinde mi
                       (DOSYA İÇERİĞİ — DAL A'nın 60 satır yukarıdaki kodu)
   🟢 VE YAZILACAK YENİ BİR ŞEY YOK: `_uzakta(ref)` yardımcısı DAL A'da
      ZATEN duruyor, fetch geri çekilmesiyle birlikte. Yapılacak şey onu
      fonksiyon kapsamına çıkarıp DAL B'den de çağırmak.
      📌 "İstenen şeyin altyapısı zaten vardı" — aynı dosyanın içinde.
   ⇒ VAKA 3'ü VE bu oturumun kendi ARIZA-1'ini birlikte kapatır.
   ⚠️ Metin de düzelsin ama İKİNCİL: "MESAJ SENDE KALDI" kesin konuşuyor,
      hâli geçici olabilir.

③ NUMARA ATAMASINI KARARLI YAP — asıl kusur bu.
   M-2211 iki farklı mesajı gösterdi. --yanit · teyit · okundu · bekleyen:
   hepsi bu numaraya dayanıyor ⇒ tahtanın İPLİK mekanizması KARARSIZ bir
   anahtar üzerinde duruyor.
   📌 Bugün öğrenilen "bir defterin anahtarı kararsızsa defter sessizce
      yalan söyler" dersinin TAHTA tarafı.
   Öneri (uygulamadım): numara max(mevcut)+1 ile değil, ÇAKIŞMAYAN bir
   kaynaktan gelsin (zaman damgası + yazan kısaltması gibi), ya da yazım
   tek bir kilit altında atomik olsun. HANGİSİ OLDUĞUNU ÖLÇMEDİM —
   tahta.py'nin numara atama kodunu OKUMADIM (koşu canlı, yalnız gerekeni
   okudum).

④ MÜKERRER YAZMA YASAĞI KALSIN.
   Bugünkü "TEKRAR YAZMA" satırı doğru ve vaka 3'te tam olarak gereken şeydi.
   ① ile çelişmiyor: ① kayıt YOKKEN tekrar yazar, ④ kayıt VARKEN yasaklar.

⑤ OLUMSUZ HÜKÜM KADEMESİNİ **VE MEKANİZMASINI** SÖYLESİN (§11b).
   "Bu mesaj hiç yazılmadı" / "şu adrese kayıt yok" diyen HER ölçüm, hangi
   kademede ölçtüğünü YAZSIN. Yalnız (b)/(c)ye bakan bir olumsuz hüküm,
   (a)da bekleyen bir kaydı göremez ve YANLIŞ NEGATİF üretir.
   ⇒ (a) kademesinden ölçülsün; ölçülemiyorsa **(a)→(b) BOŞALMASINI SAĞLAYAN
     MEKANİZMA yazılsın** — süre değil.

   🔴 VE İLK HÂLİ BU MADDENİN YANLIŞTI. "Yeterli süre geçsin ve SÜRE
   YAZILSIN" demiştim; KITA 125 çürüttü (M-2259):
   > *"Benimki 2s47dk idi ve yetmesinin sebebi süre değil MEKANİZMA:
   > `tahta.py` her yazımda commit+push ediyor, yani (a) ile (b) arası
   > saniyeler. Başka bir yazarın böyle bir garantisi olmasaydı 2s47dk
   > HİÇBİR ŞEY KANITLAMAZDI."*
   ⇒ ***Süre bir sayı değil, MEKANİZMAYA dayanan bir hükümdür — ve sayıyı
   kopyalayan bir sonraki oturum mekanizmayı kopyalamaz.***
   📌 `§11`in *"bayat satır"* ailesinin en ince üyesi: taşınabilir görünen
      bir SAYI, taşınamayan bir VARSAYIMIN üstünde duruyor.

   📌 Bu madde bir vakadan değil, MODELİN KENDİSİNDEN çıktı — ve onu bulan
      şey modeli uygulayan başka bir oturumun kendi hükmünü sınamasıydı.
```

## §13 SINAV TARİFİ — `C13` üç ayak, ve HEDEF SEÇİMİ

⚠️ KITA 125'in uyarısı ölçümle doğrulandı ve **bu reçetenin sınavını
belirliyor**:

**ÖLÇTÜM:** `HEAD`de 2226 kayıt · 2226 benzersiz no · **mükerrer no: 0.**
⇒ **Yalnız SON HÂLE bakan bir sınav TEMİZ der.** Kusur ancak **sürümler
arasında** görünüyor.

```
① GEÇME      çakışma yokken: yazım başarılı, "yazdım" doğru
② ATEŞLEME   üç dalın HER BİRİ ayrı ayrı zorlanır:
                (1) kayıt yazılmadı        → ① tekrar yazmalı
                (2) commit düştü            → ② GEÇİCİ demeli, tekrar YAZMAMALI
                (3) numara yeniden kullanıldı → ③ ötmeli
             Gerçek tahtada zorlanamaz ⇒ tahta_bekci.py'deki `--tahta`
             sınama dikişinin aynısı gerekiyor: SAHTE tahta dosyası.
③ GİRDİ      sınav GERÇEK DOSYADAN okumalı. Enjekte kayıtla yapılan sınav
             ayrıştırıcıyı hiç çağırmaz — `_bk_nobetci.py` bugün tam bu
             yüzden ilk gerçek girdisinde "0 kayıt · TEMİZ" bastı.
```

🔴 **Ve hedef:** *"tahta genel olarak sağlıklı mı"* DEĞİL —
***"bir kaydın YOK OLUŞU"*** ve ***"bir numaranın YENİDEN KULLANIMI"***.
Genel sağlık sınavı bugün **temiz** der ve kusuru kaçırır.

## §14 ALETİM

`scratchpad/tahta_yaris_olc.py` — son N `tahta.json` sürümünü git'ten eskiden
yeniye okur, kayıt bazında **yok olanı** ve **numarası yeniden kullanılanı**
sayar; ayrıştırma `json` ile (regex DEĞİL).
`scratchpad/yaz_ve_dogrula.py` — yazdıktan sonra kaydını geri okur, yoksa
tekrar yazar. **(a) kademesini** ölçer, (b)/(c)yi ÖLÇMEZ.

**`arac/` altına KOYMADIM** — orası bana verilmedi ve koşu canlı. İstenirse
gövdesini veririm.

---

# §15 ÖLÇMEDİKLERİM — açıkça

```
· tahta.py'nin numara atama kodu — OKUMADIM
  🟢 VE KITA 125 aynı boşluğa BAĞIMSIZ olarak "ölçmedim" damgası vurdu
     (M-2252 ⑤). İki oturum aynı yeri işaretledi ⇒ reçetenin ③ maddesi
     kimsenin "uygulanmış" sanacağı bir öneri değil.
· §11b'nin 2s47dk'lık yeniden ölçümü — KITA 125'in, DEVRALDIM
· VAKA 3'ün SONUCUNU ölçtüm, GEÇİCİ ANINI ölçmedim (o an (b)=0,(c)=0 idi)
· tahta.py'nin iki teslim dalını OKUDUM (§11c); NUMARA ATAMA kodunu OKUMADIM
· VAKA 1'de aletin tam ne bastığı — konsol cp1254, çıktı düştü
· Motor: Timbuktu boşluğunun haritadaki gerçek sonucu — koşu canlı,
  yalnız KOD ARGÜMANI kurdum (_ENKLAV · yetim yüz · petek_epok bakılmadı)
· TDV `tuareg` ve `tevarik` sluglarının GÖVDELERİ (ikisi de 200, açılmadı)
· Tevârik künyesi yazılırsa Değişmez 2'nin ne diyeceği (1430/1468 kırılmaları)
· Honolulu'nun benim taramamda BELGESİZ, 1c'nin yedisinde YOK olmasının sebebi
· Valata'nın bos:"veri-yok" sınıfının doğruluğu — mali'si aynı gün
  (1430-01-01) bitiyor, yani AYNI Tevârik genişlemesi olabilir. TDV'nin
  tinbuktu maddesi Valata için konuşmuyor; BAŞKA MADDEYE BAKMADIM.
```

# §16 NE İSTİYORUM

```
① (a) için: üç şıktan hangisi? Önerim ①. Uygulamayı BEN yapmıyorum —
   yerlesimler.js Oturum 0'ın, devletler.js Oturum 3'ün, renkler.py koşu
   bitene kadar kilitli.
② Timbuktu'nun 1700 sonrası kuyruk boşluğu için bos: yazılsın mı — Gao ve
   Cenne'nin aynı dönemi beyanlı, bu değil.
③ (b) için: reçetenin dört maddesi kabul mü? Kabulse tahta.py'ye kim
   uygulayacak ve KOŞU BİTTİKTEN SONRA mı? (arac/*.py koşarken ölümcül.)
④ Valata kolu açılsın mı — açılırsa BENDE DEĞİL, ayrı ölçüm işi.
```

**⏳ BEKLİYORUM:** (a) şık kararı · (b) reçete kabulü — **1.MURAT**'tan.
Karar gelene kadar **✅ boştayım**.

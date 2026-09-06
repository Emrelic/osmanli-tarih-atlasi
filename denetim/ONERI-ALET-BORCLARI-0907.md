# ÖNERİ — ÜÇ ALET BORCU · ⑭ KOL · OPUS HAZIR KITA 124

> **ÖNERİDİR, UYGULAMA DEĞİL.** `arac/` donuk (koşu 7b, PID 3880).
> Hiçbir `arac/*.py` dosyasına dokunulmadı — ölçümler aletleri
> **içe aktararak** (import) yapıldı, orijinal dosyalar okunmadı bile
> denecek kadar el sürülmeden bırakıldı.
>
> Taban: `girdi.oku_devletler()` → **617 künye** · `girdi.yukle()` →
> 2 Eylül'den beri büyümüş evren · 7 Eylül 2026.
>
> Her kalemde üç adım: **(a) kusuru koşturarak göster · (b) öneri ·
> (c) öneri uygulanınca sayı ne olur.**

---

## ⓪ ÖZET — üç sayı

| borç | şartnamedeki | **ölçtüğüm** | fark |
|---|---|---|---|
| ① düşen alan | "17 künye beyanı" | **18 künye · 3 alan · 29 örnek** + 🔴 `tabi` **9/9 canlı künyede düşüyor** | çekirdek daha sağlam |
| ② kör glob | "0906 ve 0907 görülmüyor" | **KRONOLOJİ 10/21 dosya kör · 70 madde** · KÜNYE 1/12 · 10 kayıt | **0904 de kör** |
| ③ `harita:` | "`hicaz`/`yemen` ikisi de" | **22 kimlik · 896 dönem sahte pozitif** | **448×** |

🔴 **Ve ①'in çerçevesi kısmen yanlıştı** — aşağıda ayrıntısı. Düzeltmesi
öneriyi *zayıflatmıyor,* **sağlamlaştırıyor.**

---

# ① `_kunye_uygula.py:136` — `sira` listesinde olmayan alan sessizce düşer

## (a) KUSUR — koşturularak gösterildi

Aletin **kendi** `kunye_metni()` fonksiyonu içe aktarılıp sahte bir künye
verildi:

```
girdi  : not · ikiz · bk  alanlarını taşıyan bir künye
çıktı  : { id, ad, tur, bolge, f, t, ozet, kaynak, kronoloji }
         not   🔴 YOK — sessizce düştü
         ikiz  🔴 YOK — sessizce düştü
         bk    🔴 YOK — sessizce düştü
```

**Alet hiçbir uyarı basmadı, hata vermedi, çıkış kodu temiz.**
`§11`: *sessiz atlama, yanlış sonuçtan pahalıdır* — yanlış bir sayı bir
gün fark edilir, sessiz atlama hiçbir iz bırakmaz.

## 🔴 (a2) ÇERÇEVE DÜZELTMESİ — ve öneriyi GÜÇLENDİRİYOR

Öneri yazmadan önce sorulması gereken soruyu sordum: *bu alanlar şemaya
mı ait, yoksa koordinatöre not mu?* Çünkü ikisi **ayrı yetkidir** ve
karıştırılırsa `devletler.js` şema dışı alanlarla kirlenir.

```
devletler.js'in GERÇEK alan kümesi (617 künye, girdi.oku_devletler()):
   id 617 · ad 617 · bolge 617 · f 617 · t 617 · ozet 617 ·
   kaynak 617 · kronoloji 617 · tur 601 · baskent 594 · harita 251 ·
   tabi 9
```

| düşen alan | `devletler.js`te | hüküm |
|---|---|---|
| `not` | 🔴 **hiç yok** | **şema kararı**, alet kusuru değil |
| `nokta_durumu` | 🔴 hiç yok | şema kararı |
| `bos_beyani` | 🔴 hiç yok | şema kararı |
| **`tabi`** | 🟢 **9 künyede VAR** | 🔴 **ALET KUSURU — yaşayan veri** |

⇒ *"17 künye beyanı kayboluyor"* çerçevesi bir **şema kararını alet
kusuru gibi** sunuyordu. Ama borç yine de **gerçek**, ve çekirdeği
`tabi`de:

```
`tabi`  devletler.js'te MEVCUT · `sira` listesinde YOK
        canlı 9 künye: kirim · dulkadir · eflak · bogdan · erdel ·
        misir-kavalali · sirbistan-prensligi · bulgaristan-prensligi ·
        don-kazak
        aletten geçirildi ⇒ 9/9'unda alan DÜŞÜYOR
```

### ⚠️ VE KENDİ ÖLÇÜMÜMÜ DÜZELTTİM — 7/9 DEĞİL 9/9

İlk turda `"tabi:" in metin` diye **alt-dizgi** testi yaptım ve `dulkadir`
ile `misir-kavalali` *"korundu"* çıktı. Baktım:

```
dulkadir       ozet:"… Yavuz döneminde kesin ilhak edildi. tabi: başlangıcı
                     Turnadağ Zaferi'nin … keyfî bir sınır …"
misir-kavalali ozet:"… ÜLKE SÜREKLİLİĞİ …"   (aynı sınıf)
```

`tabi:` dizgisi **`ozet` metninin içinde** geçiyor — alan olarak değil.
**Kendi testim yanlış pozitif verdi.** `§11`: *eşleşme bulmak, doğru şeyi
bulmak değildir* — ve bu, projede kayıtlı *"yorumdaki ad ≠ kayıttaki ad"*
tuzağının birebir aynısı, bu sefer benim aletimde.
⇒ **Gerçek sayı 9/9.** Düzeltme bulguyu büyüttü.

## (b) ÖNERİ — mekanizma ile şema kararını AYIR

```python
# _kunye_uygula.py — kunye_metni()
SIRA      = ("id","ad","tur","bolge","f","t","baskent","harita",
             "ozet","kaynak","tabi")        # ← `tabi` EKLENDİ (canlı alan)
YAPISAL   = ("kronoloji",)                  # ayrıca ele alınıyor
ICSEL     = tuple(a for a in k if a.startswith("_"))   # yorum/meta, düşer

bilinmeyen = [a for a in k
              if a not in SIRA + YAPISAL and not a.startswith("_")]
if bilinmeyen:
    yaz("🔴 KÜNYE %s — TANINMAYAN ALAN: %s" % (k["id"], ", ".join(bilinmeyen)))
    yaz("   Bu alan devletler.js şemasında YOK. İki yoldan biri seçilmeli:")
    yaz("   ① şemaya girecekse SIRA listesine eklenir (KOORDİNATÖR KARARI)")
    yaz("   ② girmeyecekse yamada `_` önekiyle yazılır (`_not`) — o zaman")
    yaz("      bilerek düşer ve bu uyarı ötmez.")
    raise SystemExit(2)          # ← SESSİZCE DÜŞÜRME. DUR.
```

🔴 **İki parçası da şart ve gerekçeleri ayrı:**

- **`tabi` eklenir** — tartışmasız. Yaşayan bir şema alanı, ve alet onu
  düşürüyor. Bu bir karar değil, bir onarım.
- **Bilinmeyen alan artık DURDURUR** — `§11`in *"bir aracın çökmesi,
  yanlış cevap vermesinden İYİDİR"* kuralı. Bugün alet *"uyguladım"* diyor
  ve beyanı yutuyor.
- **`_` öneki bir kaçış yolu verir** — yoksa oturumlar alanı *gizlemeye*
  değil **uydurmaya** yönelir; bu, aletin kendi `ONERILEN` yorumunun
  (`ozet`/`kaynak` niçin zorunlu değil) aynı mantığı.

⚠️ **`not` / `nokta_durumu` / `bos_beyani`nin şemaya girip girmeyeceğine
BEN KARAR VERMİYORUM.** Ölçtüm, kovaladım, koordinatöre bırakıyorum.

## (c) ÖNERİ UYGULANINCA SAYI NE OLUR

| ölçüt | bugün | öneri sonrası |
|---|---|---|
| `tabi` düşen canlı künye | **9 / 9** | **0 / 9** |
| sessizce düşen alan örneği | **29** (18 künyede) | **0** — hepsi ya iner ya DURDURUR |
| bilinmeyen alan için uyarı | **0** | **18 künye** için uyarı + çıkış kodu 2 |
| `devletler.js`e giren şema dışı alan | 0 | **0** (değişmez — kaçış `_` ile) |

⚠️ **Yan etki ÖLÇÜLDÜ:** bekleyen yamalarda `tabi` taşıyan künye **0** ⇒
`tabi` eklemesi bugün hiçbir yamayı değiştirmez, **yarınki kaybı önler.**
`§11`: *"bugünkü veri değil, YARIN ÇİZİLECEK OLAN"* ölçülür.

---

# ② `_kunye_uygula.py:44` · `_kronoloji_uygula.py:49` — glob `*0905*`e sabit

## (a) KUSUR — koşturularak gösterildi

```
_kunye_uygula.py:44      VARSAYILAN       = "denetim/YAMA-KUNYE-*0905*.json"
_kronoloji_uygula.py:49  VARSAYILAN_YAMA  = "denetim/KRONOLOJI-*0905*.json"
```

| | görülen | toplam | **kör** | kör kayıt |
|---|---|---|---|---|
| KÜNYE | 11 | 12 | **1** | **10 künye** |
| KRONOLOJİ | 11 | 21 | **10** | **70 madde** |

Kör dosyalar:
```
YAMA-KUNYE-VASSAL-0906.json                10 künye
KRONOLOJI-BATIAFRIKA-0904.json             22 madde
KRONOLOJI-GUNEYAMERIKA-0904.json           21 madde
KRONOLOJI-ORTAAMERIKA-0904.json            13 madde
KRONOLOJI-BALKAN-0906.json                  4 madde
KRONOLOJI-1917-TASIMA-0906.json             3 madde
KRONOLOJI-MANDA-0906.json                   3 madde
KRONOLOJI-AVRUPA-0906.json                  2 madde
KRONOLOJI-AGADEZ-1906-0906.json             1 madde
KRONOLOJI-ORTADOGU-URDUN-0907.json          1 madde
KRONOLOJI-AFRIKA-0906.json                  ⚪ ÖLÇÜLEMEDİ (çıkarıcı tanımadı)
```

## 🔴 (a2) DESEN ŞARTNAMEDEKİNDEN GENİŞ — VE YÖNÜ DE FARKLI

Şartname *"0906 ve 0907 dosyaları hiç görülmüyor"* diyor. Ölçüm: **0904
dosyaları da kör** — ve onlar **56 madde**, yani kör kütlenin **%80'i.**

⇒ Desen `*0905*` olduğu için kör olan şey *"gelecek"* değil,
***0905 OLMAYAN HER TARİH*** — ileri de geri de. Bir *"tarihi ileri al"*
düzeltmesi (`*0907*`) **aynı kusuru bir gün sonraya taşır** ve 0905'i de
kör eder.

## ⚠️ (a3) VE BU "SESSİZ SIFIR" — ölçtüm

Alet kör dosya için **hata vermiyor**, `0 kayıt` basıp geçiyor. O sıfır
*"kayıt yok"* değil ***"bu dosyaya hiç bakmadım"*** demek — `§11`in
*"`0`, 'yok' ile 'bakmadım' arasında ayrım yapmaz"* kuralının glob yüzü,
ve projede bu ailenin (`YAMA-KUNYE-T-0905` · `KRONOLOJI-ZEND`) üçüncü
vakası.

## (b) ÖNERİ

```python
# TARİH SABİTİ YOK — desen tarihten BAĞIMSIZ
VARSAYILAN      = "denetim/YAMA-KUNYE-*.json"
VARSAYILAN_YAMA = "denetim/KRONOLOJI-*.json"
```

ve **açılışta kapsam BASILIR** (sessiz sıfırı öldüren asıl parça):

```python
yol_listesi = sorted(glob.glob(desen))
yaz("KAPSAM: %d dosya · desen %s" % (len(yol_listesi), desen))
for y in yol_listesi:
    yaz("   %-46s %d kayıt" % (os.path.basename(y), say(y)))
if not yol_listesi:
    yaz("🔴 DESEN HİÇBİR DOSYA TUTMADI — bu bir SIFIR DEĞİL, bir ARIZA.")
    raise SystemExit(2)
```

🔴 **Ve `0 kayıt` çıkaran bir dosya artık ADIYLA basılır.** Bugün
`KRONOLOJI-AFRIKA-0906.json` çıkarıcının tanımadığı bir biçimde ve
**sessizce yutuluyor**; adıyla basılsa sahibi görür.

⚠️ **Genişletmenin riski var ve gizlemiyorum:** desen genişleyince
**yanlış cinsten** dosyalar da tutulur (`YAMA-KUNYE-T-0905.json` bir
bulgu dosyasıdır, künye dosyası değil — ölçüldü, **0 künye** veriyor).
Çare desen daraltmak değil, **her dosyanın kaç kayıt verdiğini BASMAK**:
`0` basan bir dosya ya boştur ya yanlış cinstir, ve ikisi de **görünür**
olur.

## (c) ÖNERİ UYGULANINCA SAYI NE OLUR

| ölçüt | bugün | öneri sonrası |
|---|---|---|
| KÜNYE görülen dosya | 11 / 12 | **12 / 12** |
| KÜNYE görülen kayıt | ? | **+10 künye** |
| KRONOLOJİ görülen dosya | 11 / 21 | **21 / 21** |
| KRONOLOJİ görülen madde | ? | **+70 madde** |
| adıyla basılan `0 kayıt` dosyası | 0 | **≥2** (`T-0905` · `AFRIKA-0906`) |
| tarih değişince kör kalan dosya | **hepsi** | **0** |

⚠️ **`+70 madde` bir "uygulanacak" sayısı DEĞİL** — görünür olacak sayı.
Kaçının gerçekten ineceğini **ölçmedim**; mükerrer/çatışma denetimi ayrı
koşar ve o sayıyı düşürebilir.

---

# ③ `denetle.py` `harita:` dolaylamasını çözmüyor

## (a) KUSUR — mekanizma bulundu ve kaynağı gösterildi

`denetle.py:1620`, `_devletler_yukle()`in dönüşü:

```python
return {d["id"]: (d.get("f"), d.get("t"))
        for d in json.loads(c.stdout) if d.get("id")}
```

**Yalnız `id` anahtarlanıyor; `harita:` anahtarı sözlüğe hiç girmiyor.**
`degismez4` (satır 1831) sonra şunu yapıyor:

```python
if kim not in K:
    kunyesiz.append((y["ad"], kim))
```

⇒ `harita:` ile bağlı ama `id` olarak var olmayan her kimlik
**KÜNYESİZ** diye işaretlenir.

## 🔴 (a2) KAPSAM — şartnamedekinin **448 KATI**

Şartname iki ad veriyor (`hicaz`, `yemen`). Ölçtüm:

```
`harita:` ile bağlı AMA künye `id` OLMAYAN kimlik        : 23
bunlardan VERİDE `s:` kimliği olarak KULLANILAN          : 23
   🟡 SAHTE POZİTİF  22 kimlik ·  896 dönem
   🔴 GERÇEK künyesiz  1 kimlik ·    2 dönem   (`__BOSLUK__`)
```

En büyük altısı:
```
suleyman-celebi  214 dönem  <- fetret-suleyman
musa-celebi      156        <- fetret-musa
avusturya        145        <- habsburg
mehmed-celebi    121        <- fetret-mehmed
isa-celebi        56        <- fetret-isa
sirbistan         29        <- sirbistan-nemanjic · sirp-despotlugu
```

⇒ `hicaz` (13 dönem) ve `yemen` (29 dönem) toplam **42** — yani
şartnamenin adıyla saydığı iki kimlik, kusurun **%4,7'si.**
**Osmanlı Fetret devrinin dört şehzadesi tek başına 547 dönem.**

📌 Ve tek 🔴 olan `__BOSLUK__` bile bir kusur değil: `CLAUDE.md §1.5` onu
*"hiçbir künyenin kapsamadığı dilim — kusur değil, **BEYAN**"* diye
kaydediyor. ⇒ **898 künyesiz dönemin 898'i de gerçek kusur değil.**

## (b) ÖNERİ

```python
def _devletler_yukle():
    ...
    K = {}
    for d in json.loads(c.stdout):
        if not d.get("id"):
            continue
        K[d["id"]] = (d.get("f"), d.get("t"))
    # 🔴 `harita:` DOLAYLAMASI — bir künye başka bir boya anahtarına
    #    bağlanabilir (`hicaz-kralligi` -> harita:"hicaz"). Veri o
    #    ANAHTARI `s:{d:...}` kimliği olarak kullanır. Anahtar sözlükte
    #    yoksa denetim onu "künyesiz" sanır — ölçüldü: 22 kimlik, 896 dönem.
    #    Çok künye aynı anahtara bağlanabilir (sirbistan <- üç künye):
    #    pencere BİRLEŞİM alınır, yoksa hayalet denetimi yanlış daraltır.
    for d in json.loads(c.stdout):
        h = d.get("harita")
        if not h or h in K:
            continue
        ayn = [x for x in json.loads(c.stdout) if x.get("harita") == h]
        fs = [x.get("f") for x in ayn if x.get("f")]
        ts = [x.get("t") for x in ayn if x.get("t")]
        K[h] = (min(fs) if fs else None, max(ts) if ts else None)
    return K
```

🔴 **Birleşim şart, ve sebebi ölçüldü:** `sirbistan` anahtarına **üç**
künye bağlı (`sirbistan-nemanjic` · `sirp-despotlugu` · +1), `suud`a
**üç**, `bulgaristan`a **iki**. Tek künyenin penceresi alınırsa
`Değişmez 4` (hayalet devlet) **yanlış ihlal** üretir — yani bir sahte
pozitifi kapatırken başkasını açar.

⚠️ **Ve bu bir SADELEŞTİRME:** birleşim penceresi, aradaki boşlukları da
kapsar (üç Suûd devleti arasında gerçek fetret vardır). ⇒ `harita:`
üzerinden gelen kimlikler için hayalet denetimi **daha gevşek** olur.
Bunu **gizlemiyorum**; alternatifi (her künyeyi ayrı ayrı sınamak) daha
doğru ama `degismez4`ün dönüş yapısını değiştirmeyi gerektirir ve o
**benim yetkimde değil.**

## (c) ÖNERİ UYGULANINCA SAYI NE OLUR

| ölçüt | bugün | öneri sonrası |
|---|---|---|
| `kunyesiz` kimlik | **23** | **1** (`__BOSLUK__`) |
| `kunyesiz` dönem | **898** | **2** |
| bunun gerçek kusur olanı | **0** | **0** — değişmez |
| `Değişmez 4` hayalet ihlali | ölçüldü değil | ⚪ **ÖLÇEMEDİM** — aşağıya bak |

🔴 **NE ÖLÇEMEDİM, açıkça:** öneri uygulanınca `harita:` kimlikleri
**hayalet denetimine dâhil olur** ve bugün hiç sınanmayan 896 dönem
sınanmaya başlar. **Kaç yeni hayalet ihlali doğacağını ölçemedim** —
ölçmek için `degismez4`ü değiştirilmiş sözlükle koşturmak gerekiyordu ve
bu, aleti değiştirmeden yapılamıyor (`arac/` donuk).
⇒ Damgam **`ölçülemedi`**, `0` değil. Ve bu, öneriyi uygulayacak kişinin
**ilk ölçmesi gereken şeydir**: sahte pozitifi kapatan düzeltme, uyuyan
gerçek ihlalleri **uyandırabilir** — ki bu iyi bir şeydir, ama sayısı
önceden bilinmeli.

---

## ④ ÜÇÜNÜN ORTAK KÖKÜ — ve bu bir dördüncü borç

Üç kusur de **aynı sınıftan** ve `CLAUDE.md`de zaten yazılı:

```
① sira listesinde olmayan alan   -> SESSİZCE düşer, uyarı YOK
② globa uymayan dosya            -> SESSİZCE atlanır, `0` basar
③ harita: anahtarı               -> SESSİZCE "künyesiz" sayılır
```

Üçünde de alet **hata vermiyor, temiz bir sayı üretiyor.** `§11`in
*"doğru kapıya gidip yanlış yerden dinlemek"* ve *"sessiz atlama, yanlış
sonuçtan pahalıdır"* dersleri — ve bu üçü onların **alet tarafındaki**
somut hâli.

🟢 **ÖNERİ (dördüncü):** üç düzeltmenin de ortak parçası tek bir kural
olsun — ***bir alet, işlemediği girdiyi ADIYLA basar.*** Düşen alan,
tutulmayan dosya, çözülemeyen kimlik: üçü de bir satır çıktı üretsin.
Bu, üç ayrı düzeltmeden daha ucuz ve dördüncü kusuru da önler.

---

## ⑤ ÖLÇÜLMEYENLER — damgalarıyla

```
⚪ ÖLÇÜLEMEDİ  ③ uygulanınca doğacak YENİ hayalet ihlali sayısı
               (arac/ donuk, degismez4 değiştirilmeden koşturulamaz)
⚪ ÖLÇÜLEMEDİ  KRONOLOJI-AFRIKA-0906.json kaç madde taşıyor
               (çıkarıcı biçimi tanımadı — dosya BOZUK demiyorum, TANIMADI)
⚪ OKUMADIM    `_kunye_uygula.py` ve `_kronoloji_uygula.py`nin ÖTEKİ
               fonksiyonlarını — yalnız adı geçen üç kusura baktım
⚪ OKUMADIM    denetle.py'nin öteki değişmezlerinde `harita:` dolaylaması
               gerekip gerekmediğini — yalnız `degismez4`e baktım
🔴 ÖLÇMEDİM    `not`/`nokta_durumu`/`bos_beyani` alanlarının şemaya girip
               girmemesi gerektiğini — bu bir KARAR, ölçüm değil, ve
               koordinatörün
```

## ⑥ ALETLER — bir sonraki oturum için

```
scratchpad/_borc1.py    aletin kendi kunye_metni()'sini içe aktarıp
                        sahte künyeyle kusuru ateşler
scratchpad/_borc1b.py   AYIRT EDİCİ SINAV: düşen alan şemada var mı?
                        (girdi.oku_devletler() — projenin KENDİ okuyucusu)
scratchpad/_borc1c.py   canlı `tabi` künyelerini aletten geçirir
scratchpad/_borc23b.py  kör glob dosyaları + kayıt sayıları
scratchpad/_borc3.py    sahte pozitif ile gerçek künyesizi AYIRIR
```

🔴 **`_borc3.py`nin ayrımı en değerlisi:** *"23 sahte pozitif"* demek
kolaydı ve **yanlış** olurdu — biri (`__BOSLUK__`) denetimin **doğru**
yakaladığı bir kayıt. Bir düzeltmenin kaç sahte pozitifi kapattığını
söylerken, **kaç doğru pozitifi de kapatacağını** ayrıca saymak gerekiyor.

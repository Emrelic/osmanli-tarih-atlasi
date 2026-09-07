# PLAN — KADEME C ALTI KOLUN BİRLEŞTİRİLMESİ

> **BIRLESTIRICI-0907 · 7 Eylül 2026** · sevk: 1.MURAT HÜDAVENDİGAR
> Aletler: `denetim/ARAC-BIRLESTIR-SINIR-0907.py` · `denetim/SINAV-BIRLESTIR-0907.py`
> Ölçüm: `denetim/OLCUM-BIRLESTIR-0907.json` · örnek üretim: `denetim/_birlestir/`
> 🔴 `data/` ve `arac/` altına **hiçbir şey yazılmadı** (koşu 8 donuk, `§7`).
> 🔴 Bu bir **PLAN + ÖLÇÜM**tür. Hüküm 1.MURAT'ın; burada yalnız ölçülür ve önerilir.

---

## ⓪ ÖZET — üç cümle

1. **Altı kolun altısı da teslim etti: 317 kayıt · 307 benzersiz kenar.** On
   ortak alanın onu (`a b f t t_cinsi hal dayanak dayanak_t kaynak gc`)
   **317/317 kayıtta** var — çekirdek sağlam.
2. **Mükerrer kenar küçük ve ucuz: 10 çapraz, 0 kol içi — ve sekizinin
   geometrisi BİREBİR AYNI**, ikisinin bir tarafı boş, **gerçekten çelişen
   geometri 0.** ⇒ Birleştirmenin fiyatı geometride değil. (Kapsama:
   referansın 296 kanonik kenarının **276'sı** yazılmış, %93,2.)
3. 🔴 **Asıl risk mükerrerde değil ANLAMDA: `hal:"bulunamadi"` 93 kayıtta
   duruyor ve 71'i (%76) modelin tanımladığı şeyi DEĞİL, "o gün orada
   uluslararası sınır YOKTU"yu anlatıyor.** M-3183'ün tam bunun için açtığı
   `hal:"ayni-kimlik"` değeri **317 kaydın 0'ında** kullanılıyor.

---

## ① NE ÖLÇTÜM — altı kol, 317 kayıt

| BÖLGE | kapsayıcı anahtar | kayıt | NE ekseni | `hal` dağılımı |
|---|---|---|---|---|
| ANADOLU | `kenarlar` | 19 | `ne_a/ne_b` | hukuki 6 · bulunamadi 13 |
| BALKAN | `kenarlar` | 60 | `ne_a/ne_b` | olculemedi 19 · hukuki 17 · bulunamadi 24 |
| ARAP | **`kenar`** | 26 | `a/b` | olculemedi 22 · hukuki 4 |
| KAFRIKA | `kenarlar` | 25 | `a/b` | hukuki 14 · bulunamadi 6 · olculemedi 5 |
| GAFRIKA | **`kayitlar`** | 89 | `a/b` | olculemedi 54 · bulunamadi 35 |
| ASYA | `kenarlar` | 98 | `ne_a/ne_b` | olculemedi 83 · bulunamadi 15 |
| | | **317** | | |

**Denetim sonucu: 🔴 6 · 🟡 48 · çıkış kodu 1.**

### ① a — KAPSAYICI ANAHTAR ÜÇ ADLA YAZILMIŞ
```
kenarlar   ANADOLU · BALKAN · KAFRIKA · ASYA
kenar      ARAP
kayitlar   GAFRIKA
```
Alet bunu **tahmin etmiyor**, dosyadan buluyor — ve aday **sıfır** ya da
**birden çok** ise 🔴 basıyor. Sebep `§11`: bir anahtar sessizce hiçbir şey
bulmazsa alet *"0 kayıt"* basıp geçer, ve o sıfır **"kayıt yok" ile
"bakmadım" arasında ayrım yapmaz.**

### ① b — 🔴 BİRLEŞTİRME ANAHTARI ÜÇ DİL KONUŞUYOR
`a`/`b` alanı — kenarın kimliği — bölgeden bölgeye başka bir şey taşıyor.
Bu **tahmin edilmedi**: her alanın değerleri **NE'nin kendi ad sözlüğüne**
(258 girdi · 351 ad) karşı sayıldı.

```
ANADOLU   a/b = ATLAS SLUG'I     ('irak-kralligi' · 'kacar')   NE'de 0/19
ARAP      a/b = NE ADI           ('Iran' · 'Iraq')             NE'de 26/26
BALKAN    a/b = NE ADI                                         NE'de 60/60
KAFRIKA   a/b = NE ADI                                         NE'de 25/25
GAFRIKA   a/b = NE ADI                                         NE'de 89/89
ASYA      a/b = null             98/98 BOŞ                     🔴
```
⇒ `SINIR_HUKUKI.filter(k => k.a === "kacar")` **yalnız ANADOLU'yu bulur**;
`k.a === "Iran"` ANADOLU'yu **hiç** bulmaz; ASYA'yı **hiçbir sorgu** bulmaz.

### ① c — ANAHTAR KARARLILIĞI
```
BÖLGE      a > b (ters)   a/b BOŞ   a == b
ANADOLU         0            0         5     ← 'sovyet-rusya | sovyet-rusya'
BALKAN          0            0         0
ARAP            0            0         0
KAFRIKA         0            0         0
GAFRIKA        43/89 🔴       0         0
ASYA            0          98/98 🔴     0
```
🔴 **GAFRIKA'nın 43 kaydında `a > b`** ⇒ aynı kenar iki farklı anahtarla
görünür ve çakışma **görünmez** olur.
🔴 **ASYA'nın 98 kaydında `a`/`b` boş** ⇒ kayıtlar birbirinden ayırt
edilemez; kimlikler `kimlik_1923.a`/`.b` içinde duruyor.

### ① d — `kimlik_1923` AYNI ADLA BEŞ FARKLI ŞEY
```
ANADOLU  dict{NE adı → atlas slug}   {'Iran':'kacar','Iraq':'irak-kralligi'}
ASYA     dict{a,b + yöntem meta}     {'a':'kanada','b':'abd','yontem':…}
BALKAN   İKİ SKALER ALAN             kimlik_1923_a:'arnavutluk-bagimsiz'
KAFRIKA  İKİ SKALER ALAN             kimlik_1923_a / _b
ARAP     list[DAMGA METNİ]           ['⚪ ölçmedim', 'İngiliz mandası…']
GAFRIKA  list[TÜRKÇE GÖRÜNEN AD]     ['Habeş İmparatorluğu', 'Kenya Kolonisi…']
```
⇒ 1923 kimliği — **haritada neyin çizileceğini belirleyen alan** — gerçek
bir atlas slug'ı olarak yalnız **ANADOLU · ASYA · BALKAN · KAFRIKA**'da
duruyor. **ARAP (26) + GAFRIKA (89) = 115 kayıt (%36)** adreslenebilir
kimlik taşımıyor.
> 🟡 ARAP kendi `_KOVA_ONERISI`nde *"TUR 2'de `kimlik_1923` ölçülüp SAF
> SLUG'a çevrildi"* diyor — **ama teslim edilen dosyada öyle değil.** Ya
> TUR 2 henüz inmedi ya da başka bir dosyaya indi; **ölçmedim**, kolun
> kendisine sorulmalı.

---

## ② 🔴🔴 ASIL BULGU — `hal` AYNI DEĞERLE İKİ AYRI ŞEY SÖYLÜYOR

`hal:"bulunamadi"` modelde şu demek: ***arandı, dayanak yok.*** Ölçüldü:

```
BÖLGE      bulunamadi   'aynı egemen, sınır DEĞİLDİ'   'arandı, yok'
GAFRIKA        35                  35                        0
BALKAN         24                  15                        9
ASYA           15                  15                        0
ANADOLU        13                   5                        8
KAFRIKA         6                   1                        5
─────────────────────────────────────────────────────────────────
TOPLAM         93                  71  (%76)                22
```
Kanıt kolların kendi metinlerinde:
```
GAFRIKA _NOT   "hal:olculemedi = 'metin aranmadı', hal:bulunamadi =
                'o gün uluslararası sınır DEĞİLDİ'"
GAFRIKA kayıt  dayanak: "1923-10-29'da iki yan da GB egemenliğinde ama AYRI
                hukukî yapı (GB-KEN…)"
ANADOLU kayıt  dayanak: "bulunamadi"           ← modelin tanımı
ANADOLU kayıt  dayanak: "YOK — 1923'te ULUSLARARASI SINIR DEGILDI"  ← ötekisi
```
⇒ ***`SINIR_HUKUKI.filter(k => k.hal === "bulunamadi")` bugün "arandı,
bulunamadı" ile "sorulan şey o gün YOKTU"yu AYNI KOVAYA koyar*** — ve
`ONERI-KADEME-C-MODEL-0907.md §⑤` tam bunu yasaklıyor: *"yanlış damga
hatayı KALICILAŞTIRIR — bir sonraki oturumu aramaktan alıkoyar."*

### ② a — VE ALTI KOL AYNI BOŞLUĞU BAĞIMSIZ OLARAK BULDU
```
ANADOLU   hal_oneri:"ic-idari"                    5      + "tanimsiz" 1
ASYA      cins:"1923te-ic-hat"                   15
BALKAN    ic_sinir_1923:true                     15      (yeni alan ÖNERİSİ ile)
GAFRIKA   sinif_1923: ayni_egemen_farkli_yapi 18 + ic_idari_cizgi 17 = 35
KAFRIKA   nitelik_1923: ic-idari 6 + yok 1        7      (_SEMA_SAPMASI ile beyan)
ARAP      alan YOK — `_KOVA_ONERISI: "1923-KENAR-YOK"` (2 vaka doğrulandı)
──────────────────────────────────────────────────────────────────
ölçülen toplam                                   77   (+ ARAP'ın 2'si ≈ 79)
```
🟢 **Altı bağımsız kol, altı ayrı adla, aynı kümeye yakınsadı.** `§11`:
*"üç bağımsız ölçüt aynı kümeye yakınsarsa bu kümenin TAM olduğunun
kanıtıdır"* — yani boşluk gerçek ve altıncı bir kol daha çıkmayacak.
⚠️ Yakınsama **kümenin tam olduğunu** gösterir, **hangi adın doğru
olduğunu değil.**

### ② b — 🔴 VE M-3183 KARARI HİÇBİR KOLA İNMEDİ
```
hal:"ayni-kimlik"  (M-3183, dördüncü değer)   →  317 kaydın 0'ında
```
Karar şartnameye indi, **veriye inmedi.** `§11`: *"bir hüküm, veriye
inmedikçe hüküm değil bir metindir."* Altı kol da karardan önce ya da
haberi olmadan yazdı ve **altısı da kendi yan alanını icat etti.**

🟢 **ÖNERİ — ve maliyeti ÖLÇÜLDÜ: mekanik, 79 kayıt, kaynak araması GEREKMİYOR.**
Her kolun **kendi yan alanı** `hal:"ayni-kimlik"`e çevrilebilir:
```
ANADOLU  hal_oneri == "ic-idari"                         →  5
ASYA     cins == "1923te-ic-hat"                         → 15
BALKAN   ic_sinir_1923 === true                          → 15
GAFRIKA  sinif_1923 ∈ {ayni_egemen_farkli_yapi, ic_idari_cizgi} → 35
KAFRIKA  nitelik_1923 ∈ {ic-idari, yok}                  →  7
ARAP     kimlik_1923[0] === kimlik_1923[1]  🔴 BUGÜN İMKÂNSIZ (slug yok)
```
Sonrası: `bulunamadi` **93 → 22** (hepsi gerçekten "arandı, yok"),
`ayni-kimlik` **0 → 79**.
⚠️ **UYGULAMADIM.** Bu bir kimlik hükmüdür ve altı kolu birden bağlar;
`§7`ye göre kolların dosyaları benim değil.

---

## ③ MÜKERRER KENAR — ölçüm ve ÖNERİLEN KURAL

```
benzersiz NE kenarı        307
BÖLGELER ARASI mükerrer     10
KOL İÇİ mükerrer             0   🟢
```
| A | B | kollar | geometri |
|---|---|---|---|
| Afghanistan | Iran | ANADOLU(bulunamadi) · ASYA(olculemedi) | 🟢 birebir aynı |
| Bulgaria | Turkey | ANADOLU(bulunamadi) · BALKAN(olculemedi) | 🟢 birebir aynı |
| Greece | Turkey | ANADOLU(**hukuki**) · BALKAN(olculemedi) | 🟢 birebir aynı |
| Iran | Iraq | ANADOLU(**hukuki**) · ARAP(olculemedi) | 🟢 birebir aynı |
| Iran | Pakistan | ANADOLU(bulunamadi) · ASYA(olculemedi) | 🟢 birebir aynı |
| Iran | Turkmenistan | ANADOLU(bulunamadi) · ASYA(olculemedi) | 🟢 birebir aynı |
| Iraq | Turkey | ANADOLU(bulunamadi) · ARAP(**hukuki**) | 🟢 birebir aynı |
| Syria | Turkey | ANADOLU(**hukuki**) · ARAP(**hukuki**) | 🟢 birebir aynı |
| Egypt | Israel | ARAP(olculemedi, `gc:[]`) · KAFRIKA(**hukuki**) | ⚪ bir taraf BOŞ |
| Egypt | Palestine | ARAP(olculemedi, `gc:[]`) · KAFRIKA(**hukuki**) | ⚪ bir taraf BOŞ |

### ③ ⓐ — 🟢 VE "10" SAYISI AYRI BİR SINAVDAN GEÇTİ: AD VARYANTI
NE aynı ülkeyi altı alanda altı farklı yazabiliyor (`Serbia` ↔ `Republic of
Serbia` · `Bosnia and Herz.` ↔ `Bosnia and Herzegovina` · `W. Sahara` ↔
`Western Sahara`). **İki kol aynı kenarı farklı ad alanından yazsaydı, ad
tabanlı mükerrer tespiti onu GÖRMEZDİ.** Ölçüldü:
```
ham ad ile   307 benzersiz · 10 çapraz
KANONİK ile  278 benzersiz ·  9 çapraz   (30 kayıt belirsiz adla kanonlaşmıyor)
GİZLENMİŞ MÜKERRER: 🟢 0
```
⇒ Hiçbir kol çifti aynı kenarı farklı yazımla yazmamış; **10 sayısı ayakta.**
⚠️ Kanonik geçişin kendi kapsamı dar (belirsiz adlar — `France`, `China`,
`Israel` gibi çok girdiye eşleşen `SOVEREIGNT` değerleri kanonlaşmıyor);
bu sınav bir **çapraz kontrol**tür, ham ölçümün yerine geçmez.

🟢 **GEOMETRİ BİR ÇAKIŞMA EKSENİ DEĞİL.** Sekiz çiftin sekizinde iki kolun
`gc`si **3 ondalıkta birebir aynı** (194 · 114 · 104 · 495 · 223 · 326 ·
100 · 182 tepe). Bu, `ONERI-KADEME-C-MODEL §①c`nin *"kenar çıkarımı
MEKANİK"* iddiasının **bağımsız kollarca doğrulanmasıdır.**
⚠️ Kalan ikisi bir çelişki DEĞİL bir **ölçüm eksiği**: ARAP'ın `gc`si boş,
çünkü kendi `_OLCUM_SINIRI`nde beyan ettiği gibi *"Mısır'ın NE geometrisi
GEÇERSİZ ⇒ 4 kenar hiç ölçülemedi"*. İkisini aynı kovaya koymak `§11`in
*"iki ayrı kusur tek satırda raporlanırsa aynı çare uygulanır"* tuzağıdır —
alet onları **ayrı kovalarda** raporluyor.

### ③ a — 🟢 ÖNERİLEN KURAL (hüküm 1.MURAT'ın)

> **Kenar bazında "kazanan kol" seçilmez — ALAN BAZINDA birleştirilir.**
> Sebep ölçümde: on çiftin sekizinde geometri zaten aynı, ve farklılık
> yalnız `hal`/`dayanak` alanlarında. Bütün kaydı atmak, atılan taraftaki
> kaynak emeğini de atar.

```
Ⓐ GEOMETRİ   birebir aynıysa → tek nüsha, tartışma yok
             biri BOŞSA      → DOLU olan alınır (ölçüm eksiği, çelişki değil)
             GERÇEKTEN FARKLI ise → 🔴 DUR, kollara sor (bugün 0 vaka)

Ⓑ `hal`      İLERİ GİDEN KAZANIR:  hukuki > ayni-kimlik > bulunamadi > olculemedi
             🔴 ŞARTI: önce ②'deki anlam birleştirmesi YAPILMALI. Bugünkü
                veride `bulunamadi` iki ayrı şey demek; rütbe onları
                karıştırır. ② uygulanmadan Ⓑ UYGULANMAZ.
             ⇒ bugün 8 çiftin 7'si bu kuralla MEKANİK kapanır
               (bir yanda hüküm, öbür yanda 'olculemedi' = iddia YOK)

Ⓒ EŞİTSE     `Syria|Turkey` — İKİSİ DE `hukuki`. Tek gerçek hakem vakası.
             CLAUDE.md'nin mevcut merdiveni aynen kullanılır:
               ① DAYANAK  izlenebilirlik ÖNCE gelir (adıyla yazılmış kaynak,
                          'DEVRALDIM' damgalı bile olsa, adsız bir
                          doğrulamayı yener)
               ② İÇERİK   hangi metin daha çok ARTIM taşıyor (aynı bilginin
                          ikinci biçimi bir artım DEĞİLDİR)
               ③ eşitse   aracın kabul ettiği kalır — maliyet gerekçesiyle

Ⓓ KAYBEDEN   SİLİNMEZ. Kazanan kayda `_ikiz` alanı olarak iliştirilir:
             {bolge, hal, dayanak, kaynak}. `§11`: "bir cümle iki kayıt
             arasında taşınırken KAYNAĞINI da taşır."
```
⚠️ Ⓑ'nin `olculemedi` ucu bir **iddia yokluğu**dur, bir zayıf iddia değil —
bu yüzden onu yenmek bir hüküm gerektirmez. `hukuki` ↔ `bulunamadi`
çarpışması bugün **0 vaka**; çıkarsa Ⓒ'ye düşer.

---

## ③ ⓑ KAPSAMA — ve KADEME-MODEL'in AÇIK BİR SORUSU KAPANDI

Referans: `denetim/OLCUM-KENAR-0907.json` (342 kenar · 🟡 **DEVRALINAN**,
ama elle taşınmadı — alet o dosyayı **kendisi okuyor**).
```
referans 342 kenar → kanonik 296   (46'sı belirsiz adlı, kanonlaşmıyor)
KAPSANAN  276/296  (%93,2)
EKSİK      20      NE'de kenar var, hiçbir kol yazmamış
FAZLA       2      kol yazmış, referansta kenar YOK
```
**FAZLA ikisi de ARAP'tan: `Egypt|Jordan` · `Egypt|Saudi Arabia`** — ve
ikisinin de `gc`si boş. Mısır ile bu iki ülke **kara sınırı paylaşmıyor**
(Akabe körfezi ayırıyor; Mısır ile Ürdün arasında İsrail duruyor).
⇒ ARAP bu ikisini bölge bilgisinden aday listesine almış, **geometriden
değil.**

🟢 **VE BU, `ONERI-KADEME-C-MODEL §⑤`in AÇIK SORUSUNU KAPATIYOR.**
Model şunu ölçmemişti: *"`Egypt`in geçersiz geometrisinin kenar çıkarımını
bozup bozmadığı — ÖLÇMEDİM."* Ölçüldü:
```
referans 342'deki MISIR kenari: 5
   Egypt|Bir Tawil  0,90°   Egypt|Israel 1,87° (34 ortak tepe)
   Egypt|Libya      9,99°   Egypt|Palestine 0,11° (4)   Egypt|Sudan 11,40° (115)
```
⇒ **Geçersiz geometri kenar ÇIKARIMINI bozmamış** — Mısır'ın beş kenarı da
çıkmış, ve KAFRIKA ikisini `gc`li yazabilmiş.
⚠️ **Sınırı:** bu, çıkarımın *çalıştığını* gösterir; çıkan geometrinin
**doğru** olduğunu göstermez. O ayrı bir ölçüm ve **yapılmadı.**
📌 Ve ARAP'ın *"NE geometrisi GEÇERSİZ ⇒ 4 kenar hiç ölçülemedi"* beyanı
**yanlış değil, EKSİK**: dördünün ikisi (Israel · Palestine) başka bir kol
tarafından ölçüldü, kalan ikisi zaten kenar değil.

---

## ④ ALET — ve C13 DÖRT AYAK

```
denetim/ARAC-BIRLESTIR-SINIR-0907.py    doğrulayıcı · çakışma ölçeri · birleştirici
denetim/SINAV-BIRLESTIR-0907.py         C13 dört ayak · 26/26 dal GEÇTİ
denetim/OLCUM-BIRLESTIR-0907.json       makine okunur rapor
denetim/_birlestir/*.js                 ÖRNEK üretim (data/ DEĞİL — koşu 8 donuk)
```
```
py denetim/ARAC-BIRLESTIR-SINIR-0907.py                    # doğrula, YAZMA
py denetim/ARAC-BIRLESTIR-SINIR-0907.py --uret             # denetim/_birlestir/
py denetim/ARAC-BIRLESTIR-SINIR-0907.py --uret --hedef data   # BİRLEŞTİRME GÜNÜ
py denetim/SINAV-BIRLESTIR-0907.py                         # C13
```
**Sınav sonucu: GEÇME 4/4 · ATEŞLEME 17/17 · GİRDİ 4/4 · ÇIKTI 4/4 = 29/29.**
Ateşlenen dallar: zorunlu alan yok · geçersiz `hal` · `hal:ayni-kimlik`
KABUL · `gc:[]` · `gc` liste değil · ters sıra · boş uç · kayıt listesi yok ·
belirsiz kapsayıcı · bozuk JSON · kol içi mükerrer · bölgeler arası mükerrer ·
mükerrer geometri farklı · mükerrer bir taraf boş · **ad varyantı mükerreri
gizlemiş** · NE ekseni yok · eksik dosya 🔴 DEĞİL.

**Üretim, `KADEME_YAMA` vakasına karşı üç ayrı yerden korunuyor:**
```
① her bölge KENDİ window adını alır      window.SINIR_HUKUKI_<BOLGE>
② üretilen .js JAVASCRIPT'in KENDİ yorumlayıcısıyla geri okunur (node+vm),
   regex'le DEĞİL — ve HER DOSYA AYRI BAĞLAMDA (tek bağlamda okumak, tam
   olarak önlemeye çalıştığımız sessiz ezmeyi GİZLERDİ)
③ ad çarpışması ayrıca sayılır ve raporlanır
gerçek veride ölçüldü: 317/317 kayıt geri okundu · 6 ayrı ad · çarpışma 0
```
⚠️ Ad çarpışması dalı gerçek veriyle **ateşlenemez** (ad bölge adından
türetiliyor) ⇒ o tek dal **enjekte** ediliyor ve sınavda **adıyla**
işaretli. Öteki 25 dalın hepsi **dosya yolundan** koşuyor.

### ④ a — 🔴 ALETİMİN KENDİ HATASI, ÖLÇEREK YAKALANDI
İlk sürüm NE eksenini **öncelik sırasıyla** seçiyordu (`kimlik_bugun` →
`a/b`). ARAP'ta `kimlik_bugun` NE adı değil atlas slug'ı + hata metni
taşıyor (`['iran', "(eslesmedi — NAME_TR 'Irak')"]`) ⇒ **26 kenar yanlış
anahtarla indekslendi ve bölgeler arası mükerrer 8 yerine 5 göründü.**
🟢 Çare sırayı değiştirmek değil, **kaynağın kendi sözlüğüne sormak** oldu:
her aday alanın değerleri NE'nin 351 adına karşı sayılıyor, %90 eşiğini
geçen alan eksen seçiliyor. `§11`: *eşleşme bulmak, doğru şeyi bulmak
değildir.*

---

## ⑤ ÖLÇMEDİKLERİM — adıyla

```
⚪ ARAP'ın `_KOVA_ONERISI`si "TUR 2'de kimlik_1923 SAF SLUG'a çevrildi" diyor;
   teslim edilen dosyada ÖYLE DEĞİL. Hangisinin güncel olduğunu ÖLÇMEDİM.
⚪ `dayanak` metinlerinin DOĞRULUĞU. Bu alet dayanağın VAR olup olmadığına
   bakar, DOĞRU olup olmadığına DEĞİL — o `§4`ün işi.
⚪ 20 EKSİK kenarın (aşağıda) kapsam kararı mı boşluk mu olduğu — ÖLÇMEDİM.
   (Batı Avrupa ağırlıklı: Belgium · Andorra · Monaco · Liechtenstein …
   `§4`e göre TDV'nin %0 kapsadığı bölge; kasıtlı olabilir.)
⚪ `gc` geometrisinin NE'nin kendi kenarıyla birebir aynı olup olmadığı.
   Kollar ARASINDA aynılığı ölçtüm; KAYNAĞA karşı doğrulamadım.
⚪ `t_cinsi` "gercek" değerinin hiç kullanılıp kullanılmadığı — 317 kaydın
   tamamı "pencere" ya da BOŞ; "gercek" 0. Bunun doğru mu olduğunu ÖLÇMEDİM.
⚪ ASYA'nın `cins` alanındaki öteki beş kova (gercek-sinir-adayi 48 ·
   yontem-celiskisi 6 · kenar-yani-bos 11 · atlas-noktasi-yok 8 ·
   kimlik-degil 10) birleştirmeyi nasıl etkiler — OKUMADIM.
```

---

## ⑥ SENİN KARARINI BEKLEYEN — ben vermedim

```
① ②'deki ANLAM BİRLEŞTİRMESİ onaylanıyor mu? (79 kayıt → hal:"ayni-kimlik",
   mekanik, kaynak araması gerekmiyor.) Onaylanırsa UYGULAYAN kim —
   her kol kendi dosyasında mı, tek elden merge'de mi? (`§7`: kolların
   dosyaları benim değil.)
② ③a'daki MÜKERRER KURALI (Ⓐ-Ⓓ) kabul mü? Kabulse `Syria|Turkey` tek
   gerçek hakem vakası ve Ⓒ merdiveni ona uygulanmalı.
③ ANAHTAR: `a`/`b` NE ADI mı ATLAS SLUG'I mı taşıyacak? Bugün ikisi de var.
   🟡 Önerim NE ADI + ayrı `kimlik_1923_a/_b` (slug) — sebebi: NE adı
      GEOMETRİNİN kaynağıdır ve değişmez; slug bir HÜKÜMDÜR ve değişebilir.
      Anahtarı hükme bağlamak, hüküm düzelince anahtarı kaydırır.
   🔴 Ama bu ANADOLU (19) ve ASYA (98) kollarını bağlar — karar senin.
④ ASYA'nın 98 boş `a`/`b`si ve GAFRIKA'nın 43 ters sırası KOLLARA mı
   düzelttirilecek, birleştirmede mekanik mi düzeltilecek?
⑤ Üretilen `.js`e iliştirilen iki iz alanı (`_bolge` · `_ne_anahtar`)
   kalsın mı? (`--ham` ile kapatılabiliyor.)
```

## ⑦ DURUM
```
✅ ①-⑤ TESLİM: şema doğrulayıcı · çakışma ölçeri · anahtar kararlılığı ·
   birleştirici · C13 dört ayak (26/26).
⏳ BEKLİYORUM: ⑥'daki beş karar. Onay gelmeden `data/` altına HİÇBİR ŞEY
   yazılmayacak; koşu 8 donuk (`§7`).
```

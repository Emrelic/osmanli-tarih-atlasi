# ÖLÇÜM — BUDAMA-0907 · taban bağlamın gerçek boyutu

**Oturum:** BUDAMA-0907 · **Tarih:** 7 Eylül 2026
**Soru (Emre):** *"Compact yapınca sanki %30 gibi gene şişkin seviyeye iniyor.
Bunun sebebi nedir — yanlış zamanda mı compact yapıyoruz, yoksa taban
bağlamımızı sadeleştirmek mi gerekiyor?"*

🔴 **CLAUDE.md'de değişen satır: 0.** Bu bir ölçüm raporudur; öneri
`denetim/ONERI-BUDAMA-0907.md`de, karar Emre'nin.

---

## ⓪ ÖNCE: BU RAPORUN NE ÖLÇMEDİĞİ

`§11` — *"bir denetim şartnamesinin en değerli satırı, ne ölçtüğü değil
**ne ölçmediğidir**."*

```
ÖLÇER    CLAUDE.md ve kök belgelerin token boyutu · bölüm bölüm dağılımı ·
         her dersin korpusta ALINTILANIP alıntılanmadığı · tekrar eden
         formüller · önerilen yapının KAZANCI
ÖLÇMEZ   ① bağlam penceresinin BOYUTUNU (ölçemedim — türettim, `②`ye bak)
         ② bir dersin UYGULANIP uygulanmadığını (yalnız ALINTIYI ölçer;
            bir ders alıntılanmadan da uygulanabilir — çoğu öyle uygulanır)
         ③ compact'ın kendi davranışını (neyi silip neyi tuttuğunu)
         ④ Anthropic'in gerçek tokenlaştırıcısını (`🟡 PROXY` kullanıldı)
```

---

## Ⓐ GERÇEK TOKEN SAYISI — ve şartnamenin kaba sayısı ÇÜRÜDÜ

**Alet:** `denetim/ARAC-BUDAMA-TOKEN-0907.py`
**Tokenlaştırıcı:** `tiktoken o200k_base` — 🟡 **PROXY.** Yerelde ne
`tiktoken` ne `transformers` kuruluydu; `tiktoken` bu iş için kuruldu.
Anthropic'in kendi tokenlaştırıcısı **değildir**: mutlak sayı ±%15
sapabilir, **oranlar** (bölüm/bölüm pay) tokenlaştırıcı değişiminden çok
daha az etkilenir.

| dosya | satır | bayt | karakter | **token** | kar/tok |
|---|---:|---:|---:|---:|---:|
| **CLAUDE.md** | 7.374 | 418.427 | 375.620 | **145.947** | 2,57 |
| OGRENILENLER.md | 4.227 | 199.328 | 179.627 | 65.824 | 2,73 |
| YAPILACAKLAR.md | 966 | 55.013 | 50.004 | 18.182 | 2,75 |
| ONCELIK.md | 519 | 24.724 | 22.427 | 8.458 | 2,65 |
| VERI-YAPISI.md | 571 | 29.590 | 27.150 | 10.604 | 2,56 |
| MIMARI.md | 501 | 26.223 | 23.979 | 8.281 | 2,90 |
| BES-ALTYAPI.md | 381 | 18.241 | 16.478 | 6.291 | 2,62 |
| YOL-HARITASI.md | 306 | 15.455 | 14.156 | 5.105 | 2,77 |
| DURUM.md | 255 | 11.612 | 10.772 | 3.949 | 2,73 |
| ETIKETLEME.md | 230 | 10.740 | 9.945 | 3.674 | 2,71 |
| **TOPLAM** | **15.330** | **809.353** | **730.158** | **276.315** | **2,64** |

### 🔴 ŞARTNAMENİN KABA SAYISI ÇÜRÜDÜ — VE KUSUR DAHA BÜYÜK ÇIKTI

```
CLAUDE.md        kaba ~104.000  →  ÖLÇÜLEN 145.947   sapma  -29%
OGRENILENLER.md  kaba ~ 50.000  →  ÖLÇÜLEN  65.824   sapma  -24%
YAPILACAKLAR.md  kaba ~ 14.000  →  ÖLÇÜLEN  18.182   sapma  -23%
```
Üçünde de **aynı yön**: kaba tahmin **düşük**. Sebebi tek ve ölçülebilir —
`wc -c` **bayt** sayar, ve bayt/4 kuralı Türkçede tutmaz. Gerçek oran
**2,57 karakter/token**, yani bayt cinsinden **2,87 bayt/token**.

> ⚠️ Şartname *"bu bir ALT SINIR değil, kaba bir tahmin ve **iki yönden
> de** yanılabilir"* diyordu. Ölçüm yönü belirledi: **tek yönde, ve
> aleyhte.** Taban sanılandan **%40 büyük.**

### 🟡 «Türkçe kötü tokenlaşır» — DOĞRU AMA KÜÇÜK

Aynı metnin Türkçe harfleri ASCII'ye indirilip yeniden ölçüldü:

```
Türkçe harfli  145.947 token
ASCII'ye inmiş 142.586 token
⇒ Türkçe cezası +2,4%  (+3.361 token)
```
📌 **Şişkinliğin sebebi Türkçe DEĞİL, HACİM.** Bütün Türkçe harfler
silinse kazanç %2,4'tür; sorun oradan çözülmez.

### ⇒ EMRE'NİN «%30» GÖZLEMİ: SAYI TUTUYOR

🟡 **TÜRETİLDİ, ÖLÇÜLMEDİ** — bağlam penceresinin boyutunu ölçemedim.
Ama gözlemin kendisi onu **kısıtlıyor**:

```
CLAUDE.md tek başına 145.947 token
gözlem: compact sonrası ~%30
⇒ ima edilen pencere ≈ 145.947 / 0,30 ≈ 487.000
```
* Pencere **200.000 olsaydı** CLAUDE.md tek başına **%73** olurdu; %30'a
  inmek **imkânsızdı** ⇒ gözlem 200k'yı **eliyor.**
* Pencere ~500.000 ise CLAUDE.md tek başına **%29,2** eder.

> 🔴 ⇒ ***Emre'nin compact sonrası gördüğü ~%30, büyük ölçüde CLAUDE.md'nin
> KENDİSİDİR.*** Compact **değişkeni** siler; CLAUDE.md **her oturumda
> yeniden yüklenir** ve compact onu hiç göremez.
> ⇒ **Cevap: zamanlama değil, TABAN.** Compact'ı ne zaman yaparsanız yapın
> taban aynı yere iner, çünkü inilen yer tabandır.

---

## Ⓑ BÖLÜM BÖLÜM DAĞILIM

**Alet:** `denetim/ARAC-BUDAMA-BOLUM-0907.py`

| bölüm | satır | token | pay |
|---|---:|---:|---:|
| **11. Tekrarlanmaması gereken hatalar** | **5.369** | **106.691** | **73,1%** |
| 4. Kaynak kuralı | 690 | 13.764 | 9,4% |
| 3.5 Denetimin GÖRMEDİĞİ hata sınıfı | 374 | 7.750 | 5,3% |
| 7. Oturum düzeni ve dosya sahipliği | 232 | 4.397 | 3,0% |
| 🟢 YENİ KURAL — yatay mesajlaşma | 137 | 2.174 | 1,5% |
| 5. Dosya haritası | 112 | 2.101 | 1,4% |
| 3. İhlal edilemez değişmezler | 68 | 1.763 | 1,2% |
| 1.5 Bugün nerede duruyoruz | 59 | 1.392 | 1,0% |
| 7.1 HABERLEŞME PROTOKOLÜ | 75 | 1.149 | 0,8% |
| Belge seti | 29 | 800 | 0,5% |
| 2. Petek motoru | 41 | 794 | 0,5% |
| 1.6 Kapsam disiplini | 45 | 763 | 0,5% |
| 1. Proje nedir | 35 | 628 | 0,4% |
| 10. Çalışma protokolü | 33 | 593 | 0,4% |
| 9. Komutlar | 36 | 591 | 0,4% |
| 6. Kapsam sırası · 8. Veri biçimleri · ÖNSÖZ | 40 | 597 | 0,4% |
| **TOPLAM** | **7.375** | **145.947** | **100%** |

```
🔴 ÜÇ BÖLÜM = %87,8    §11 (73,1) + §4 (9,4) + §3.5 (5,3)
🟢 ÖTEKİ 13 BÖLÜM = %12,2 — yani "nasıl çalışılır"ın TAMAMI 17.800 token
```
📌 Şartnamenin *"§11 = %73"* öncülü **tuttu** (ölçüm 73,1%). Çürüyen
yalnız mutlak sayıydı (76.000 → **106.691**).

### §11'in iç yapısı — 178 ders

```
ders bloğu sayısı  178          en uzun    1.802 token (83 satır)
toplam            106.678 tok   ortanca      579 token
ortalama             599 tok    en kısa       24 token
```
**En uzun 5 ders** (tek başlarına 7.490 token = §11'in %7'si):

| token | satır | başlangıç | ders |
|---:|---:|---|---|
| 1.802 | 83 | s4177 | BİR TUTARSIZLIK BİR TERCİH DEĞİL, BİR EKSİĞİN SONUCU OLABİLİR |
| 1.538 | 72 | s2160 | YUVARLAK TARİH YALNIZ YANLIŞ DEĞİLDİR — ÇELİŞKİYİ DE SAKLAR |
| 1.503 | 74 | s3730 | BİR ARAMA, ARADIĞI ŞEYİN KAÇ AYRI BİÇİMDE YAZILABİLECEĞİNİ BİLMELİ |
| 1.345 | 66 | s3952 | DOĞRU KAPIYA GİDİP YANLIŞ YERDEN DİNLEMEK |
| 1.303 | 67 | s5511 | İKİ OTURUM, AYNI GECE, KENDİ MANŞET SAYISINI ÇÜRÜTTÜ |

---

## Ⓒ HANGİ DERS ATIF ALIYOR — 🔴 ŞARTNAMENİN «ASIL ÖLÇÜMÜ» ÇÜRÜDÜ

**Alet:** `denetim/ARAC-BUDAMA-ATIF-0907.py`
**Korpus** (CLAUDE.md ve BUDAMA'nın kendi dosyaları **hariç**):

```
tahta      3.213 mesaj gövdesi   ·  oturumlar/tahta.json
denetim      ~410 dosya           ·  denetim/**/*.md
oturumlar    ~410 dosya           ·  oturumlar/**/*.md
arac         (ek kova)            ·  arac/**/*.py — dersler alet
                                     başlıklarında yoğun alıntılanıyor
korpus penceresi: 2.686.101 benzersiz 7-gram
```
**Yöntem:** Türkçe normalleştirme (`İ`/`ı`/`ş`… indirgeme, diakritik atma —
`§4`ün `"İ".lower()` tuzağı) + 7 kelimelik pencere örtüşmesi.

### BÖLÜM DÜZEYİ — oturumlar bölüm NUMARASIYLA atıf yapıyor

```
§11  2790   §4  2588   §7  1373   §3.5  958   §7.1  791   §2  692
§8    335   §3   310   §5   306   §1.5  260   §1    206   §6  175
```

### 🔴 DERS DÜZEYİ — VE HİPOTEZ ÇÜRÜDÜ

| kova | ders | token | §11 payı |
|---|---:|---:|---:|
| 3+ pencere eşleşen — **açık atıf** | **163** | 102.204 | **95,8%** |
| 1-2 pencere — zayıf iz | 6 | 1.859 | 1,7% |
| hiç eşleşmeyen — **izsiz** | **9** | **2.615** | **2,5%** |

> 🔴🔴 **ŞARTNAMENİN Ⓒ HİPOTEZİ ÇÜRÜDÜ.** Şartname *"bir ders
> kullanılıyorsa kalır, kullanılmıyorsa vakası ayrı dosyaya iner"* diyordu
> ve bunu **en değerli ölçüm** diye işaretlemişti. Ölçüm: **178 dersin
> 163'ünün korpusta açık izi var.** *"Kullanılmayanı ayır"* ölçütüyle
> budanabilecek toplam **2.615 token — §11'in %2,5'i, CLAUDE.md'nin
> %1,8'i.**
> ⇒ ***Bu ölçüt bir budama ölçütü DEĞİLDİR.*** Emre'nin sorusunu çözmez.

**Duyarlılık** (pencere boyu değişince izsiz ders sayısı):
```
n=5 →  2/178      n=7 →  9/178      n=9 → 18/178
```
En gevşek eşikte bile izsiz ders **2**; en sıkı eşikte **18**. Hüküm
eşiğe duyarlı değil: **kullanılmayan ders kümesi her ölçekte küçük.**

**İzsiz 9 dersin tamamı** (toplam 2.615 token):
```
744 s5383  AYNI RENGİ İKİ ALET FARKLI HARMANLIYOR
647 s4616  UZUN BİR KOŞUDA CANLILIĞIN ÜÇÜNCÜ SİNYALİ: CPU DELTASI
350 s2354  ÖLÇÜMDEN ÖNCE, HANGİ ÖNGÖRÜNÜN «MAZERETİ OLABİLECEĞİNİ» DE YAZ
268 s4930  BİR DAVRANIŞ KASITLI OLABİLİR VE YİNE DE EKSİK OLABİLİR
206 s2076  BAZI LİSTELER KUYRUK DEĞİL PENCEREDİR
188 s5251  VE HASSASİYETİ DÜŞÜRMEK BİLGİYİ SİLMEZ
138 s5340  AYNI SAYININ TEKRAR ETMESİ, İLK ÖNCE ALETTEN ŞÜPHELENDİRİR
 50 s2017  Denetim ölçütünü gevşetme
 24 s2016  Üretimi veri değişirken başlatma
```
⚠️ **Ve son ikisi bu listenin niçin bir budama listesi OLAMAYACAĞINI
gösteriyor:** *"üretimi veri değişirken başlatma"* (24 token) bu projenin
**dört üretimini** çöpe götürmüş kuraldır. İzi yok çünkü **kimse ihlal
etmiyor** — yani ders **çalışıyor.**
📌 ***Atıf yokluğu iki şeyin ikisini birden gösterebilir: ölü bir ders,
ya da o kadar iyi yerleşmiş bir ders ki kimsenin ona atıf yapması
gerekmiyor. Bu ölçüm ikisini AYIRT EDEMEZ.***

### 🟡 Ⓒ'NİN KÖR NOKTASI — örtüşme DOĞUŞ da olabilir

Bir dersin metni bir `denetim/BULGU-*.md` dosyasında geçiyorsa iki
ihtimal var: (a) ders o dosyadan **türetildi** (doğuş), (b) ders
yazıldıktan **sonra** o dosya ona atıf yaptı (kullanım). `§11`: *"iki ayrı
sorunun aynı cevabı vermesi, aynı soru olduğu anlamına gelmez."*
**Ölçüldü** (`ARAC-BUDAMA-MUKERRER-0907.py`): her dersin kendi metnindeki
tarih (*"(5 Eylül 2026 · …)"*) ile eşleşen dosyanın tarihi (`-0907` soneki,
yoksa git son commit tarihi) karşılaştırıldı.

```
ders tarihi OKUNAMADI            :  40   ⚪ hüküm verilmedi
en az bir kaynak dersten SONRA   : 125   🟢 GERÇEK KULLANIM izi
yalnız AYNI günden kaynak        :   9   🟡 doğuş olabilir
yalnız dersten ÖNCEKİ kaynak     :   0   🔴 saf doğuş — HİÇ YOK
kaynak tarihi okunamadı          :   1   ⚪ ölçülemedi
```
🟢 **Kör nokta ölçüldü ve hüküm GÜÇLENDİ:** tarihi okunabilen 135 dersin
**125'inin** izi dersin yazılmasından **sonraki** dosyalarda. Yani
örtüşme büyük çoğunlukla *doğuş* değil **kullanım.**
⚠️ Sınırı: tarih karşılaştırması **gün düzeyinde ve yılsız**; dosya adı
soneki taşımayan dosyalarda git tarihine düşüyor. Bir dersin 40'ta biri
hiç tarihlenemedi.

⚠️ **Ve hüküm yön ölçümünden zaten BAĞIMSIZDI:** yönün tamamı *"doğuş"*
çıksa bile budanabilir küme **büyümezdi** — izsiz ders yine 9'dur. Yön
ölçümü *"163 ders gerçekten KULLANILIYOR mu"* sorusunu inceltir, *"kaç
token budanabilir"* sorusunu **değiştirmez.**

---

## Ⓓ MÜKERRERLİK

**Alet:** `denetim/ARAC-BUDAMA-MUKERRER-0907.py`
**Yöntem:** elle bir "ders ailesi" listesi **yazılmadı** — o, aradığını
bulmak olurdu (`§11`: *eşleşme bulmak ≠ doğru şeyi bulmak*). Bunun yerine
**3 veya daha fazla ayrı ders bloğunda** tekrar eden normalleştirilmiş
5-gram'lar veriden çıkarıldı.

```
§11 penceresi (n=5)           : 34.789 benzersiz
3+ ayrı derste geçen pencere  :    102
hiç tekrar formülü taşımayan  :     74 / 178 ders
ortanca tekrar formülü / ders :      1
```

### 🔴 EN ÇOK TEKRAR EDEN ŞEY BİR DERS DEĞİL, BİR KÜNYE

En yaygın 5-gram'ların tepesi **doktrin değil, provenans**:

```
17 ders  «5 eylul 2026 nehir surtunme»      ← tek oturum, tek gece
 8 ders  «5 eylul 2026 kure gorunum»
 7 ders  «vaka 8 agustos 2026 renk 2»
```
📌 Bu bir mükerrerlik değil bir **yoğunlaşma** bulgusu: **178 dersin
17'si tek bir oturumun tek bir gecesinden.** (Budama ölçütü değil —
kaydediliyor çünkü ders üretiminin dağılımı hakkında bir şey söylüyor.)

### 🟡 GERÇEK DOKTRİN TEKRARI — ölçüldü, ve orta boy

| kaç derste | formül |
|---:|---|
| 7 | *«denetim var ≠ o soruyu soruyor»* |
| 7 | *«`0`, "yok" ile "bakmadım" arasında ayrım yapmaz»* |
| 5 | *«bir ders veriye serbest metin olarak inerse inmiş sayılmaz»* |
| 5 | *«kendi yazdığın ayrıştırıcı her zaman kötüdür»* |
| 5 | *«`§4`ün "dar slug tutmazsa…"»* |
| 4 | *«kendi ödediğin borcu kaydını okumadan yeniden iş sanabilirsin»* |
| 4 | *«atlas seferi değil tasarrufu boyar»* |
| 4 | *«çıktı girdinin bir tur gerisindedir»* |
| 4 | *«bir `if` ile sorabiliyor muyum»* |
| 4 | *«eşleşme bulmak, doğru şeyi bulmak değildir»* |

**En yaygın 12 formülün geçtiği ders kümesi: 47 / 178 · 35.578 token =
§11'in %33,4'ü.**

**Kendini beyan eden aile işaretleri** (ders metninde):
```
"…nin YÜZÜ"  38 ders (%21)   "ailesinin"   21 (%12)   "N. vakası" 18 (%10)
"aynası/tersi" 10 (%6)       "kardeşi"      8  (%4)
"ölçüldü"    70 ders (%39)   "aynı gün"    50 (%28)   "çürüdü"    20 (%11)
```

### ⇒ MÜKERRERLİĞİN HÜKMÜ: BİRLEŞTİRME **AZ** KAZANDIRIR

🔴 **Tekrar eden şey KURAL CÜMLESİ; VAKALAR farklı.** *"Denetim var ≠ o
soruyu soruyor"* yedi derste geçiyor ama yedisi **yedi ayrı vaka** —
`renk_cikti` · `--dogrula` · `renk_olc` · `konum_denetimi` · tahtanın
`kim` alanı · `gorunen()` · glob. Birleştirmek **yedi vakayı bire
indirir**, yani `§11`in kendi kuralını çiğner:
> *"bir vakayı SİLMEK dersi de siler; DAMGALAMAK dersi korur."*

🟢 **Ama aynı bulgu ÖNERİYİ DESTEKLİYOR:** kural cümlesi 4-7 kez tekrar
ediyorsa, `Ⓚ2` yapısında o cümle **bir kez kanonik** durur ve öteki
dersler ona atıf yapar (*"`§11`in … ailesinin şu yüzü"* — külliyat bunu
zaten %21 oranında yapıyor). ⇒ **Birleştirme değil, ATIF.**

---

## ⑤ ÖNERİNİN KAZANCI — tahmin değil ölçüm

**Alet:** `denetim/ARAC-BUDAMA-KAZANC-0907.py`

Ⓒ *"kullanılmayanı ayır"* ölçütünü çürüttüğüne göre geriye tek ölçüt
kalıyor: **her dersin KURALINI CLAUDE.md'de tutmak, VAKASINI ayrı dosyaya
indirmek.** Hiçbir ders silinmez.

| kademe | token | CLAUDE.md'nin | CLAUDE.md toplamı |
|---|---:|---:|---:|
| **Ⓞ bugün** — §11'in tamamı | 106.678 | 73,1% | **145.947** |
| **Ⓚ1** yalnız manşet + bağlantı | 10.168 | 7,0% | **49.437** (%34'e iner) |
| **Ⓚ2** manşet + `📌`/`⇒`/`KURAL` satırları | 21.081 | 14,4% | **60.350** (%41'e iner) |

```
KAZANÇ  Ⓞ→Ⓚ1 :  96.510 token  (%90,5)
KAZANÇ  Ⓞ→Ⓚ2 :  85.597 token  (%80,2)
ortalama ders: tam 599 tok · manşet 57 tok · manşet+öz 118 tok
📌/⇒/KURAL satırı taşıyan ders: 169 / 178  (%95)
```
🟢 **Ⓚ2 önerilir** — dersin damıtılmış hükmü CLAUDE.md'de **kalır**
(dersler %95'i zaten böyle bir satır taşıyor), yalnız **vaka anlatısı**
iner.

### Emre'nin gözlemine çevrilmiş hâli
```
bugün        CLAUDE.md 145.947 tok  ≈ pencerenin %29-30'u   ← gördüğü şey
Ⓚ2 sonrası   CLAUDE.md  60.350 tok  ≈ pencerenin %12'si
```

---

## ⑥ RİSK ÖLÇÜMÜ — bir ders taşınınca ne bozulur?

```
korpusta `CLAUDE.md:<satır>` biçiminde atıf        : 14
   §11'in ÜSTÜNDE (satır < 2007) ⇒ ETKİLENMEZ      : 12
   §11'in İÇİNDE  (CLAUDE.md:4189)  ⇒ KIRILIR      :  2
korpusta `§N` biçiminde bölüm atıfı                : 11.061
   bölüm numaraları KORUNDUĞU için ⇒ ETKİLENMEZ    : 11.061
`CLAUDE.md` adını anan dosya                       : 714
```
📌 Oturumlar CLAUDE.md'ye **satır numarasıyla değil bölüm numarasıyla**
atıf yapıyor (11.061'e 14). Bölüm numaraları ve ders manşetleri yerinde
kaldığı sürece **atıfların %99,87'si kırılmaz.**

---

## ⑦ ÖLÇÜLEMEYENLER — adıyla

```
⚪ bağlam penceresinin gerçek boyutu    türetildi (~487.000), ölçülmedi
⚪ Anthropic'in gerçek token sayısı     o200k PROXY ile ölçüldü, ±%15
⚪ compact'ın neyi silip neyi tuttuğu   hiç ölçülmedi
⚪ sistem istemi + alet tanımlarının    CLAUDE.md dışındaki tabanın
   kendi token yükü                     büyüklüğü ölçülmedi
⚪ bir dersin UYGULANMASI               yalnız ALINTI ölçüldü
```

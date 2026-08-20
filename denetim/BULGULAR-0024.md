# BULGULAR — `parti-emrelic-0024`

**Oturum:** KAFKAS KRONOLOJİ (eski adı: OPUS HAZIR KITA 35) · Opus
**Tarih:** 20 Ağustos 2026 · tur 1
**Dosyalarım:** `kutu/giden/parti-emrelic-0024/CEVAP.json` · bu dosya. Başka hiçbir şeye dokunmadım.
**Yetki:** ölçüm ve hüküm. **Düzeltme UYGULAMADIM** — reçeteler aşağıda, uygulayacak olan koordinatör.

---

## 0 · ŞARTNAME İKİ YERDE ÇÜRÜDÜ (M-0852'de bekletmeden bildirildi)

```
şartname: "0024 henüz _taslak.json hâlinde (PARTI.json YOK)"
ölçüm   : PARTI.json VAR · 4.388 bayt · damga 2026-08-20 03:42
          "_taslak" adlı dosya kutu\ altında HİÇBİR YERDE yok
şartname: "İŞ — iki madde" (H-0001 · H-0002)
ölçüm   : PARTI.json maddeler = 10   (H-0001 … H-0010) · 4 görsel
```
Sekiz madde şartnamede hiç geçmiyordu. Onunu da hükme bağladım.

## 0.1 · ÖLÇÜM TABANI

```
yerleşim                2593 · girdi dosyası 52
denetle.py              çıkış kodu 0 — altı değişmez TEMİZ
Değişmez 4 hayalet      128 (tavan 136)
  ⚠️ denetle.py'nin KENDİ çıktısı: "TAVAN GEVŞEK — BEKLENEN_HAYALET = 128
     yapılmalı. Aradaki 8 puanlık gerçek regresyon GÖRÜNMEZ."
     (tavan `arac/` altında ve koşu kilidi yüzünden dokunulmadı)
d:"iran" dönem          50
m: alanı boş kayıt      1861 / 2593  (%71,8)
imereti künyesi kullanımı  0 dönem
git log                 --oneline -120, 20 Ağu 10:53'e kadar
```

## 0.2 · HÜKÜM DAĞILIMI

| kova | sayı | maddeler |
|---|---|---|
| `sirada` | 6 | H-0001 · H-0002 · H-0005 · H-0006 · H-0008 · H-0009 · H-0010 (7 kalem, H-0001 çift) |
| `zaten-dogru` | 2 | H-0004 · H-0007 |
| `senin-kararin` | 1 | H-0003 |
| `cozuldu` | 1 | H-0001'in (a) şıkkı — `073df09` |

---

## 1 · 🔴 EN BÜYÜK KUSUR — `d:"iran"` HAYALETİ, 50 DÖNEM

Emre'nin *"1705'te Gümrü niçin başka renk"* sorusunun kökü.

```
künye  data/devletler.js:153   iran  f:1925-12-12  t:2026-08-07
künyenin KENDİ özeti           "Tamamı atlasın ufkunun (1923-10-29) DIŞINDA;
                                haritada hiç boyanmaz, yalnız dizin amaçlı."
ÖLÇÜM  BOYALAR["iran"]         ("İran", "#cc1664")   ← RENGİ VAR
ÖLÇÜM  veride d:"iran"         50 dönem, en erkeni 1281, en geci 1860
```

**Çıkarım (ölçümden ayrı satır):** künye *"boyanmaz"* diyor, palet boyuyor, veri 50 dönem
boyunca onu çağırıyor. Emre'nin gördüğü pembe `#cc1664`tür; komşuları `safevi` `#a56cab`.

**Dağılımı:**
```
data/yerlesimler.js      46   ← koordinatörün dosyası
yerlesimler_ek16.js       1   (Herat)
yerlesimler_ortaasya2.js  2   (Kızılarvat ×2)
yerlesimler_asya.js       1   (Kandehar)
```
**Emre'nin H-0001 listesinden vurulan 8 şehir:** Bakü · Derbend · Gence · Revan · Şamahı ·
Hemedan · Kirmanşah · Kasr-ı Şîrîn.

📌 **Bu YENİ BİR KEŞİF DEĞİL.** `§11`in *"kayıt aramadan 'kayıtsız' ilan etme"* dersini
uyguladım, aradım, buldum: **`oturumlar/TESPIH.md` · T-0101** — orada **124 dönem** yazıyor.
Bugünkü ölçüm **50**. ⇒ borç `124 → 50` (%60 ödenmiş), **açık**. Emre'nin H-0001'i
T-0101'in **Kafkasya ayağıdır**.

**Bugün ne kapandı:** `073df09` (10:36) `ek26`da 7 kaydı `iran` → `safevi` çevirdi
(Gümrü · Eçmiyadzin · Doğubayazıt · Çaldıran · Özalp · Başkale · Yüksekova).
Gümrü özelinde soru **kapandı** — kendi ölçümümle doğruladım, 1705'te `safevi`.

---

## 2 · 🔴 AKKOYUNLU, ÖLDÜKTEN 20 YIL SONRA BOYANIYOR

```
künye  devletler.js:477   akkoyunlu  f:1340-01-01  t:1514-01-01
veride akkoyunlu döneminin 14 FARKLI bitiş günü var. İkisi ayrı sınıf:

  1534-01-01  ×5   Arpaçay · Digor · Iğdır · Gümrü · Eçmiyadzin
                   → künye ölümünden 20 YIL SONRA · §3.5 HAYALET
  1514-09-06  ×5   Başkale · Çaldıran · Özalp · Doğubayazıt · Yüksekova
                   → 8 ay taşma · §3.5'in "aylar mertebesi MEŞRU" bandı
```
⚠️ **İkisini aynı kovaya koymak yanlış olurdu** — biri ihlal, öteki değil.
Beşi de `ek26`da, yani **bugün dokunulan dosyada**.

**Ölçmedim:** `073df09` bu beş kaydı `iran`dan kurtarırken akkoyunlu kuyruğunu
**bilerek mi bıraktı**, gözden mi kaçırdı. Onu ancak o oturum söyler.

---

## 3 · 🔴 KUTAİSİ — HİÇ OSMANLI GÖRÜNMÜYOR, VE KÜNYESİ DE YANLIŞ

```
veri     Kutaisi  s:[{1281-01-01 → 1810-02-20 gurcistan}, {1810-02-20 → rusya}]
         Osmanlı dönemi YOK · m: YOK · k:0
TDV      gurcistan maddesi (slug CANLI, gövdesi OKUNDU), aynen:
         "Amasya Antlaşması'na göre (1555) İmeret, Dadyan (Megrel ve Svanet),
          Güryel, Daveli/Tao-eli Osmanlı Devleti'ne ... veriliyordu."
komşular Batum 1578-1878 OSMANLI · Sohum 1578-1810 OSMANLI · Ahıska 1578-1829 OSMANLI
```

🟢 **Çare zaten hazır, icat etmeye gerek yok** (`§11` — önce var olanı ölç):
```
imereti künyesi VAR      devletler.js:1036 · f:1490-01-01 · t:1810-02-20 · başkent KUTAİSİ
BOYALAR["imereti"] VAR   #deea90            ⇒ kimliği kullanmak DELİK AÇMAZ
veride kullanımı         0 dönem
```

📌 **En keskin kanıt:** Kutaisi'nin `gurcistan` döneminin bitiş günü **1810-02-20**,
`imereti` künyesinin `t`si ile **birebir aynı**. Kaydı yazan İmereti'yi kastetmiş,
**kimliği yanlış yazmış**.

**Reçete** (`data/yerlesimler.js`, koordinatör uygular):
`gurcistan` → 1490 sonrası `imereti`; 1555-05-29 Amasya'dan itibaren Osmanlı tâbiiyeti (`v:`).
⚠️ Tâbiiyetin **bitiş günü ölçülmedi** — Rusya himayesi 1804, ilhak 1810-02-20.

---

## 4 · H-0002 — DÖRT ALT SORUNUN DÖRDÜ DE DOĞRU ÇIKTI

```
(1) Batum m=Trabzon · Sohum m=Trabzon · Rize m=Trabzon
    Artvin m=Erzurum · Hopa m=Erzurum · Kutaisi m=YOK
    ⇒ atama KENDİ İÇİNDE TERS: Hopa (41,39 K) Erzurum'a bağlı ama ondan
      DAHA KUZEYDEKİ Batum (41,64 K) Trabzon'a. Sohum ise 43,00 K.
(2) Aşkale m=YOK · Erzincan m=Erzurum · Kemah m=Erzurum
    ⇒ Emre'nin gördüğü İKİ PARÇA gerçek: Aşkale tam ortada duruyor ve
      m: taşımadığı için bölge gövdesini ikiye bölüyor.
(3) Kelkit · Tosya · Karapınar · Ulukışla · Ilgın → BEŞİNİN BEŞİ DE m=YOK.
(4) İzmit/Gebze/Adapazarı m=İstanbul · İznik/Yalova m=Bursa
    ⇒ körfezin iki yakası dönüşümlü dağılmış, gövdeler yarımadada iç içe.
```
**Ortak kök — ve kayıtlı borç:** `m:` alanı boş olan kayıt **1861 / 2593 (%71,8)**.
`CLAUDE.md §3` Değişmez 3'ü zaten *"bugün sağlanmıyor"* diye kabul ediyor; teşhis
`BOYUTLAR.md`de: kusur `m:`nin güncellenmemesi değil, **yanlış eksende olması** —
idarî (siyasî) bağ, coğrafî gruplama için kullanılıyor ve **zaman boyutu yok**.

**Reçete:** kısa vadede 6 kayda `m:` (Aşkale · Kelkit · Tosya · Karapınar · Ulukışla · Ilgın)
— Emre'nin gördüğü deliklerin tamamı. Uzun vadede `kd:[{f,t,k,m}]`, ki `VERI-YAPISI.md`
onu **zaten tasarlamış**.

---

## 5 · GÖRSELLİ ÜÇ MADDE — TAM GÖRSEL OKUNMADAN ÇÖZÜLDÜ

`kutu_serit.py` künye şeritleri kullanıldı (şartnamenin dediği gibi, 86 kat ucuz).

| madde | şeritten okunan pencere | ölçüm | hüküm |
|---|---|---|---|
| H-0005 | 1703-08-22 · 27,1-29,8 K / 45,4-49,0 D | pencerede tek nokta **Kuveyt, SAHİPSİZ**; Muhammere de sahipsiz; Abâdân `safevi`, Basra/Fâv/Kürne OSMANLI | `sirada` |
| H-0007 | 1699-01-26 · Nûbe çölü + Kordofan | pencere içindeki **6 + 1 noktanın hepsi SAHİPSİZ**; kuzeyde Osmanlı, güneyde `funj` | `zaten-dogru` |
| H-0008 | 1703-05-27 · 58,7-61,4 K / 28,8-30,6 D | pencerede **tek nokta St. Petersburg = `rusya`**; Nyen · Koporye · İvangorod · Kingisepp **hiçbiri veride yok** | `sirada` |

**Üçünün ortak cevabı `CLAUDE.md §2`dir:** sahipsiz nokta toprak sahiplenmez, bölgesi
**en yakın SAHİPLİ peteğe emilir**.
- H-0005'te Basra'nın güneyi sahipsiz olduğu için Abâdân'ın `safevi` peteği körfeze uzanıyor
  → Emre'nin gördüğü "enklav".
- H-0007'de çöl kasıtlı boş olduğu için toprak kuzeyde Osmanlı'ya, güneyde Funj'a çekiliyor
  → *"bu toprakları o sultanlığa bağlayan algoritma"* budur; **tarihî hüküm değil, en yakın nokta**.
- H-0008'de İngriya'da tek nokta olduğu için St. Petersburg kurulduğu **gün** bütün bölgeyi
  Rus boyuyor; İsveç İngriyası de jure 1721 Nystad'a kadar sürer.

⚠️ H-0005 bir **sınır kaymasıdır**; `§3.5.1` gereği **iki uç da** ölçülmeli — nokta eklenince
Safevî tarafında yeni eksiklik doğuyor mu, üretimden sonra bakılmalı.

---

## 6 · ARAYÜZ'E DÜŞEN ÜÇ MADDE (bende değil, ölçmedim)

```
H-0006  Benî Hâlid odağındayken ok tuşu Osmanlı kronolojisine atlıyor
H-0009  kronoloji combobox'ında ÇOKLU ülke seçimi + iç içe oynatma
H-0010  "Hakkında" menüsü — koşu ve yayın tarihi
```
⚠️ **H-0006 ile H-0009 aynı altyapıya dokunuyor** (kronoloji kaynağı seçimi) — **tek oturuma
verilmeli**, yoksa iki oturum aynı fonksiyonu ters yönde değiştirir.
🟢 H-0010'un verisi zaten üretiliyor: `surum_damgala.py` `?v=rNN` yazıyor, üretim koşusu
`donemler.js`i sonda damgalıyor. **Yeni alan icat edilmemeli.**

---

## 7 · KENDİ ÖLÇÜMÜMDEKİ İKİ KUSURU DA YAZIYORUM

**① "Kaydı yok" sayım üç kez değişti: 4 → 2 → 1.** Her seferinde arama gevşedi ve
sahte bir boşluk düştü:
```
"Derbent" → veride "Derbend"          (d/t normalizasyonu)
"Şirvan"  → yerleşim değil BÖLGE      (başkenti Şamahı VAR)
"hafiza"  → veride "Havîza"           (aksan)
```
İlk sayımı rapora yazsaydım **üç sahte boşluk** kuyruğa girecek, biri nokta oturumuna
iş olarak dağıtılacaktı. ⇒ ***"Kayıt yok" hükmü, aramanın gevşekliği kadar doğrudur.***

**② Kendi hayalet sayacım `denetle.py` ile ayrıştı ve ona güvenmiyorum.**
```
denetle.py Değişmez 4   128
benim betiğim          1041
```
`§11`: *"kendi yazdığın ayrıştırıcı, var olan bir ayrıştırıcıdan her zaman kötüdür."*
**Otorite `denetle.py`; benimki yalnız bir mercek.** Farkın sebebini **ölçmedim** —
muhtemelen ben `rusya` (327) ve `zend` (129) gibi künye-sınırı taşmalarını da sayıyorum,
o muaf tutuyor. Yukarıdaki §1 ve §2 bulguları bu farktan **bağımsızdır**; ikisi de
`denetle.py`nin kendi listesinde görünüyor.

---

## 8 · TDV SLUG ÖLÇÜMÜ (HTTP kodu, `§4 ①`)

```
🟢 CANLI  huzistan · gurcistan · suleymaniye--irak · derbend--dagistan · sirvan ·
          kars · ardahan · sehrizor · basra · ahvaz · abadan · dizful
🔴 ÖLÜ    kutayis · kutaisi · imereti · huveyze · musasa · musaseiler · havize ·
          suleymaniye · derbend
```
📌 **İki yeni `--` vakası** — `§4`ün dörtlenmiş desenine beşinci ve altıncı:
`suleymaniye` ölü ama **`suleymaniye--irak` canlı**; `derbend` ölü ama
**`derbend--dagistan` canlı**. `CLAUDE.md` `derbend`i *"ölü"* diye kaydetmiş ama
**canlı varyantını bilmiyordu**.
Dördü (`huzistan` · `gurcistan` · `suleymaniye--irak` · `derbend--dagistan`) yalnız
kod değil **gövdesi de okundu**; hükümler oradan çıktı.

---

## 9 · TDV EKİ — teslimden sonra iki kalem daha ölçüldü

### 9.1 🔴 KARS — 253 YILLIK TEK BLOK, VE FETİH TARİHİ 3 YIL ERKEN
```
veri   Kars  1281-01-01 → 1534-06-01  gurcistan,  sonra OSMANLI
TDV    kars maddesi (slug CANLI, gövdesi OKUNDU) o 253 yılı ALTIYA bölüyor:
       "Şehir 1336 yılına kadar İlhanlılar'ın, ardından da mahallî hânedanların
        idaresinde kaldı."
       "759'da (1358) Celâyirliler tarafından ele geçirildi"
       "782'de ise (1380) Karakoyunlu idaresi altındaydı"
       "788'de (1386) Timur tarafından alındığında Fîrûzbaht adlı biri
        tarafından yönetiliyordu"
       "Timur'un ölümünden sonra ... Karakoyunlular Kars'ı yeniden
        hâkimiyetlerine aldılar"
       "Şehir 871'de (1467) Akkoyunlu Hükümdarı Uzun Hasan tarafından ele geçirildi"
FETİH  veri 1534-06-01  ↔  TDV "944'te (1537) Osmanlı topraklarına dahil edilmiştir"
       ⇒ ~3 YIL ERKEN. §4: TDV maddesi varsa TDV esastır.
```
📌 Bu, `KONTROL.md 13-04`ün (*"Bağdat 1281-1508 tek `iran` bloğu — Celâyirli/Timurlu/
Karakoyunlu/Akkoyunlu dördü birden silik"*) **Kars'taki aynısıdır.** Tek-blok deseni
Bağdat'a özgü değil; **en az iki şehirde ölçüldü.**

### 9.2 🔴 DERBEND — ÜÇ TARİHTEN İKİSİ TUTMUYOR
```
veri  safevi 1501-07-01   ↔  TDV "Şah İsmâil 1509'da şehri zaptedip"      ~8 YIL ERKEN
veri  OSMANLI 1583-01-01  ↔  TDV "1578 seferi sırasında Osmanlılar
                                  bölgeyi tamamıyla zaptedince"           ~5 YIL GEÇ
veri  rusya  1722-08-23   ↔  TDV "Rus Çarı I. Petro, 1722 Ağustosunda
                                  burayı işgal etti"                      ✓ TUTUYOR
```
⚠️ Derbend ayrıca §1'deki `iran` hayaletini de taşıyor (1281 → 1501).

### 9.3 🔴 TEK BLOK BİR VAKA DEĞİL, BİR DESEN — EMRE'NİN LİSTESİNİN YARISI

Kars ve Bağdat'ta ölçülen desen bir **süzgeç**e çevrildi: *1500 öncesinde 150 yıldan
uzun, tek kimlikli `s:` bloğu*. Emre'nin listesinde bulunan **34 şehrin 16'sı** (%47)
bu süzgece takılıyor:

```
Tiflis                gurcistan   1281-01-01 → 1801-09-12   520,7 yıl
Kutaisi               gurcistan   1281-01-01 → 1810-02-20   529,1 yıl
Ardahan               gurcistan   1281-01-01 → 1551-01-01   270,0 yıl
Kars                  gurcistan   1281-01-01 → 1534-06-01   253,4 yıl   ✗ TDV ile ÇÜRÜDÜ
Gümrü · Digor         akkoyunlu   1281-01-01 → 1534-01-01   253,0 yıl
Başkale · Çaldıran ·
  Özalp               akkoyunlu   1281-01-01 → 1514-09-06   233,7 yıl
Derbend               iran        1281-01-01 → 1501-07-01   220,5 yıl   ✗ TDV ile ÇÜRÜDÜ
Kirmanşah · Hemedan   iran        1335-12-01 → 1508-01-01   172,1 yıl
Revan · Şamahı ·
  Bakü · Gence        iran        1335-12-01 → 1501-07-01   165,6 yıl
```
⚠️ **Uzun blok tek başına ihlal DEĞİLDİR** — istikrarlı bir bölge meşru olarak uzun
blok taşır. Bu bir **şüphe süzgeci**dir: TDV turunun nereye bakacağını söyler.
İkisi sınandı (Kars · Derbend), **ikisi de çürüdü**; kalan **14'ü sınanmadı.**

🔴 **VE SÜZGEÇ İKİNCİ BİR ŞEY ORTAYA ÇIKARDI — HAYALETİN ÖBÜR UCU:**
```
künye  akkoyunlu  f:1340-01-01
veri   Gümrü · Digor · Başkale · Çaldıran · Özalp  →  1281-01-01'den başlıyor
⇒ devlet DOĞMADAN 59 YIL ÖNCE boyanıyor
```
Yani §2'de ölçülen 5 kayıt **iki uçtan birden** hayalet: 59 yıl erken **ve** 20 yıl geç.
Toplam 79 yıllık uydurma ömür, tek bir künyenin iki ucunda.

🟡 **TİFLİS — 520 yıllık blok, ve TDV onu ikiye bölüyor** (ölçüldü, ama yalnız kaynak
tarafı; veri karşılaştırması satır satır YAPILMADI):
TDV `gurcistan`: *"Amasya Antlaşması'na göre (1555) ... **Kartli, Kahet ve Mosuk ise
Safevî Devleti'ne veriliyordu**"* · *"1590 İstanbul: Gürcistan'ın Kartli ve Kahet
bölgeleri Osmanlı idaresine katıldı"*.
Veride Tiflis'in Osmanlı dönemleri VAR (1578-1606 · 1723-1735) ama **1555 Safevî
tâbiiyeti hiç yok** ve 1606-1723 arası yine düz `gurcistan`.

### 9.35 ARDAHAN — SÜZGEÇ 3/3, VE ÖNGÖRÜ KARNESİ

Öngörü **ölçümden önce** yazıldı (`§11`) ve ölçümden sonra değiştirilmedi.

```
① "270 yıllık gurcistan bloğu çürüyecek"          TUTTU
   TDV: "Moğollar'ın, İlhanlılar'ın" · "Karakoyunlular'ın ve Akkoyunlular'ın
        hâkimiyet sahası" · "KISA BİR SÜRE Gürcü prenslerinin"
   ⇒ veri Gürcülere 270 yıl veriyor, TDV "kısa bir süre" diyor.

② "1551-01-01 yuvarlaktır, TDV daha kesin gün verecek"   ÇÜRÜDÜ
   (mazereti ÖNCEDEN yazılıydı: TDV bazı yer maddelerinde gün vermez → geçerli)
   🔴 AMA BEKLENMEYEN BİR ŞEY ÇIKTI:
      TDV  "I. Selim zamanında Osmanlı topraklarına katılmıştır"  ⇒ 1512-1520
      veri  1551-01-01                                            ⇒ Kanûnî dönemi
      ⇒ ~31-39 YIL GEÇ ve YANLIŞ PADİŞAH
```
📌 Öngörü **hassasiyet** arıyordu, ölçüm **yılın kendisini** çürüttü. `§11`:
*"bilgiyi yalnız YANLIŞ OLAN taşıdı"* — tutan kalem hiçbir şey öğretmedi.

**Üçüncü fark (kusur diye yazılmadı):** veri `rusya 1878-07-13 → 1918-05-25`,
TDV *"23 Şubat 1921'de ... Ardahan sancağı da kurtarılmıştır"*. De facto/de jure
ayrımı olabilir; **ölçülmedi**, kayda geçirildi.

⚠️ **Kendi ölçümümün sınırı:** WebFetch *"1878 Berlin metinde geçmiyor"* dedi;
**tam metni ben okumadım.** *"TDV 1878'i anmıyor"* hükmü VERİLMEDİ.

```
TEK BLOK SÜZGECİ:  sınanan 3 → Kars ✗ · Derbend ✗ · Ardahan ✗   ÜÇÜ DE ÇÜRÜDÜ
                   sınanmayan 13
```

### 9.4 HÂLÂ YAPILMADI — açıkça yazıyorum
```
· 50 `iran` döneminin her birine doğru hânedan künyesinin atanması (T-0101 reçetesi)
· H-0005'in ters ucu — nokta eklenirse Safevî tarafında ne oluyor (§3.5.1)
· Ardahan'ın 1281-1551 `gurcistan` bloğu — Kars'ın komşusu, AYNI ŞÜPHE, ölçülmedi
· Emre'nin listesindeki kalan ~25 şehrin TDV karşılaştırması
```

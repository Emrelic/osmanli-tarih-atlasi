# GOVDE-CAKISMA-0079 — üst üste binen gövdelerin KÖK SEBEBİ

**Oturum:** `GOVDE-CAKISMA-0079` (Opus 5.5) · **Koordinatör:** `YILDIRIM BAYEZIT` · 27 Eylül 2026
**Şartname:** `oturumlar/GOVDE-CAKISMA-0079.md` · 9 madde
**Değişen dosyalar (hepsi benim):** `denetim/GOVDE-CAKISMA-0079*.{md,py,json}`
`data/hukuki_sinirlar.js` **DOKUNULMADI** (gerek çıkmadı, §4). `arac/` ve `data/` OKUNDU, yazılmadı;
`uret_petek.py` KOŞTURULMADI, import EDİLMEDİ.

---

## 0. Tek paragrafta cevap (Emre'nin H-79:2 sorusuna)

**Evet, sebep bulundu ve kodda yeri belli.** Her yabancı devletin gövdesi
`uret_petek.py:6329 _yabanci_govde_hesap` içinde **tek başına** kuruluyor:
önce kendi peteklerinin birleşimi (bu aşamada çakışma **0**), sonra üç
"güzelleştirme" adımı toprak **EKLİYOR** — kapama (`kapat`, :2788), enklav
köprüsü (B2, :3073), koridor doldurma (B3, :3175). Bu üç adım **komşu devletin
toprağını görmüyor**: yalnız "eklenen parçanın içinde başka devletin yerleşim
NOKTASI var mı" diye soruyor (`_yasakli_mi`, :3020); B2 ayrıca yalnız köprünün
**orta çizgisini** sınıyor (:3043), köprünün 3°'ye varan **kenarlarını** değil.
Nokta yoksa komşunun peteği sessizce doldurulur ⇒ iki gövde aynı toprağı boyar.
Motorun kendi yorumu (:6337-6341, *"bindirme üretilmez"*) yalnız HAM birleşim
için doğrudur; ekleme adımlarından sonra geçerli değildir.
**Çare seçenekleri §5'te, bedelleriyle; çare sınandı: dört pencerede çakışma 0'a iniyor.**

---

## 1. İlk ölçüm şartnamenin iki öncülünü değiştirdi

### 1a. Emre'nin görselleri ESKİ gövdenin fotoğrafı
```
H-0001-1.png  10:57:52   ← Koşu 15 main'e inişinden 43 dk ÖNCE
Koşu 15 commit 9ce6c942  11:40:19
H-0002-1.png  11:40:47   ← inişten 28 sn sonra (Pages gecikmesi 40-60 sn) ⇒ büyük olasılıkla eski
H-0005/6      11:45      ← belirsiz
```
Dört görselin dördü de **1281-01-01** tarihli. Eski gövde (`e1cf22ba`, Koşu 6,
`MOTOR_YURUYUS=1`) ile taze gövde (Koşu 15, yürüyüşsüz — logunda 🚶 satırı yok)
aynı pencerede, aynı aletle (`GOVDE-CAKISMA-0079-olc.py`) ölçüldü:

| pencere | gün | ESKİ (Koşu 6) çakışan | TAZE (Koşu 15) çakışan |
|---|---|---|---|
| H-79:1 Cizre (0.01°) | 1281-01-01 | **2132 / 14933 (%14,28)** | 12 (%0,08) |
| H-79:2 Trabzon (0.02°) | 1281-01-01 | **886 / 20110 (%4,41)** | 42 (%0,21) |
| H-77:13 Niğbolu (0.01°) | 1915-09-06 | **529 (%4,13)** | 14 (%0,11) |
| H-77:82/83 Kafkas (0.02°) | 1921-06-01 | **293 (%4,50)** | 89 (%1,37) |
| H-79:6 G. Çin (0.05°) | 1281-01-01 | 2 (%0,01) | **156 (%0,69)** |
| KONTROL İç Anadolu | 1600-01-01 | 0 | 0 |

İki gövdede `uret_petek.py` sha256'sı **aynı** (`c90fa6c8…`) — fark kod değil,
girdi (+373 nokta) ve yürüyüş bayrağı. 🔴 **Ama Koşu 15 sınıfı ÇÖZMEDİ, yerini
değiştirdi** — dünya ölçeği (0.25°, boyalı hücrenin çakışan oranı):

| gün | ESKİ | TAZE | TAZE'de başı çeken çift |
|---|---|---|---|
| 1281-01-01 | %0,27 | %0,08 | tran×yuan · danimarka×isveç · altınorda×novgorod |
| 1453-05-29 | %0,58 | %0,32 | bugis×gova · gambiya×sine-salum |
| 1600-06-15 | %1,31 | **%1,53** | `himaye:#e8a2aa × vassal` 415 (ayrı alt sınıf, §6) |
| 1800-06-15 | %1,41 | **%1,91** | ingiliz-k-amerika×kri 316 · dene×ingiliz 201 |
| 1884-01-01 | %1,91 | **%2,84** | **dene×kanada 1617** |
| 1921-06-01 | %0,32 | %0,30 | brezilya×paraguay 193 · bolivya×peru 81 |

⇒ Emre'nin fotoğrafladığı Ortadoğu pencerelerinde düştü, dünyada bazı
tarihlerde ARTTI. Görseldeki örneklerin kaybolması sınıfın çözüldüğü demek değil.

### 1b. H-79:5 ve H-79:6 "kutu" sınıfı DEĞİL
Şartname iki maddeyi `hukuki_sinirlar.js` `kapsama.kutu` sınıfına koymuştu.
**Ölçüm: değiller.** Görsellerin tarihi 1281, pencereleri 103–113°D (Çin);
`hukuki_sinirlar.js`in kutu taşıyan kayıtları 1699–1923 arasında ve 17–50°D'de
(`midye-enez` 25.5–29.5 · `misir-sudan-22-paralel` 24–37 · `ii-erzurum` 46.5–49
· 17.7–19.7 · 41.5–50.5 poligon). Görsellerdeki düz çizgi/üçgenler **Yuan
gövdesinin kendi ekleme geometrisi** (§3). Kutu sınıfına dokunmam gerekmedi.

---

## 2. Yöntem — motor koşturmadan aşama aşama yeniden kurulum

`data/petek_govde.js` motorun taban peteklerini (`PETEK_D`, :7627) tutuyor.
`GOVDE-CAKISMA-0079-asama.py` bunlardan her gövdeyi motorun sırasıyla yeniden
kurar (formüller satır numarasıyla kopyalandı, import YOK):
```
ham  = ⋃ petek(aktif)          :6333
K    = kapat(ham, 0.15)        :2788
B1   = delikleri_doldur(K)     :2875
B2   = enklav köprüsü          :3073   (sade: KARA sınavı yok ⇒ motordan GENİŞ)
B3   = koridor doldurma        :3175
SON  = devletler_harita.js'teki gerçek gövde
```
**Yeniden kurulumun sınavı (taze gövde, B3 ↔ SON farkı):** sovyet-rusya %0,1 ·
tbmm %2,2 · ilhanlı %0,4 · trabzon-rum %1,5 · artuklu %0,0 · bulgaristan %0,0
· romanya %0,0 · yuan %2,4 · tran %3,6 ⇒ **kurulum motoru izliyor.**
Kopyalanmayanlar: ekleyici kapı (dolgu), puan kapısı (yalnız KESER), kara
maskesi (yalnız KESER), epok devri (en yakın canlıya Voronoi ile yaklaşıklandı).
**Eski gövdede kurulum TUTMADI** (%10–55 fark; yürüyüşlü modda gövde başka
kesimlerden de geçiyor) ⇒ eski gövdede aşama payı **ölçülemedi**.

---

## 3. Ölçüm — çakışma hangi aşamada doğuyor (TAZE gövde, km², pencere içi)

| pencere · çift | ham | K | B1 | B2 | B3 | **SON** | SON'un payı: K · B2 · B3 · açıklanamayan |
|---|---|---|---|---|---|---|---|
| Kafkas 1921 · sovyet × tbmm | **0** | 0 | 0 | 0 | 139 | **328** | 0 · 0 · **42%** · 58% |
| Trabzon 1281 · trabzon × ilhanlı | **0** | 13 | 13 | 13 | 15 | **160** | 8% · 0 · 1% · 91% |
| G. Çin 1281 · tran × yuan | **1** | 1 | 1 | 3501 | 3609 | **4555** | 0 · **75%** · 2% · 23% |
| Niğbolu 1915 · bulgaristan × romanya | **0** | 0 | 0 | 0 | 13 | **14** | 0 · 0 · **93%** · 7% |
| Cizre 1281 · ilhanlı × artuklu | **0** | 0 | 0 | 0 | 0 | **13** | — · — · — · 100% |

- **Ham birleşimde çakışma her pencerede 0** (G. Çin'de 1 km², yuvarlama). Voronoi
  temiz; kusur ekleme adımlarında doğuyor. Bu, iki yönde sınandı: aynı alet
  Kafkas'ta bilinen çakışmayı (ARAYUZ-0077: 92 hücre) **89** hücre olarak
  yakaladı ve İç Anadolu kontrolünde **0** verdi.
- **Açıklanamayan kısım** (Kafkas 189, Trabzon 146 km²) teşhis edildi: parçaların
  hepsi **haklı sahibin kendi peteğinde** (Kafkas: `Artvin` → sovyet; Trabzon:
  `Giresun`, `Trabzon`, `Mesudiye` → trabzon-rum) ve onları kaplayan komşu gövde
  benim B3 kopyamda yok. Yani komşu gövde motorda benim kopyalamadığım bir adımla
  (en olası: ekleyici kapı/dolgu ile genişleyen `aktif` kümesinin B3'ü, ya da
  epok devrinin farkı) büyüyor. **Hangisi olduğu ölçülemedi** — ama yön aynı:
  komşunun peteğine dolan bir EKLEME.
- **H-79:5 (Yuan, çakışma yok):** pencerede ekleme B2 **11.013** · B3 **8.250** ·
  K 2.500 · B1 1.329 km². Görseldeki sivri üçgenler ve yamuklar B2 köprüsünün
  kendi tasarım şekli (Emre'nin 29 Ağustos kavisli yamuk kuralı, :3129);
  ham + eklemeler − SON ≈ 53 bin km² kesilmiş ⇒ görseldeki beyaz, düz kenarlı
  delikler **puan kapısı + kara maskesi** kesimi (ikisi ayrılmadı).
- **H-77:76 Derbend 1920 (taze):** `rusya` gövdesi hâlâ `1917-03-15 → 1923-10-29`
  dönemiyle çiziliyor ve `sovyet-rusya` ile **421 hücre (%1,95)** çakışıyor
  (eski gövdede 4.076 hücre) —
  ARAYUZ-0077'nin hayalet devlet teşhisi taze gövdede de doğru.

### Öngörü sınavı — kayda geçiyor
Oturum içinde ölçümden önce kurduğum öngörü *"çakışmanın ≥%50'si kapama
(`kapat`, 0.15°) eklemesinden gelir"* idi. **ÇÜRÜDÜ:** kapama payı Kafkas %0,
Trabzon %8, G. Çin %0, Niğbolu %0. Asıl üreticiler B3 ve B2. ⚠️ Öngörü dosyaya
ölçümden SONRA yazıldı (§11 ihlali, beyan ediyorum). İkinci çürüyen varsayım:
"görseller taze gövde" — ölçüm önce görsel damgasını sordu, orada yakalandı.

---

## 4. Maddelere hüküm

| madde | hüküm | gerekçe (ölçümle) |
|---|---|---|
| **H-79:2** (TEKRAR, önce) | **`sirada`** (Oturum 0 · motor yaması) | Kök sebep §0: ekleme adımları komşu toprağını görmüyor. Görselin kendisi eski gövdeydi (886→42 hücre); sınıf taze gövdede sürüyor (160 km², dünyada %0,08–2,84). Önceki kollar ölçtü, sınıflandırdı (HARITA-0076 Kova B, ARAYUZ-0077) ama motorda HANGİ AŞAMA olduğunu sormamıştı — bu rapor o soruyu cevaplıyor. |
| **H-79:1** | **`sirada`** (aynı çare) | Görsel Koşu 15'ten 43 dk önce: eski gövdede %14,28, taze gövdede %0,08 (12 hücre, 13 km²). Emre'nin gördüğü dev bindirme taze gövdede YOK; kalan 13 km² aynı sınıf. |
| **H-79:5** | **`senin-kararin`** | Kutu sınıfı DEĞİL (§1b). Çakışma yok; düz çizgi/üçgenler Emre'nin kendi B2 köprü kuralının şekli + puan kapısının kestiği delikler + 101 noktalı Yuan'ın seyrek Voronoi kenarları. Kural kusuru değil **tasarım sonucu**: B2'nin seyrek bölgede köprü kurup kurmayacağı Emre'nin kararı (§5 ④). |
| **H-79:6** | **`sirada`** (aynı çare) | Kutu değil. Yuan × Tran **4.555 km²** çakışma, **%75'i B2 köprüsü** — köprünün orta çizgisi sınanıyor, kenarları Tran peteklerinin üstüne biniyor. |
| **H-77:82** | **`sirada`** | Sovyet × TBMM 328 km²; ham 0, B3 %42, kalan Artvin peteğinde (açıklanamayan, §3). Çare sınamasında **0**. |
| **H-77:83** | **`sirada`** | H-77:82 ile aynı çift, aynı ölçüm (ARAYUZ'un köşegen üçgeni bu çakışmanın kenarı). |
| **H-77:13** | **`sirada`** | Çakışma kısmı 14 km², **%93'ü B3**. Tuna'nın kuzeyine taşma kısmı noktasızlık — ARAYUZ-0077 hükmü (nokta kolu) aynen geçerli. |
| **H-77:32** | **`sirada`** (bindirme) + **`olculecek`** (boşluk) | Bindirme tarafının kökü §0. "Uç uca gelmiyor, arada boşluk" tarafı ayrı sınıf: puan kapısı ve tavan KESER (H-79:5'te ~53 bin km² kesim) + noktasızlık; bu raporda sayılmadı. |
| **H-77:76** | **`tekrar`** → ARAYUZ-0077 | Taze gövdede ölçüldü: `rusya` 1917-03-15→1923-10-29 hâlâ çiziliyor, sovyet ile 421 hücre çakışıyor. Çare `yerlesimler.js` (Derbend ardıl künye), gövde kuralı değil; ARAYUZ hükmü doğru. |

---

## 5. Çare seçenekleri — bedelleriyle (düzeltmeyi YAZMADIM)

**① ÖNERİM — "ekleme komşuyu kesmez" kuralı (motor, :6336 sonrası tek adım).**
`gosterim_duzelt`ten sonra: `g = g − ⋃ petek_epok(a)[j]` (j: `a` gününde
BAŞKA devlete ait yerleşimler). Kapama/B2/B3 yalnız sahipsiz toprağı ve kendi
peteğini doldurabilir.
- **Sınandı (yeniden kurulumda):** çakışma Kafkas 328→**0** · Trabzon 160→**0** ·
  Niğbolu 14→**0** · G. Çin 4.555→**43** (kalan: epok yaklaşıklaması).
- **Kesilen alan = tam taşan kısım:** tbmm 139 · ilhanlı 15 · bulgaristan 13 ·
  yuan 3.566 km²; haklı sahiplerde kesim **0**.
- **Bedel:** (a) her gövde dönemine bir `difference` (sahiplik günlük zaten
  hesaplı: `_dolgu_kumesi` aynı listeyi kuruyor, :5973-6001); (b) motor tuzu
  değişir ⇒ **§9.1 tam inşa koşusu** (18 saat). (c) 🔴 **Zaman kesiti riski:**
  gövdenin dönem sınırları (`ts`, :6424-6432) yalnız KENDİ yerleşimlerinin
  tarihlerinden kurulur; komşu bir sahipsiz peteği sonradan alırsa bu gövde
  yeniden hesaplanmaz ⇒ çıkarma `a` günü doğrudur, dönem ortasında bayatlayabilir.
  Tam çözüm için komşunun sahiplik değişim günleri de `ts`e girmeli (maliyet:
  dönem sayısı artar; ölçülmedi).

**② ÖNCELİK/SIRA ile çözüm (motor sonunda tek geçiş).** Her kesitte çakışan
alan, ham peteği kimdeyse ona bırakılır. ①'den daha kapsamlı (dolgu ve
epok farkını da yakalar) ama gövdeleri gün gün birlikte işlemek ister —
bugünkü paralel FAZ 1 mimarisine (devlet başına bağımsız) ters. Pahalı.

**③ DENETİM (ucuz, çare değil nöbetçi).** HARITA-0076'nın önerisi duruyor:
çakışma ölçümü `denetle.py`ye değişmez olarak. Bu rapor tavan için sayıyı
verdi: taze gövdede dünya %0,08–%2,84. Aletin ölçütü hazır (`-olc.py`,
`SADECE_SAY=1`, 6 kesit ≈ 4 dk). ①'den sonra tavan ≈ 0'a çekilebilir.

**④ B2'nin seyrek bölgedeki davranışı (H-79:5) — Emre'nin kararı.** B2
köprüleri kural gereği kavisli yamuk; Yuan gibi 101 noktanın 500 bin km²'yi
boyadığı yerde bu şekiller "cetvelle çizilmiş üçgen" görünüyor. Seçenekler:
(a) olduğu gibi · (b) B2'yi komşu toprağına değmeyecek şekilde ① ile sınırla
(çakışma gider, şekil kalır) · (c) seyrek bölgede (nokta yoğunluğu eşiği) B2'yi
kapat. (c) bir tasarım değişikliği, ölçmeden önermiyorum.

⚠️ Hiçbir seçenek `kd:` ile, `app.js` ile ya da `hukuki_sinirlar.js` ile
çözülmez (CLAUDE.md §3 uyarısı burada da birebir doğrulandı).

---

## 6. Yan bulgular (kimsenin numarasına yazmadım)
- **`himaye × vassal` 415 hücre (1600, dünya taze):** Osmanlı tâbi gövdesi ile
  himaye gövdesi `DONEMLER` içinde üst üste. Aynı sınıf mı (ayrı üretilen iki
  gövde) ölçülmedi; HARITA-0076'nın "aynı polity iki kez çiziliyor" gözlemiyle
  aynı aile olabilir. `olculecek`.
- **dene × kanada 1617 hücre (1884):** dünyanın en büyük tek çakışması; taze
  gövdede ESKİSİNİN 2,4 katı. Bir sonraki ölçüm hedefi.
- **Girdi koşudan sonra 2 nokta büyümüş** (4294 → 4296: Maribor, Eisenstadt);
  `PETEKLER` sırası ile `girdi.yukle()` sırası artık eşleşmiyor — aletim ada göre
  eşliyor. Sıraya güvenen başka alet varsa bayat okur.

## 6.5 YAMA — `denetim/GOVDE-CAKISMA-0079-yama.diff` (M-5279 isteği, çare ①)
- Üretici: `py denetim/GOVDE-CAKISMA-0079-yama-uret.py <dizin>` (motor kopyası
  üzerinde; her değişiklik TAM BİR KEZ eşleşmeli, yoksa durur).
- 4 hunk, +113 satır: yardımcılar (`_gun_sahipleri`, `_komsu_toprak_cikar`,
  `_mp_geo`) · FAZ 1 (paralel + süreç yolu) · eski sıralı yol (bit denkliği
  tanığı aynı adımı alır) · rapor satırı. **Önbellek satırlarına DOKUNMAZ**
  (LEGO yaması tam oraya dokunuyor): önbellek çıkarmadan önceki gövdeyi tutar.
- `git apply --check` temiz · tek başına ve LEGO + ayıkla ile **iki sırada da**
  temiz · birleşik dosya `py_compile` temiz.
- **Kod sınavı** (`-yama-sina.py`, yamanın kendi metni exec edilir, gerçek
  `devletler_harita.js` gövdelerine uygulanır; epok ≈ Voronoi, dolgu KAPALI):
  Kafkas 328→**0** · Trabzon 160→**0** · G.Çin 4.555→**0** · Niğbolu 14→**0** ·
  Cizre 13→**0** km². Pencerede kesilen = taşan (tbmm 328 · ilhanlı 160 ·
  yuan 4.605 · bulgaristan 14); haklı taraflarda 0. Çıktı `-yama-sina.txt`.
- ⚠️ **Motor içinde SINANMADI.** Koşu = sınav. Taban ve öngörü yamanın içine
  yazıldı: yabancı×yabancı çakışma her kesitte ≥%80 düşer, sıfıra İNMEZ
  (zaman kesiti bedeli + Osmanlı/tâbi/himaye gövdeleri bu yamanın dışında).

## 7. Aletler (tekrar koşar, `data/` ve `arac/`a yazmaz)
```
py denetim/GOVDE-CAKISMA-0079-olc.py [pencere]     ızgara çakışma + sınıf
   GOVDE_KOK=<eski data kökü>                         eski gövdeyi ölçer
   SADECE_SAY=1                                       dünya, 6 kesit
py denetim/GOVDE-CAKISMA-0079-asama.py [pencere]   aşama aşama yeniden kurulum + çare sınavı
py denetim/GOVDE-CAKISMA-0079-ciz.py <dizin>       görsel pencerelerini taze gövdeyle PNG
```
Çıktılar: `GOVDE-CAKISMA-0079-olc.json` · `-olc-eski.json` (pencereler) ·
`-olc-dunya.json` · `-olc-eski-dunya.json` (dünya) · `-asama.json` · `-asama-eski.json`.

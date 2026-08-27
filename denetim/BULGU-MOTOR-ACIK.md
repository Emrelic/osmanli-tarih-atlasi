# MOTOR AÇIK KALEMLERİ — kök kümeleme, çare tarifi, öngörü, bayatlık

**Oturum:** ÇÖL BOYAMA · **Tarih:** 27 Ağustos 2026
**Koordinatör:** ORHANGAZİ · **Yetki:** yalnız bu dosya. `arac/uret_petek.py`
**okundu, yazılmadı** (koşu 13:23'te başladı, motor kilitli).

---

## 0. ÖNCE: DEVRALDIĞIM SAYIYI DOĞRULAMADIM — KENDİ EVRENİMİ KURDUM

Şartname *"MOTOR 69"* diyordu. `denetim/ACIK-KALEMLER.json` **23 Ağustos**
tarihli (4 gün bayat) ve MOTOR/VERİ/ARAYÜZ sınıfı **taşımıyor** — yani 69
oradan gelmiyor. Evreni baştan kurdum: `PARTI.json` (madde) × `CEVAP.json`
(hüküm), 39 paket.

```
602 madde · hüküm dağılımı
   cozuldu 228 · sirada 220 · olculecek 64 · zaten-dogru 62
   senin-kararin 14 · tekrar 10 · bayat 3 · gerek-yok 1
AÇIK (sirada + cevapsız): 220
```

### 🔴 VE KENDİ SÜZGECİM ÇÖKTÜ — 138 dedi, gerçek 58

İlk kümeleme **MOTOR adayı 138** verdi. Örneklere bakınca `KIYI-ADA` kümesinde
*"timur **bağdadı** zapteti"* ve *"gelibolunun alınışı **maddesinde**"* gibi
maddeler çıktı. Sebep: `ada` deseninin **sınırı yoktu** ve Türkçe ekli bir
metinde çıplak kelime aramak, kelimeyi değil **harf dizisini** arar.

```
sınır eklendi   (?<![0-9a-zçğıöşü])(ada|adası|…)(?![a-zçğıöşü])
sınandı         8 vaka, 8'i de doğru  (bağdadı ✗ · maddesinde ✗ · rodos adası ✓
                                       adaletsiz ✗ · yarımada ✓ · kıyı şeridi ✓)
KIYI-ADA        115 → 4          MOTOR adayı  138 → 58
```
⇒ **111 sahte eşleşme.** Sayıyı düzeltmeden bildirseydim koordinatöre
iki katından fazla iş tarif edecektim.
⚠️ **Ve bedeli var:** `(?![a-zçğıöşü])` kuyruğu *"boğazlar"* gibi çekimli
hâlleri de eliyor. **Kesinliği artırdım, hatırlamayı düşürdüm** — bilerek, ve
kaçırdığım küme **ölçülmedi.**

**Kök dağılımı (58 MOTOR adayı):**
```
KOPUK-ENKLAV 22 · BOSLUK-SEBEP 12 · GOL-SU 11 · TOPOGRAFYA 6
KIYI-ADA 4 · SINIR-BICIM 2 · EMILME-TASMA 1
```
*(bir madde birden çok köke girebilir; SINIFLANMADI 128 madde MOTOR
sayılmadı — çoğu kronoloji/arayüz.)*

---

## 1. ④ ÖNCE BAYATLIK — çünkü bitmiş işi kuyruğa koymak en pahalısı

### 1.1 🟢 `p0008/H-0005` — "PETEKLERİN DENİZ ÖTESİNE GEÇMESİ OLMAMASI LAZIM"

> *"ÇİMPE KALESİNİN ALINMASI… GELİBOLU YARIMADASI HARİCİNDE SAROS KÖRFEZİNİ
> KUZEYİ İLE ŞARKÖYE DOĞRU OLAN KISIM DA OSMANLIYA GEÇMİŞ GİBİ GÖRÜNÜYOR…
> **PETEKLERİN DENİZ ÖTESİNE GEÇMESİ OLMAMASI LAZIM**"*

```
şikâyet   parti-emrelic-0008   damga 2026-08-08 16:51
düzeltme  5e09d62              2026-08-10  "BILESEN KILIDI uygulandi (55 satir):
                                Dijkstra gercek maske bilesenine kisitlandi"
```
⇒ **İKİ GÜN SONRA DÜZELTİLMİŞ.** Emre'nin istediği yapı (`ADA KURALI` +
bileşen kilidi) motorda var ve gerekçesi `uret_petek.py:1843-1863`te yazılı.
🟡 **AMA KAPANDI DEMİYORUM:** kilit Pag ve Vardø ile ölçülmüş; **Gelibolu/Saros
kesitinde ölçülmedi.** Hüküm: *"kök düzeltildi, bu vaka doğrulanmadı"* —
bir kesit ölçümü yeter, koşu gerektirmez.

### 1.2 🟢 `p0008/H-0009 · H-0010 · H-0011 · H-0012` — "1281'de bu boşlukların sebebi ne"

Emre dört maddede aynı şeyi soruyor ve **şıkları kendisi sayıyor**:
> *"BURALARDA **İNSAN MI YOK** **DEVLET Mİ YOK** **VERİ Mİ YOK** YOKSA
> **HATA MI** VAR"*

🔴 **BU DÖRT ŞIK, BUGÜNKÜ `bos:` ALANININ TA KENDİSİ:**
```
"insan mı yok"  → insansiz      "devlet mi yok" → devletsiz
"veri mi yok"   → veri-yok      "hata mı"       → hata        (+ sonradan kabile)
```
```
şikâyet   2026-08-08
cevap     06b2751  2026-08-15  "BOSLUGUN CINSI EKRANA CIKIYOR"
                               (bos_alanlar.js + boslukKur() katmanı)
```
⇒ **Taksonomi Emre'nin kendi sorusundan doğmuş ve bir hafta sonra ekrana
çıkmış.** Dördü de **BAYAT.**
🟡 Doğrulanmamış olan: **1281 kesitinde** o boşlukların cinsi gerçekten yazılı
mı? Veride 198 `kasitli_bosluk` var ama 1281'e bakmadım. **Ölçmedim.**

### 1.3 🟡 `0033/H-0021` + `0034/H-0028` — bugünkü koşu YARISINI kapatıyor

Bu iki madde **benim `0036/H-0001` işimin aynısı**, üstelik Emre yer
adlarını tek tek sayıyor:
> H-0028: *"**gat** şehrinin kuzeyi ve doğusu, **zilla**nın güneyi, **sebha**
> ve **el katrun** şehirlerinin doğusu, **calu**nun doğusu, güney doğusu…"*
> H-0021: *"**calu** şehrinin doğusu güneyindeki büyük miktar toprağın
> boyanmasının matematiği sebebi nedir açıkla"*

Ve benim ölçümümde (`BULGU-COL-BOYAMA.md §8.4`) puanı veren noktalar **birebir
bunlar**: Gât · Sebha · el-Katrûn · Murzuk · Zevîle · Zilla · Câlû · Merâde.
⇒ Gövdeler `o[131]` (248.370 km²) · `o[130]` (139.837) · `o[68]` (180.324).

🔴 **AMA BUGÜNKÜ KOŞU BUNLARI KAPATMAZ, ÇÜNKÜ EMRE BAŞKA BİR ŞEY İSTİYOR:**
```
0036/H-0001 (27 Ağu)  "osmanlı KIRMIZISINA boyanması"      → RENK/kademe şikâyeti
0034/H-0028 (24 Ağu)  "boyanmasını ENGELLEYECEK bir yapı"  → BOYANMASIN diyor
```
`TABI` kademesi **rengi** düzeltir, **boyamayı durdurmaz.** ⇒ H-0021 ve
H-0028 bugünkü koşudan sonra da **açık kalacak.**

---

## 2. KÖKLER — beş kök, 58 maddenin çoğunu açıklıyor

### KÖK 1 · DOLGU KAPISININ KADEMESİ — 🟢 bugünkü koşuda
`uret_petek.py:3623` + `:3944`. Ayrıntı: `BULGU-COL-BOYAMA.md §3.2 · §8`.
**Kapsadığı maddeler:** `0036/H-0001` (tamamen) · `0033/H-0021`,
`0034/H-0028` (yalnız renk tarafı).
**Öngörü** (`§8.4`te damgalı): 1821'de 14/15 dolgu noktası `TABI`ye geçer,
hiçbiri eşiğin altına düşmez, çekişme doğmaz.

### KÖK 2 · 🔴 ÇÖL TAVANI İŞLEVSİZ — ve bunu motorun kendi yorumu yazıyor

**Emre'nin istediği "yapı" (`H-0028`) adı var, işlevi yok.**
```
uret_petek.py:2143   COL_TAVAN_KM = 300.0
uret_petek.py:789    "ÇÖL TAVANI BUNU YAPMIYOR, YAPAMAZ: COL_TAVAN_KM = 300
                      iken k0=280 · k3=280 · k4=140 hepsi ALTINDA ⇒ o
                      kademelerde A1 zaten daha içeride, çöl tavanı YAPISAL
                      OLARAK hiçbir şey kesemez (2283/2356 nokta)."
```
⇒ Çöl tavanı **2356 noktanın 2283'ünde hiçbir şey kesmiyor.** Sahra
çemberlerini çizen A1; çöl tavanı yalnız `k1=700`lük büyük merkezleri
etkileyebiliyor.

**ÇARE TARİFİ — üç seçenek, ikisi ölçülebilir:**
```
(a) COL_TAVAN_KM'yi kademe tavanlarının ALTINA indir (örn. 120 km)
    ⇒ çöldeki her noktayı keser; ama SAHİPLİ çöl şehirlerini de keser
      (Gât · Murzuk · Câlû kendi topraklarını kaybeder) — RİSKLİ
(b) 🟢 TAVANI DEĞİL DOLGU KAPISINI KISITLA: NE "Desert" poligonu içinde
    PUAN_ESIK'i yükselt (4 → 8). Sahipli noktaların kendi peteğine
    DOKUNMAZ, yalnız BOŞ peteğin doldurulmasını zorlaştırır.
    ⇒ Emre'nin cümlesiyle birebir: "boyanmasını engelleyecek bir yapı"
(c) Çölde dolguyu tamamen kapat ⇒ 20 Ağustos talimatını çiğner
    ("anlamsız girintiler kapansın"), ÖNERMİYORUM
```

**🔴 (b) İÇİN ÖNGÖRÜ — KOŞUDAN ÖNCE YAZILDI, ÇÜRÜTÜLEBİLİR.**
`§8.4`te 15 dolgu noktasının puanını zaten hesaplamıştım; eşik 8 olsaydı:
```
GEÇER, dolgu SÜRER (8):  İdehân Murzuk 14 · Ramletü Zellâf 14 · Bayûda 22 ·
            Atbay çölü 20 · Nûbe çölü 18 · Ramletü Murzuk 10 · İdehân Ubârî 9 ·
            Selîme 8
DÜŞER, dolgu KALKAR (7): Serîr Kalanşû 6 · Vâv el-Kebîr 6 · Tâsîlî n'Accer 5 ·
            Serîr 5 · Lakiye Arbaîn 5 · Vâdî el-Milk 4 · Tâzirbû 1
```
```
🔴 MAZERETİ YOK  ① eşik 8'de Tâzirbû · Vâdî el-Milk · Tâsîlî n'Accer ·
                    Lakiye Arbaîn · Serîr · Serîr Kalanşû · Vâv el-Kebîr
                    dolgusu DÜŞER (7 nokta)
                 ② Bayûda (22) ve Atbay (20) DÜŞMEZ — çünkü Nil vadisi
                    yakın ve puanları yüksek; yani eşik yükseltmek
                    Sudan'ı DEĞİL Libya'yı boşaltır
🟡 MAZERETİ VAR  ③ boşalan alan ~250.000-400.000 km² (ızgara örneklemesinden,
                    ±%10); kesin sayı yalnız koşuda çıkar
```
📌 ②'nin sonucu önemli: **eşik yükseltmek Emre'nin H-0028'de saydığı Libya
yerlerini boşaltır, Sudan'a dokunmaz** — yani tam da istediği yere isabet
ediyor.

### KÖK 3 · "YUVARLAK ALAN / PERGELLE ÇİZİLMİŞ" — 🟡 kusur DEĞİL olabilir
**Maddeler:** `0033/H-0006` (Çağatay) · `H-0007` (Kazak) · `H-0008` (Sibir) ·
`H-0010` (Kandehar) · `H-0017` (Tiflis üçgeni) — **5 madde, tek kök.**

A1 tavanı motorda **zaten yön duyarlı** (`A1b`, `uret_petek.py:710`;
`nicin_bos.py` başlığı bunu yazıyor). Bir peteğin çember çıkması, tavanın
izotrop olmasından değil, **o noktanın hiçbir yönde komşusu olmamasından**
olur: itecek komşu yoksa şekil daireye yakınsar.

⇒ **Çare motorda değil VERİDE**, ve Emre'nin kendi cümlesi bunu söylüyor:
> `H-0010`: *"bu tip yerlerde dağlık alanlarda eğer tarihî kayıtlar var ise
> yerleşim yerlerinin sayısı artırılabilir… **ama kayıt yok ise
> ellemeyelim**"*

**HÜKÜM: bu beş madde MOTOR değil VERİ (nokta yoğunluğu) kalemidir.**
⚠️ **Ölçmedim:** o beş bölgede gerçekten komşusuz mu, kaç km'de nokta var —
bakmadım. Hüküm **koddan çıkarım**, ölçüm değil.

### KÖK 4 · DENİZ AŞIRI PETEK — 🟢 düzeltilmiş (1.1)

### KÖK 5 · BOŞLUĞUN CİNSİ — 🟢 düzeltilmiş (1.2)

---

## 3. KOPUK-ENKLAV KÜMESİ (22 madde) — kısmen ZATEN ÖLÇÜLDÜ

`0006/H-0010` — *"şu macaristan ve habsburg görünen iki parça gerçekten böyle
mi"* — **birebir benim `denetim/BULGU-HIMAYE-MACARISTAN.md` işim.** Orada
ölçüldü: enklav gerçek, sebebi künyesi 1526-08-29'da biten `macaristan`
kimliğinin 13 noktada 68 yıla kadar sürmesi.
⇒ Bu madde **MOTOR değil VERİ** kalemidir ve çaresi yazılı.

⚠️ Kalan 21 maddeyi **tek tek ölçmedim.** Kümenin tamamı için hüküm
veremem; yalnız şu kadarını söyleyebilirim: enklav şikâyetlerinin en az
ikisinde (Macaristan · Gürcistan) kök **motor değil kimlik/nokta** çıktı.
📌 Bu bir **hipotezdir**: "kopuk görünüm" şikâyetlerinin çoğu motor kusuru
değil veri kusuru olabilir. **Sınanmadı.**

---

## 4. SAYIYLA ÖZET

| kalem | sayı |
|---|---|
| paket · madde | 39 · 602 |
| açık madde (`sirada`) | 220 |
| MOTOR adayı (düzeltilmiş süzgeç) | **58** |
| — bunlardan **BAYAT** (kök düzeltilmiş) | **5** (`p0008/H-0005·0009·0010·0011·0012`) |
| — bugünkü koşunun kapatacağı | **1 tam** (`0036/H-0001`) + **2 kısmî** |
| — MOTOR değil VERİ çıkan | **≥6** (KÖK 3'ün 5'i + `0006/H-0010`) |
| — gerçek açık MOTOR kökü | **1** (KÖK 2: çöl tavanı işlevsiz) |

🔴 **Yani 58 MOTOR adayının en az 14'ü MOTOR İŞİ DEĞİL** — bayat, veri, ya da
bugün kapanıyor. Kalanın kökleri tek tek ölçülmedi.

---

## 5. NE ÖLÇMEDİM

1. **Şartnamedeki 69 ile benim 58'im arasındaki fark.** İki ayrı sınıflandırma;
   koordinatörünkini görmedim. **Karşılaştırılmalı.**
2. **`SINIFLANMADI` 128 madde.** MOTOR sayılmadı — **doğrulamadım.**
3. **KOPUK-ENKLAV'ın 21 maddesi** tek tek ölçülmedi.
4. **KÖK 3'ün beş bölgesinde komşu yoğunluğu** — hüküm koddan çıkarım.
5. **1.1 ve 1.2'nin vaka doğrulaması** — kök düzeltilmiş, kesit ölçülmedi.
6. **Süzgecin kaçırdıkları** — çekimli hâller (*"boğazlar"*) eleniyor;
   kaçan küme sayılmadı.

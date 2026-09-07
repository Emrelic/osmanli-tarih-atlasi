# ÖLÇÜM — İKİNCİ GEÇİŞİN SÜRESİ · GECIS-SURE-0907

> **OPUS HAZIR KITA 124 · 7 Eylül 2026.** Emre'nin *"ikinci geçişin
> süresini ölç"* isteğinin **açık kalan yarısı**: çift başına kesişim
> maliyeti.
> 🔒 `data/` DONUK — yalnız okundu. Koşu 8 sürerken ölçüldü.

---

## ⓪ CEVAP — BANT, tek sayı değil

```
çift sayısı × çift maliyeti  =  ikinci geçişin süresi

çift sayısı   85.977 (künye ölçütü) … 99.704 (dönem ölçütü)
çift maliyeti  0,0363 ms (ortanca) … 0,1344 ms (%90)
─────────────────────────────────────────────────────────
TOPLAM         ~3,1 sn  …  ~13,4 sn
```

⚠️ **ÜST SINIR damgası:** koşu 8 yükü altında ölçüldü.
🔴 **Ve bu bir ALT SINIR da taşıyor** — aşağıda `④`.

**⑧② — hangi çarpan hatayı sürüklüyor?** Ölçüldü:
```
çift SAYISI   85.977 ↔ 99.704   →  1,16×  menzil
çift MALİYETİ 0,0363 ↔ 0,1344   →  3,70×  menzil   ← HATAYI BU SÜRÜKLÜYOR
```
⇒ Çift sayısını kesinleştirmek bandı **daraltmaz**; maliyetin **kuyruğu**
daraltır. Dağılım ağır kuyruklu: ortanca 0,0275 ms, azami **74,7 ms**.

---

## ① Ⓐ — DAĞILIM ÖLÇÜLDÜ, ve tabakalama ZORUNLU çıktı

`ARAC-GECIS-SURE-DAGILIM-0907.py`:
```
kimlik 552 (552'sinin de parçası var) · parça 240.687 · köşe 8.949.xxx
kimlik başına PARÇA : ortanca 4 · %75 30 · %90 231 · %99 6.755 · AZAMİ 53.627
kimlik başına KÖŞE  : ortanca 203 · %90 6.577 · %99 227.005 · AZAMİ 1.285.912
```
Çarpıklık (şartnamenin `urabi-pasa` ölçütü):
```
en büyük  1 kimlik : %22,3        en büyük 10 : %73,2
en büyük  5 kimlik : %60,3        en büyük 25 : %89,9
```
En büyük üçü: `ingiltere` 53.627 parça / 1.285.912 köşe · `rusya` 37.617 /
1.283.589 · `ispanya` 30.177 / 491.140.

⇒ **Şartnamenin Ⓐ uyarısı doğrulandı.** Rastgele bir örneklem ortanca-4'ün
ağırlığında kalırdı. `⑧③`ün cevabı: **tabakalama gerekliydi.**

---

## ② 🔴 AMA TABAKA EKSENİM YANLIŞTI — ve ölçüm onu çürüttü

Tabakaları **köşe sayısına** göre kurdum (varsayım: GEOS kesişimi köşeyle
ölçeklenir). Ölçüm:

| tabaka | köşe sınırı | ortanca ms |
|---|---|---|
| 0 | ≤ 203 | 0,027 |
| 1 | ≤ 6.577 | 0,034 |
| 2 | ≤ 227.005 | 0,059 |
| 3 | > 227.005 | **0,044** ← en büyük tabaka, DAHA UCUZ |

Köşe **6.300 kat** değişiyor, ortanca maliyet **2 kat**, ve T3 < T2.
⇒ **VARSAYIM ÇÜRÜDÜ.** Şartname *"tutmazsa raporda yazar"* diyordu; yazıyorum.

### Asıl eksen: UZAMSAL ÖRTÜŞME

`ARAC-GECIS-SURE-EKSEN-0907.py` (n=8.000 çift):

| kova | n | pay | ortanca | %90 | azami |
|---|---|---|---|---|---|
| bbox AYRIK | 7.798 | %97,9 | **0,0275** ms | 0,053 | 0,774 |
| bbox örtüşür, kesişim BOŞ | 74 | %0,9 | **0,3564** ms | 2,283 | **74,708** |
| kesişim DOLU | 90 | %1,1 | **0,5608** ms | 5,608 | 56,191 |

⇒ Çiftlerin **%97,9'unda** GEOS sınırlayıcı kutu reddiyle anında çıkıyor
ve köşeleri **hiç okumuyor**. Maliyeti süren şey karmaşıklık değil,
**iki devletin aynı anda aynı yerde olup olmadığı.**

---

## ③ 🔴 VE KENDİ ÖNCEKİ TURUMU ÇÜRÜTTÜM

İlk eksen koşusu **n=900** ile yapıldı ve orta kovaya yalnız **4 çift**
düştü. O 4 çiftin ortancası **10,07 ms** çıktı ve ben bunu
*"en pahalı kova bbox-örtüşür-boş, dolu kesişimden 365 kat"* diye
**bildirdim.**

n=8.000 ile o kovada **74 çift** var ve ortanca **0,356 ms** — **28 kat
düşük.** Sıralama da düzeldi ve artık sezgiyle uyumlu:
```
kesişim DOLU 0,561  >  örtüşür-boş 0,356  >  ayrık 0,0275
```
⇒ *"En pahalı kova ortadaki"* iddiam **YANLIŞTI**; n=4 aykırı değerlerin
portresiydi. `§11`: *evrenin küçük bir kovasına düşen örneklem, o kovanın
oranını değil o birkaç üyenin portresini verir.*

🔴 **Ve aletimin ÖZET SATIRI da kusurluydu:** *"DOLU kesişim AYRIK'tan 20
kat pahalı ⇒ hipotez TUTTU"* diyor — ama hipotezi sınayan karşılaştırma
bu değil. Alet **doğru sayıları basıp yanlış çifti karşılaştırıyor.**
Sayılar tabloda duruyor ve hüküm onlardan okunmalı, özet satırından değil.

---

## ④ ÇİFT SAYISI — AYRIŞMA ÇÖZÜLDÜ

Önceki alet **85.977**, ben **99.704** ölçtüm. Sebebini ölçtüm:

```
AYNI EVREN (parçası olan 552 kimlik), İKİ ÖLÇÜT:
   DÖNEM penceresi (benimki)  99.704
   KÜNYE penceresi            85.977   ← önceki aletin sayısı, BİREBİR
   naif (bütün çiftler)      152.076
```
İkisi de doğru; **farklı şey ölçüyorlar** — künye devletin ömrü, dönem
haritada çizildiği aralık.

🔴 **VE BİR BAĞ ÇIKTI:** 22 kimliğin parçası VAR ama künyesi YOK —
`avusturya` · `ceneviz` · `sovalye` · `bulgaristan` · `sirbistan` ·
`bosna` · `arnavutluk` · `yemen` …
Bunlar bugün ⑭ kolunda ölçtüğüm **`harita:` dolaylamasıyla bağlı 22
kimliğin ta kendisi** (`denetim/ONERI-ALET-BORCLARI-0907.md`).
⇒ **85.977 onları sessizce dışarıda bırakıyor.** `harita:` dolaylaması
düzeltilirse o sayı da değişir; iki kalem birbirine bağlı ve kimse
bağlamamıştı.

---

## ⑤ MODELLEME KARARI — ve bu bir ALT SINIR

Ölçülen atomik işlem: **iki kimliğin ÖRTÜŞEN BİRER DÖNEMİNİN kesişimi.**
```
🔴 Kimliğin BÜTÜN dönemlerini birleştirip kesiştirmek maliyeti ŞİŞİRİRDİ
   (gerçek geçiş zaman dilimi başına çalışır) ⇒ yapmadım
🔴 AMA gerçek geçiş bir çift için BİRDEN ÇOK zaman diliminde çalışabilir
   ⇒ benim sayım o eksende bir ALT SINIR
```
⚠️ Yani bandın **iki ucu ters yönde sapıyor**:
```
çift sayısı (85.977)   ALT sınır  — A çıktısı koşu 7b'nin ürünü, zaten düzeltilmiş
çift maliyeti          ÜST sınır  — koşu 8 yükü altında
dilim başına tekrar    ALT sınır  — çift başına TEK dilim ölçüldü
```
⇒ *"~3–13 sn"* bir **mertebe** ifadesidir, bir kesinlik değil.

---

## ⑥ MERTEBE — ve Emre'nin sorusunun cevabı

Koşu 8 **~16 saat** sürüyor. İkinci geçişin ölçülen maliyeti **3–13
saniye** mertebesinde, yani koşunun **on binde biri**.
⇒ Ölçüm, ikinci geçişin bir **süre sorunu olmadığını** gösteriyor.
⚠️ Bu bir *"yapılsın"* önerisi DEĞİL — yalnız *"süresi engel değil"*
ölçümü. Kararı ben vermiyorum.

---

## ⑦ ÖLÇEMEDİKLERİM

```
⚪ ÖLÇMEDİM   gerçek geçişin bir çift için KAÇ zaman diliminde çalıştığını
              — ⑤'in alt sınır ayağı bundan doğuyor
⚪ ÖLÇMEDİM   koşu 8 BİTTİKTEN sonraki maliyeti (Ⓑ'nin ikinci yarısı) —
              koşu hâlâ sürüyor. Bittiğinde tekrarlanmalı, ve aradaki fark
              YÜKÜN KENDİSİDİR
⚪ ÖLÇMEDİM   85.977'nin `harita:` dolaylaması düzeltilince ne olacağı (④)
🔴 ÇÜRÜTTÜM   köşe tabanlı tabakalama · ve kendi n=4 okumam (③)
```

## ⑧ ALETLER

```
denetim/ARAC-GECIS-SURE-DAGILIM-0907.py   Ⓐ dağılım + çarpıklık
denetim/ARAC-GECIS-SURE-MALIYET-0907.py   tabakalı maliyet (köşe ekseni)
denetim/ARAC-GECIS-SURE-EKSEN-0907.py     🔴 asıl ekseni bulan alet
```
🔴 Üçü de `parcaCoz`u `js/app.js`ten **aynen** alır — yeniden yazılmadı.
🔴 Ve dağılım ile maliyet **ayrı aletler**, kasten: tek betiğe koymak
tabakaları ölçümden ÖNCE sabitlemek olurdu.

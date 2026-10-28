# NOKTA-LEVANT-KIYI-1010 — Lazkiye · Cebele · Merkab · Baniyas · Tartus nokta önerisi

**Oturum:** NOKTA-LEVANT-KIYI-1010 (EMRELIC, Opus) · **Taban:** `origin/main` `b3fd8874`
(worktree `C:\atlas-levant1010`, dal `nokta-levant-kiyi-1010`) · önceki iş: `KUNYE-SINIF-ANTAKYA-1010` (B-KOL / YENİDEN EDİNİM)
🔴 `data/` DONUK (KOŞU 22) ⇒ **veri yazılmadı**; aşağıdaki kayıtlar ÖNERİDİR, koordinatör indirir.
**Mükerrer değil, devam:** 1000-1280 halkaları `KAYNAK-EKSIK-SEHIR-1010` (§5 Lazkiye · §14 Tartûs ·
§15 Cebele) ve `KASA-EKSIK-SEHIR-41-89-1010` (§75 Merkab · §77 Bâniyâs) zaten çıkarmıştı; onları
yeniden yazmadım, **1281-1923 penceresini, kimlikleri, koordinatın ikinci tanığını ve petek etkisini** ekledim.

---

## SONUÇ (beş satır)
1. **Dört nokta önerilir:** Lazkiye · Cebele · Merkab · Tartus. **Baniyas önerilmez** (Merkab'a 2–5 km; sahibi ölçülemedi; Merkab peteği zaten kapsar).
2. **Koordinatlar iki-dört tanıkla tutuyor**, en büyük fark 2,7 km (al-Ṯurayyā; LAB eşiği ≥10 km ⇒ gürültü).
3. 🔴 **İKİ YENİ KİMLİK GEREKİYOR:** Merkab 1281-1285 **Hospitalier (İsbitâriyye)**, Tartus 1281-1291 **Templier (Dâviyye)**. `devletler.js`te ikisi de YOK. TDV'nin tek ortak maddesi var (`daviyye-ve-isbitariyye`) ⇒ künye kaynağı hazır. `rodos-sovalyeleri` (f:1310) GERİYE uzatılmaz (§1-A).
4. **Cebele 1188-1285 hâkim KİMLİĞİ ölçülemedi** (Müslüman olduğu okunuyor, kim olduğu yok) ⇒ önerim **beyanlı `__BOSLUK__`**.
5. 🔴 **Yıl hassasiyeti tuzağı dört yerde:** TDV hicrî yıl veriyor ve `YYYY-01-01` dördünde de kaynağın DIŞLADIĞI güne düşüyor (1188 · 1287 · 1291 · 1516). Her biri için kaynak-sınırlı seçenek aşağıda.

---

## 0. ÖNGÖRÜ — ölçümden ÖNCE (10 Ekim 2026, Pleiades/TGN/TDV açılmadan) ve KARNE
```
Koordinat: Pleiades'te Laodicea, Gabala, Balanea, Antaradus VAR; Merkab YOK → TGN tek tanık.
  Ortaçağ sitesi = modern kasaba ⇒ fark < 3 km.
Lazkiye  antakya 1108-1188 · eyyubi 1188-? · eyyubi-halep ?-1260 · antakya 1260-1268 · KOL 1268-1287 · memluk 1287-1516
Cebele   antakya 1109-1188 · eyyubi 1188 · … · 1268-1285 ÖLÇÜLEMEDİ · memluk 1285-1516
Merkab   antakya(Mazoir) -1186 · Hospitalier 1186-1285 → KİMLİK ÖLÇÜLEMEDİ · memluk 1285-1516
Baniyas  Merkab'ı izler → KİMLİK ÖLÇÜLEMEDİ
Tartus   trablus-kontlugu · Templier 1188-1291 → kimlik ölçülemedi ya da trablus-kontlugu
1516 sonrası Osmanlı d:, komşu deseni.
```
| Öngörü | Ölçüm |
|---|---|
| Pleiades'te dördü var | ✓ dördü var (Antaradus `668190` + ortaçağ `Ṭarṭūs` `9832296` ayrı kayıt) |
| Merkab TGN tek tanık | ✗ **iki tanık**: TGN `7002296` + GeoNames "ruin(s)" kaydı, aralarında 0,12 km |
| fark < 3 km | ✓ dördünde (en çok 2,68 km) · ✗ **Baniyas'ta Pleiades kendi içinde 5,46 km** çelişiyor |
| Lazkiye zinciri | ✓ (eyyubi → eyyubi-halep devir yılı: bulunamadı, öngörüldüğü gibi) |
| Cebele 1268-85 ölçülemedi | ✓ ve daha geniş: **1188-1285 hâkim kimliği** ölçülemedi |
| Merkab Hospitalier kimliği yok | ✓ — ama TDV gün verdi: **25 Mayıs 1285** |
| Tartus kimliği | ✓ Templier; ve TDV'nin 1271 ↔ 1291 iç çelişkisi **ikinci TDV maddesiyle çözüldü** (§3.4) |
| 1516 Osmanlı komşu deseni | ✗ komşuların 1516 ve 1918 günleri **kendi kaynaksız** ⇒ komşu günü kuralı (`§4`) DEVRALMAYA İZİN VERMİYOR |

---

## 1. KOORDİNAT — Pleiades birincil, TGN ikincil, al-Ṯurayyā ve GeoNames ek
Pleiades JSON (`/places/<id>/json`, `[lon,lat]`), TGN SPARQL (`vocab.getty.edu`), al-Ṯurayyā
`places.geojson` (GitHub ana dal), GeoNames arama sayfası. Hepsi 10 Ekim 2026'da çekildi. Mesafeler `girdi.km`.

| Nokta | ÖNERİ lat, lon | Birincil tanık | Öteki tanıklar (birincile uzaklık) | Ölçülen yer |
|---|---|---|---|---|
| **Lazkiye** | **35.5200, 35.7781** | Pleiades `668290` Laodicea · loc "OSM Location: Latakia" acc 20 m | Pleiades DARMC 0,36 km · TGN `7002280` 0,60 · Ṯ `LADHIQIYYA_358E355N_S` 2,68 | modern şehir merkezi = antik/ortaçağ şehri (kesintisiz iskân; Pleiades aynı kayıtta ikisini birleştiriyor) |
| **Cebele** | **35.3617, 35.9244** | Pleiades `158138406` Roman Theater of Jableh · OSM çizgisi acc 20 m | Pleiades `668250` Gabala DARMC (acc **10 km**) 1,83 · TGN `1085159` 0,98 · Ṯ `JABALA_359E353N_S` 2,64 | eski şehrin içindeki Roma tiyatrosu. Ortaçağ şehri burası; tiyatronun ortaçağda kale olarak kullanıldığı bilgisi bu turda KAYNAKLA ÖLÇÜLMEDİ, yalnız konum anlamında kullanıldı |
| **Merkab** | **35.1511, 35.9497** | GeoNames "Qal'at al Marqab" — **feature: ruin(s)** | TGN `7002296` Marqab 0,12 | kalenin kendisi. Pleiades ve Ṯ'de YOK (aranan adlar: Margat · Marqab · al-Marqab). ⚠️ GeoNames akademik gazetteer değil, ama `HUKUM §6`: modern konum için yeter; kale yerinde durduğu için site = modern öge, ve TGN ikinci tanık |
| Baniyas (önerilmez) | — | Pleiades `668206` Balanea · DARE acc 100 m: 35.1535, 35.9282 | Pleiades DARMC **5,46** · TGN `1140780` 5,54 · Ṯ `BULUNYAS` 5,14 | 🔴 Pleiades'in iki konumu **5,5 km** ayrı; DARE noktası Merkab'a 2,0 km, öteki üç tanık 5 km kuzeyde modern Baniyas'ta. Antik Balanea ile ortaçağ Bulunyâs aynı yer mi: **ölçülemedi** |
| **Tartus** | **34.8958, 35.8866** | Pleiades `9832296` Ṭarṭūs · "CIGS location" acc 5 m | Pleiades `668190` Antarados DARE 1,24 · TGN `7002313` 0,75 · Ṯ `ANTARTUS_359E348N_S` 1,61 | ortaçağ kaydı (`Anṭarṭūs` adıyla) — Antarados'tan ayrı bir Pleiades kaydı |

**al-Ṯurayyā gürültü sınıfı (LAB: medyan 2,9 · p90 8,7 km):** Ṯ'nin dört farkı (1,61–2,68 km) medyanın altında
⇒ **sinyal YOK**, hiçbiri ≥10 km değil. Ṯ hiçbir yerde tek tanık değil.
**Yakın mükerrer (§11):** dört öneri × 4300 nokta, en yakın atlas noktası: Lazkiye→Antakya 83,4 · Cebele→Hama 79,3 ·
Merkab→Hama 72,9 · Tartus→Trablusşam 51,3 km ⇒ **≤3 km mükerrer 0.** Ad taraması (`data/yerlesimler*.js` + `yer_yama*`):
Lazkiye/Merkab/Cebele için 0. Eşleşen "Tortosa" (İspanya) ve "Cebeleyn" (Sudan) **yanlış pozitif**.
**Öneriler arası:** Lazkiye–Cebele 22,1 · Cebele–Merkab 23,6 · Merkab–Tartus 29,0 · Tartus–Trablusşam 51,3 km.

---

## 2. KİMLİK — `devletler.js` tarandı
```
antakya-prinkipsligi        1098-06-03 → 1268-05-18
antakya-prinkipsligi-lazkiye  (KABUL EDİLDİ, henüz yazılmadı) 1268-05-18 → 1287 (yıl)
trablus-kontlugu            1109-07-12 → 1289-04-26
eyyubi                      1171-09-13 → 1250-04-30
eyyubi-halep                1186-01-01 → 1260-01-01
memluk                      1250-01-01 → 1517-04-13
rodos-sovalyeleri           1310-01-01 → 1798-06-12   (St. Jean = Hospitalier)
Hospitalier (Levant)        YOK      Templier (Dâviyye)   YOK
```
🔴 **ÖNERİ — İKİ YENİ KÜNYE** (kaynak: TDV `daviyye-ve-isbitariyye`, 200 · 17.527 kar):
| id (öneri) | Gerekçe — AYNEN | `t:` |
|---|---|---|
| `isbitariyye` (Hospitalier, Levant) | «O dönemde Hısnülekrâd, Arka, **Merkab**, Sahyûn, Kevkeb ve Beytülcibrîn kaleleri İsbitâriyye'nin … hâkimiyetinde bulunuyordu.» · «Kalavun'un **25 Mayıs 1285**'te İsbitâriyye'ye ait son kale olan Merkab'ı almasıyla bu şövalyelerin Ortadoğu'daki varlıkları sona erdi» | **1285-05-25 (GÜN)** |
| `daviyye` (Templier, Levant) | «**Tartûs**, Bağrâs, Gaston, Safed ve Gazze kaleleri Dâviyye'nin hâkimiyetinde bulunuyordu.» · «… Halîl b. Kalavun'un 1291 Mayısında asıl merkezleri Akkâ'yı zaptetmesinden sonra ellerinde kalan Aslîs ve **Tartûs** kalelerini boşaltarak karargâhlarını … Kıbrıs'a taşıdılar.» · «1302 yılında Tartûs karşısındaki Ruâd adasını da Dâviyye'den aldı.» | Levant kara toprağı: **1291 (Akkâ'dan SONRA)** · Ruâd adası 1302 |

`f:` ikisinde de bu turda ÖLÇÜLMEDİ (ilk kale edinimi `isbitariyye` için TDV aynı maddede: «1136'da Kral V. Foulque'un
Beytülcibrîn'i kendilerine bırakması»; `daviyye` için kuruluş cümlesi okunmadı). Künye işi ayrı kalem.
⚠️ **Alternatif ve niçin önermiyorum:** Tartus'u `trablus-kontlugu`na yazmak TDV `tartus`ta dayanak bulur («Şehir ardından
tekrar Trablus Haçlı Kontluğu'nun hâkimiyetine geçti», 1152 sonrası). AMA ① 1289-04-26 → 1291 dilimi o künyeyi
AŞAR, yani Antakya'nın birebir aynısı yeni bir B vakası doğar ② TDV `daviyye` sahibi adıyla Dâviyye diye anıyor.
Merkab'ı `antakya-prinkipsligi`ne yazmak ise 1268'den sonra imkânsız (künye bitti).
**Boya:** iki kimlik de BOYALAR'a girmeli (`renkler.py`, koordinatör). Girmezse §8 gereği bölge boyanmaz, harita deliği listesine düşer.

---

## 3. `s:` ZİNCİRLERİ — öneri (1000-1280 halkaları önceki raporlardan, 1281-1923 bu turda)
Gösterim: `f → t · d · hassasiyet · kaynak`. 🟡 = koordinatörün seçeceği yer.

### 3.1 Lazkiye — `{ ad:"Lazkiye", tur:"liman", lat:35.5200, lon:35.7781, g:0, k:2, m:"Trablusşam" }`
`k`/`m`: TDV «İlk dönemde Trablusşam eyaletine bağlı sancak merkezi yapılan Lazkiye» · 1887'den sonra «Beyrut'a bağlı bir sancak»
⇒ `m:` zamanla değişiyor. Değişmez 3 açısından `kd:` adayı; bu turda yazılmadı.
```
1086       → 1098       buyuk-selcuklu      YIL   TDV lazkiye «1086'da Selçuklu Sultanı Melikşah şehir ve çevresine hâkim oldu»
1098       → 1108       __BOSLUK__ (beyan)  YIL   «1098'de Haçlılar'ın eline geçti. Bu tarihten itibaren Bizans ile Haçlılar arasında sık sık el değiştiren» — sahip sırası yok
1108       → 1188 🟡    antakya-prinkipsligi YIL  «1108'de Tankred tarafından Antakya Prinkepsliği yönetimine dahil edildi»
1188 🟡    → 1260       eyyubi-halep 🟡     YIL   «584'te (1188) Selâhaddîn-i Eyyûbî'nin hâkimiyetine girdi … 1260'a kadar Eyyûbîler'in Halep kolu yönetiminde kalan»
1260       → 1268-05-18 antakya-prinkipsligi YIL→GÜN «bu tarihte Moğollar'ın Eyyûbîler'in Halep koluna son vermesiyle Antakya Haçlıları'nın eline geçti» · t: TDV antakya
1268-05-18 → 1287 🟡    antakya-prinkipsligi-lazkiye  KOL (B-KOL / YENİDEN EDİNİM, onaylı)
  (v?)  1274/75 → 1287  memluk "vergi"  🟡  «Lazkiye yıllık 20.000 dinar vergiye tâbi tutuldu (673/1274-75)» — vergi ≠ tâbiyet; YAZMA önerim, hüküm sende
1287 🟡    → 1516 🟡    memluk              YIL   «Kalavun tarafından 686'da (1287) Haçlı yönetimine son verilmesiyle tamamen Memlük hâkimiyetine girdi»
d: 1516 🟡 → 1918-10 🟡                      YIL/AY «1516'da Yavuz Sultan Selim'in Halep ve Suriye'deki Memlük hâkimiyetine son vermesiyle Lazkiye Osmanlı yönetimine girdi»
v: 1831    → 1840       misir-kavalali      YIL   «1831-1840 Mısır idaresi devrinde …»
1918-10 🟡 → 1920-07-24 fransa-cumhuriyet   AY    «Ekim 1918'de Lazkiye İngilizler tarafından işgal edildi. Hemen ardından Fransız askerî birlikleri de şehre girdi.»
1920-07-24 → 1923-10-29 suriye-lubnan-mandasi GÜN komşudan: bütün Suriye noktaları · TDV suriye (Meysalun, 24 Temmuz 1920) — komşu günü KAYNAKLI ⇒ kural tutuyor
```
🟡 **1188 ucu:** hicrî 584 = 1188-03-02 … 1189-02-18 ⇒ `1188-01-01` hicrî yılın DIŞINDA. Seçenek: **`1188-07-15`
gün komşudan: Cebele · TDV cebele «18 Cemâziyelevvel 584 / 15 Temmuz 1188»** (aynı sefer, 22 km, komşunun günü
kendi kaynağına dayanıyor ⇒ `§4` şartları tutuyor). Not: Lazkiye o seferde Cebele'den SONRA düştü; komşu günü
birkaç gün erken olabilir, beyanla yazılır.
🟡 **1188-1260 kimliği:** `eyyubi` (künye t 1250-04-30) tek dilim olursa 1250-1260'ı AŞAR. `eyyubi-halep`
(f 1186 · t 1260) pencereyi tutar ve TDV «Halep kolu» diyor, AMA Lazkiye'nin Halep koluna **geçiş yılı bulunamadı**.
Önerim: tek dilim `eyyubi-halep`, `ic_not` ile beyan: «1188 fethi Selâhaddin'in; Halep koluna geçiş yılı bulunamadı».
🟡 **1287 ucu:** hicrî 686 = 1287-02-16 … 1288-02-04 ⇒ `1287-01-01` DIŞLANMIŞ gün (önceki teslimde onaylandı). Nokta
penceresi bir gün dizgisi istiyor. Seçenek: (a) `1287-02-16` = **kaynağın izin verdiği EN ERKEN gün**, `kesinlik` yıl
ve hicrî aralık `ic_not`ta · (b) `1287-01-01` + beyan («kaynağın dışlandığı gün, yalnız biçim»). **Önerim (a).**
Kol künyesinin `t:`si de aynı günü taşımalı (künye ↔ nokta aynı uç, yoksa 4c/4d öter).
🟡 **1516 ucu:** hicrî 922 = 1516-02-04 … 1517-01-23. Daha önemlisi TDV olayı Memlük hâkimiyetinin **SONA ERDİRİLMESİNE**
bağlıyor, yani 24 Ağustos 1516 Mercidâbık'tan sonraya. `1516-01-01` bunu 8 ay öne alır. **Komşu günü DEVRALINAMAZ:**
Trablusşam `d:` 1516-09-26 ve Antakya 1516-08-28 pencereleri **kendi `kaynak:` alanı taşımıyor** (ölçüldü,
`girdi.yukle()`), `§4`ün "komşunun günü kendi kaynağına dayanıyor" şartı tutmuyor. Seçenek: (a) Mercidâbık
günü `1516-08-24` alt sınır olarak (beyanlı) · (b) Lazkiye o dönem Trablusşam eyaletine bağlandığı için
`olaylar_ek5.js:90` «Trablusşam ve Hama'nın Osmanlı idaresine girişi» 1516-09-26 maddesinin KENDİ kaynağı
okunup tutuyorsa onun günü. **Bu turda o maddenin kaynağı okunmadı.**
🟡 **1918 ucu:** TDV yalnız AY veriyor («Ekim 1918»). `1918-10-01` "ayın 1'i" ile "ay biliniyor"u ayırt edemez
(`D213`); hassasiyet alanı şart. Komşuların 1918 günleri de kaynaksız.
📌 Ekim 1918'de önce **İngiliz** işgali var (TDV). Atlas deseni bu dilime doğrudan `fransa-cumhuriyet` yazıyor;
İngiliz dilimi `isg:` mi yazılsın, hüküm sende.

### 3.2 Cebele — `{ ad:"Cebele", tur:"liman", lat:35.3617, lon:35.9244, g:0, k:4, m:"Lazkiye" }`
`m`: TDV «XIX. yüzyılda Cebele Beyrut vilâyetinde Lazkiye sancağına bağlı … kaza merkezi».
```
1109-07-23 → 1188-07-15 antakya-prinkipsligi GÜN  TDV cebele «Ancak Tancred sözünde durmadı … (23 Temmuz 1109)» (KAYNAK-EKSIK §15) · t: «(… 15 Temmuz 1188)»
1188-07-15 → 1285-05-25 __BOSLUK__ 🟡       —    hâkim KİMLİĞİ ÖLÇÜLEMEDİ (aşağıda)
1285-05-25 🟡 → 1516 🟡 memluk               GÜN komşudan  «Memlük Sultanı Kalavun 1285'te şehri zaptederek idarî açıdan Hama'ya bağladı»
d: 1516 🟡 → 1918-10 🟡                       YIL   «Yavuz Sultan Selim 1516'da Cebele'yi de Osmanlı topraklarına kattı»
1918-10 → 1923-10-29  Lazkiye deseni (TDV lazkiye bölgeyi birlikte anlatıyor: «Lazkiye, Tartûs ve Cebelinusayriye'den oluşan bölge»)
```
🔴 **1188-1285 niçin `__BOSLUK__`:** TDV iki cümle veriyor: «1192-1285 yılları arasında Templier ve Hospitalier şövalyeleri
şehri **ele geçirmek için** sürekli mücadele verdiler» (Müslüman elinde olduğunu söylüyor) ve «628'de (1230-31) Cebele'ye
girip … iade etmek zorunda kaldılar». Müslüman hâkimiyeti okunuyor, ama **HANGİ hâkim** olduğu yok. Selâhaddin şehri
«Şeyzer Hâkimi Sâbıkuddin Osman b. Dâye'ye tevdi» etmiş (1188), sonrası yok. Eyyûbî → (hangi kol?) → Memlük
geçişlerinin hiçbiri tarihli değil. `HUKUM §9.1 ⓑ`: «Uydurulmuş bir köprüden iyidir.» Alternatif: 1188-07-15'ten
kısa bir `eyyubi` dilimi + `__BOSLUK__`. Ama `eyyubi` dilimi bitiş günü uydurmadan yazılamıyor.
⚠️ **Petek bedeli (beyan):** 1281-1285'te Cebele `__BOSLUK__` olursa Lazkiye (Latin) ile Merkab (Hospitalier) arasında
~22 km'lik bir dilim beyanlı boşluk görünür. Cebele noktasız bırakılırsa ise o dilim Lazkiye/Merkab peteklerine
emilir ve **Latin boyanır**. TDV tam tersini söylüyor; bu daha kötü (`§2`).
🟡 **1285 günü:** TDV cebele yalnız yıl veriyor. **Komşu günü: Merkab · TDV daviyye-ve-isbitariyye «25 Mayıs 1285»**
(aynı Kalavun seferi, 23,6 km, komşu günü kendi kaynağına dayanıyor) ⇒ `§4` şartları tutuyor, beyanla yazılır.

### 3.3 Merkab — `{ ad:"Merkab", tur:"kale", lat:35.1511, lon:35.9497, g:0, k:0 }`
```
1281-01-01 (pencere ucu) → 1285-05-25  isbitariyye (YENİ)  GÜN  TDV daviyye-ve-isbitariyye «Kalavun'un 25 Mayıs 1285'te İsbitâriyye'ye ait son kale olan Merkab'ı almasıyla…»
                                                          · TDV haclilar «Kalavun önce Merkab Kalesi'ni zaptetti (1285)» · TDV kalavun «(684/1285)»
1285-05-25 → 1516 🟡  memluk
d: 1516 🟡 → 1918-10 🟡   ⚠️ Merkab için 1516 cümlesi YOK; tek dayanak TDV tartus «1516'da Suriye toprakları Osmanlı hâkimiyetine girdi» = BÖLGE hükmü
1918-10 → 1923-10-29  Lazkiye/Tartus deseni
```
1281 öncesi: Hospitalier edinimi (1186/87) TDV'de YOK (KASA §75: tek izinli kaynak PPKE «1187», ikincil). Mazoir dönemi bulunamadı.
`f: 1281-01-01` ölçüm değil **pencere ucudur** (`§4`). Z6 (1000-1280) tarafı ölçülemedi diye kalır.

### 3.4 Tartus — `{ ad:"Tartus", tur:"liman", lat:34.8958, lon:35.8866, g:0, k:4, m:"Trablusşam" }`
`m`: TDV «Beyrut vilâyetinin Trablusşam sancak ve merkez kazasına bağlı … nahiye merkezi».
```
1281-01-01 (pencere ucu) → 1291 🟡  daviyye (YENİ)   TDV daviyye-ve-isbitariyye (yukarıda) · TDV tartus «Halîl b. Kalavun, Akkâ'yı fethettikten sonra aralarında Tartûs'un da bulunduğu bütün Suriye sahillerini Haçlılar'dan temizledi (690/1291)»
isg: 1300 → 1302 🟡 daviyye                TDV tartus «Ervâd adasından gelen Templier şövalyeleri 700-702 (1300-1302) yıllarında Tartûs'ta kaldılar. Muhammed b. Kalavun 702'de (1302-1303) şehri şövalyelerden geri almayı başardı.»
isg: 1367 → 1369 🟡 kibris-krallik        TDV tartus «Kıbrıs Kralı I. Pierre 1367-1369 yıllarında donanmasıyla Ervâd ve Tartûs'a saldırdı, sahildeki şehirleri ele geçirdi.» — akın mı işgal mi ayırt edilemiyor
1291 🟡 → 1516 🟡    memluk
d: 1516 🟡 → 1918-10 🟡   TDV tartus «1516'da Suriye toprakları Osmanlı hâkimiyetine girdi» (bölge cümlesi)
1918-10 → 1923-10-29  TDV lazkiye «Fransızlar Lazkiye, Tartûs ve Cebelinusayriye'den oluşan bölgede "Alevîler toprağı" … kurdular (1920)»
```
🟢 **TDV `tartus` iç çelişkisi (1271 ↔ 1291) — ayrıştırıldı, `D211⑥`:** maddenin kendi 1291 cümlesi ve **ikinci TDV
maddesi** (`daviyye-ve-isbitariyye`: Akkâ'dan SONRA «ellerinde kalan Aslîs ve Tartûs kalelerini boşaltarak») 1291'de
birleşiyor. Aynı ikinci madde 1271'i şöyle anıyor: «Baybars'ın … 1271 yılında da **Sâfitâ** ile Sayda'yı almasından». ⇒
`tartus`taki 1271 «Tartûs'u barış yoluyla teslim ettiler» cümlesi büyük olasılıkla Sâfitâ'yı anlatıyor (Thorau'ya atıf).
**Hipotezdir**, Thorau okunmadı. Ama 1291 iki maddenin ortak tanıklığı, 1271 tek cümle.
🟡 **1291 ucu:** hicrî 690 = 1291-01-04 … 1291-12-23 ⇒ `1291-01-01` hicrî yılın dışında. Üstelik TDV boşaltmayı Akkâ'nın
düşüşünden (TDV haclilar «18 Mayıs 1291») **SONRAYA** koyuyor. Seçenek: **`1291-05-18` = kaynağın izin verdiği EN ERKEN gün**,
beyanla. Bu gün ayrıca Değişmez 2 evrenindeki `olaylar_ek5.js:98` «Akkâ'nın Memlüklere düşüşü — Haçlıların Suriye
kıyısından…» maddesine ±30 gün içinde denk gelir (ölçüldü). Gerçek boşaltma günü: **bulunamadı**.

### 3.5 Baniyas — ÖNERİLMEZ
Gerekçe: ① TDV maddesi yok (`bulunyas`, `baniyas`, `baniyas-suriye` boş/302) · ② KASA §77'de bulunan «Banyas» cümleleri Golan
Bâniyâs'ına mı kıyı Bulunyâs'a mı ait, ayırt edilemedi · ③ konum tanıkları 5,5 km çelişiyor · ④ Merkab'a 2,0–5,5 km ⇒ Merkab
peteği alanı zaten kapsar; sahibi ölçülemeyen bir nokta Merkab'ın 1285 öncesi doğru boyasını BÖLER.

---

## 4. PETEK ETKİSİ (öneri dörtlüsü inerse)
- Lazkiye'nin tek başına inme riski (önceki teslim (b)) kapanır: komşu noktalar 22 · 24 · 29 km aralıkla dizilir.
  Kıyı kesintisiz örtülür ve Lazkiye peteği güneyde Cebele'de durur.
- Kuzeyde **Lazkiye–Antakya 83 km boşluğu KALIR** (Süveydiye/Kuseyr noktası yok). 1268-1287 arasında bu boşluğun yarısı
  Lazkiye (Latin) peteğine düşer. Kuseyr TDV'de bulunamadı (`kuseyr` 302). Süveydiye bu turda ölçülmedi. ⇒ **Ayrı kalem.**
- Doğuda en yakın iç nokta Hama (73–79 km). Cebelinusayriye dağları noktasız; kıyı noktalarının petekleri dağın
  doğusuna taşar. Bu sınıf (`§6` nokta yoğunluğu) bu turun kapsamı dışında, **beyan.**

## 5. DEĞİŞMEZ 2 — yeni kırılmaların kronoloji karşılığı (ölçüldü)
Evren: `data/olaylar*.js` + `data/kronoloji_sinir*.js` (86 dosya), `t:` alanı pencereye göre tarandı:
```
1285-05-25 ±30 (Merkab, Cebele)   0 madde   🔴 YENİ MADDE GEREKİR
1287 (Lazkiye, yıl boyu)           0 madde   🔴 YENİ MADDE GEREKİR
1291-05-18 ±30 (Tartus)            1 madde   olaylar_ek5.js:98 Akkâ'nın düşüşü ✓ (t 1291-05-18 seçilirse)
1516-08..10 (Osmanlı d:)           8 madde   ör. olaylar_ek5.js:90 Trablusşam-Hama 09-26 · :161 Halep 08-28
1918-10 / 1920-07-24               var       olaylar_ek.js:89 Şam 10-01 · olaylar_2s_0920.js:176 1920-07-01
1268-05-18                         0 madde   (1281 penceresi dışında; 2s kapsamına girip girmediği ölçülmedi)
```
⚠️ Tarama yalnız TARİH yakınlığını ölçtü. `denetle.py`nin yer eşlemesi yapıp yapmadığını bu turda sormadım. Nokta inince
`py arac/denetle.py` asıl cevaptır.

---

## Ne ölçemedim / bulamadım
- Cebele 1188-1285 hâkim kimliği · Lazkiye'nin Eyyûbî Halep koluna geçiş yılı · Lazkiye 1098-1108 sahip sırası
- Merkab'ın Hospitalier'ye geçişi (1186/87) TDV'de yok · Tartus'un 1188 sonrası Latin'e dönüş yılı · Tartus 1291 boşaltma günü
- `isbitariyye`/`daviyye` künyelerinin `f:` günü · Baniyas'ın antik/ortaçağ konum kimliği
- 1516 ve 1918 için kaynaklı gün (komşuların günleri kaynaksız; `olaylar_ek5.js:90` maddesinin kaynağı okunmadı)
- Kuseyr (slug 302) · Süveydiye (ölçülmedi)

## Önceki teslime DÜZELTME — yan bulgu (d)
Trablusşam `trablus-kontlugu` penceresinin `1289-01-01`i bir unutkanlık değil, **beyanlı yıl**: pencerenin kaynağı TDV `trablussam`
«688'de (1289)» ve kayıt «künye t 1289-04-26 kaynak değildir» diyor. Bulgu yine geçerli ama sınıfı değişiyor. ① Gün başka
bir TDV maddesinde VAR: `haclilar` «26 Nisan 1289'da şehri zaptetti». ② hicrî 688 = 1289-01-25 … 1290-01-13 ⇒ `1289-01-01`
hicrî yılın dışında, aynı tuzak. ⇒ **"~4 ay erken" değil: "gün kaynağı varken yıl yazılmış ve yıl ucu kaynağın dışında".**

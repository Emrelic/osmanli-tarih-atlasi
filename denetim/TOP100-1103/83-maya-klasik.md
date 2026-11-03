# 83 · Maya (Tikal / Calakmul) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer: top100_olc.py; kaynak okumaları bu oturumda)

## Özet
- **Künye 7** (Maya çekirdeği): `tikal-mutul`, `kaanul`, `maya-klasik` (çatı), `caracol-maya`, `mayapan-birligi`, `maya-orta-preklasik`, `maya-sehir-devletleri`. (Öteki Maya polity'leri — copan, palenque-baak, quirigua, yaxchilan, piedras-negras-yokib, dos-pilas-petexbatun, uxmal, chichen-itza, kaqchikel-kralligi — bu devletin kapsamı dışında bırakıldı.)
- **Açık kırılma: 11** (kaanul 3 · maya-sehir-devletleri 8). Öteki 5 künyede 0 açık (tikal-mutul 2, caracol 2, mayapan 1, orta-preklasik 4 kırılma; hepsi kapalı). "Yalnız otomatik madde" sayısı 0.
- **Eksik madde:** Kaan/Calakmul için Değişmez 2 evreninde (olaylar*/kronoloji_sinir*) **hiç madde yok**; Tikal için yalnız 292 (zincir-başı) ve 869 (son) var. Aşağıda 7 Tikal/Kaan + 3 Post-Klasik satır önerildi.
- **En ağır 3 bulgu:**
  1. **Calakmul'un `kaanul` sahipliği 636–909 kaynakla uyuşmuyor.** Martin 2024: Yılan sülalesinin Calakmul'daki konaklaması "little more than 115 years" (≈635→751), 751'de Yarasa amblemi dönüyor; 9. yy için "hypothetical". M&G 2008: 849'dan sonra devletin sürüp sürmediği sorgulu. Öneri: Calakmul `kaanul` dilimini 0751'de kes, 751–909'u beyanlı boşluk yap. Calakmul'da 435–636 de sahipsiz (Stela 114 = 435, Stela 43 = 514, Yarasa amblemi).
  2. **Kaan/Calakmul'un kronolojisi yok** (3 açık kırılma: 0520 Dzibanché, 0636 geçiş, 0909 son) + `kaanul` künye `ic_not`unda "520-546 = Yuknoom Ch'een I" yanlış atfı: 520/537/546 tarihleri **Tuun K'ab Hix (= K'altuun Hix, 15. kral)** içindir (Martin 2024 Tablo 1); Yuknoom Ch'een I Dzibanché merdiveninde tarihsiz anılır.
  3. **Uzun Sayım→Jülyen korelasyonu tutarsız/beyansız:** M&G 2008 (s. 14) GMT+2 (584285) + Jülyen kullanır. Atlas tikal-mutul/kaanul'da korelasyonu hiç beyan etmiyor; copan zincirinde "GMT korelasyonu 584285" diye yanlış etiketliyor (584285 = GMT+2; saf GMT = 584283); Caracol 9.5.19.1.2 = 0553-04-14 (584283 sonucu) ama M&G/GMT+2 ile 16 Nisan 553; Siyaj K'ak' 0378-01-16 ise GMT+2'nin **Gregoryen** karşılığı — Jülyen 15 Ocak.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| tikal-mutul | Mutul (Tikal) Krallığı | 0090-01-01 | 0869-01-01 | VAR. Mükerrer tikal-mutal 2 Kasım'da birleştirilmiş (ic_not). Haritada 1 yerleşim (Tikal 292–869). f=90 geriye dönük hanedan kuruluşu (±70 yıl); yerleşim penceresi 292 |
| kaanul | Kaanul (Kaan, Yılan Krallığı) | 0520-01-01 | 0909-01-01 | VAR; haritada 2 yerleşim (Dzibanché 520–636, Calakmul 636–909). t ve ic_not düzeltilmeli (b-bölümü) |
| maya-klasik | Klasik Maya Şehir Devletleri (genel çatı) | 0250-01-01 | 0900-01-01 | VAR, **0 yerleşim** (haritada görünmüyor). Tikal/Kaan/Caracol/Copan ile ÖRTÜŞEN çatı — **MÜKERRER (çatı/üst küme)**: tek başına sahiplik ifade etmiyor; ya silinmeli ya yalnız kronoloji çatısı olarak kalmalı |
| caracol-maya | Caracol Krallığı | 0331-01-01 | 0859-01-01 | VAR; 1 yerleşim; evren: 331, 859 (kronoloji_sinir_orta_ms0600.js:13-14) |
| mayapan-birligi | Mayapan Birliği | 1100-01-01 | 1450-01-01 | VAR; 1 yerleşim ama Mayapán `s:` 1100–1281 burada, 1281–1441 `maya-sehir-devletleri`'nde → **tutarsız** (b) |
| maya-orta-preklasik | Orta Preklasik Maya (kültür) | -0999-01-01 | -0399-01-01 | VAR; 4 yerleşim; kırılmaları kapalı (olaylar_arkeoloji_*) — bu denetimin odağı dışı |
| maya-sehir-devletleri | Maya Şehir Devletleri (Post-Klasik) | 1000-01-01 | 1697-03-13 | VAR; 10 yerleşim; **MÜKERRER/örtüşme:** mayapan-birligi (1100–1450) ile aynı toprak, aynı dönem; ayrıca künyenin kendi `ic_not_f` 'KUŞAK UCU' |
**Eksik parça:** (1) Calakmul'un 751 sonrası sahibi (Yarasa/Chiik Nahb hanedanı) ve 435–636 Calakmul künyesi yok; (2) Tikal 562–692 "hiatus" ayrı evre gerektirmiyor (aynı polity, Mutul); (3) Tikal'in Petén'deki çevresi (Uaxactun, El Perú, Naranjo, Yaxhá) için yerleşim yok — Tikal tek noktası petek motorunda bütün orta Petén'i emer (sınır doğrulanmadı, Voronoi doğal sonucu; BEYAN gerekir).

## b) f/t ve evreler
Korelasyon: aşağıdaki Mîlâdî günler **Jülyen, GMT+2 (584285)** — M&G 2008 s. 14 ("All Christian conversions in this volume keep to the common GMT+2 and are given in the Julian calendar"). Kendi hesabım (lc83.py, Meeus; doğrulandı: JDN 2299160 = 4 Ekim 1582 Jülyen).

| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| tikal-mutul f | 0090 (±70) | Calvin/FAMSI (M&G 2008 temelli): "YAX EHB XOOK (ca. AD 90)" | Penn Museum Expedition "Time of Kings and Queens": hanedan kurucusu (yıl verilmiyor, okunan sayfada); M&G: "first contemporary date, on Stela 29, does not appear until 292" | hanedan tarihi geriye dönük; ilk çağdaş yazıt 292. Künye f=90 kabul, yerleşim 292 doğru | f değişmez; `ic_not`a "ilk çağdaş tarih 292 (M&G)" eklensin (Tikal `s:` 292'de başlıyor, zaten) |
| tikal-mutul t | 0869-01-01 | M&G: "Stela 11, erected for the 10.2.0.0.0 mark of 869 … the city's final sculpture" | Calvin/FAMSI "ca. AD 869?" (atlas künyesinden okundu, yeniden açılmadı) | 10.2.0.0.0 = **13 Ağustos 869** (Jülyen, GMT+2, kendi hesabım: JDN 2038685) — künye `ic_not`undaki 13 Ağustos ile uyuşuyor. Yıl hassasiyeti uygun. | değişmez |
| kaanul f | 0520 | Martin & Grube 2008 Calakmul bölümü: liste "K'altuun Hix >520-546>" | Martin 2024, *Ancient Mesoamerica* 35:822-838, Tablo 1: "Tuun K'ab Hix (520, 537, 546)" | **Yıl doğru, atıf yanlış:** 520-546 Ruler 15 (Tuun K'ab Hix), Yuknoom Ch'een I değil. Yuknoom Ch'een I Dzibanché 'captive stairway'de anılır, "two might fall as early as the 5th century" (M&G). f için yüzyıl hassasiyeti tutulabilir. | f=0520 kalsın; `ic_not`ta "Yuknoom Ch'een I 520-546" cümlesi "Tuun K'ab Hix (K'altuun Hix) 520/537/546 — Martin 2024 Tablo 1" olarak düzeltilsin. Ön-520 Yılan krallığı (5. yy) için "tarihler belirsiz" beyanı |
| kaanul geçiş (Dzibanché→Calakmul) | 0636-01-01 | Martin 2024: La Corona Element 33 "a kaj '(re)settling' in A.D. 635 … sits well with the point at which Calakmul became the new serpent capital" ; "just 58 days before his accession in 636, there was a battle" | M&G 2008: "Yuknoom Ch'een … on his accession in 636" | İki kaynak 635/636 | `s:` sınırı 0636-01-01 doğru (yıl hassasiyeti); 635 beyanı `ic_not`a |
| kaanul t | 0909-01-01 | M&G 2008: Stela 61 (Aj Took') "899 or 909 … the latter, the full 10.4.0.0.0 ending, is preferable"; "849 … Chan Pet 'witnessed' … we should question whether the state still existed in any form worth the name" | Martin 2024 (s. 836): "sojourn of the serpent kings at uxte'tuun chiiknahb endured for little more than 115 years"; "Trouble reached the capital by 751 … revival of the Bat emblem"; "might later have reestablished itself … this remains hypothetical" | **ÇELİŞKİ / AŞIM:** Yılan sülalesinin Calakmul'da sürdüğü kaynaklı süre ≈ 635→751. 909 yalnızca Calakmul'da son yazıtlı K'atun sonu (10.4.0.0.0 = 15 Ocak 909 Jülyen GMT+2, kendi hesabım) ve devlet sürekliliği kanıtı değil. CLAUDE.md sınıflaması: "devlet öldüyse dönemi KISALT". | Calakmul `s:` 0636→**0751** (`kaanul`), 0751→0909 `__BOSLUK__` (beyan: Yarasa/Chiik Nahb hanedanı, künye yok, M&G + Martin 2024). Künye t ya 0751-01-01'e inmeli ya da ardıl künye (örn. `calakmul-uxtetuun`) açılmalı. **Karar KASA'nın**; ben iki ucu da ölçtüm: 909'u tutmak kaynakla çelişir. |
| caracol-maya f/t | 0331 / 0859 | M&G: "331 … 349"; Stela 10 "half-K'atun 10.1.10.0.0 of 859" | Chase & Chase / UH 2025 (atlas künyesinden; açılmadı) | Yıl hassasiyeti uygun; 859 = son tanık | değişmez. Not: Caracol 9.5.19.1.2 künye kronolojisinde 0553-04-14 = GMT (584283) Jülyen; GMT+2 → **0553-04-16**. Korelasyon beyanı gerek (evren dışı satır) |
| mayapan-birligi f/t | 1100 / 1450 | Kennett vd. 2022, *Nature Communications* 13:3911 (Europe PMC PMC9296624, bu oturumda okundu): "governed from at least 1100 to 1450 cal. CE"; ayrıca "1200–1450", "Mayapan's collapse … 1441–1461", MB3 "Xiu-led massacre … K'atun 8 Ahau (1441–1460)" | Peraza Lope vd. 2006, *Ancient Mesoamerica* "Chronology of Mayapan" (atlas künyesinden, açılmadı) | f=1100 'en az' alt sınır; 1200 alternatif beyanlı. Mayapán yerleşiminde `bit:1441` ≠ künye t=1450 (9 yıl) | Künye t ile `Mayapán` `s:`/`bit` aynı güne bağlansın: önerim ikisi de 1441-01-01 ("aralığın başı" geleneği) + `ic_not`: "Kennett: 1441–1461 çöküş aralığı, ~1450 terk". Ayrıca Mayapán 1281–1441 dilimi `mayapan-birligi` olmalı (künye kapsıyor), `maya-sehir-devletleri` değil |
| maya-sehir-devletleri t | 1697-03-13 | Jones 1998, *Conquest of the Last Maya Kingdom* (atlas künyesi; açılmadı): 13 Mart 1697 | Peniche Montfort 2017, XXX Simposio Arqueol. Guatemala (mesoweb Simposio/pdf/30, okundu): "Ursúa conquista Tayasal el 14 de marzo de 1697" | **1 gün çelişki** (13 vs 14 Mart; ikisi de Gregoryen, İspanya 1582'de geçti) | t=1697-03-13 kalsın (Jones birincil monografi), `ic_not`a "Peniche 2017: 14 Mart" yazılsın; Jones erişilemedi → aşağıda listelendi |
| maya-klasik f/t | 250 / 900 | encyclopedia.com "classic (250–900)" (atlas) | Penn/Martin-Grube: ilk Uzun Sayım Tikal 292 (Stela 29); en son 909 (M&G s. 13) | Çatı; 250 yaklaşık, ilk Uzun Sayım 292; son Uzun Sayım 909 (>900) | Çatı künye kronolojik beyan olarak 250–909 yorumuyla "yaklaşık"; veya kaldır |

## c) Kronoloji (Değişmez 2 evreni: olaylar*.js · kronoloji_sinir*.js)
**Var olanlar**
- Tikal 0292-01-01 "ilk kaynaklı kayıt" — data/kronoloji_sinir_dogu_500_1281.js:11886-11908 (zincir-başı; yıl)
- Tikal 0869-01-01 "son hanedan anıtı sonrası kraliyet iktidarı kalmadı" — data/kronoloji_sinir_dogu_500_1281.js:8226-8248 (yüzyıl hassasiyeti)
- Caracol 0331 ve 0859 — data/kronoloji_sinir_orta_ms0600.js:13-14
- Mayapán 1100 başlangıç — data/kronoloji_sinir_dogu_500_1281.js:3105; Mayapán terk 1441 — data/kronoloji_sinir_guney_g8.js:92; Tiho/Mérida 1542 — g8.js:130
- Kaanul/Calakmul/Dzibanché: **evrende SIFIR madde**; künye `kronoloji:` maddeleri (0520 kurulus, 0909 son) **evren dışı** ("var, evren dışı").
- Tikal künyesinin kendi `kronoloji:` maddeleri (378, 562, 695…) evren dışı; maya-klasik 378/562/695 de evren dışı (devletler.js:20730-20735).

**Önerilen maddeler** (gün Jülyen, GMT+2; her biri en az 2 kaynak)
```
{ t:"0378-01-15", b:"Siyaj K'ak' Tikal'e geldi (entrada); 14. kral Chak Tok Ich'aak'ın ölümüyle rejim değişti", yer_id:"Tikal", kaynak:"Martin & Grube, Chronicle of the Maya Kings and Queens, 2. bsk. 2008 (archive.org chronicle-2008-martin-grube-ocr, OCR okundu): «arrival at Tikal of a lord called Sihyaj K’ahk’ … on 15 January 378» ve «Death 15 January 378 (8.17.1.4.12)»; Penn Museum Expedition 'Time of Kings and Queens': «the death of Tikal's 14th king, Chak Tok Ich'aak, in 378 CE, there was a regime change». GMT+2 Jülyen (M&G s.14); atlas künye 0378-01-16 = aynı Uzun Sayımın Gregoryen karşılığı — düzeltilmeli." }
{ t:"0379-09-12", b:"Yax Nuun Ayiin I Tikal tahtına oturtuldu", yer_id:"Tikal", kaynak:"M&G 2008: «his elevation in September 379»; 8.17.2.16.17 = 12 Eylül 379 (Jülyen GMT+2, kendi hesabım; Calvin/FAMSI aynı gün); Penn Expedition: 15. kral olarak tahta çıktı (yıl verilmiyor)." }
{ t:"0520-01-01", b:"Kaan (Yılan) krallığının ilk kaynaklı kralı Tuun K'ab Hix (520, 537, 546) — Dzibanché çevresi", yer_id:"Dzibanché (Tzibanche)", kaynak:"Martin 2024, Ancient Mesoamerica 35:822-838, Tablo 1; M&G 2008 Calakmul bölümü (K'altuun Hix >520-546). Yüzyıl hassasiyeti (liste başı); ön-520 tarihler belirsiz." }
{ t:"0562-01-01", b:"Kaan ittifakı 'yıldız savaşı' ile Tikal'i yendi; Wak Chan K'awiil öldürüldü, Tikal 'hiatus'a girdi", yer_id:"Tikal", kaynak:"M&G 2008: «In April 562 Tikal's Wak Chan K'awiil fell victim to…» (ay: Nisan; gün teyitsiz); Penn Expedition: «the Kaan alliance struck and won a decisive victory in 562 CE». Gün okunmadı → 01-01 + 'Nisan 562' beyanı." }
{ t:"0636-01-01", b:"Kaan sülalesi başkentini Dzibanché'den Calakmul'a taşıdı; Yuknoom Ch'een II (Büyük) tahta çıktı", yer_id:"Calakmul", kaynak:"Martin 2024: «a kaj '(re)settling' in A.D. 635 (La Corona Element 33)» ve «just 58 days before his accession in 636, there was a battle»; M&G 2008: «on his accession in 636». Yıl hassasiyeti; 635 beyanı. (Dzibanché `t` ve Calakmul `f` kırılmasını kapatır — ölçerdeki AÇIK 0636.)" }
{ t:"0657-01-01", b:"Yuknoom Ch'een II Tikal'i ele geçirdi; Tikal sürgünde", yer_id:"Tikal", kaynak:"M&G 2008 (OCR): «the first major setback occurred in 657, the earliest … Yuknoom the Great seized Tikal»; Martin 2024: «conquest of Tikal in 657»." }
{ t:"0695-08-05", b:"Jasaw Chan K'awiil Calakmul'u yendi (Yich'aak K'ahk''ın simgelerini 'indirdi')", yer_id:"Tikal", kaynak:"M&G 2008 (OCR 'S August 695' = 5 Ağustos okuması; OCR belirsiz → doğrula); Penn Expedition: «In 695 CE Tikal struck back and defeated Calakmul». Gün OCR güvenilir değil: kesin değilse 0695-01-01 + 'Ağustos 695' beyanı." }
{ t:"0751-01-01", b:"Calakmul'da Yılan hanedanı çöktü; Yarasa amblemi geri döndü (9.16.0.0.0 ≈ 5 Mayıs 751 K'atun sonu)", yer_id:"Calakmul", kaynak:"Martin 2024 s.836: «Trouble reached the capital by 751, the period ending 9.16.0.0.0, when we see a revival of the Bat emblem»; «endured for little more than 115 years»; M&G 2008: 790-810 son anıtlar, 849 son dış atıf. Yıl hassasiyeti." }
{ t:"0909-01-01", b:"Calakmul Stela 61 (Aj Took'): bilinen son yazıtlı K'atun sonu (10.4.0.0.0)", yer_id:"Calakmul", kaynak:"M&G 2008: «899 or 909 (the latter, the full 10.4.0.0.0 ending, is preferable)»; 10.4.0.0.0 = 15 Ocak 909 Jülyen GMT+2 (kendi hesabım). 'devlet sonu' DEĞİL, son tanık (alt sınır) — yalnızca Calakmul `s:` 909'a kadar kalacaksa gerekir." }
{ t:"1697-03-13", b:"İspanyollar Nojpetén'i (Tayasal) alıp son bağımsız Maya krallığını ortadan kaldırdı", yer_id:"Nojpetén (Tayasal / Flores)", kaynak:"Jones 1998 (13 Mart; erişilemedi) ‖ Peniche Montfort 2017 (14 Mart). Çelişki beyanı." }
```
(Not: son satır `maya-sehir-devletleri` kırılması 1697-03-13'ü kapatır; künye `kronoloji:` içinde var ama evren dışıdır.)

## d) Harita uyumu
Açık kırılma toplamı: **11** (kaanul 3 + maya-sehir-devletleri 8) + 5 künyede 0.

| gün | yerleşim | durum | öneri |
|---|---|---|---|
| 0520-01-01 kazanç | Dzibanché | madde yok | c) 0520 satırı |
| 0636-01-01 kayıp | Calakmul / Dzibanché | madde yok | c) 0636 satırı |
| 0909-01-01 kayıp | Calakmul | madde yok | **önce sahipliği düzelt** (0751 kesimi), sonra 0751 satırı; 909 yalnız beyanlı boşluk ucu |
| 1400-01-01 kazanç | Utatlán (Q'umarkaj) | madde yok | kuruluş yılı (atlas `kur:1400`) için akademik kaynak bu oturumda bulunamadı; ERİŞİLEMEYEN listesi. Yerleşim `kur` değeri kaynaklanmadan evren maddesi yazılmamalı |
| 1470-01-01 kazanç | Iximché | madde yok | Guillemin 1967, *Expedition* 9(2), Penn Museum: Iximché "around 1470" (Annals of the Cakchiquels'e göre) — tek kaynak; 2. kaynak: Restall & Asselbergs 2007 (erişilemedi) |
| 1524-03-07 kayıp | Utatlán | madde yok | Alvarado, K'iche' krallarını yakıp şehri yaktı; gün akademik kaynakla teyit edilemedi (Penn/Guillemin yalnız "April 1524'ten önce"); Restall & Asselbergs 2007 gerekli |
| 1524-07-25 kayıp | Iximché | madde yok | **ÇELİŞKİ:** Guillemin 1967: Alvarado Iximché'ye "April 14, 1524" geldi; Santiago başkenti 1527'de Almolonga'da kuruldu (25 Temmuz 1524 verilmiyor). Atlas `s:` 25 Temmuz 1524'te Iximché'yi İspanya yapıyor — kaynakla doğrulanamadı. 14 Nisan 1524 varış tarihi için madde yazılabilir; "İspanyol egemenliği" günü doğrulanmadı |
| 1525-01-01 kayıp | Zaculeu | madde yok | Gonzalo de Alvarado teslim alışı Eylül 1525 (yalnız popüler/askerî tarih sitesi — dayanak DEĞİL). Akademik kaynak gerekli |
| 1530-01-01 kayıp | Acalán | madde yok | kaynak (Scholes & Roys 1948) açılmadı |
| 1547-01-01 kayıp | Chichén Itzá | madde yok | yıl ((Chamberlain 1948: pasifikasyon 1546-47) atlas yorumu; açılmadı |
| 1697-03-13 kayıp | Nojpetén | künye kronolojisinde var, evren dışı | c) son satır |

**Sahiplik uyumu (en geniş an):**
- `maya-sehir-devletleri` en geniş yılı 1401'de 9 yerleşim (Mayapán, Maní, Sotuta, Chichén Itzá, Utatlán, Zaculeu, Nojpetén, Potonchán, Acalán). **Chichén Itzá 1281–1547 `maya-sehir-devletleri`**: M&G/künye 1200'de devlet evresini bitirdi; Kennett: Chichén 1000–1100 cal CE'de çöktü. 1200–1281 `__BOSLUK__` beyanlı; 1281 sonrası "dini/hac merkezi" kaynaksız Maya devletine bağlı. Beyan gerekir (uyarı).
- Tikal 292–869 tek yerleşim → petek çok geniş; Tikal çevresindeki Uaxactun/Naranjo/El Perú noktaları olmadığı için "Mutul" toprağı gerçek etkisinden büyük görünür (yaklaşıklık beyansız). Öneri: Uaxactun, Yaxhá, Naranjo, El Perú-Waka' yerleşimleri kaynaklı eklensin (başka makine).
- Caracol/Kaanul/Tikal arası Calakmul 636–909 geniş peteği yanlış sürekliliği haritaya yansıtıyor (b-bölümü bulgusu).
- Dzibanché 520–636 `kaanul` — M&G + Martin 2024 uyumlu.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `kaanul` (satır ~22794): `ic_not` "Yuknoom Ch'een I (liste 520-546)" → "Tuun K'ab Hix (K'altuun Hix) 520/537/546 — Martin 2024 Tablo 1"; t/Calakmul kararı: Calakmul'da Yılan konaklaması ≈635/636→751 (Martin 2024, M&G 2008 849/909 sorgusu). Öneri: `t:"0751-01-01"` + ic_not'ta 909 = son Calakmul yazıtı (alt sınır), 849 = son dış atıf.
2. `data/yerlesimler_once1281_yt_amerika.js:21` Calakmul `s:` → `[{f:"0636-01-01",t:"0751-01-01",d:"kaanul",kesinlik:{f:"yil",t:"yil"},kaynak:"… Martin 2024 …"},{f:"0751-01-01",t:"0909-01-01",d:"__BOSLUK__",kaynak:"BOŞLUK BEYANI: …"}]`; ve 0435–0636 için ek `__BOSLUK__` (Stela 114=435, Stela 43=514, Yarasa amblemi, M&G).
3. `data/devletler.js` `tikal-mutul` künye kronolojisi: Siyaj K'ak' `0378-01-16` → `0378-01-15` (M&G, GMT+2 Jülyen); ic_not'a "Uzun Sayım→Jülyen, GMT+2 584285" korelasyon beyanı. Caracol 0553-04-14 → 0553-04-16 (GMT+2) veya korelasyon beyanı.
4. `data/yerlesimler_amerika.js:300` Mayapán: `s:` [{1100–1441 mayapan-birligi}]; devletler.js `mayapan-birligi` t ↔ yerleşim `bit` hizası (1441 ya da 1450, beyanla).
5. Evren maddeleri: c) bölümündeki 10 satır (özellikle 0520, 0636, 0751).
6. `maya-klasik` (0 yerleşim, çatı) — **MÜKERRER/örtüşme**: Karar: kaldır veya `ic_not`ta "çatı, sahiplik taşımaz" yaz. `maya-sehir-devletleri` ↔ `mayapan-birligi` örtüşmesi (1100–1450) de **MÜKERRER** olarak bildirilir.
7. Korelasyon beyanı kuralı: bütün Maya Uzun Sayım günlerinde `ic_not_takvim`: "GMT+2 (584285), Jülyen, M&G 2008 s.14" (copan'daki "GMT=584285" etiketi yanlış: GMT=584283).

## Erişilemeyen kaynaklar
- Grant D. Jones, *The Conquest of the Last Maya Kingdom*, Stanford UP 1998 — Soru: Ursúa'nın Nojpetén'i aldığı gün 13 mi 14 Mart 1697 mi?
- Restall, M. & F. Asselbergs, *Invading Guatemala*, Penn State UP 2007 — Soru: Q'umarkaj'ın yakıldığı gün (7 Mart 1524?), Iximché'nin İspanyol başkenti oluşu (25 Temmuz 1524?), Zaculeu'nun teslimi (1525 hangi ay?).
- Peraza Lope vd. 2006, *Ancient Mesoamerica* 17 "The Chronology of Mayapan" (Cambridge Core, açılmadı) — Soru: Mayapán'ın 1100/1150/1200 başlangıcı ve 1441 çöküş tarihi.
- Scholes & Roys 1948 (Acalán); Chamberlain 1948 (Yucatán fethi) — Soru: Acalán 1530 ve Chichén Itzá 1547 sınırları.
- Martin 2020, *Ancient Maya Politics*, CUP — Soru: Calakmul'da 751 sonrası Kaan varlığı ("Martin 2020:141").
- Calvin, FAMSI "Royal Dynasties III" PDF (açılmadı; atlas künyesinden alıntı) — Soru: Chak Tok Ich'aak ölümü/Siyaj K'ak' günü.
- Britannica "Maya" 403 verdi.

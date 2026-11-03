# 48 · Habsburg Monarşisi / Avusturya İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (ölçer: top100_olc.py habsburg macaristan-habsburg avusturya-dukaligi; `--ara avusturya|habsburg` → `habsburg`, `macaristan-habsburg`, `avusturya-dukaligi`, `avusturya-marki`, `avusturya-hollandasi`, `habsburg-hollandasi`, `bosna-isgal`, `avusturya-cumhuriyet`, `avusturya-ikinci-cumhuriyet`)

## Özet
- Eşleme: ana künye `habsburg` (1282-12-27 → 1918-11-12, `harita:"avusturya"`); ona bağlı 4 künye (macaristan-habsburg, avusturya-hollandasi, bosna-isgal, bohemya→1526) + öncül (avusturya-marki, avusturya-dukaligi) + ardıl (avusturya-cumhuriyet). Evre bölünmesi (Arşidüklük / İmparatorluk 1804 / Avusturya-Macaristan 1867) künyede YOK, kronoloji maddeleriyle taşınıyor; BÖLME önerilmez.
- **Ölçer artefaktı:** ölçer `habsburg`ı `d:"habsburg"` ile arıyor → "1 yerleşim, 0 açık" der. Yerleşim sahipliği `d:"avusturya"` (harita boya anahtarı; `denetle.py` `_D7_AILE` bunu HABSBURG ailesine bağlar) ile yazılmış. Ölçeri `d ∈ {id, harita}` olarak yamadığımda (scratchpad `top100_olc_h.py`): **126 yerleşim, en geniş an 1839 (80), kırılma 67, AÇIK 25.** Kardeş künye `macaristan-habsburg`: 91 yerleşim, AÇIK 21 (ayrı dosya yok; sınırı burada raporlandı).
- **En ağır 3 bulgu:** (1) Bohemya Tacı toprakları (Brno, Prag, Glatz, Olomouc, Opava, Breslau…) Habsburg'a **1526-08-29** (Mohaç günü) geçiyor görünüyor; kaynak: Ferdinand Bohemya kralı **1526-10-23**, Silezya zümreleri **1526-12-05** (evrende iki madde de var: `olaylar_avmac_b_1029.js:15`, `olaylar_2s_1019.js:325`; atlas kendi `ic_not`unda "ayrı düzeltme borcu" yazmış). 55-97 gün boyunca (Mohaç → seçim) Habsburg sahip değil, taht boş. (2) Künye `kronoloji:` 1526-08-29 satırı "I. Ferdinand Mohaç sonrası Bohemya-Macaristan tacını aldı" — iki tacın günü 23 Ekim / 17 Aralık, Mohaç değil. (3) 25 AÇIK'ın 16'sı mevcut antlaşma maddelerinin (Campo Formio, Schönbrunn, Pressburg, Rastatt, Breslau, Saint-Germain, Viyana Kongresi, Magenta, Rijswijk…) **yer listesinde ilgili şehir olmaması**; yeni madde gerekmeden `yer`/`odak_yer` eklenerek kapanır.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| habsburg | Habsburg Avusturya | 1282-12-27 | 1918-11-12 | ANA. harita `avusturya`; tur "imparatorluk" 1282'den başlıyor (1804 öncesi arşidüklük/dükalık; anakronik etiket, süreklilik gerçek) |
| avusturya-marki | Avusturya Markı | 0976-01-01 | 1156-09-17 | öncül (Babenberg) |
| avusturya-dukaligi | Avusturya Dükalığı | 1156-09-17 | 1276-11-21 | öncül; Viyana s: 1276-11-21 → 1282-12-27 `almanya` (Rudolf yönetimi), sonra `avusturya` |
| macaristan-habsburg | Macaristan Krallığı (Habsburg Tacı) | 1526-12-17 | 1918-11-16 | aynı hanedan, ayrı taç (D7 aile) |
| habsburg-hollandasi | Habsburg Hollandası | 1482-03-27 | 1581-07-26 | Habsburg (Burgonya mirası), İspanyol kolu sıra 13'e ait |
| avusturya-hollandasi | Avusturya Hollandası | 1714-01-01 | 1795-10-01 | Habsburg'un Utrecht/Rastatt mülkü |
| bosna-isgal | Bosna-Hersek (Avusturya İşgali) | 1878-07-13 | 1908-10-06 | s: 1908-10-05 `avusturya` ile 1 gün çakışma (bkz. d-10) |
| bohemya | Bohemya Krallığı | 1198-01-01 | 1526-08-29 | t=Mohaç günü ⇒ bkz. b; Bohemya künyesi ayrı ajanın |
| polonya-naiplik-kralligi, avusturya-cumhuriyet | ardıl | — | — | ardıl; cumhuriyet f 1918-11-12 ile hizalı |
Eksik parça: yok (Arşidüklük/Avusturya İmp./Avusturya-Macaristan künyede tek parça; öneri BÖLME YOK). İsteğe bağlı: Silezya/Lombardiya-Venedik gibi Habsburg mülkü künyeleri yok, `d:"avusturya"` doğrudan.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 1282-12-27 (`ic_not_f` zaten beyanlı) | NDB 22 (2005), «Rudolf II.», H. Dopsch, deutsche-biographie.de/sfz38609: «Die Belehnungsurkunde vom 27.12.1282» | Treccani «Austria»: 1282 Rudolf Avusturya/Stiria/Krain'ı oğulları Albrecht ve Rudolf'a verdi (yıl); Austria-Forum: Hoftag 17.12, Willebrief 27.12.1282 | DOĞRU. 17/27 Aralık farkı: 17'si Hoftag onayı, 27'si belge — künye 27'yi seçmiş, `ic_not_f`ta beyanlı. ADB (Loserth) "Noel'den birkaç gün önce". Takvim: Jülyen. |
| öncül t | avusturya-dukaligi 1276-11-21 | NDB «Přemysl Otakar II.» (atlas kaynağı) | Treccani «Austria»: 1278'de Avusturya Rudolf'a geçti | Atlas 1276-11-21'i (Viyana antlaşması) alıyor; Marchfeld/Dürnkrut 1278-08-26 evrende YOK (c). Çelişki değil, evre farkı. |
| Bohemya Tacı'nın geçişi | 1526-08-29 | evren `olaylar_avmac_b_1029.js:15-19`: Ferdinand Bohemya kralı 1526-10-23 (Habsburger.net «Ferdinand I: new crowns for the Habsburgs»; Encyclopedia.com) | Britannica «Czechoslovak history — Jagiellonian kings» (arama özeti, sayfa okunmadı): «elected king in October 1526», taç giyme Şubat 1527 | **YANLIŞ uç.** Bohemya/Moravya (Brno, Prag, Glatz, Olomouc…) 1526-10-23; Silezya (Breslau, Opava, Opole…) 1526-12-05 (Sněmy české I, belge 55, evrende). 23/24 Ekim gün çelişkisi atlasın `ic_not_d`unda beyanlı. |
| Macar tacı | macaristan-habsburg f 1526-12-17 | Pozsony'da seçim 17 Aralık 1526 (evren `olaylar_ek.js:68`; TDV `suleyman-i` atlas notunda) | arama özeti (hungarianottomanwars): 17 Aralık 1526 | DOĞRU (ayrı künye). |
| 1804 | künye kron. 1804-08-11 | habsburger.net «The foundation of the Empire of Austria in 1804» (atlas `ic_not`) | Treccani «Austria»: 1804'te Habsburg mülkleri Avusturya İmparatorluğu oldu | DOĞRU gün (evren `olaylar_avmac_b_1029.js:57`); haritada kırılma yok (aynı `avusturya` kimliği). Kutsal Roma sonu 1806-08-06 `almanya` ajanında. |
| 1867 | künye kron. 1867-05-29 | evren `olaylar_avmac_b_1029.js:123` (1867:XII, Macar Diyeti) | TDV `avusturya`: «1867’de Macarlar’la uzlaşmaya gidilmiş» | DOĞRU. |
| t | 1918-11-12 | Parlament Österreich «Geburt der Republik» (evren `olaylar_avmac_c_1029.js:28`): 11 Kasım Karl'ın bildirisi, ertesi gün (12) cumhuriyet | TDV `avusturya`: Karl'ın çekilişi **18 Kasım**; Treccani «Austria»: Karl iktidardan çekildi, Ulusal Meclis cumhuriyeti ilan etti | t 1918-11-12 (cumhuriyet ilanı) uyumlu. **Çelişki** (TDV 18 Kasım ↔ Parlament 11 Kasım) evrendeki maddede iki kaynakla beyanlı. Künye kron. `son` 1918-11-11 ise t'den 1 gün önce; sorun değil ama künye `son` maddesi 1918-11-12 (cumhuriyet) olursa t ile örtüşür. |
Künye `kronoloji:` satırı kontrolü (evren dışı): 1526-08-29 ✗ (23 Ekim/17 Aralık), 1541-08-29 Budin ✓ (TDV), 1606-11-11 Zitvatorok ✓ (TDV), 1683-09-12 ✓, 1699-01-26 ✓, 1718-07-21 ✓, 1739-09-18 ✓, 1804-08-11 ✓, 1867-05-29 ✓, 1878-07-13 ✗ (Berlin imza; fiilî işgal 1878-07-29, evren `olaylar_ek5.js:425`), 1908-10-06 (evren 1908-10-05), 1914-07-28 ✓, 1918-11-11 ≈.

## c) Kronoloji
Evren (Değişmez 2) VAR (dosya:satır): 1282-12-27 `olaylar_avmac_a_1029.js:24`; 1363-01-26 Tirol `:25`; 1379 Feldkirch `:26`; 1500-04-12 Görz `:27`; 1523 Bregenz `:28`; 1526-10-23 Bohemya `olaylar_avmac_b_1029.js:15`; 1526-12-05 Silezya `olaylar_2s_1019.js:325`; 1526-12-17 Macar kralı `olaylar_ek.js:68`; 1711-04-29 Szatmár `olaylar_avmac_b_1029.js:46`; 1714-03-07 Rastatt `olaylar_ek16.js:287`; 1797-10-17 Campo Formio `olaylar_ek16.js:134`; 1803-02-25 `olaylar_avmac_b_1029.js:51`; 1804-08-11 `:57`; 1805-12-26 Pressburg `:63`; 1809-10-14 Schönbrunn `:75` (+`kronoloji_sinir_avrupa_bati.js:545`); 1815-06-09 `olaylar_ek16.js:304`; 1848-04-11/03-15 `olaylar_avmac_b_1029.js:83-90`; 1849-04-14 Debrecen `:100`; 1866-07-03/08-23 `olaylar_avmac_final_1029.js:5-6`; 1867-02-17/05-29/06-08 `olaylar_avmac_b_1029.js:117-129`; 1878-07-13 (Berlin) `olaylar.js:175`, 1878-07-29 işgal `olaylar_ek5.js:425`; 1908-10-05 `olaylar_ek.js:91`; 1918-10-28 `olaylar_ok109.js:84`, 1918-11-03 Villa Giusti `:121`, 1918-11-11 `olaylar_avmac_c_1029.js:28`, 1919-09-10 `olaylar_ok109.js:141`; Breslau ön barışı 1742-06-11 `kronoloji_sinir_avrupa_orta.js:30`.
EKSİK maddeler (öneri):
```
{ t:"1278-08-26", kesinlik:"gun", b:"Dürnkrut-Jedenspeigen (Marchfeld) Savaşı: Rudolf I II. Ottokar'ı yendi, Avusturya Habsburg'a kaldı", tur:"savas", yer_id:"Viyana", kaynak:"Treccani «Austria»: 1278'de Avusturya Rudolf'a geçti (YIL okundu); gün 26 Ağustos — NDB «Přemysl Otakar II.» (sfz74566) ile TEYİT EDİLMEDİ (erişilemeyen listesinde)" }
{ t:"1526-08-29", düzelt: künye kron. «I. Ferdinand … tacını aldı» → t:"1526-10-23" (Bohemya) ; Macar tacı 1526-12-17 ayrı satır (macaristan-habsburg zaten var) }
{ t:"1713-04-19", kesinlik:"gun", b:"VI. Karl Pragmatik Sanction'ı ilan etti (Habsburg mülklerinin bölünmezliği, kız evlat mirası)", tur:"hukumdar", yer_id:"Viyana", kaynak:"Treccani «Austria» ('Prammatica sanzione') — gün bu oturumda okunmadı; TDV/NDB ile teyit gerek" }   // ÖNERİ, kaynak borcu
{ t:"1740-10-20", kesinlik:"gun", b:"VI. Karl öldü; Maria Theresia Habsburg mülklerinde hükümdar oldu", tur:"hukumdar", yer_id:"Viyana", kaynak:"ADB/NDB «Maria Theresia» — gün okunmadı; atlasta bulunmuyor" }   // ÖNERİ, kaynak borcu
```
Not: son iki madde "yazılmadan önce kaynak okunmalı" kategorisinde (ben okuyamadım); veri yazan makine ADB/NDB'den (deutsche-biographie.de) günleri doğrulamalı. Kesin olarak yazılabilecek tek düzeltme: 1526 künye satırı ve (d)'deki `odak_yer` eklemeleri.

## d) Harita uyumu
Ölçer (yamalı): kırılma 67, AÇIK 25. Sınıflar:
**1. Yeni madde gerekmeyen, mevcut maddeye `odak_yer` eklenmesi gerekenler (16):**
| gün | yerleşimler | mevcut madde |
|---|---|---|
| 1714-03-07 | Como | Rastatt `olaylar_ek16.js:287` (Lombardiya Habsburg'a — Como/Lombardiya'ya geçiş; yer listesi) |
| 1742-06-11 kayıp | Glatz, Gleiwitz, Kattowitz, Liegnitz, Oppeln… | Breslau ön barışı `kronoloji_sinir_avrupa_orta.js:30` |
| 1775-05-07 kazanç | Suçava, Çernovitz | `olaylar_ek5.js:312` Bukovina terki (Treccani «Bucovina»: Avusturya yönetimi **1772**'den; 1775-05-07 devir sözleşmesi günü — atlas gün + Treccani yıl çelişmez, işgal/devir farkı beyan edilmeli) |
| 1797-10-17 | Belluno, Brač, Cres, Feltre… | Campo Formio `olaylar_ek16.js:134` |
| 1803-02-25 | Trento | `olaylar_avmac_b_1029.js:51` (Trient/Brixen) |
| 1805-12-26 | Belluno, Feltre, Freiburg, Konstanz | Pressburg `:63` |
| 1809-10-14 | Chełm, Gradisca, Karlovac, Kielce | Schönbrunn `:75` |
| 1814-06-03 | Bregenz, Brixen, Feldkirch, Landeck | Paris antlaşması (Tirol) — madde var ise `yer` |
| 1815-06-09 | Bolonya, Ferrara, Ravenna, Rimini | Viyana Kongresi `olaylar_ek16.js:304` |
| 1859-06-04 | Bormio, Chiavenna, Como, Sondrio | Magenta `kronoloji_sinir_avrupa_bati.js:588` |
| 1908-10-05 | Bihaç, Bijeljina, Bosna Brod… | `olaylar_ek.js:91` (Bulgaristan+Bosna; `yer` listesi) |
| 1919-09-10 | Cres, Hvar, Karviná, Knin | Saint-Germain `olaylar_ok109.js:141` |
| 1799-04-27, 1800-06-04, 1814-01-01, 1814-04-16, 1813-01-01, 1806-01-01 | Bergamo/Bolonya/…; Herceg Novi/Kotor; Pula | Cassano/Marengo/Cattaro/Lagosta maddeleri var ("en yakın" listede) — yer/odak_yer eksik veya tarih ≥31 gün farklı; her biri tek tek incelenmeli |
**2. Gerçek eksik / tarih hatalı (9):**
| gün | yerleşimler | öneri |
|---|---|---|
| 1526-08-29 kazanç | Breslau, Brno, Broumov, Glatz (+Prag, Olomouc, Opava, Hradec Králové, Gleiwitz, Kattowitz, Liegnitz, Oppeln, Jeseník, Ostrava, Třeboň, České Budějovice, Karviná = 18 yerleşim; Bohemya künyesi t ile birlikte) | `bohemya` s:/künye t 1526-08-29 → **1526-10-23** (Bohemya+Moravya); Silezya parçaları (Breslau, Glatz hariç — Glatz Kontluğu Bohemya'dır: 10-23; Gleiwitz, Kattowitz, Liegnitz, Oppeln, Jeseník, Opava, Karviná, Breslau: 12-05). 08-29 → 10-23 arası: komşu peteklere/`__BOSLUK__` beyanı ya da "taht boş" beyanı |
| 1368-01-01 | Freiburg | `olaylar_*` yıl maddesi: Freiburg Habsburg'a bağlandı (kaynak atlasta: HLS «Freiburg im Breisgau», Th. Zotz, yıl) |
| 1382-09-30 | Trieste | Treccani «Trieste»: «nel 1382 degli Asburgo» (YIL). Gün 30 Eylül atlasta kaynaksız; gün bulunamadı → `YYYY-01-01` + beyan ya da kaynak aranmalı. Trieste 1813 dönüşü: Treccani «ottobre 1813» (atlas BEYANLI YAKLAŞIKLIK uyumlu), 1918-11-03 Treccani «T. passò all'Italia il 3 novembre 1918» ✓ |
| 1548-01-01 | Konstanz | kaynak aranmalı (kaynaksız) |
| 1677-01-01 / 1697-10-30 | Freiburg | Fransız işgali 1677 (yıl) ve Rijswijk: Rijswijk antlaşması günü 1697-10-30 evrende yok |
| 1708-01-01 | Mantova | kaynaksız yıl; Gonzaga'nın imparatorluk yasağı 1708 — kaynak gerek |
| 1908-10-05/06 | Bosna-Hersek noktaları | `bosna-isgal` t 1908-10-06 ↔ Habsburg s: f 1908-10-05: 1 gün çakışma; olay `ek.js:91` "5-6 Ekim". Tek gün seçilmeli (öneri 1908-10-06 ya da her ikisi 05); ölçülmedi (Bosna ajanında). |
En geniş an 1839 (80 yerleşim): Lombardiya-Venedik (Milano, Verona, Venedik, Padova), Dalmaçya (Zadar, Split, Dubrovnik, Kotor), Galiçya (Lvov, Haliç), Bukovina, Tirol, Bohemya-Moravya-Silezya (Prag, Brno, Olomouc, Opava, Ostrava), Kuzey İtalya. Kaynakla uyum: Kotor/Dubrovnik/Herceg Novi 1814-1918 doğru (Viyana Kongresi); Cres/Lošinj/Pag 1813-1918 doğru. **Sorun:** Silezya'nın büyük kısmı (Breslau/Liegnitz/Oppeln/Glatz) 1742'den sonra Prusya'dır, Habsburg listesinde yalnız Opava-Troppau, Jeseník, Ostrava, Karviná (Avusturya Silezyası) kalıyor ✓. Macar topraklarında `avusturya` sahipliği yok (D7 gereği `macaristan-habsburg`). Galiçya'da yalnız 4 nokta (Lvov, Haliç, Çernovitz, Suçava, Yazlofça): Krakov/Przemyśl/Tarnów 1772-1918 Habsburg'dur — **haritada boş mu emilmiş mi ölçülmedi** (petek Voronoi: noktası olmayan bölge en yakın peteğe emilir; Krakov 1815-1846 Cumhuriyet, 1846-1918 `avusturya` ise tam kapsar — kontrol önerilir).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `habsburg` `kronoloji`: `1526-08-29` "I. Ferdinand … tacını aldı" → `t:"1526-10-23"`, `b:"I. Ferdinand Bohemya kralı seçildi"` (+ `ic_not`: 23/24 Ekim). Macar tacı 1526-12-17 ayrı satır.
2. `data/devletler.js` `bohemya` `t:"1526-08-29"` → `"1526-10-23"` (Mohaç'tan seçime kadar 55 gün taht boş); bohemya/avusturya s: dönemlerini Bohemya+Moravya için 1526-10-23, Silezya (Breslau, Gleiwitz, Kattowitz, Liegnitz, Oppeln, Jeseník, Opava, Karviná) için 1526-12-05'e ötele (`data/yerlesimler*.js` — Brno, Breslau, Glatz, Prag vb. 18 kayıt). **Motor girdisi `yerlesimler` ⇒ koşu/kapı kuralları geçerli.**
3. Mevcut maddelere `odak_yer`/`yer` ekle (d-1 listesi): Rastatt, Campo Formio, Pressburg, Schönbrunn, Viyana Kongresi, Magenta, Saint-Germain, Breslau ön barışı, Bukovina.
4. Künye `habsburg` `kronoloji` `1918-11-11 son` → `1918-11-12` (cumhuriyet) ya da `ic_not` "Karl 11 Kasım bildiri; t=12 cumhuriyet".
5. Eksik madde: 1278-08-26 Marchfeld (gün teyidi sonrası). 1713/1740 satırları kaynak teyidi gelmeden yazılmaz.
6. `top100_olc.py`: `d` eşleşmesini `id ∪ harita` yap (denetle.py `js/app.js:60-75` kuralı) — yoksa `habsburg`, `almanya`/`avusturya` gibi harita-anahtarlı künyeler "0 açık" gösterir.

## Erişilemeyen kaynaklar
- NDB «Přemysl Otakar II.» (deutsche-biographie.de/sfz74566) — Marchfeld günü (26 Ağustos 1278) ve Viyana barışı (21 Kasım 1276) bu oturumda okunmadı.
- ADB/NDB «Maria Theresia», «Karl VI.» — 1713 Pragmatik Sanction ve 1740-10-20 günleri.
- Britannica 403 («Austria — Accession of the Habsburgs»); Britannica «Jagiellonian kings» yalnız arama özeti.
- Sněmy české I, belge 55 (Silezya 5 Aralık 1526) — atlas kaynak olarak yazmış, bu oturumda ham metin görülmedi.
- Soru (JSTOR/Iranica gerekmiyor): Galiçya (Krakov, Przemyśl, Tarnów, Brody) s: kayıtlarının 1772/1795/1846 uçları — ayrı ölçüm.

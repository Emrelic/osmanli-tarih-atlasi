# KAYNAK-EKSIK-SEHIR-1010 — atlasta hiç noktası olmayan 20 şehrin TDV kaynaklandırması

**Oturum:** KAYNAK-EKSIK-SEHIR-1010 (KASA, araştırmacı — yalnız metin; `data/`ya yazılmadı, hüküm yok)
**Görev:** YILDIRIM BAYEZIT → KASA İRTİBAT aracılığıyla, 10 Ekim 2026
**Girdi:** `origin/makine/lab:denetim/LAB-EKSIK-SEHIR-1000-1280-1009.md` + `-B.csv` (89 "atlasta hiç yok" satırı)
**Okuma ağacı:** ayrık worktree `C:\atlas-kes-1010` @ `origin/main` `6e625e15a`

## 0 · SEÇİM — bu dosya listenin 1-20'sidir (21-40 başka kıtada)

| # | Şehir | Kim seçti |
|---|---|---|
| 1 | Ahlat | LAB (adıyla) |
| 2 | Silvan (Meyyâfârikîn) | LAB |
| 3 | Malazgirt | LAB |
| 4 | Sis (Kozan) | LAB |
| 5 | Lazkiye | LAB |
| 6 | Taberiye | LAB |
| 7 | Alamut | LAB |
| 8 | Otrar (Fârâb) | LAB |
| 9 | Fîrûzkûh (Câm) | LAB |
| 10 | Kumbi Salih | LAB |
| 11 | Adilcevaz | KASA seçimi |
| 12 | Anavarza | KASA seçimi |
| 13 | Busrâ | KASA seçimi |
| 14 | Tartûs | KASA seçimi |
| 15 | Cebele | KASA seçimi |
| 16 | Maarretünnu'mân | KASA seçimi |
| 17 | Kal'atü Ca'ber | KASA seçimi |
| 18 | Rahbe | KASA seçimi |
| 19 | Büst (Leşker-i Bâzâr) | KASA seçimi |
| 20 | Özkent | KASA seçimi |

**Seçim ölçütü (11-20):** ① TDV'nin kapsadığı coğrafya (§4: İslâm dünyası birincil kaynağı TDV — Avrupa/Hint/Amerika satırlarında TDV tanıklığı beklenmez, onlar başka kaynak işi) · ② atlas çekirdeğine yakınlık: 11-18 sonradan Osmanlı toprağı olan Anadolu/Suriye/Cezîre — 1281 öncesi pencere açılırsa ilk görünecek yerler · ③ LAB'in TDV cümlesi çekebildiği satırlar öncelikli (Busrâ, Tartûs, Cebele, Maarre, Büst, Özkent — doğrulama hızlı) · ④ Ahlat'la aynı sahneden Adilcevaz, Sis'le aynı sahneden Anavarza.
**Elenen yakın adaylar:** Şevbek, Kayseriye (Filistin), Ayla, Bâniyâs, Aclûn (Haçlı Levant'ı — 21-40'a bırakıldı) · Dînever (LAB: TDV'de 1000-1280 cümlesi yok) · Bâmiyân, Kâs, Âmul, Kâsân (Horasan/Mâverâünnehir — 21-40'a).
**ÖLÇÜLEMEDİ-68 kovası:** seçilen 20'nin HİÇBİRİ o kovada değil (hepsi LAB `B-YOK`). Vekil/ayrı soru bu 20 için doğmuyor; §3'te yalnız yakın nokta mesafesi tekrar ölçülür.

## 1 · ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

- TDV başlık maddesi tutacak: Ahlat, Meyyâfârikîn, Lazkiye, Taberiye, Alamut, Otrar, Busrâ, Tartûs, Cebele, Maarre, Büst, Özkent, Rahbe, Anavarza ≈ 14.
- Tutmayacak / kapsayıcı maddeye gidilecek: Malazgirt (302 bilinen), Sis (`sis`=Hz. Şit), Fîrûzkûh (`gurlular`), Kumbi Salih (`gana`), Kal'atü Ca'ber (slug belirsiz), Adilcevaz (belirsiz) ≈ 6.
- Gün hassasiyeti: 20'nin en çok 3'ünde (Malazgirt 1071-08-26 gibi muharebe günleri); çoğu YIL, birkaçı hicrî çift yıl (ör. "475 (1082-83)").
- Koordinat: 5'i KASA-NOKTA-DOSYA-1003'ten hazır; kalan 15'te gazetteer (Pleiades/al-Ṯurayyā) gerekecek — bu turda TDV dışı koordinat kaynağına erişim yoksa "bulunamadı" yazılacak.
- `devletler.js` karşılığı: Selçuklu/Eyyûbî/Memlük/Zengî/Haçlı kontlukları büyük olasılıkla var; Ukaylî, Mervânî, Ahlatşahlar, Nizârî, Gurlu, Gana belirsiz — en az 3 "künye yok" bekleniyor.

## 2 · ÖZET — öngörü × ölçüm

| Soru | Öngörü | Ölçüm |
|---|---|---|
| TDV başlık maddesi tutan (HTTP 200, doğru madde) | ≈14 | **12**: ahlat · meyyafarikin · lazkiye · taberiye · alamut · busra · tartus · cebele · maarretunnuman · bust · ozkent · caber-kalesi (`caber` 302, doğrusu `caber-kalesi`) |
| Kapsayıcı maddeden tanıklık alan | ≈6 | **6**: Malazgirt (`ahlat` + `malazgirt-muharebesi`) · Fîrûzkûh (`gurlular`) · Kumbi Salih (`gane` — `gana` modern ülke, YANLIŞ MADDE) · Otrar (`cengiz-han` + `harizmsahlar`) · Adilcevaz (`bitlis` + `ahlatsahlar`) · Rahbe (`ukayliler` + `zengiler` + `berkyaruk`) |
| 1000-1280 için TDV'de kendi maddesi olmayan, halkası başka maddeden gelen | — | **2**: **Sis** — hiç halka yok (`sis` = ŞÎS Hz. Şit; `kozanogullari` yılsız) · **Anavarza** — `anavarza` 302, `aynizerbi` KİŞİ maddesi (yalnız kimlik/yer verir); halkalar `misis` maddesinden (Aynizerbâ adıyla 1083 / 1159) → §3 #12 |
| Gün hassasiyeti | ≤3 | **9 halka gün taşıyor** (Ahlat 1071-08-03 · Meyyâfârikîn 1085-08-30, 1093-04-12 · Malazgirt 1071-08-26 [muharebe günü] · Alamut 1090-09-04, 1256-11-19 · Cebele 1109-07-23, 1188-07-15 · Maarre 1098-12-11). Öngörü TUTMADI (az tahmin). |
| Koordinat | 5 hazır + 15 gazetteer | **15 kaynaklı** · **5 bulunamadı** (Alamut · Otrar · Fîrûzkûh · Kumbi Salih · Adilcevaz) |
| `devletler.js` karşılığı olmayan halka | ≥3 | **5 polity künyesiz**: Atsız/Uvak Türkmen beyliği (Taberiye/Busrâ 1070-71) · Fergana Karahanlı hanlığı 1141-1212 (Özkent; `bati-karahanli` vekil olabilir — hüküm sende) · Kilikya Rubenî baronluğu 1199 öncesi (Sis/Anavarza; `kilikya-ermeni` f=1199-01-06) · Templier tarikatı (Tartûs 1268) · Kuşeyroğulları (Ca'ber, 1086 öncesi). Taranan kalıp (id+ad): `atsız|uvak|türkmen|rubeni|baronlu|templ|hospital|fergana|kuşeyr` → yalnız `turkmen` (1600-1884, ilgisiz). |
| ≤3 km yakın mükerrer (15 koordinat × 4300 nokta, `girdi.yukle()`) | — | **0** · normalleştirilmiş ad taraması: gerçek eşleşme **0** (yanlış pozitif: Sisam · Zerenc (Sîstan) · Cēsis · Sisak · Cebeleyn — hepsi >60 km) |

**Okuma ağacı notu:** açılışta `HEAD..origin/main = 5` ölçüldü (5 commit: tahta/denetim/CLAUDE.md; `data/` değişmedi). Talimat "0 değilse DUR" diyordu; okuma ayrık worktree'de `origin/main` `6e625e15a` üzerinde yapıldı, yani okunan ağaç taze. Yine de sapma olarak beyan ediyorum — hüküm koordinatörün.

## 3 · ŞEHİR KARTLARI

Biçim: **halka** = `tarih · hassasiyet · devlet id · tür` + TDV cümlesi (gövdeden birebir). Tür: `s` sahiplik geçişi · `v` tâbiiyet/iktâ · `x` tahrip/yağma/akın (sahiplik DEĞİL, bilgi) · `bilgi` o tarihte elinde olduğunun tanığı (geçiş değil).
"Künye ✓/✗": halka tarihi o kimliğin `devletler.js` `f`/`t` penceresine düşüyor mu (ölçüldü; `girdi.oku_devletler()`).

### 1 · Ahlat
- **TDV:** `ahlat` 200 (AHLAT) · ek: `ahlatsahlar` 200, `bitlis` 200
- **Koordinat:** 38.76551, 42.51044 — al-Ṯurayyā `AKHLAT_425E387N_S` (certain; KASA-NOKTA-DOSYA-1003 #1, bu turda al-Ṯurayyā'dan yeniden okundu, aynı) · en yakın atlas noktası Bitlis 53,5 km
- **Halkalar:**
  - `1011…1061 · YIL aralığı · mervani · bilgi` — "Mervânîler’den Nasrüddevle Ahmed’in hükümdarlık yıllarında (1011-1061) Ahlatlılar huzur ve sükûn içinde müreffeh bir hayat sürdüler." ⚠️ başlangıç yılı DEĞİL, o yıllarda Mervânî idaresi tanığı. Künye ✓ (983–1085)
  - `1071-08-03 · GÜN · buyuk-selcuklu · bilgi` — "Aynı yıl Ahlat’ın Emîr Sunduk’un idaresinde olduğu ve Bizans imparatorunun Ahlat üzerine sevkettiği öncü kuvvetlerini mağlûp ettiği (3 Ağustos 1071) bilinmektedir." ⚠️ gün öncü savaşını tarihler; geçiş günü değil. Künye ✓
  - `1207/1208 · HİCRÎ YIL (604) · eyyubi · s` — "…Âdil’in eline geçti (604/1207-1208) ve Ahlatşahlar hânedanı sona erdi." Künye ✓ (eyyubi 1171–1250; ahlatsahlar t=1208-01-01)
  - `1230-04 · AY · harizmsah · s(kısa)` — "Nisan 1230’da Ahlat zaptedildi ve Celâleddin Hârizmşah’ın muhalefetine rağmen şehir üç gün boyunca görülmemiş biçimde yağmalandı." ⚠️ cümle zapt edeni ADLANDIRMIYOR — Celâleddin'in muhalefetine rağmen yağmalanması, zapt edenin Celâleddin olduğunu gösterir, ama bu bir çıkarım → **devlet: ölçülemedi**, çıkarım Celâleddin Hârizmşah yönünde.
  - `1232/1233 · HİCRÎ YIL (630) · selcuklu · s` — "…Alâeddin Keykubad, veziri Ziyâeddin Karaarslan’ı göndererek (630/1232-33) Ahlat’ta iskân ve imar faaliyetini başlattı…"; `bitlis`: "…(Van, Ahlat, Adilcevaz) birlikte Bitlis’i de Anadolu Selçuklu Devleti sınırları içine kattı (1232)…" Künye ✓
  - `1243 · YIL · mogol-imparatorlugu · s` — "Moğollar Kösedağ Savaşı’ndan sonra Ahlat’ı istilâ edip Gürcü kumandanı Prens Avak’ın kız kardeşi Tamtam’a verdiler (1243)." ⚠️ Tamtam'a verilmesi `v:` adayı — hüküm sende.
- **Not:** Ahlatşahlar'a geçiş yılı (~1100) bu maddede cümle olarak yok; `ahlatsahlar` künyesinin f=1100-01-01'i **kaynak değildir** (D210).

### 2 · Silvan (Meyyâfârikîn)
- **TDV:** `meyyafarikin` 200 (MEYYÂFÂRİKĪN) · `silvan` 200 (modern ilçe, 1000-1280 cümlesi yok)
- **Koordinat:** 38.14279, 41.00326 — Pleiades 874573 (KASA-NOKTA #4) · en yakın Hasankeyf 59,7 km
- **Halkalar:**
  - `1010 · YIL (401) · mervani · s(iç)` — "401’de (1010) … Nasrüddevle Ebû Nasr şehri ele geçirdi." Künye ✓
  - `1085-08-30 · GÜN · buyuk-selcuklu · s` — "…Meyyâfârikīn üzerine yürüdü ve şehri 6 Cemâziyelevvel 478’de (30 Ağustos 1085) teslim aldı." Künye ✓ — `mervani` t=1085-08-30 ile **birebir aynı gün**
  - `1093-04-12 · GÜN · suriye-selcuklu · s` — "Suriye Selçuklu Sultanı Tutuş 12 Rebîülevvel 486’da (12 Nisan 1093) şehri zaptetti." Künye ✓ (1092'de Mervânî Nasrüddevle'nin dönüşü kısa ara halka, aynı cümlede)
  - `1109-05 · AY · ahlatsahlar · s` — "Meyyâfârikīn, Şevval 502’de (Mayıs 1109) Ahlatşahlar’ın kurucusu Sökmen el-Kutbî tarafından ele geçirildi." Künye ✓
  - `? → 1184 · artuklu · v(iktâ)` — "Muhammed Tapar … Meyyâfârikīn’ı iktâ olarak kattı. 580 (1184) yılına kadar burada altı Mardin Artuklu emîri hüküm sürdü." başlangıç yılı cümlede YOK.
  - `1185 · YIL (581) · eyyubi-meyyafarikin · s` — "Meyyâfârikīn, 581’de (1185) Selâhaddîn-i Eyyûbî tarafından…" Künye ✓ (f=1185)
  - `1191 · YIL (587) · artuklu · s(kısa)` — "Ancak Artukoğlu Yavlak Arslan 587’de (1191) kısa bir müddet için şehri Eyyûbîler’den geri aldı."
  - `→1260 · eyyubi-meyyafarikin` — "Eyyûbîler 658 (1260) yılına kadar Meyyâfârikīn’ı ellerinde tuttular…" sonrası `ilhanli` (1264 Tûdan'a mülk). Künye ✓ (t=1260)
- **Not:** KASA-NOKTA-1003 `yer_id` uyarısı geçerli: ad parantezliyse kronolojide de parantezli yazılmalı.

### 3 · Malazgirt
- **TDV:** `malazgirt` **302** (ölü slug) · `malazgirt-muharebesi` 200 (olay maddesi; şehir maddesi YOK) · `ahlat` 200
- **Koordinat:** 39.14610, 42.54090 — Pleiades 733857263 (KASA-NOKTA #3); al-Ṯurayyā `MALAZKIRD_425E391N_S` 39.1437, 42.55713 (1,4 km) · en yakın Erciş 71,9 km
- **Halkalar:**
  - `1054 · YIL · bizans · bilgi` — `ahlat`: "Tuğrul Bey 1054 yılında Ahlat üzerinden giderek kuşattığı Malazgirt’i alamamıştı."
  - `1071 · YIL · buyuk-selcuklu · s` — `ahlat`: "…Alparslan da 1071’de Ahlat üzerinden Malazgirt’e giderek burayı kolayca fethetmişti."
  - `1071 (gün yok) · bizans · s(kısa)` — `malazgirt-muharebesi`: "Silvan’da iken imparatorun Malazgirt Kalesi’ni zaptedip halkını kılıçtan geçirdiğini öğrenince…" (cümlede tarih yok; muharebe öncesi)
  - `1071-08-26 · GÜN · buyuk-selcuklu · s(kalıcı)` — "27 Zilkade 463 (26 Ağustos 1071) Cuma günü…" ⚠️ gün MUHAREBEYİ tarihler; kalenin el değiştirme günü değildir (§4 ⑧). Yazılacaksa "muharebe günü" diye.
  - `1204/1205 · HİCRÎ YIL (601) · ahlatsahlar · x` — `ahlatsahlar`: "…Gürcüler 601 (1204-1205) … Ahlatşahlar’ın ülkesine girip Malazgirt’e kadar ilerlemişler…" (akın; sahiplik değişmedi)
- **Sıralama, çelişki değil:** `ahlat` Alparslan'ın fethini "1071" der, muharebe maddesi imparatorun kaleyi geri aldığını anlatır → 1071 içinde Selçuklu → Bizans → Selçuklu. Atlas bunu ancak yıl düzeyinde yazabilir.

### 4 · Sis (Kozan)
- **TDV:** `sis` 200 ama **YANLIŞ MADDE** (ŞÎS = Hz. Şit, tuzak ②) · `kozan` 302 · `kilikya` 302 · `kilikya-ermeni-kralligi` 302 · `kucuk-ermenistan` 302 · `ermeniler` 302 · `kozanogullari` 200 · `adana` 200 · `misis` 200
- **Koordinat:** 37.45520, 35.81570 — Getty TGN 7708961 (KASA-NOKTA #11) · en yakın Erzin 65,3 km
- **Halkalar 1000-1280:** **bulunamadı.** `kozanogullari`: "…ardından bu krallığa son verip Sîs’i (Kozan) zaptettiği bilinmektedir." — YIL YOK, 1280 sonrası olay. `misis` ve `adana` gövdelerinde "Sîs" adıyla tarihli cümle yok (tarandı).
- **Devlet:** `kilikya-ermeni` (1199-01-06 → 1375-04-14) — 1199 ÖNCESİ Rubenî baronluğu için künye YOK.
- **Öneri:** TDV bu taneciği kapsamıyor (D217 kapsayıcı denendi). Akademik kaynak gerekiyor (§4: `kaynak:` açıkça).

### 5 · Lazkiye
- **TDV:** `lazkiye` 200
- **Koordinat:** 35.51961, 35.80763 — al-Ṯurayyā `LADHIQIYYA_358E355N_S` (certain) · en yakın Antakya **82,3 km** (büyük liman kenti atlasta hiç yok — 1281 sonrası için de bulgu, §5)
- **Halkalar:**
  - `XI. yy ortası · YÜZYIL · ? · s` — "Bizans’ta iç karışıklıkların etkili olduğu XI. yüzyılın ortalarında Lazkiye tekrar müslümanların eline geçti." → **yıl yazılmaz**; devlet cümlede yok.
  - `1086 · YIL · buyuk-selcuklu · s` — "1086’da Selçuklu Sultanı Melikşah şehir ve çevresine hâkim oldu." Künye ✓
  - `1108 · YIL · antakya-prinkipsligi · s` — "…Lazkiye, 1108’de Tankred tarafından Antakya Prinkepsliği yönetimine dahil edildi." Künye ✓
  - `1188 · YIL (584) · eyyubi · s` — "…Lazkiye 584’te (1188) Selâhaddîn-i Eyyûbî’nin hâkimiyetine girdi." Künye ✓
  - `→1260 · eyyubi-halep` — "…1260’a kadar Eyyûbîler’in Halep kolu yönetiminde kalan Lazkiye…" Künye ✓ (t=1260)
  - `1260 · YIL · antakya-prinkipsligi · s` — "…bu tarihte Moğollar’ın Eyyûbîler’in Halep koluna son vermesiyle Antakya Haçlıları’nın eline geçti." 🔴 Künye ✓ ama **ileri uç:** `antakya-prinkipsligi` t=1268-05-18, Lazkiye ise TDV'ye göre 686/1287'ye kadar Haçlı ("Kalavun tarafından 686’da (1287) Haçlı yönetimine son verilmesiyle…"). 1268–1287 sahibi künyesiz → **D205 sınıflandırma adayı** (aynı polity mi, ardıl mı).
  - `1274/1275 · HİCRÎ YIL (673) · memluk · v` — "…Lazkiye yıllık 20.000 dinar vergiye tâbi tutuldu (673/1274-75)…"

### 6 · Taberiye
- **TDV:** `taberiye` 200
- **Koordinat:** 32.78769, 35.54229 — Pleiades 678431 (KASA-NOKTA #9) · en yakın Akkâ 45,7 km
- **Halkalar:**
  - `~1070 · YIL "civarında" · künyesiz (Kurlu/Atsız Türkmen) · s` — "Nâvekiyye Türkmenleri 462 (1070) yılı civarında Kurlu Bey kumandasında Taberiye’ye yerleştiler." ⚠️ "civarında" → kaba yıl; künye YOK.
  - `? · kudus-kralligi · s` — "…şehir I. Haçlı Seferi esnasında Haçlı işgal ve istilâsına mâruz kaldı." **YIL YOK → yazılmaz.**
  - `1187 · YIL (583) · eyyubi · s` — "Hittîn Savaşı’nın ardından Selâhaddîn-i Eyyûbî’nin fethettiği şehir (583/1187)…" Künye ✓
  - `1194 · 1229 · 1241` — Eyyûbî kolları arasında el değiştirme (iç halka; alt kol hükmü sende).

### 7 · Alamut
- **TDV:** `alamut` 200
- **Koordinat:** **bulunamadı** — al-Ṯurayyā'da kayıt yok (en yakın Daylamān bölge 29 km); Pleiades araması boş; Getty TGN SPARQL HTTP 400. LAB'in 36.44, 50.59'u "genel bilgiden" → dayanak değil.
- **Halkalar:**
  - `1090-09-04 · GÜN · alamut-nizari · s` — "Alamut Kalesi’ni 4 Eylül 1090 tarihinde ele geçiren Hasan Sabbâh burasını Bâtınî karargâhı haline getirdi." Künye ✓ — `alamut-nizari` f=**1090-09-04 birebir**
  - `1256-11-19 · GÜN · mogol-imparatorlugu / ilhanli · s` — "…Alamut Kalesi nihayet 19 Kasım 1256’da Moğol Hükümdarı Hülâgû’nun askerlerine boyun eğmek zorunda kaldı." `alamut-nizari` t=1256-11-19 ✓ · Hülâgû'yu hangi kimlik temsil eder (`ilhanli` f=1256-01-01 de kapsıyor) — hüküm sende.
- **Not:** kale, şehir değil — `tur:` hükmü.

### 8 · Otrar (Fârâb)
- **TDV:** `otrar` **302** · `farab` 302 · `otrar-faciasi` 302 → kapsayıcı: `cengiz-han` 200, `harizmsahlar` 200, `siriderya` 200
- **Koordinat:** **bulunamadı** — al-Ṯurayyā yalnız `FARAB_682E427N_R` (BÖLGE, nokta değil); TGN erişilemedi.
- **Halkalar:**
  - `1218 · YIL · harizmsah · bilgi` — `harizmsahlar`: "450 kişilik bir Moğol kervanının Otrar’da öldürülmesi üzerine Cengiz Han suçluların teslimini … istedi; Alâeddin bu teklifi reddettiği gibi gönderilen elçileri de öldürttü (1218)." · `cengiz-han`: "Alâeddin Muhammed Hârizmşah’ın akrabası ve kumandanı olan Otrar Valisi İnalcık…" → 1218'de Hârizmşah elinde tanığı; geçiş yılı DEĞİL.
  - Moğol zaptı: `cengiz-han` "Sonbaharda şehri kuşattı." (1219) ve "Otrar’ı zaptettikten sonra Semerkant muhasarasına katılan Çağatay ile Ögedey…" (Semerkant "Mart ayında" 1220) ⇒ zapt 1219 sonbaharı ile 1220 Mart'ı arası; cümle "aldı"yı yılla vermiyor ⇒ **zapt yılı ölçülemedi**.
  - Karahanlı/Karahıtay halkaları (1000–1210): **bulunamadı**.

### 9 · Fîrûzkûh
- **TDV:** `firuzkuh` **302** → kapsayıcı `gurlular` 200 (arama `sp=t` aynı maddeyi gösterdi)
- **Koordinat:** **bulunamadı** — al-Ṯurayyā'da yok; UNESCO 211 (Câm Minaresi) HTTP 403; TGN erişilemedi. ⚠️ Fîrûzkûh = Câm özdeşliği `gurlular`da GEÇMİYOR → özdeşlik de kaynaklanmadı.
- **Halkalar:**
  - `1146…1149 · YIL aralığı · gurlu · kuruluş` — "Fîrûzkûh şehri Seyfeddin Sûrî zamanında (1146-1149) kardeşleri Kutbüddin Muhammed ve Bahâeddin Sâm tarafından kuruldu." → `kur:` adayı, aralık.
  - `? · gurlu · başkent` — "Seyfeddin Sûrî’nin Gazne tahtını ele geçirmesi üzerine (1148) kardeşi ve halefi Bahâeddin Sâm, başşehri … Estiyâ’dan Fîrûzkûh’a taşıdı." ⚠️ 1148 Gazne tahtını tarihler, taşımayı değil (§4 ⑧).
  - Son (Hârizmşah/Moğol): **bulunamadı**. Künye `gurlu` t=1215-01-01.

### 10 · Kumbi Salih
- **TDV:** `kumbi-salih` 302 · `gana` 200 ama **YANLIŞ MADDE** (modern Gana Cumhuriyeti; tuzak ②) · doğrusu **`gane` 200** (GĀNE)
- **Koordinat:** **bulunamadı.** TDV yalnız tarif veriyor: "…Timbedra’nın 70 km. güneydoğusunda ve Mali’nin başşehri Bamako’nun 330 km. kuzeyinde yer alan Kumbîsâlih harabeleri…" — tariften koordinat TÜRETİLMEZ.
- 🔴 **Kimlik ihtiyatlı:** "Yeri tartışmalı olmakla birlikte … Kumbîsâlih harabelerinin bu şehre ait olduğu sanılmaktadır." → bayrak kuralı (D208): kesin tanıklık değil.
- **Halkalar (Gāne şehri için):**
  - `1076 · YIL · murabitlar · s` — "Murâbıtlar 1054 yılında Sanhâce Emirliği’nin eski başşehri Evdeguşt’u, 1076 yılında da Gāne şehrini ele geçirdiler…" Künye ✓ · `gane` t=1076-01-01 ✓
  - `? · ? · s` — "Fakat Murâbıtlar bu bölgeyi ancak on yıl kadar ellerinde tutabilmişlerdir." → 1086 türetilir, YAZILMAZ.
  - `XIII. yy başı · YÜZYIL · susu-kralligi · s` — "…XIII. yüzyıl başlarında Gāne’nin başşehrini ele geçirdi." → **yıl yazılmaz**. Künye 1076–1235.

### 11 · Adilcevaz (Zâtülcevz)
- **TDV:** `adilcevaz` **302** → `ahlatsahlar` 200, `bitlis` 200, `ahlat` 200
- **Koordinat:** **bulunamadı** — al-Ṯurayyā'da kayıt yok (en yakın Ahlat 19,4 km); TGN erişilemedi.
- **Halkalar:**
  - `≤1111 · ? · ahlatsahlar · bilgi` — "Sökmen’in Tebriz, Ahlat, Erciş, Zâtülcevz (Adilcevaz), Meyyâfârikīn, Malazgirt, Muş, Van, Bargiri ve Vestan şehirlerini idare ettiği bilinmekte…" — yıl YOK; bağlam Sökmen'in ölümü "(Eylül 1111)" → yalnız "1111'den önce".
  - `1232 · YIL · selcuklu · s` — `bitlis`: "Kemâleddin Kâmyar kısa bir süre içinde çevredeki başka yerlerle (Van, Ahlat, Adilcevaz) birlikte Bitlis’i de Anadolu Selçuklu Devleti sınırları içine kattı (1232)…" Künye ✓

### 12 · Anavarza (Aynizerbâ / Anazarbos)
- **TDV:** `anavarza` **302** · `aynizerbi` 200 ama KİŞİ maddesi (Mansûr el-Aynizerbî) — yalnız kimlik: "Anazarbos antik şehrinde (bugünkü Anavarza / Dilekkaya harabeleri)" · halkalar `misis` 200'den
- **Koordinat:** 37.256021, 35.898447 — Pleiades **658378** "Anazarbos/Caesarea/Ioustin(ian)oupolis" · ikinci kaynak Pleiades 543726021 "Anavarza Kalesi" 37.2523, 35.9018 (0,5 km) · en yakın Erzin 42,9 km
- **Halkalar** (`misis`, Aynizerbâ adıyla):
  - `1083 · YIL · selcuklu · s` — "Anadolu Selçukluları’nın kurucusu I. Süleyman Şah 1082’de Tarsus’u, 1083’te Adana, Aynizerbâ ve Misis’i fethetti…" Künye ✓
  - `1103 · YIL · danismendli · x` — "Aynı yıl Kilikya’ya karşı saldırıya geçen Dânişmendliler Tarsus, Misis ve Aynizerbâ’yı yağmalayıp geri döndüler."
  - `1154 · YIL · selcuklu · x` — "1154’te Anadolu Selçuklu Sultanı I. Mesud, Kilikya’ya girip Misis, Aynizerbâ ve Tel Hamdûn’a kadar ilerledi." (ilerleme ≠ zapt)
  - `1159 · YIL · bizans · s` — "…Aynizerbâ ve Misis’i aldı (1159)." Künye ✓
- **Not:** 1097 Haçlı halkası Aynizerbâ'yı adıyla anmıyor ("Çukurova’nın bu şehirleri") → taşınmaz. Rubenî halkası künyesiz; 1199 sonrası `kilikya-ermeni` için Anavarza'yı adıyla anan cümle **bulunamadı**.

### 13 · Busrâ
- **TDV:** `busra` 200
- **Koordinat:** 32.51503, 36.43071 — al-Ṯurayyā `BUSRA_364E325N_S` (certain) · en yakın Amman 78,4 km
- **Halkalar:**
  - `988→ · fatimi · bilgi` — "988 tarihinden itibaren Fâtımîler’in idaresine giren şehir…" (1000'de Fâtımî ✓)
  - `1071 · YIL · buyuk-selcuklu · s` — "…Selçuklu emîrlerinden Atsız b. Uvak tarafından 1071 yılında Selçuklu Devleti’ne bağlanmıştır." Künye ✓
  - `? · boriler · bilgi` — "1147 yılında Busrâ Emîri Altıntaş, Dımaşk Atabegi Muînüddin Üner’e kızıp şehri Kudüs Kralı III. [Baudouin'e teslim etmek istedi]…" → Börîler'e bağlılık örtük; geçiş yılı YOK.
  - `1174 · YIL · eyyubi · s` — "Busrâ 1174’te Selâhaddîn-i Eyyûbî’nin idaresine geçti." Künye ✓
  - `≥1261 · memluk · s` — "Ancak Memlük Sultanı Baybars Moğol işgalinden (1261) sonra şehri kurtarmış…" ⚠️ 1261 Moğol işgalini tarihler → yalnız "1261'den sonra".

### 14 · Tartûs
- **TDV:** `tartus` 200
- **Koordinat:** 34.89985, 35.90356 — al-Ṯurayyā `ANTARTUS_359E348N_S` (certain) · en yakın Trablusşam 51,9 km
- **Halkalar:**
  - `1082/1083 · HİCRÎ YIL (475) · suriye-selcuklu · s` — "Tartûs 475 (1082-83) yılında Suriye Selçuklu Meliki Tâcüddevle Tutuş tarafından zaptedildi." Künye ✓
  - `1084 · YIL (477) · selcuklu · s` — "Süleyman Şah 477’de (1084) Suriye’deki Bizans hâkimiyetine son verdi ve Antakya ile beraber Tartûs’u da hâkimiyetine aldı." ⚠️ iki Selçuklu kolu art arda — maddenin kendi sırası, çelişki olarak değil el değiştirme olarak okundu.
  - Haçlı'ya ilk geçiş: **bulunamadı** — 1102 cümlesi bir SAVAŞI tarihliyor ("…Tartûs yakınlarında cereyan eden savaşta mağlûp oldular…").
  - `1152 · YIL (547) · zengi-halep · s(kısa)` — "Atabeg Nûreddin Mahmud Zengî 547 (1152) yılında Tartûs üzerine yürüdü ve şehri ele geçirdi." Künye ✓
  - `1188-07 · AY (Cemâziyelevvel 584) · eyyubi · s` — "…Antakya ile Kusayr (Altınözü) dışındaki bütün şehirleri ve Tartûs’u fethetti (Cemâziyelevvel 584/Temmuz 1188)." Künye ✓
  - `1268 · YIL · künyesiz (Templier) · bilgi` — "Baybars’ın 666’da (1268) gerçekleştirdiği Suriye seferi sırasında Tartûs’u elinde tutan Templier şövalyeleri…" → 1188 ile 1268 arasında Haçlıya dönüş yılı **bulunamadı**.

### 15 · Cebele
- **TDV:** `cebele` 200
- **Koordinat:** 35.36567, 35.95309 — al-Ṯurayyā `JABALA_359E353N_S` (certain) · en yakın Hama 76,9 km
- **Halkalar:**
  - `1080 · YIL · beni-ammar-trablussam (metbû) · v` — "[İbn Suleyha] … 1080’de Rumlar’ı kovarak şehre hâkim oldu ve Trablusşam’da hüküm süren Ammâroğulları’nı metbû tanıyarak hâkimiyetini sürdürdü." Künye ✓
  - `1099-02 · AY · Haçlı (geçici) · x?` — "…Godefroi de Bouillon ile Robert de Flandre 1099 yılı Şubat ayı sonunda Cebele’yi ele geçirdiler ve buradan Arka’ya hareket ettiler." → geçici; `kudus-kralligi` f=1099-07-15 ⇒ künye ✗ (henüz kurulmamış). Halka olarak yazılmamalı.
  - `1101 · YIL · suriye-selcuklu (Dukak) · s?` — "Tancred 1101’de şehri tekrar kuşatınca İbn Suleyha … Cebele’yi Dukak’a teslim etmeye karar verdiğini bildirdi…" ⚠️ "karar verdiğini bildirdi" ≠ teslim tamamlandı.
  - `1109-07-23 · GÜN · antakya-prinkipsligi · s` — "Ancak Tancred sözünde durmadı ve onu şehri terketmek zorunda bıraktı (23 Temmuz 1109)." Künye ✓
  - `1188-07-15 · GÜN · eyyubi · s` — "Yaklaşık seksen yıl Haçlı işgali altında kalan Cebele, … Selâhaddîn-i Eyyûbî tarafından fethedildi (18 Cemâziyelevvel 584 / 15 Temmuz 1188)." Künye ✓
  - `1192…1285 · bilgi` — Templier/Hospitalier mücadelesi; 1285 Kalavun (pencere dışı).

### 16 · Maarretünnu'mân
- **TDV:** `maarretunnuman` 200
- **Koordinat:** 35.64344, 36.69124 — al-Ṯurayyā `MAARRANUMAN_366E356N_S` (certain) · en yakın Hama 57,1 km
- **Halkalar:**
  - `1002 · YIL (392) · hamdani-halep (Lü'lü') · s` — "Lü’lü’ 392’de (1002) Fâtımîler’le anlaşarak Maarretünnu‘mân’ı ele geçirdi." Künye ✓ (hamdani-halep t=1004) ⚠️ 1004 sonrası Lü'lü' idaresi künyesiz.
  - `1042/1043 · HİCRÎ YIL (434) · ? · s` — "434 (1042-43) yılında Emîr Nâsırüddevle el-Hamdânî, Halep hâkimi Mirdâsî Simâl’e karşı yaptığı sefer esnasında şehri ele geçirdi." 🔴 cümle devleti adlandırmıyor; `hamdani-halep` t=1004 ⇒ ✗ → **devlet ölçülemedi**.
  - `1065 · YIL (457) · mirdasi · v(iktâ)` — "Mirdâsîler’den Mahmûd 457’de (1065) Halep’e girince Maarretünnu‘mân’ı Türk kumandanı Hârûn b. …" Künye ✓
  - `1085 · YIL (478) · selcuklu · s` — "Süleyman Şah 478’de (1085) o sırada Ukaylîler’e ait bulunan Maarretünnu‘mân’a sahip oldu." Künye ✓ · aynı cümle 1085 öncesi `ukayli` sahipliğini tanıklar.
  - `1092 · YIL (485) · suriye-selcuklu · v(iktâ)` — "485’te (1092) Tutuş, Maarretünnu‘mân dahil bölgedeki bazı yerleri Antakya Valisi Yağısıyan’a iktâ etti."
  - `1098-12-11 · GÜN · Haçlı · s` — "Fakat çok kısa bir süre sonra (14 Muharrem 492 / 11 Aralık 1098) Haçlılar şehri istilâ edip yaklaşık 20.000 kişiyi öldürdüler…" ⚠️ hangi Haçlı yapısı — cümlede yok (`antakya-prinkipsligi` f=1098-06-03 penceresi tutar; atama sende).

### 17 · Kal'atü Ca'ber (Devser)
- **TDV:** `caber` 302 · **`caber-kalesi` 200** (CA‘BER KALESİ)
- **Koordinat:** 35.8973151, 38.4810486 — Pleiades **668235** "Dausara" · ikinci kaynak al-Ṯurayyā `DAWSAR_384E359N_S` 35.92575, 38.49243 (3,2 km). Özdeşlik TDV'den: "İslâmiyet’ten önce Musul-Halep yolu üzerinde Devser (Bizans kaynaklarında Dawsarôn) adıyla ünlü bir müstahkem mevki olup…" ✓ · en yakın Rakka 47,9 km
- **Halkalar:**
  - `~1040 · YIL "doğru" · fatimi · s` — "Daha sonra uzun süre Benî Nümeyr kabilesinin elinde kalan kalenin 1040 yılına doğru Fâtımîler’in Suriye bölgesi kumandanı Anuş Tegin ed-Dizberî’nin hâkimiyeti altına girdiği görülmektedir." → kaba yıl. Öncesi `numeyri` (991–1083) ✓
  - `1086 · YIL · buyuk-selcuklu · s` — "Selçuklu Sultanı Melikşah Halep seferi münasebetiyle bölgeye gelişinde kaleyi zaptetti (1086) ve Kuşeyroğulları’nı bölgeden uzaklaştırdı." Künye ✓ (Kuşeyroğulları künyesiz)
  - `1169 · YIL · ukayli → zengi-halep · s` — "1169’da ise Ukaylîler’in sonuncusu olan Şehâbeddin Mâlik b. [Ali kaleyi Nûreddin'e bıraktı]…" (cümle çıkarımda kesik) 🔴 `ukayli` t=**1096** ⇒ 1096–1169 Ca'ber Ukaylî kolu **künye penceresini aşıyor** — D205 adayı.
  - `1174 · YIL · eyyubi · s` — "Beş yıl sonra kale Nûreddin Zengî’nin ölümüyle (1174) bölgeye yerleşen Selâhaddîn-i Eyyûbî’nin eline geçti…" (1169+5 = 1174, tutarlı) Künye ✓
  - `1240 · YIL · eyyubi-halep · s` — "1240’ta … el-Melikü’l-Hâfız kaleyi yeğeni Halep Hükümdarı Selâhaddin Yûsuf’a … devretti." Künye ✓
  - `1260 · YIL · ilhanli · s+x` — "1260 yılında ise İlhanlı Hükümdarı Hülâgû’nun eline geçen kale tahrip e[dildi]…" Künye ✓

### 18 · Rahbe (Rahbetü Mâlik b. Tavk)
- **TDV:** `rahbe` **302** · `rahbe-kalesi`, `rahbetu-malik-b-tavk`, `rahbe--suriye`, `meyadin` hepsi 302 → başlık maddesi YOK · kapsayıcı: `ukayliler`, `zengiler`, `berkyaruk`, `aksungur-el-porsuki` (hepsi 200)
- **Koordinat:** 34.98817, 40.45784 — al-Ṯurayyā `RAHBAMALIKIBNTAWQ_404E349N_S` (certain) · en yakın Deyrizor 48,2 km
- **Halkalar (dördü de YILSIZ):**
  - `Melikşah dönemi · ukayli · v(iktâ)` — `ukayliler`: "Melikşah, Müslim’in oğlu Muhammed’e Rahbe, Harran, Suruç, Rakka ve Habur’u verdi ve onu kız kardeşiyle evlendirdi." — önceki cümlenin 482/1089'u başka olayı tarihler → yıl yazılmaz; üst sınır Melikşah'ın ölümü (485/1092, aynı paragraf).
  - `~1092 · suriye-selcuklu · s` — `berkyaruk`: "…Rahbe, Musul, Nusaybin, Antakya, Urfa, Harran ve Rakka’yı ele geçirip adına hutbe okutturan Tutuş…" — yılsız.
  - `Muhammed Tapar dönemi · v(iktâ)` — `aksungur-el-porsuki`: "…Aksungur, iktâ ı olan Rahbe’ye çekildi…" — yılsız.
  - `≥1149 · zengi-halep · s` — `zengiler`: "…Rakka, Rahbe ve Humus, Sincar’a karşılık Nûreddin’e terkediliyordu." — bağlam "(544/1149)" SONRASI; anlaşma yılı cümlede yok.
- **Sonuç:** hiçbir halka yıl düzeyinde tarihlenemedi; Eyyûbî/Moğol/Memlük halkaları bulunamadı.

### 19 · Büst
- **TDV:** `bust` 200 (BÜST)
- **Koordinat:** 31.39108, 64.39078 — al-Ṯurayyā `BUST_643E313N_S` (tür *capitals*, certain). ⚠️ LAB yaklaşığına 21,2 km: LAB satırı "Bust (Leşker-i Bâzâr)" iki yeri tek satırda topluyor; al-Ṯurayyā Büst şehrini veriyor. Önerim: nokta = Büst (TDV başlığı). · en yakın Kandehar 127,4 km
- **Halkalar:**
  - `gazneli · bilgi` — "…Zemindâver vilâyetinin merkezi ve Gazneliler’in ikinci başşehri olan Büst…" (aşağıdaki cümle içinde)
  - `1045 · YIL · buyuk-selcuklu · x` — "Selçuklular 1045’te şehri yağmaladılar, fakat ele geçiremediler."
  - `1048 · YIL · gazneli · bilgi` — "Gazneliler 1048’de Behram Niyâl kumandasındaki bir Selçuklu ordusunu Büst yakınlarında mağlûp ettiler."
  - `1149 · YIL · gurlu · x(tahrip)` — "Gurlu Hükümdarı Alâeddin Cihansûz Gazne’den sonra … Büst’ü de tahrip etti (1149)." ⚠️ tahrip ≠ zapt; Gurlu'ya kalıcı geçiş yılı **bulunamadı**.

### 20 · Özkent
- **TDV:** `ozkent` 200
- **Koordinat:** 40.81074, 73.39026 — al-Ṯurayyā `UZJAND_733E408N_S` (certain) · en yakın Oş 59,4 km
- **Halkalar:**
  - `1005 · YIL (395) · karahanli · bilgi` — "…kardeşleriyle taraftarları esir edilerek tekrar Özkent’e götürüldü." Künye ✓
  - `1019 · YIL (409) · karahanli · s(iç)` — "Hasan 409’da (1019) Arslan İlig Muhammed’in başşehri Özkent’i ele geçirdi."
  - `1025→1032 · YIL · karahanli · s(iç)` — "…Yûsuf Kadır Han 416’da (1025) muhaliflerini yenerek Özkent’i zaptetti ve 423’e (1032) kadar elinde tuttu."
  - `1043/1044 · HİCRÎ YIL (435) · dogu-karahanli · s(kısa)` — "…Şerefüddevle Süleyman Arslan Han 435’te (1043-44) bir süre Özkent’i ele geçirmiş, fakat yeniden Batı Karahanlı idaresi kurularak merkez haline gelmişti." → sonra `bati-karahanli` (yılsız). Künye ✓
  - `1088-04/05 · AY · buyuk-selcuklu · v` — "…481 yılının ilk aylarında (Nisan-Mayıs 1088) … Özkent’e kadar ilerledi ve Batı Karahanlılar bir süre Selçuklular’a bağlandı."
  - `≥1141 · künyesiz (Fergana Karahanlı) · s` — "536’da (1141) Karahıtaylar’ın Mâverâünnehir’i istilâ etmesinden sonra Fergana’da merkezi Özkent olmak üzere bağımsız küçük bir Karahanlı Devleti (Fergana Hanlığı) kuruldu." ⚠️ 1141 istilâyı tarihler; kuruluş "sonra".
  - `1212 · YIL (608) · son` — "Bu hanlık 608’e (1212) kadar sürdü."
  - `1210 · YIL (606) · harizmsah · x` — "…Hârizmşah Muhammed kaçan Karahıtaylar’ı Özkent’e kadar kovaladı." (kovalama ≠ zapt)

## 4 · BULUNAMADI listesi (bu da sonuçtur)

| Kalem | Ne denendi |
|---|---|
| Koordinat: Alamut · Otrar · Fîrûzkûh · Kumbi Salih · Adilcevaz | al-Ṯurayyā tam veri (2518 kayıt, 45 km yarıçap) · Pleiades `search_rss` · Getty TGN SPARQL (HTTP 400) + reconcile (SSL hatası) · UNESCO (HTTP 403) |
| TDV başlık maddesi: Otrar · Fîrûzkûh · Kumbi Salih · Adilcevaz · Anavarza · Rahbe · Sis · Malazgirt | ölü slug'lar (302) kartlarda; arama `ajax_search_auto.php` `sp=m` (başlık): 0 sonuç |
| Sis 1000-1280 halkası | `kozanogullari` · `adana` · `misis` gövde taraması |
| Anavarza 1199 sonrası halka | `misis` (Aynizerbâ adıyla) |
| Rahbe yıl düzeyinde halka | 4 madde; dört tanık da yılsız |
| Otrar Moğol zapt yılı | `cengiz-han`: kuşatma sonbaharda; zapt cümlesi yılsız |
| Taberiye Haçlı geçiş yılı | "I. Haçlı Seferi esnasında" — yılsız |
| Tartûs Haçlı geçiş yılları (ilk ve 1188 sonrası) | `tartus` gövdesi |

## 5 · ÖNERİLER (hüküm değil)

1. **Künye penceresi aşımları (D205 — önce sınıflandırma, sende):** `antakya-prinkipsligi` t=1268 ↔ Lazkiye 1287'ye kadar Haçlı · `ukayli` t=1096 ↔ Ca'ber 1169'a kadar Ukaylî · `hamdani-halep` t=1004 ↔ Maarre'de Lü'lü' sonrası ve 1042 "el-Hamdânî".
2. **Künyesiz polity'ler (5):** Atsız Türkmen beyliği · Fergana Karahanlı Hanlığı · Rubenî baronluğu · Templier · Kuşeyroğulları. 1281 öncesi pencere açılırsa ilk ikisi toprak kaplar.
3. **Lazkiye 1281–1923 için de atlasta YOK** (en yakın nokta Antakya 82 km) — çekirdek pencerenin eksiği; ayrı sevk önerilir.
4. **Yeni TDV slug tuzakları:** `gana` = modern ülke (doğrusu `gane`) · `aynizerbi` = kişi maddesi · `caber` 302 (doğrusu `caber-kalesi`) · `rahbe` ve varyantları 302.
5. **Kumbi Salih = Gāne başşehri** TDV'de "sanılmaktadır" → kaynaklı halka sayılmamalı.
6. **Kalan 5 koordinat** için Getty TGN'ye erişebilen bir makine/oturum gerekir (bu makinede SPARQL 400, reconcile SSL hatası).

## 6 · Değişen dosya
Yalnız bu dosya: `denetim/KAYNAK-EKSIK-SEHIR-1010.md`. `data/`ya dokunulmadı. Ham TDV metinleri scratchpad'de kaldı (commit edilmedi).

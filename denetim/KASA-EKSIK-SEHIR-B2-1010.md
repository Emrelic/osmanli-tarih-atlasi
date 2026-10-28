# KASA-EKSIK-SEHIR-B2-1010 — atlasta noktası olmayan 20 şehrin kaynaklandırması (B listesi, ikinci parti)

**Tür:** YALNIZ ÖLÇÜM + ÖNERİ (KASA rolü: metin). `data/`ya dokunulmadı, hüküm YOK.
**Girdi:** `origin/makine/lab:denetim/LAB-EKSIK-SEHIR-1000-1280-1009.md` §3 tablosu + `-B.csv`.
**Okuma tabanı:** `origin/main` = `6e625e15a` (ayrı worktree; KASA ana checkout'u 5 commit geride idi → ölçümde KULLANILMADI).
**Devamı olduğu iş:** KAYNAK-EKSIK-SEHIR-1010 (①, `C:\atlas-kes-1010\denetim\KAYNAK-EKSIK-SEHIR-1010.md`).

## 0 · SEÇİM — niçin tam "21-40" değil

① 1-20'yi **sıraya göre değil ölçütle** seçti; LAB §3 numarasıyla 21 Alamut · 22 Otrar · 23 Özkent · 25 Kumbi Salih'i de ALDI, 1-20'den on birini almadı. Mükerrer yakmamak için:

| LAB §3 # | Şehir | niçin bende |
|---|---|---|
| 24 | Tinmel | 21-40 |
| 26 | Evdağust | 21-40 |
| 27 | Mârida (Mérida) | 21-40 |
| 28 | Chartres | 21-40 |
| 29 | Carcassonne | 21-40 |
| 30 | Brattahlíð (Grönland) | 21-40 |
| 31 | Worms | 21-40 |
| 32 | Speyer | 21-40 |
| 33 | Bamberg | 21-40 |
| 34 | Goslar | 21-40 |
| 35 | Braunschweig | 21-40 |
| 36 | Salzburg | 21-40 |
| 37 | Gniezno | 21-40 |
| 38 | Płock | 21-40 |
| 39 | Salerno | 21-40 |
| 40 | Melfi | 21-40 |
| 10 | Şevbek | ①'in almadığı 1-20 artığı (21/22/23/25'in yerine) |
| 16 | Sîrâf | aynı |
| 19 | Bâmiyân | aynı |
| 20 | Uç | aynı |

**SAHİPSİZ KALAN (kimse almadı, koordinatöre bildirildi):** 4 Korint · 5 Andravida · 6 Mistra · 7 Misivri · 8 Beylekan · 11 Kayseriye (Filistin) · 15 Ayla (Akabe).
Bu 20'nin hepsi LAB'in **B-YOK** kovasındadır (en yakın nokta > 40 km) ⇒ "vekil nokta mı ayrı yerleşim mi" sorusu bu partide DOĞMAZ.

## 1 · ÖNGÖRÜ (ölçümden ÖNCE yazıldı, 2026-10-10 00:37)

- **TDV başlık maddesi tutacak:** Sîrâf, Bâmiyân, Uç (?), Şevbek ≈ 3-4. TDV olay değil yer-kişi ansiklopedisidir; Avrupa şehirlerinin (Chartres … Melfi, 14 şehir) **hiçbirinde** başlık maddesi beklenmiyor (ilk tarama: `worms`, `speyer`, `bamberg`, `goslar`, `salzburg`, `gniezno`, `salerno`, `melfi`, `karcason` hepsi HTTP 302).
- **Kapsayıcı TDV maddesinde geçecek:** Tinmel (`muvahhidler`/`ibn-tumert`), Mârida (`batalyevs`/`endulus`), Salerno (`sicilya`/`haclilar`), Braunschweig (`almanya`), Salzburg (`avusturya`), Grönland (`danimarka`), Gniezno/Płock (`polonya`) ≈ 7 — ama çoğunda **1000-1280'i tarihleyen cümle olmayacak** (geçme ≠ destekleme, `§4 ⑧`).
- **Evdağust:** TDV aramasında 0 sonuç; `gane`/`murabitlar` gövdesinde aranacak, büyük olasılıkla **bulunamadı**.
- **Akademik kaynak gerekecek:** ≥ 12 şehir (Avrupa). Bu turda erişilebilen kurumsal kaynak (Britannica vb.) adıyla yazılacak; erişilemezse "bulunamadı".
- **Gün hassasiyeti:** 20'nin en çok 2'sinde; çoğu YIL ya da hicrî çift yıl.
- **devletler.js karşılığı:** Avrupa için `almanya` (Kutsal Roma, 962-), `fransa` (987-), `polonya-erken` (966-), `apulya-dukaligi`, `sicilya-kralligi`, `norse-gronland`, `leon-kralligi`, `muvahhidler`, `gane`, `murabitlar`, `gurlu`, `gazneli` VAR (ilk tarama). Toulouse var, Trencavel YOK; Salzburg Başpiskoposluğu / Benevento ayrı künye YOK; Büveyhî/Kîş için künye belirsiz ⇒ en az 3 "künye yok" bekleniyor.
- **Koordinat:** LAB'in "genel bilgiden" koordinatı DAYANAK değil; TDV koordinat vermez ⇒ çoğunda "kaynaklı koordinat bulunamadı, LAB yaklaşık değeri" yazılacak.

## 2 · ÖLÇÜM — şehir başına (20/20 işlendi)

**Kaynak erişimi (ölçüldü, 2026-10-10):** TDV `GET` 200/302 doğrudan. TDV ajax araması `sp=m` (başlık) **Alamut gibi VAR olan madde için de 0 döndü** ⇒ başlık araması bu turda KÖR, yokluk kanıtı değil; `sp=t` (içerik) yalnız ilk 5 sonucu verir. TDV birkaç kez **503** verdi (hız sınırı = taşıma arızası, ölü değil; yeniden denendi). Treccani (`treccani.it/enciclopedia/<slug>/`, Istituto della Enciclopedia Italiana — kurumsal kaynak, adıyla) 200; bulunmayan slug **ana sayfaya yönlendiriyor** (200 ama ana sayfa = YOK). Britannica **403**, UNESCO WHC **403 (Cloudflare)**, Encyclopaedia Iranica **403**, GeoNames API demo hesabı **günlük kota dolu** ⇒ koordinat GeoNames **web arama sayfasından** (geonames.org/search.html, gazetteer) okundu.
**Koordinat ölçütü:** GeoNames'in döndürdüğü ilk uygun kayıt **ve** sınıfı yazıldı. Modern şehirde değer bugünkü idarî merkezdir; 1000-1280 çekirdeğiyle örtüştüğü KANITLANMADI, yalnız "aynı adlı yer". Arkeolojik yerde sınıf (`ruin(s)`/`mosque`) yazıldı.
**devlet id:** `girdi.oku_devletler()` (897 künye, `6e625e15a`) TARANDI; yazılan her id'nin `f..t`'si yanında.

| # | Şehir | TDV slug · HTTP | tarih · hassasiyet | devlet id (`f..t`) | koordinat (GeoNames) | kaynak cümlesi |
|---|---|---|---|---|---|---|
| 24 | **Tinmel** | `tinmel` 302 · `tinmal` 302 · **`ibn-tumert` 200** · `muvahhidler` 200 · `abdulmumin-el-kumi` 200 | **1123** · yıl (hicrî 517) | `muvahhidler` (1130-01-01..1269-01-01) — ⚠️ §3 ① | 30.9849, -8.22826 · `mosque` "Tinmal" (cami = vekil nokta) | TDV İBN TÛMERT: "İbn Tûmert … 517 (1123) yılında Tinmellel'e intikal etti ve şehir halkını çıkarıp buraya yerleşti." · TDV MUVAHHİDLER: "668'de (1269) … Muvahhidler Devleti son bulurken bu sırada Tinmellel'e çekilmiş olan liderleri de ele geçirilerek idam edildi." |
| 26 | **Evdağust** | `evdagust` 302 · arama 0 · **`gane` 200** · `murabitlar` 200 · `mali` 200 | **1054** · yıl | `murabitlar` (1056-01-01..1147-03-23) — ⚠️ §3 ①; öncesi Sanhâce Emirliği: **künye YOK** | 17.4235, -10.406 · `ruin(s)` "Aoudaghost" | TDV GĀNE: "Murâbıtlar 1054 yılında Sanhâce Emirliği'nin eski başşehri Evdeguşt'u, 1076 yılında da Gāne şehrini ele geçirdiler" · ⚠️ TDV MURÂBITLAR aynı olayı Ağmât'ın alınışından (448/1056) SONRA, yıl vermeden anlatıyor — §3 ② |
| 27 | **Mârida (Mérida)** | `merida` 302 · `marida` 302 · `mirde` 302 · `muvahhidler` 200 · `batalyevs` 200 · `mervaniler--endulus` 200 | **1228** · yıl — **Treccani** (TDV'de 1000-1280'i tarihleyen cümle YOK) | `leon-kralligi` (0910-01-01..1230-09-23); öncesi `endulus-tavaif`/`murabitlar`/`muvahhidler` — **yıllı cümle bulunamadı** | 38.91802, -6.34292 · `ADM1 seat` | Treccani "Mérida": "Dopo la riconquista cristiana di re Alfonso IX (1228), fu infeudata all'ordine di Santiago" · TDV MUVAHHİDLER: İkāb sonrası Hristiyan krallıkların aldığı şehirler arasında "Mâride (Mérida)" — **cümle yıl vermiyor** (dönem 1212-1269) |
| 28 | **Chartres** | `chartres` 302 · TDV'de yalnız bibliyografya (Fulcher of Chartres) | **1280** · yıl — Treccani | `fransa` (0987-01-01..1792-09-22) 1280'den; öncesi Blois-Champagne kontluğu: **künye YOK** | 48.44685, 1.489248 · `ADM2 seat` | Treccani "Chartres": "nel 10° sec., appannaggio dei conti di Blois e di Champagne. Nel 13° sec. Giovanna di Châtillon la cedette alla corona (1280)." |
| 29 | **Carcassonne** | `karcason` 302 · içerik araması: yalnız `anbese-b-suhaym` (8. yy) | **1209** (Montfort) · **1240** (Fransa) · yıl — Treccani | `fransa` 1240'tan; 1209-1218 Montfort, öncesi Trencavel: **künye YOK** (`toulouse` 0849..1271 ayrı yapı; şehri kapsadığı ölçülmedi) | 43.21649, 2.34863 · `ADM2 seat` | Treccani "Carcassonne": "Conquistata dai crociati di Simon de Montfort nel 1209, divenne sua capitale (sino al 1218); nel 1240 Luigi IX l'incorporò direttamente al regno di Francia." |
| 30 | **Brattahlíð** | TDV yok (`danimarka` 200: yalnız modern Grönland) | **985** · yıl — Treccani (KOLONİ için; **Brattahlíð adı geçmiyor**) | `norse-gronland` (0985-01-01..1450-01-01) | 61.14958, -45.5145 · `populated place` "Qassiarsuk" — ⚠️ Brattahlíð = Qassiarsuk eşlemesi kaynakla **doğrulanmadı**; "Brattahlid" GeoNames'te 0 sonuç | Treccani "Groenlandia": "nel 985 gli Islandesi fondarono due colonie, Vesterbygd e Österbygd." · "Erik il Rosso": "Raggiunse intorno al 985 … e vi stabilì la prima colonia normanna." ⇒ şehir ADIYLA tanıklık **bulunamadı** |
| 31 | **Worms** | `worms` 302 | **1000-25** (Burchard) · **1122** · yıl — Treccani | `almanya` (0962-02-02..1945-06-05) | 49.63278, 8.359164 · `ADM3 seat` | Treccani "Worms": "Lo sviluppo politico del vescovado culminò con l'occupazione della rocca da parte del vescovo Burcardo (1000-25)" · "Accordo concluso nel settembre del 1122 tra l'imperatore Enrico V e papa Callisto II" |
| 32 | **Speyer** | `speyer` 302 | **1041** · **1146** · yıl — Treccani | `almanya` | 49.32083, 8.431111 · `ADM3 seat` | Treccani "Spira": "vi risedette fino al 1146 un burgravio di nomina regia, la cui giurisdizione fu poi assunta dal vescovo." · "Nella cripta (1041) sono le tombe degli imperatori Corrado II, Enrico III, IV, V" |
| 33 | **Bamberg** | `bamberg` 302 | **1007** · yıl — Treccani | `almanya`; Bamberg Piskoposluğu ayrı **künye YOK** | 49.89872, 10.90066 · `ADM3 seat` | Treccani "Bamberga": "Divenuta nel 1007 capitale dell'omonimo principato ecclesiastico che Enrico II conferì al suo cancelliere Everardo I" |
| 34 | **Goslar** | `goslar` 302 | **1047** · yıl — Treccani (Enc. Italiana 1933) | `almanya` | 51.90424, 10.42765 · `ADM3 seat` | Treccani "Goslar" (EI 1933): "cappella regia o cattedrale dei Ss. Simone e Giuda, fondata nel 1047 dall'imperatore Enrico III" · "Il Palazzo imperiale, fondato da Ottone III, ricostruito nel sec. XII" |
| 35 | **Braunschweig** | `braunschweig` 302 (TDV `almanya` 200: yalnız modern/şarkiyat) | **1235** · **1247** · yıl — Treccani | `almanya`; Brunswick-Lüneburg Dükalığı **künye YOK** (`hannover` 1692.., `saksonya` 1281.. — ikisi de pencere dışı) | 52.26593, 10.52672 · `ADM3 seat` | Treccani "Brunswick": "riuniti da Ottone il fanciullo, che nel 1235 ebbe da Federico II l'investitura feudale e il titolo di duca" · "Braunschweig": "aderire (1247) alla Hansa germanica" |
| 36 | **Salzburg** | `salzburg` 302 (TDV `avusturya` 200: yalnız modern eyalet) | **996** · **1278** · yıl — Treccani | `almanya`; Salzburg Başpiskoposluğu **künye YOK** (`avusturya-dukaligi` 1156..1276 ayrı yapı) | 47.79940, 13.04399 · `ADM1 seat` | Treccani "Salisburgo": "si aggiunse dal 996 la città commerciale" · "Nel 1278 Rodolfo d'Asburgo riconobbe agli arcivescovi di S. dignità di principi del Sacro Romano Impero." |
| 37 | **Gniezno** | `gniezno` 302 · **`polonya` 200** (Gnesen) | **1025-06** · ay (TDV) | `polonya-erken` (0966-01-01..1569-07-01) | 52.53481, 17.58258 · `ADM2 seat` | TDV POLONYA: "Gnesen'de muhtemelen papalığın da onayı ile taç giydi (Haziran 1025)." · "XIV. yüzyıla kadar merkez Gnesen olup daha sonra yerini Kraków'a (Cracow) bırakmıştır." ⚠️ §3 ③ |
| 38 | **Płock** | `plock` 302 · TDV `polonya`da Płock **geçmiyor** (yalnız "Masovlar") | **1243** · yıl — Treccani; 11. yy piskoposluk (yıl YOK) | `polonya-erken`; Mazovya Dükalığı **künye YOK** | 52.54681, 19.70638 · `ADM2 seat` | Treccani "Płock": "è nota sin dall'11° sec. come sede vescovile. Divenuta nel secolo successivo sede del Ducato di Masovia … Bruciata dai Prussiani baltici nel 1243, devastata da Lituani e Ucraini nel 1280" |
| 39 | **Salerno** | `salerno` 302 · TDV `haclilar`da yalnız KİŞİ adı (Ruggero di Salerno) — şehir tanıklığı DEĞİL | **1076** · yıl — Treccani | `apulya-dukaligi` (1059-01-01..1128-01-01) 1076'dan → `sicilya-kralligi` (1072..1282); öncesi Lombard Salerno Prensliği: **künye YOK** | 40.67545, 14.79327 · `ADM2 seat` | Treccani "Salerno": "Dopo l'assedio nel 1076 da parte di Roberto il Guiscardo, il principato cessò di esistere, ma S. non perse il prestigio di città capitale" |
| 40 | **Melfi** | `melfi` 302 | **1041** · **1231** · yıl — Treccani | `apulya-dukaligi` (1059..1128) — ⚠️ §3 ① (1041 < 1059); 1231'de `sicilya-kralligi` | 40.99571, 15.65578 · `ADM3 seat` | Treccani "Melfi": "fu sottratta all'influenza bizantina dai Normanni, che nel 1041 vi stabilirono per qualche tempo la capitale dei loro domini in Puglia" · "Federico II (che … nel 1231 radunò il parlamento …)" |
| 10 | **Şevbek** | `sevbek` 302 · `sobek` 302 · `sevbek-kalesi` 302 · **`eyyubiler` 200** · `selahaddin-i-eyyubi` 200 · `akabe--urdun` 200 · `baybars` 200 · `kerek` 200 (Şevbek geçmiyor) | **1186** · yıl (hicrî 582) — Kudüs Kr. tarafı; **Eyyûbî'ye geçiş yılı BULUNAMADI** | `kudus-kralligi` (1099-07-15..1291-05-18); sonrası `eyyubi` (1171..1250) — geçiş cümlesi yok | 30.52133, 35.57135 · `ADM2 seat` "Ash Shawbak" (kasaba = **vekil**; kale için GeoNames 0 sonuç) | TDV EYYÛBÎLER: "582 (1186) yılında Kerek-Şevbek Prinkepsi Renaud de Châtillon Mısır'dan Şam'a gelen bir kervanı vurdu." · TDV AKABE: "Kral Baudouin önce Şevbek dolaylarında bir kale yaptırdı" — **cümle yıl vermiyor** (yanındaki 1115 Akabe'yi tarihliyor, `§4 ⑧`) |
| 16 | **Sîrâf** | `siraf` 302 · `sirafi` 302 · `ebu-said-es-sirafi` 200 (yalnız "bk. SÎRÂFÎ" yönlendirmesi, nisbe) · `buveyhiler`/`fars`/`basra`/`bahreyn` 200: şehir 1000-1280 ile geçmiyor · Treccani `siraf_(Enciclopedia-Italiana)` 200 **boş gövde** | **bulunamadı** | bağlanamadı (`buveyhi` 0932..1062 ve `salgurlu` 1148..1286 VAR, ama şehri onlara bağlayan cümle YOK — bölgeden şehre taşınmadı) | **bulunamadı** (GeoNames "Siraf"/"Bandar-e Siraf" 0) | — |
| 19 | **Bâmiyân** | `bamiyan` 302 · `bamyan` 302 · **`gurlular` 200** | **1145** · yıl (hicrî 540) — TDV · **1222** · yıl — Treccani | `gurlu` (1000-01-01..1215-01-01) → `mogol-imparatorlugu` (1206..1260) | 34.82155, 67.82733 · `ADM1 seat` "Bamyan" | TDV GURLULAR (hükümdar listesi): "Bâmiyân ve Tohâristan Kolu Fahreddin Mesud 540 (1145) … Celâleddin Ali 602-612 (1206-1215)" · Treccani "Bamiyan": "un emporio commerciale, distrutto nel 1222 da Genghiz khān." ⚠️ 1222 yalnız Treccani; TDV'de Moğol tahribi yılı aranmadı |
| 20 | **Uç** | `uc` 302 · `uch` 302 · `uc--sehir` 302 · `uc-serif` 302 · `kubace` 302 · `multan`/`sind`/`iltutmis`/`delhi-sultanligi`/`bahaeddin-zekeriyya` 200: **Uç adıyla geçmiyor** | **bulunamadı** (Kabâce'nin idaresi TDV'de var, 625/1228 ölümü — ama ŞEHRİ anan cümle yok; `D208` bölgeden şehre taşıma yasağı) | `kabace` (1206-01-01..1228-01-01, başkent "Mültan · Uç") **VAR** — bağlayan kaynak cümlesi yok | **bulunamadı** (GeoNames "Uch Sharif" 1. sonuç Sind'de alakasız; 2. sonuç "Muhallah Amir" 29.23247, 71.05921 `section of populated place` — Uç olduğu doğrulanmadı) | — |

## 3 · TEŞHİS EDİLEN KALEMLER (ölçüm; hüküm koordinatörün)

① **Kaynak yılı künyenin `f`'sinden ÖNCE — üç vaka:** Tinmel 1123 ↔ `muvahhidler.f` 1130 · Evdağust 1054 ↔ `murabitlar.f` 1056 · Melfi 1041 ↔ `apulya-dukaligi.f` 1059. Üçü de "hareket/hanedan devletleşmeden önce o şehirde" görünümünde. `§3.5` künye aşımı sınıflandırması gerekir. **Sınıflandırmadım** — "devlet şu yıl kuruldu" cümlesi bu turda okunmadı.
② **TDV iç sıralama farkı (Evdağust):** GĀNE "1054" der; MURÂBITLAR olayı 448/1056 Ağmât'tan sonra yılsız anlatır. Gövdeler karşılıklı okundu; çelişki mi sıralama mı, karar verilmedi.
③ **İki kaynak ayrışıyor (Gniezno):** merkezliğin bitişi TDV "XIV. yüzyıla kadar" ↔ Treccani "capitale … fino alla metà del 13° sec." TDV birincil (`§4`); fark bildirildi.
④ **Künye YOK (8):** Sanhâce Emirliği (Evdağust) · Blois-Champagne (Chartres) · Trencavel (Carcassonne) · Bamberg Piskoposluğu · Brunswick-Lüneburg Dükalığı · Salzburg Başpiskoposluğu · Mazovya Dükalığı (Płock) · Lombard Salerno Prensliği.
⑤ **Vekil koordinat (3):** Tinmel = cami · Şevbek = kasaba (kale değil) · Brattahlíð = Qassiarsuk (eşleme doğrulanmadı). Bu partide LAB ÖLÇÜLEMEDİ kovasından şehir YOK (hepsi B-YOK).

## 4 · ÖNGÖRÜ ↔ ÖLÇÜM

| öngörü | ölçüm | tuttu mu |
|---|---|---|
| TDV başlık maddesi 3-4 (Sîrâf, Bâmiyân, Uç, Şevbek) | **0** — dördü de 302 | ❌ |
| Avrupa 14 şehirde başlık 0 | 0 | ✅ |
| kapsayıcı TDV maddede ~7, çoğu yılsız | 1000-1280'i TARİHLEYEN TDV cümlesi **5** şehirde (Tinmel, Evdağust, Gniezno, Bâmiyân, Şevbek) | ≈ |
| Evdağust büyük olasılıkla bulunamadı | **BULUNDU** (`gane` 1054) | ❌ |
| akademik/kurumsal kaynak ≥12 | Treccani **15** şehirde tek ya da ek dayanak | ✅ |
| gün hassasiyeti en çok 2 | **0** gün, 1 ay (Gniezno 1025-06) | ✅ |
| "künye yok" ≥3 | **8** | ✅ (yön doğru, sayı 2,7 kat) |
| koordinat çoğunda bulunamadı | **18/20 bulundu** (GeoNames web), 2 bulunamadı | ❌ (ters yön) |

## 5 · ÖZET SAYILAR
- **20/20 şehir işlendi.** Tarihli kaynak cümlesi: **18** · tarih **bulunamadı: 2** (Sîrâf, Uç).
- Kaynak dağılımı: yalnız TDV 3 (Tinmel, Evdağust, Şevbek) · TDV + Treccani 2 (Gniezno, Bâmiyân) · yalnız Treccani 13 · hiçbiri 2.
- devlet id: yazılabilen 18 · bağlanamayan 2 (Sîrâf, Uç — Uç'un künyesi `kabace` VAR, cümle yok).
- Koordinat: 18 GeoNames (3'ü vekil) · 2 bulunamadı.
- Wikipedia/blog/forum/YZ metni: **0** kullanıldı.

# RAPOR — DOĞU 500-1281 / HINT-3

Ölçüm yeri: `C:\atlas\.claude\worktrees\dogu` (worktree-dogu, git'e dokunulmadı). `node denetim/dogu/dogrula.js hint3` → çıkış 0
(`{"kunye":5,"kron":85,"yer":8,"s":15,"bosluk":0,"toprak":32,"kuyruk_gerekli":8,"yama":7,"yama_dilim":15,"devir_eslesen":15,"devir_eslesmeyen":0,"ihlal":0,"uyari":0}`).
Kaynaklar: R. C. Majumdar (ed.), *HCIP* III, IV, V, VI (archive.org tam metin); H. W. Codrington, *A Short History of Ceylon* (Macmillan 1926, archive.org tam metin);
TDV *Gurlular*, *Bengal*, *Maldivler*, *Ecmîr*, *Lahor* (22.10.2026'da okundu). Her alıntı kaynak metinde **birebir sınandı** (üretici betik alıntı bulunamazsa durur; OCR yazım hataları ve satır sonu tireleri olduğu gibi). Vikipedi dayanak yapılmadı (yalnız arama aşamasında bir özet görüldü, hiçbir madde ona dayanmaz).

## ① Ölçülenler
- Girdi 17 polity: **13 işlendi**, **2 pencere dışı** (`kalinga-eski` t=-0260, `paurava` t=-0316), **4'ü için künye yazılmadı** (aşağıda, hepsi başka biçimde işlendi: `gurlu-hint`, `jaffna`, `dambadeniya`, `yapahuwa`). Künye yazılan 5 + MS1 dalındaki 5 (kronoloji/yerleşim) + `ahom` (KUNYE_MAIN_DA) + `jaffna` kronoloji.
- **Künye: 5** — `ranthambore-cauhan, vaghela, varman-vanga, maldivler-budist, rai-sind` (her birinde kuruluş + son iskeleti).
- **Kronoloji: 85 madde** = 69 anlatı (`kronoloji_cok`) + 16 sınır (`kronoloji_sinir`, Değişmez 2 evreni). Anlatı maddesinin ilk `taraflar` kimliğine göre dağılım: gurlu 9, ahom 7, seylan-sinhala 8 (yer olarak Dambadeniya 6 madde, Yapahuwa 4 madde; 1254 ve 1284 Pandya ilk taraflıdır), delhi-sultanligi 8 (Ranthambhor/Bengal karşı taraf), vaghela 5, ranthambore-cauhan 3, rai-sind 3, pattikera 3, maldivler-sultanligi 3 (+ maldivler budist ilk-taraf 0; budist için 1 madde Cola'dan), khayaravala-japila 3, varman-vanga 2, chutiya 2, deva-samatata 2, pandya 2, kamata 1, kamarupa 1, yafna 1, cola 1, sena 1, caulukya 1, hindu-sahiler 1, bengal-sultanligi 1, portekiz 1. `taraflar`'da (anlatı+sınır, her yerde) geçme: gurlu 12, ranthambore-cauhan 10, vaghela 9, ahom 9, sena 8, maldivler-sultanligi 7, deva-samatata 6, pattikera 5, varman-vanga 5, caulukya 5, kamata 4, chutiya 4, rai-sind 3, maldivler-budist 3, khayaravala-japila 3. `toprak-kazanc/kayip` maddesi: 32.
  Hedef 6-8 madde yalnız gurlu (9), ahom (7+mevcut 4), ranthambore-cauhan (8 madde+2 sınır), vaghela (6+2) ve Dambadeniya/Yapahuwa (seylan-sinhala altında 8) için tutturuldu; kalanlar 1-5 madde (kaynak yetersizliği, ②).
- **Yeni yerleşim: 8** — Dambadeniya, Yapahuwa, Ranthambore, Dholka, Malé, Sadiya, Kamatapur, Pattikera (Mainamati); **15 `s:` dilimi**; `__BOSLUK__` dilimi **0**; `kuyruk_gerekli`: **8** (hepsi; 1281→2000 zinciri kuyruk işçisine).
- **Yama: 7 mevcut/komşu yerleşim, 15 dilim** (Patan (Anhilvâda) 2, Gaur (Lakhnautî) 3, Sonârgâon 3, Dakka (Dhaka) 3, Ecmîr (Ajmer) 1, Lahor 2, Aror (Alor; hint1'in yeni yerleşimine önek) 1). Mevcut zincir başıyla `t`si eşitlenmeyen yama yok (hiçbirinde `devam_gerekli` yok); hepsinde `once_gerekli` var.
- Koordinat: yeni 8 yerleşimin **hepsi ≥2 bağımsız tanıklı**, tanıklar ≤0,5 km (Dholka'da GeoNames+OSM ≈0,1 km, Wikidata Q1263568 ≈3,9 km sapmalı üçüncü; Kamatapur'da Wikidata + OSM + Wikidata Gosanimari ≤2,5 km): Dambadeniya (Wikidata Q1021154 + OSM node 2907471043), Yapahuwa (Wikidata Q3522473 + OSM node 5052793626), Ranthambore (Wikidata Q2724894 + OSM way 254041053), Dholka (GeoNames 1272733 + OSM node 245709012), Malé (GeoNames 1282027 + Wikidata Q9347 + OSM rel 6599336), Sadiya (Wikidata Q7397977 + OSM rel 10057655), Kamatapur (Wikidata Q2893890/Q5587133 + OSM node 4281611632), Pattikera (Wikidata Q7487152 + Q6736254 + OSM way 24694184). Mükerrer taraması (`yer_ara.py yakin`, 8 km): 0 çakışma.
- Sınır maddesi sınaması: 15 devir (yeni yerleşim 7 + yama 8), `devir_eslesmeyen` 0. Ek olarak atlasta zaten var olan Lahor 1186 Gazneli→Gurlu kırılması için sınır maddesi (1) yazıldı.
- Takvim: hicrî tarihler `ic_not_takvim` ile hicrî ∩ milâdî kesişim ilk gününe çevrildi (aritmetik sivil takvim, Jülyen, ±2 gün; aynı yöntem hint1/hint2): 571/1175-76 → 1175-07-22, 574/1178-79 → 1178-06-19, 602/1206 → 1206-01-01, 965/1558 → 1558-01-01, 981/1573 → 1573-05-03, 372/982 → 0982-06-26. TDV'nin kendi verdiği 12 Rebîülâhir 548 = 7 Temmuz 1153 aritmetik takvimle de 1153-07-07 çıktı (tutarlı).

## ② Bulunamayan / doğrulanamayan
- **Pencere dışı:** `kalinga-eski` (t=-0260), `paurava` (t=-0316) — işlenmedi.
- **Künye yazılmayanlar (neden):**
  - `gurlu-hint`: atlasta `gurlu` künyesi (Şensebânîler, 1000-1215) zaten Hint toprağını kapsar; Lahor (1186-1206) ve Ecmîr zincirleri `gurlu` kullanıyor. Çift künye yazılmadı; maddeler `gurlu` altında (9 anlatı + 1 sınır).
  - `jaffna`: atlasta `yafna` künyesi (Yafna Krallığı, f=1281) var; çift künye yazılmadı. Yafna künyesindeki "1215 kuruluş" yalnız atlas kaydı/Vikipedi aktarımıdır; Majumdar V yalnız "the Tamils founded the kingdom of Jaffna", Codrington Yafna kralını ilk kez 1344'te (İbn Battûta) anar → 1215 doğrulanamadı (Pathmanathan/Indrapala açılamadı). Yalnız 1344 maddesi yazıldı; yama yazılmadı.
  - `dambadeniya`, `yapahuwa`: atlasın `seylan-sinhala` künyesi (f=1070, "Polonnaruva → Dambadeniya → Yapahuva → Kurunegala…" sınıf ②) başkent evreleridir; ayrı künye yazılmadı, yerleşimler `seylan-sinhala` kimliğiyle, kronoloji `taraflar`'ı da öyle.
- **Yerleşim yazılmayan merkezler:** Vikramapura (Varman/Deva/Sena merkezi) — yalnız OSM Rampal (23.5425, 90.4961) ve Wikidata Q3350679 Bikrampur (23.55, 90.55), 5,5 km → ikinci bağımsız tanık yok (EK-2 madde 1); Charaideo (Ahom 1253) — tek tanık (Wikidata Q5073874; OSM'de yalnız Charaideo ilçesi 34 km sapma); Japila (Khayaravala) — Majumdar yalnız "Shahabad District" der, Rohtasgarh özdeşleştirmesi kaynaksız (Rohtasgarh'ın Wikidata+OSM tanıkları 24,62/83,92 ama 37 km uzak); Nallur (Yafna), Anahilapataka dışı Vaghela merkezleri, Hamirpur/Ranthambhor dışı Çahamana merkezleri aranmadı.
- **Kuruluş/bitiş yılı kaynakta olmayanlar (künyede UFUK/yüzyıl işareti):** `rai-sind` f (UFUK 0500), `maldivler-budist` f (UFUK 0500), `varman-vanga` f (1026 = "ikinci çeyrek" çeyrek başı, YÜZYIL), `ranthambore-cauhan` f (1192 = Tarain, ONYIL), Kamatapur'un başkent oluş yılı (1290 = "13. yy sonu", YÜZYIL), Sadiya'nın Chutiya tanığı ("13. yy başı" → 1215 = Ahomların Maulung'dan çıkışı, alt sınır), Vaghela'nın Anahilapataka'yı alışı (1243 Cain geleneği; epigrafik kayıt Tribhuvanapala 1242).
- **Taranmayan/okunamayan:** İSAM, TTK/Belleten, DergiPark, YÖK taranmadı (zaman); Çaç-nâme, Minhâc-ı Sirâc (Tabakāt-ı Nâsırî), Hammira-Mahâkâvya, Mahâvamsa/Pûjâvaliya birincil metinleri açılmadı (yalnız Majumdar/Codrington'un aktardığı biçimde). TDV'de Ranthambhor, Vaghela, Dambadeniya, Pattikera, Kamata, Chutiya maddesi aranmadı = "yok" denmiyor (TDV yer-kişi ansiklopedisi; yalnız Gurlular/Bengal/Maldivler/Ecmîr/Lahor okundu).
- **Çelişkiler (maddelerde `ic_not`):** Vaghela'nın sonu 1299 (Majumdar V) ↔ 1298'in ikinci yarısı (VI); Ahom seferleri Yuzbak 1257 (VI) ↔ OCR'da 1207 (V); Maldivler'de Budist kralın dinî hocası Tebrizli Yûsuf (Kâdî Hasan Tâceddin) ↔ Mağribli Ebü'l-Berekât (İbn Battûta), TDV günü yalnız birincisinden verir; Çaç'ın cülusu 602 (Çaç-nâme) ↔ 622 (Arap kroniği) ↔ 640 sonrası (Majumdar); Ecmîr'in kuruluşu II. yy/682 (TDV) ↔ Ajayaraja'nın 12. yy kuruluşu (Majumdar V); Balban–Danujamadhava buluşması 1283 (V, Bengal bölümü).
- **Boşluk (BOŞLUK) dilimi:** yok; kaynaksız kalan dilimler BEYANLI YAKLAŞIKLIKLA bağlandı (Dambadeniya 1271-1281, Yapahuwa 1267-1271, Malé 0500-1153 ve 1558-1573 ve 1573-1968 (TDV adalar için söyler), Sonârgâon/Dakka 1026-1281 (Doğu Bengal, Vikramapura ≈25-30 km), Pattikera 1234-1281, Ranthambore 1192-1226/1236-1301).

## ③ Kararlar / öneriler
### Künye düzeltme önerileri (dosyaya yazılmadı)
- `ahom` (MAIN): f=1281 ve ic_not'taki "geleneksel 1228" Majumdar V-VI ile doğrulanmadı; Majumdar: Maulung'dan yola çıkış **1215**, Charaideo'ya yerleşme **1253**, Suteupha ölümü 1281, Sukhangpha 1293 (ilk üç kral 1215-1293) → f=1253 (yerleşim) ya da 1215.
- `chutiya` (MS1): t=1501 → **1523** (Majumdar VI: Ahom-Chutiya savaşı 1513-1523, "ultimately annexed"); f=1187 kaynakta yok (13. yy başı tanık).
- `kamata` (MS1): t=1581 okunmadı; Majumdar VI krallığı **1498-1502**'de Hüseyin Şah'ın ortadan kaldırdığını söyler → t=1498-1502; f=1257 ilk tanıktır (Yuzbak).
- `kamarupa` (MAIN, t=1150): Majumdar V-VI Vallabhadeva'yı 1185'te, Yuzbak seferini 1257'de (Kamarupa kralı olarak) anar → t≥1257 ya da `kamata` ile sürekli zincir.
- `pattikera` (MS1): f=1202 → **≤1015** (Nepal elyazması şehir tanığı) ya da 1044 (Burma kroniği, Anoratha); Pattikera dilimi 1015'ten başlatıldı.
- `deva-samatata` (MS1): t kaynakta yok, Majumdar "13. yy sonunda krallık Müslümanlara geçti" der.
- `khayaravala-japila` (MS1): f=1158/t=1223 yalnız tarihli yazıtlar (kuruluş/son bilinmiyor) — künyedeki beyanla uyumlu; yerleşim yazılamadı.
- `caulukya` (MAIN, f=1000, t=1297) ↔ `vaghela` (yeni, 1243-1299): Çaulukya'nın Anahilapataka kolu 942'de Mularaja ile başlar (f ≤0942 genişletme, hint2 de öneriyor), 1243'ten sonrası Vaghela'dır → caulukya t=1243 ya da vaghela'yı caulukya'nın devamı say.
- `cahamana` (MAIN, f=1000): TDV Ecmîr şehrin ilk tarihli bilgisini 682'de verir (Cauhan merkezi) → f≤0682 genişletme (kuşak ucu uyarısı zaten künyede).
- `maldivler-sultanligi` (MAIN, f=1153-01-01): TDV günü verir → **1153-07-07**.
- `seylan-sinhala` (MAIN, f=1070, t=1518): Dambadeniya (c.1220) ve Yapahuva (1271-83/4) başkent evrelerini içerir (künye ic_not'u da böyle der); kimlik uygun.

### YAMA GEREKLİ listesi (`yama_hint3.js`)
| yerleşim | eklenecek önek | once_gerekli |
|---|---|---|
| Patan (Anhilvâda) | caulukya 0942→1243, vaghela 1243→1281 (mevcut: racput 1281-1304: **Majumdar: Vaghela 1299'a dek**, öneri vaghela 1281→1299, delhi-sultanligi 1299→) | 0500→0942 (Çapa Anahilapataka kolu, atlas kimliği yok) |
| Gaur (Lakhnautî) | sena 1150→1203, gurlu 1203→1206, delhi-sultanligi 1206→1281 | 0500→1150 |
| Sonârgâon | varman-vanga 1026→1150, sena 1150→1260, deva-samatata 1260→1281 (mevcut: delhi-sultanligi 1281-: **Majumdar V 1283'te Sonargaon'da Deva Danujamadhava'yı "yerel hükümdar" olarak anar** → atlas zinciri düzeltilmeli) | 0500→1026 |
| Dakka (Dhaka) | aynı üçlü (BEYANLI Doğu Bengal) | 0500→1026 |
| Ecmîr (Ajmer) | cahamana 0682→1192 | 0500→0682 |
| Lahor | multan-emirligi 0982-06-26→0991, hindu-sahiler 0991→1013 | 0500→0982-06-26 |
| Aror (Alor) — hint1'in yeni yerleşimi | rai-sind 0500→0640 (hint1 cac-sind 0640→ ile birleşir) | — |

Başka kümenin yaması olan yerleşimlerle çakışma: Delhi, Multan, Srinagar, Gvalyar, Ratanpur, Katmandu, Kannauc, Kâbil, Siyâlkot için yama YAZILMADI (hint1/hint2'ye bırakıldı). Lahor için hint2 "yazılmadı" demişti; bu parça 0982→1013'ü yazdı.
**Atlas mevcut zincir uyarıları (öneri):** (1) `Gauhâtî (Guwahati)` ahom 1281→1817 — atlasın kendi kronolojisi Ahom'un Guwahati'yi 1682'de aldığını söylüyor; Majumdar VI Gauhati'yi 1257'de Kamarupa kralının başkenti ("on the Brahmaputra, at Gauhati") olarak anar, sonra 1498'e dek Kamata/Baro Bhuyas → 1281-1682 sahibi yeniden gözden geçirilmeli. (2) `Sibsâgar (Rangpûr)` ahom 1281- (Ahom Sibsagar'ı 17. yy sonunda başkent yapar; 1253'te Charaideo). (3) Patan 1281-1304 `racput`: Majumdar'da Vaghela. (4) Sonârgâon/Dakka/Gaur 1281 `delhi-sultanligi`: Gaur için TDV uyumlu (1340'a dek Delhi eyaleti), Sonârgâon/Dakka için çelişki.

### Boya ihtiyacı (`arac/renkler.py` BOYALAR'da YOK — grep ile doğrulandı)
- Yeni 5 künye: `ranthambore-cauhan, vaghela, varman-vanga, maldivler-budist, rai-sind`.
- Yerleşim zincirlerinde kullanılan, BOYALAR'da bulunmayan: `multan-emirligi, hindu-sahiler, maldivler-sultanligi, chutiya, kamata, pattikera, deva-samatata` (MS1 dalı/mevcut kimlikler). `khayaravala-japila` yalnız kronolojide (yerleşim yok, boya gerekmez).
- BOYALAR'da VAR (grep): `seylan-sinhala, caulukya, delhi-sultanligi, sena, gurlu, cahamana, portekiz, ahom, yafna`.
- Yeni `bolge`/`tur`: yok (hepsi `guney-asya`; `hanedanlik`/`krallik`). Kronoloji `tur`: `siyaset`, `baskent` (EK-2 madde 7 uyarınca kabul), `isgal`, `ittifak`, `antlasma`, `isyan`, `hukumdar`, `savas`, `kurulus`, `son`, `toprak-*`.

## İşlem notları
- Kayıtta "kur:" yalnız ilk tarihli tanık olan yerlerde yazıldı (Dambadeniya 1220, Yapahuwa 1268, Pattikera 1015); diğer 5 yerleşimde yıl bilinmediğinden `kur` yazılmadı, `s[0].f` "ALT SINIR/UFUK işareti" olarak kaynak metinde beyan edildi.
- Atlas dışı kimlikler (Candrabhânu, Ârya Cakravarti vb.) `taraflar`a yazılmadı.
- Üretim betikleri scratchpad'dedir (`...\Temp\h3\gen3_*.py`; `gen_lib3.py` alıntıyı kaynak metinde sınar). Çıktılar yalnız `denetim/dogu/hint3/` altındadır.

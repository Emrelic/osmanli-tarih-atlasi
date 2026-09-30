# TDV-SLUG-HARITA-0930 — 295 kronolojisiz künye için TDV slug haritası

Evren: `KRONO-BOSLUK-0930.json` `siralama_tek_boya` 335 − `tdv_ilk40` 40 = **295** (ölçüldü, 295/295
tamam). Ham veri: `TDV-SLUG-HARITA-0930.json` (künye başına `hukum · canli_slug · baslik ·
olu_slug[] · icerik_gecisi · baslik_isabet · elle_not`). Araçlar: `ARAC-TDV-SLUG-0930.py` (slug
denemesi) · `-baslik.py` (başlık araması) · `-rapor.py` (hüküm + bu raporun §1-3'ü).

## 0. Öngörü — ölçümden ÖNCE yazıldı · tuttu mu
| öngörü | ölçülen | |
|---|---|---|
| VAR %15-20 | VAR %13 · VAR+AD-MADDESİ %22 | ≈ tuttu (ikisi toplanınca) |
| KAPSAYICI %25-30 | %21 | ❌ tutmadı (altında) |
| BELİRSİZ %50-55 | %55 | ✓ tuttu (üst sınırda) |
| ARIZA < %2 | %0 (000/5xx hiç görülmedi) | ✓ |
| Anadolu ≥ %60 VAR | 16/25 = %64 (AD ile %72) | ✓ |

## ⚖️ HÜKÜM — TDV nerede birincil olabilir
- **EVET, TDV birincil:** Anadolu · İran · Kafkasya · Sibirya-bozkır · Orta Asya
  (beylikler, Türk-Moğol hanlıkları, İran hanedanları — TDV'nin çekirdeği).
- **KISMEN (TDV var ama çoğu yalnız ülke/şehir maddesi):** Arabistan · Doğu Afrika · Balkanlar ·
  Kuzey Afrika · Mısır-Sudan · Orta Avrupa. İnce tarih (gün/sınır) için akademik kaynak EŞLİK eder.
- **HAYIR, TDV birincil OLAMAZ** (`§4`: akademik kaynak meşrudur, `kaynak:`a ADIYLA yazılır):
  **Kuzey Amerika (43/43 belirsiz)** · Orta Amerika-Karayip · Güney Amerika · Güney Afrika ·
  Orta Afrika · Batı Afrika · Güneydoğu Asya · Doğu Asya · Okyanusya · İtalya · Doğu/Kuzey/Batı Avrupa.
- **Güney Asya BÖLÜNÜR** (bölge hükmü HAYIR ama tek tip değil): Müslüman sultanlıklar TDV'de
  VAR — `bicapur`/`adilsahiler`, `golkonda`/`kutubsahiler`, `gucerat`, `kesmir`, `meysur`,
  `bengal`, `bahavelpur`, `bopal--devlet`. Hindu/Maratha ardılı/prens devletleri BELİRSİZ —
  Baroda, Gvalyar, İndor, Kolhapur, Travankur, Karnatik, Ahom, Pandya, Yafna → akademik kaynak.
  Bugün öncelikle ölçülen Tokugawa + Kuzey Amerika + Sahra altı + Polinezya hükmü bu ölçümle TEYİT edildi.

## 🔴 Yöntem bulguları — sonraki oturumlar için
1. **TDV `--` ayrım slug'ı:** aynı adlı maddeler `ad--nitelik` biçimindedir; çıplak slug **302**
   verir. Ölçülen: `hurmuz` 302 → `hurmuz--iran` 200 · `kuba` 302 → `kuba--azerbaycan` 200 ·
   `bopal--devlet`/`bopal--sehir`. **Slug tahmini bu maddeleri KAÇIRIR** ⇒ 302 = "bu slug ölü",
   "TDV'de yok" DEĞİL.
2. **Başlık araması ÖLÇÜLEBİLİR** (KRONO-BOSLUK §8 "bulunamadı" demişti):
   `/ajax_search_auto.php?sp=aa&=ac&q=<ad>` + `X-Requested-With: XMLHttpRequest` + `Referer`
   başlıkları → `<a href="/slug"><li><span class="sr-title">BAŞLIK` listesi. `sp` değeri arama
   sayfasının JS'indeki `sr_type`dır (`aa` başlık · `t` içerik · `y` müellif · `b` kısaltma).
   ⚠️ Önek eşlemesi GÜRÜLTÜLÜDÜR (Hayda→HAYDAR, Parma→PARMAK, Kong→KONGO): isabet elle okunur.
   Bu geçiş 172 BELİRSİZ/YANLIŞ? künyede koştu, **4 gerçek isabet** verdi.
3. **Tuzak ② ölçüldü — 11 yanlış madde** (başlık künyenin kısa adıyla aynı, konu başka):
   `emir` EMİR · `celebi` ÇELEBİ · `isa` ÎSÂ · `kadi` KADI · `ahi` AHÎ (doğrusu `ahilik`) ·
   `bali` BÂLÎ ≠ Bali · `mehdi` MEHDÎ kavram · `benin` = bugünkü Benin ≠ Benin Krallığı ·
   `ila` ÎLÂ · `deli` DELİ süvari ≠ Deli Sultanlığı · `tay` TAY ≠ Tây Sơn.
   ⇒ **3-5 harfli tek sözcük slug'ın 200'ü kanıt değildir, başlık OKUNUR.**
4. **AD-MADDESİ kovası** (27): başlık künyenin kendi adı ama devlet işareti taşımıyor (VEDÂY,
   AFŞAR, GUCERÂT, DAHOMEY, BAHREYN) — madde devleti de, yeri de anlatıyor olabilir; başlıktan
   ayrılamaz. Kronoloji oturumu gövdeyi okur. Ülke maddesi olanlar (KIBRIS, NİJER) elle KAPSAYICI'ya alındı.
5. **İçerik geçişi (`mdl=txtdelay`)** = "TDV bu sözcüğü N maddede anıyor", kaynak DEĞİL.
   Genel sözcükte anlamsızdır: `buna` 5172 · `darul` 2469 · `ingiliz` 2449 · `nez` 2257 —
   bunlar gürültü. BELİRSİZ 161'in içerik geçişi: **0 → 87 künye** · 1-9 → 33 · 10-49 → 26 ·
   50+ → 21 (çoğu genel sözcük). Anlamlı ipuçları: `avad` 80 · `baroda` 90 · `hurmuz` 7 (madde çıktı) ·
   `cemisgezek` 10 · `gond` 27 · `bopal` 31.
6. **Otomatik kural + elle inceleme:** 28 künyede hüküm başlık okunarak düzeltildi (`elle_not`
   alanı, gerekçesiyle). Elle denenip VAR çıkan iki slug: `ahilik` (AHÎLİK) ·
   `turkiye-selcuklulari` (TÜRKİYE SELÇUKLULARI).
7. **İlk 40 ile yöntem farkı:** ilk 40'ta tek sözcüklü ad maddesi (NÛBE, FUNC) "VAR" sayılmıştı;
   burada o tür ayrı kovada (AD-MADDESİ). İkisi toplanınca kıyaslanabilir.

## Bulunamadı / ölçülemedi
- Gövde okunmadı (şartname: yalnız `<title>`); VAR/AD-MADDESİ'nin **tarih içerip içermediği ölçülmedi**.
- BELİRSİZ 161 için `--` ayrım slug'ı yalnız başlık aramasıyla yakalanabildi; aramanın
  döndürmediği `--` maddesi varsa `ölçülemedi`.
- `KAPSAYICI`nın başkent maddesi o devletin tarihini anlatıyor mu — ölçülmedi.

## 1. Ölçüm
Evren **295** · ölçülen **295** · süre 1137 sn · son işlemde ek ajax isteği 0.

| hüküm | sayı | % |
|---|---:|---:|
| VAR | 37 | 13 |
| AD-MADDESI | 27 | 9 |
| KAPSAYICI | 63 | 21 |
| BASLIK-ARAMASI | 0 | 0 |
| YANLIS? | 7 | 2 |
| BELIRSIZ | 161 | 55 |
| ARIZA | 0 | 0 |

## 2. Bölge bölge

| bölge | n | VAR | AD-M | KAPS | BAŞLIK-AR. | YANLIŞ? | BELİRSİZ | ARIZA | TDV birincil? |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| kuzey-amerika | 43 | 0 | 0 | 0 | 0 | 0 | 43 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| bati-afrika | 33 | 0 | 4 | 10 | 0 | 1 | 18 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| guney-asya | 28 | 3 | 7 | 3 | 0 | 0 | 15 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| anadolu | 25 | 16 | 2 | 5 | 0 | 0 | 2 | 0 | **EVET** — birincil |
| guneydogu-asya | 22 | 0 | 1 | 4 | 0 | 4 | 13 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| dogu-afrika | 21 | 0 | 1 | 11 | 0 | 1 | 8 | 0 | KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder |
| arabistan | 14 | 1 | 3 | 7 | 0 | 0 | 3 | 0 | KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder |
| dogu-asya | 12 | 1 | 0 | 4 | 0 | 0 | 7 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| guney-afrika | 12 | 0 | 0 | 1 | 0 | 0 | 11 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| iran | 11 | 6 | 3 | 2 | 0 | 0 | 0 | 0 | **EVET** — birincil |
| balkanlar | 11 | 0 | 1 | 5 | 0 | 0 | 5 | 0 | KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder |
| orta-afrika | 10 | 0 | 1 | 1 | 0 | 1 | 7 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| orta-amerika-karayip | 7 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| kafkasya | 6 | 4 | 1 | 0 | 0 | 0 | 1 | 0 | **EVET** — birincil |
| sibirya-bozkir | 6 | 4 | 0 | 2 | 0 | 0 | 0 | 0 | **EVET** — birincil |
| guney-amerika | 6 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| kuzey-afrika | 5 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder |
| misir-sudan | 4 | 1 | 0 | 2 | 0 | 0 | 1 | 0 | KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder |
| italya | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| orta-asya | 3 | 1 | 2 | 0 | 0 | 0 | 0 | 0 | **EVET** — birincil |
| okyanusya | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| dogu-avrupa | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| orta-avrupa | 3 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder |
| kuzey-avrupa | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |
| bati-avrupa | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla |

Eşik (öngörü değil, sınıflama kuralı): VAR+AD-MADDESİ ≥ %50 → EVET · VAR+AD+KAPSAYICI ≥ %50 → KISMEN · değilse HAYIR.


## 3. Künye künye (bölge içinde yerleşim-yıl sırası)


### kuzey-amerika (43) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 63 | `creek-konfederasyonu` | BELIRSIZ |  | creek-konfederasyonu, creek, creekler, mvskoke | Creek:0 |
| 76 | `payut` | BELIRSIZ |  | payut, payutlar, paiute, bishop | Payut:0 |
| 77 | `hayda` | BELIRSIZ |  | hayda, haydalar, skidegate | Hayda:1543 |
| 80 | `ojibwe` | BELIRSIZ |  | ojibwe, ojibweler, anisinabe, chequamegon | Ojibwe:0 |
| 85 | `cherokee` | BELIRSIZ |  | cherokee, cherokee-ulusu, cherokeeler, ulusu | Cherokee:0 |
| 88 | `alutiiq` | BELIRSIZ |  | alutiiq, alutiiqler, sugpiaq, kodiak | Alutiiq:0 |
| 99 | `choctaw` | BELIRSIZ |  | choctaw, choctaw-konfederasyonu, choctawlar | Choctaw:0 |
| 125 | `lakota` | BELIRSIZ |  | lakota, lakotalar, teton-sioux, kara-tepeler | Lakota:0 |
| 129 | `ute` | BELIRSIZ |  | ute, uteler, nuuchiu, uncompahgre | Ute:47 |
| 130 | `nez-perce` | BELIRSIZ |  | nez-perce, nez, nezler, perce, perceler, nimiipuu, lapwai | Nez:2257 |
| 132 | `meskalero-apaci` | BELIRSIZ |  | meskalero-apaci, meskalero-apacileri, meskalero, meskalerolar, apacileri | Meskalero:0 |
| 133 | `yavapai` | BELIRSIZ |  | yavapai, yavapailer, prescott | Yavapai:0 |
| 134 | `navaho` | BELIRSIZ |  | navaho, navaholar, dine, tsegi | Navaho:0 |
| 135 | `tlingit` | BELIRSIZ |  | tlingit, tlingitler, klukwan | Tlingit:0 |
| 136 | `yupik` | BELIRSIZ |  | yupik, yupikler, hooper-bay | Yupik:0 |
| 137 | `mohave` | BELIRSIZ |  | mohave, mohaveler, aha-macav, fort-mohave | Mohave:0 |
| 138 | `klamath` | BELIRSIZ |  | klamath, klamathlar, maklaks, fort-klamath, klamath-batakligi | Klamath:0 |
| 139 | `nuu-cah-nulth` | BELIRSIZ |  | nuu-cah-nulth, nuu-chah-nulth, nuu, nuular, nulth, nulthlar, mowachaht, yuquot | Nuu:7 |
| 140 | `nuxalk` | BELIRSIZ |  | nuxalk, nuxalklar, bella-coola | Nuxalk:0 |
| 141 | `secwepemc` | BELIRSIZ |  | secwepemc, secwepemcler, shuswap | Secwépemc:0 · secwepemc:0 |
| 142 | `pavni` | BELIRSIZ |  | pavni, pavniler, pawnee, pavni-koyleri | Pavni:0 |
| 143 | `ponka` | BELIRSIZ |  | ponka, ponkalar, ponca, ponca-koyleri | Ponka:0 |
| 144 | `sahaptin` | BELIRSIZ |  | sahaptin, sahaptinler, orta-columbia-halklari, wayam | Sahaptin:0 |
| 146 | `hidatsa` | BELIRSIZ |  | hidatsa, hidatsalar, knife-river | Hidatsa:0 |
| 147 | `karga` | BELIRSIZ |  | karga, kargalar, apsaalooke, crow-agency | Karga:384 |
| 148 | `mandan` | BELIRSIZ |  | mandan, mandanlar, on-a-slant | Mandan:6 |
| 150 | `sauk` | BELIRSIZ |  | sauk, sauklar, asakiwaki, saukenuk | Sauk:0 |
| 152 | `beothuk` | BELIRSIZ |  | beothuk, beothuklar, kizil-kizilderili-golu | Beothuk:0 |
| 159 | `miami` | BELIRSIZ |  | miami, miamiler, myaamia, kekionga | Miami:0 |
| 160 | `savni` | BELIRSIZ |  | savni, savniler, shawnee, chillicothe | Şavni:0 |
| 162 | `maliseet` | BELIRSIZ |  | maliseet, maliseetler, wolastoqiyik, madawaska | Maliseet:0 |
| 163 | `mikmak` | BELIRSIZ |  | mikmak, mikmaklar, mi-kmaq, listuguj | Mikmak:0 |
| 165 | `abenaki` | BELIRSIZ |  | abenaki, abenakiler, wabanaki, norridgewock | Abenaki:0 |
| 166 | `apaci-ovalar` | BELIRSIZ |  | apaci-ovalar, ovalar-apacileri, ovalar, apacileri, apaci, apaciler, plains-apache | Ovalar:124 |
| 170 | `natchez` | BELIRSIZ |  | natchez, natchezler, grand-village | Natchez:0 |
| 175 | `occaneechi` | BELIRSIZ |  | occaneechi, occaneechiler | Occaneechi:0 |
| 177 | `vendat` | BELIRSIZ |  | vendat, vendat-konfederasyonu, vendatlar, huron, ossossane | Vendat:0 |
| 180 | `powhatan` | BELIRSIZ |  | powhatan, powhatan-konfederasyonu, powhatanlar, tsenacomoco | Powhatan:0 |
| 241 | `komanci` | BELIRSIZ |  | komanci, komanciler, comancheria, merkezi-yok-gocebe, son-direnis-noktasi-palo-duro-kanyonu | Komançi:0 |
| 246 | `cikasav` | BELIRSIZ |  | cikasav, cikasavlar, chickasaw, cikasav-yarlari | Çikasav:0 |
| 275 | `pueblo-bagimsizligi` | BELIRSIZ |  | pueblo-bagimsizligi, pueblo, pueblolar, bagimsizligi | Pueblo:0 |
| 323 | `newfoundland-dominyonu` | BELIRSIZ |  | newfoundland-dominyonu, newfoundland, newfoundlandlar, sorumlu-hukumet-dominyon, st-john-s | Newfoundland:0 |
| 292 | `aleut` | BELIRSIZ |  | aleut, aleutlar, unangax, unalaska | Aleut:0 |

### bati-afrika (33) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 41 | `mossi-vagadugu` | KAPSAYICI | `burkina-faso` (BURKİNA FASO) | mossi-vagadugu, mossi-kralligi, mossi, mossiler, vagadugu | Mossi:7 |
| 44 | `benin-kralligi` | KAPSAYICI · ✍️ BENİN bugünkü Benin Cumhuriyeti — Nijerya'daki Benin Krallığı DEĞİL | `nijerya` (NİJERYA) ⚠️`benin`→BENİN | benin-kralligi, beninler, benin-sehri | Benin:53 |
| 69 | `jukun-kvararafa` | BELIRSIZ |  | jukun-kvararafa, kvararafa-kralligi, kvararafa, kvararafalar, jukun, jukunlar, vukari | Kvararafa:0 |
| 72 | `borgu` | BELIRSIZ |  | borgu, borgu-bariba-kralliklari, borgular, kralliklari, nikki-busa, nikki | Borgu:9 |
| 75 | `nijer-deltasi` | KAPSAYICI · ✍️ NİJER ülke/nehir maddesi | `nijer` (NİJER) | nijer-deltasi, nijer-deltasi-sehir-devletleri, nijer-deltasi-devletleri, nijerler, devletleri, kalabar-bonny, eski-kalabar | Nijer:129 |
| 84 | `bambara` | KAPSAYICI | `mali` (MALİ) | bambara, bambara-kralliklari, bambaralar, kralliklari, segu-ve-kaarta, segu | Bambara:17 |
| 112 | `birom-plato` | BELIRSIZ |  | birom-plato, jos-platosu-halklari, jos-platosu, jos, joslar, platosu, birom, biromlar, birom-jarava | Jos:547 |
| 115 | `tiv` | BELIRSIZ |  | tiv, tiv-halki, tivler | Tiv:17 |
| 116 | `dagbon` | BELIRSIZ |  | dagbon, dagbon-kralligi, dagbonlar, dagomba, yendi | Dagbon:0 |
| 117 | `tuareg-adag` | KAPSAYICI | `tuareg` (TUAREG) | tuareg-adag, kel-adag-tuareg-konfederasyonu, kel-adag-tuareg, kel, keller, tuaregler, adrar-des-ifoghas, kidal | Kel:7000 |
| 118 | `tuareg-ivellemmedan` | KAPSAYICI | `tuareg` (TUAREG) | tuareg-ivellemmedan, ivellemmedan-tuareg-konfederasyonu, ivellemmedan-tuareg, ivellemmedan, ivellemmedanlar, tuaregler, menaka | İvellemmedan:0 |
| 119 | `gurma` | KAPSAYICI | `burkina-faso` (BURKİNA FASO) | gurma, gurma-kralligi, gurmalar, fada-ngurma | Gurma:9 |
| 122 | `gambiya-mandinka` | BELIRSIZ |  | gambiya-mandinka, gambiya-mandinka-devletcikleri, gambiya, gambiyalar, devletcikleri, niumi-kombo-vuli | Gambiya:2 |
| 128 | `eve-notse` | BELIRSIZ |  | eve-notse, eve-notse-birligi, eve, eveler, notse, notseler, ewe | Eve:361 |
| 155 | `kru-grebo` | BELIRSIZ |  | kru-grebo, kru-ve-grebo-halklari, kru, krular, grebo, grebolar | Kru:126 |
| 178 | `asanti` | BELIRSIZ |  | asanti, asanti-imparatorlugu, asantiler, kumasi | Aşanti:2 |
| 189 | `futa-callon` | KAPSAYICI | `gine` (GİNE) | futa-callon, futa-callon-imamligi, futa, futalar, callon, timbo | Futa:53 |
| 195 | `dahomey` | AD-MADDESI | `dahomey` (DAHOMEY) | dahomey-kralligi, dahomeyler, abomey | Dahomey:7 |
| 199 | `kenedugu` | BELIRSIZ |  | kenedugu, kenedugu-kralligi, kenedugular, sikasso | Kenedugu:0 |
| 204 | `bate` | KAPSAYICI | `gine` (GİNE) | bate, bate-mandinka-devleti, bate-mandinka, batelar, mandinka, bateler, kankan | Baté:23 |
| 207 | `aro-konfederasyonu` | BELIRSIZ |  | aro-konfederasyonu, aro, arolar, arocukvu | Aro:41 |
| 209 | `futa-toro` | KAPSAYICI | `senegal` (SENEGAL) | futa-toro, futa-toro-almamiligi, futa, futalar, almamiligi, podor | Futa:53 |
| 210 | `buna` | BELIRSIZ |  | buna, buna-kralligi, bunalar, kulango | Buna:5172 |
| 211 | `gyaaman` | BELIRSIZ |  | gyaaman, gyaaman-kralligi, gyaamanlar, bondugu | Gyaaman:0 |
| 218 | `kong-vattara` | YANLIS? · ✍️ KONGO ≠ Kong (Fildişi) |  | kong-vattara, kong-devleti, kong, konglar, vattara | Kong:996 |
| 225 | `damagaram` | BELIRSIZ |  | damagaram, damagaram-sultanligi, damagaramlar, zinder | Damagaram:0 |
| 224 | `bundu` | BELIRSIZ |  | bundu, bundu-emirligi, bundular, bulebane | Bundu:27 |
| 226 | `solima-yalunka` | BELIRSIZ |  | solima-yalunka, solima-yalunka-kralligi, solima, solimalar, yalunka, falaba | Solima:24 |
| 244 | `tekrur` | AD-MADDESI · ✍️ TEKRÛR | `tekrur` (TEKRÛR) | toucouleur-devleti, toucouleur, toucouleurlar, tekrurlar, umari, segu-tukulor, segu | Toucouleur:0 |
| 254 | `liptako` | BELIRSIZ |  | liptako, liptako-emirligi, liptakolar, dori | Liptako:3 |
| 255 | `massina` | BELIRSIZ |  | massina, masina-halifeligi, masina, masinalar, halifeligi, massinalar, hamdullahi | Masina:16 |
| 264 | `ibadan` | AD-MADDESI | `ibadan` (İBADAN) | ibadan-devleti, ibadanlar | İbadan:6 |
| 294 | `arma` | AD-MADDESI | `arma` (ARMA), `tinbuktu` (TİNBÜKTÜ) | ikisini, arma-pasaligi, armalar, pasaligi | Arma:1061 |

### guney-asya (28) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 59 | `gucerat-sultanligi` | AD-MADDESI | `gucerat` (GUCERÂT), `ahmedabad` (AHMEDÂBÂD) | gucerat-sultanligi, guceratlar | Gucerât:174 |
| 61 | `bicapur` | VAR | `bicapur` (BÎCÂPÛR), `adilsahi` (ÂDİLŞÂHÎ), `adilsahiler` (ÂDİLŞÂHÎLER) | adilsahi-sultanligi, bicapurlar |  |
| 82 | `ahom` | BELIRSIZ |  | ahom, ahom-kralligi, ahomlar, assam, caraideo-rangpur | Ahom:0 |
| 87 | `nayak-devletleri` | KAPSAYICI | `cinci` (CİNCİ) | nayak-devletleri, nayak-beylikleri, nayak, nayaklar, beylikleri, madurai, tancur, keladi, madurai-tancur-cinci-keladi | Nâyak:0 |
| 91 | `golkonda` | VAR | `golkonda` (GOLKONDA), `kutubsahiler` (KUTUBŞÂHÎLER) | kutubsahi-sultanligi, kutubsahi, golkondalar, golkonda-haydarabad |  |
| 97 | `travankur` | BELIRSIZ |  | travankur, travankur-kralligi, travankurlar, venad, padmanabhapuram-trivandrum | Travankur:0 |
| 102 | `avad` | BELIRSIZ |  | avad, avad-nevabligi, avadlar, nevabligi, oudh, faizabad-lucknow | Avad:80 |
| 104 | `kalikut` | BELIRSIZ |  | kalikut, kalikut-zamorinligi, kalikutlar, zamorinligi | Kalikut:3 |
| 109 | `manipur` | BELIRSIZ |  | manipur, manipur-kralligi, manipurlar, imphal | Manipûr:3 |
| 124 | `kesmir` | AD-MADDESI | `kesmir` (KEŞMİR) | kesmir-sultanligi, kesmirler, sah-mir-hanedani, srinagar | Keşmir:166 |
| 149 | `ladak` | KAPSAYICI | `leh` (LEH) | ladak, ladakh-kralligi, ladakh, ladakhlar, ladaklar, namgyal-hanedani | Ladakh:2 |
| 154 | `gond-kralliklari` | BELIRSIZ |  | gond-kralliklari, gond, gondlar, kralliklari, garha-mandla, deogarh, mandla | Gond:27 |
| 161 | `bengal-nevabligi` | AD-MADDESI | `bengal` (BENGAL) | bengal-nevabligi, bengallar, nevabligi, murshidabad | Bengal:179 |
| 173 | `seylan-sinhala` | AD-MADDESI | `seylan` (SEYLAN) | seylan-sinhala, seylan-sinhala-kralliklari, seylanlar, kralliklari, portekiz-oncesi, dambadeniya-gampola-kotte | Seylan:54 |
| 182 | `kandy` | KAPSAYICI | `seylan` (SEYLAN) | kandy, kandy-kralligi, kandylar | Kandy:3 |
| 184 | `yafna` | BELIRSIZ |  | yafna, yafna-kralligi, yafnalar, jaffna, nallur | Yafna:0 |
| 196 | `karnatik` | BELIRSIZ |  | karnatik, karnatik-nevabligi, karnatikler, nevabligi, arcot | Karnatik:0 |
| 201 | `pandya` | BELIRSIZ |  | pandya, pandya-hanedani, pandyalar, ikinci-imparatorluk, madurai | Pandya:2 |
| 205 | `bhopal` | VAR · ✍️ başlık aramasıyla: `bopal--devlet` doğrudan devlet maddesi (+ `bopal--sehir`) | 🔎 `bopal--devlet` (BOPAL) | bhopal, bopal-devleti, bopal, bopallar, bhopallar | Bopal:31 |
| 206 | `kolhapur` | BELIRSIZ |  | kolhapur, kolhapur-devleti, kolhapurlar, sivaci-nin-ikinci-kolu | Kolhapur:0 |
| 213 | `baroda` | BELIRSIZ |  | baroda, baroda-devleti, barodalar, gaikvad-hanedani | Baroda:90 |
| 214 | `meysur` | AD-MADDESI | `meysur` (MEYSÛR), `tipu-sultan` (TÎPÛ SULTAN) | meysur-sultanligi, meysurlar, haydar-ali, seringapatam | Meysûr:29 |
| 216 | `indor` | BELIRSIZ |  | indor, indor-devleti, indorlar, holkar-hanedani | İndor:3 |
| 215 | `bharatpur-cat` | BELIRSIZ |  | bharatpur-cat, bharatpur-kralligi, bharatpur, bharatpurlar, jat | Bharatpur:0 |
| 222 | `cunagadh` | BELIRSIZ |  | cunagadh, cunagadh-nevabligi, cunagadhlar, nevabligi, junagadh | Cunagadh:0 |
| 221 | `bahavelpur` | AD-MADDESI | `bahavelpur` (BAHÂVELPÛR) | bahavelpur-emirligi, bahavelpurlar, davudpotralar, bahawalpur | Bahavelpur:17 |
| 238 | `gvalyar` | BELIRSIZ |  | gvalyar, gvalyar-devleti, gvalyarlar, sindiya-hanedani | Gvalyar:0 |
| 320 | `meysur-racaligi` | AD-MADDESI | `meysur` (MEYSÛR) | meysur-racaligi, meysurlar, wodeyar-hanedani, ingiliz-himayesinde | Meysûr:29 |

### anadolu (25) — **EVET** — birincil

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 46 | `artuklu` | VAR | `artuklular` (ARTUKLULAR), `hasankeyf` (HASANKEYF), `mardin` (MARDİN), `harput` (HARPUT) | artuklu, artukogullari, artuklu-beyligi |  |
| 53 | `karaman` | VAR | `karaman` (KARAMAN), `karamanogullari` (KARAMANOĞULLARI), `larende` (LÂRENDE) | karamanlar, ermenek-konya |  |
| 65 | `kibris-krallik` | KAPSAYICI · ✍️ KIBRIS ada maddesi | `kibris` (KIBRIS) | kibris-krallik, kibris-kralligi, kibrislar, kibrisler, luzinyan, lefkosa | Kıbrıs:454 |
| 113 | `aydin` | VAR | `aydin` (AYDIN), `aydinogullari` (AYDINOĞULLARI), `tire` (TİRE), `ayasuluk` (AYASULUK) | aydinler, birgi-izmir |  |
| 156 | `selcuklu` | VAR · ✍️ elle denendi: `turkiye-selcuklulari` 200 TÜRKİYE SELÇUKLULARI | `anadolu` (ANADOLU), `selcuklular` (SELÇUKLULAR), `turkiye` (TÜRKİYE) | selcuklu, anadolu-selcuklu-devleti, anadolu-selcuklu, anadolular, iznik-konya |  |
| 172 | `karesi` | VAR | `karesiogullari` (KARESİOĞULLARI) | karesi, karesiler, balikesir-erdek, biga, edremit, bergama-ya-kadar-hakim |  |
| 179 | `teke` | VAR | `tekeogullari` (TEKEOĞULLARI), `antalya` (ANTALYA) | teke, tekeler |  |
| 186 | `ramazanoglu` | VAR | `ramazanogullari` (RAMAZANOĞULLARI), `adana` (ADANA) | ramazanoglu, ramazanoglular |  |
| 197 | `fetret-mehmed` | KAPSAYICI · ✍️ ÇELEBİ unvan maddesi | `fetret` (FETRET), `amasya` (AMASYA), `anadolu` (ANADOLU) ⚠️`celebi`→ÇELEBİ | fetret-mehmed, celebi-mehmed-saltanati, celebiler, saltanati, fetretler, amasya-bursa | Çelebi:2968 |
| 219 | `eyyubi-hisnikeyfa` | AD-MADDESI | `hisnikeyfa` (HISNIKEYFÂ), `eyyubiler` (EYYÛBÎLER) | eyyubi-hisnikeyfa, hisnikeyfa-eyyubileri, hisnikeyfalar, eyyubileri, eyyubi |  |
| 220 | `alaiye` | VAR | `alaiye` (ALÂİYE), `alaiye-beyligi` (ALÂİYE BEYLİĞİ), `alanya` (ALANYA) | alaiyeler |  |
| 235 | `taceddin` | VAR | `taceddinogullari` (TÂCEDDİNOĞULLARI), `niksar` (NİKSAR) | taceddin, taceddinler, canik |  |
| 236 | `burhaneddin` | VAR · ✍️ KADI BURHÂNEDDİN kişi maddesi devleti kapsar; KADI kurum maddesi | `kadi-burhaneddin` (KADI BURHÂNEDDİN), `sivas` (SİVAS) ⚠️`kadi`→KADI | burhaneddin, kadi-burhaneddin-devleti, kadilar, burhaneddinler |  |
| 237 | `kilikya-ermeni` | KAPSAYICI | `sis` (ŞÎS) | kilikya-ermeni, kilikya-ermeni-kralligi, kilikya, kilikyalar, ermeni | Kilikya:48 |
| 240 | `mutahharten` | AD-MADDESI | `erzincan` (ERZİNCAN), `akkoyunlular` (AKKOYUNLULAR), `kemah` (KEMAH) | mutahharten, erzincan-kemah-beyligi, erzincan-kemah, erzincanlar, mutahhartenler | Erzincan:245 |
| 249 | `esrefogullari` | VAR | `esrefogullari` (EŞREFOĞULLARI), `beysehir` (BEYŞEHİR) |  |  |
| 250 | `saruhan` | VAR | `saruhanogullari` (SARUHANOĞULLARI), `manisa` (MANİSA) | saruhan, saruhanlar |  |
| 253 | `inancogullari` | VAR | `inancogullari` (İNANÇOĞULLARI), `denizli` (DENİZLİ), `ladik-beyligi` (LÂDİK BEYLİĞİ) | isparta-alaiye-denizli |  |
| 256 | `cobanogullari` | VAR | `cobanogullari` (ÇOBANOĞULLARI), `kastamonu` (KASTAMONU) |  |  |
| 266 | `ahiler` | VAR · ✍️ AHÎ yanlış madde; elle denendi: `ahilik` 200 AHÎLİK | `ankara` (ANKARA) ⚠️`ahi`→AHÎ | yetersiz, ahiler, ahi-birligi |  |
| 273 | `pervane` | VAR | `pervane` (PERVÂNE), `pervaneogullari` (PERVÂNEOĞULLARI), `sinop` (SİNOP) | pervaneler |  |
| 274 | `fetret-isa` | KAPSAYICI · ✍️ ÎSÂ peygamber maddesi | `fetret` (FETRET), `bursa` (BURSA) ⚠️`isa`→ÎSÂ | fetret-isa, isa-celebi-saltanati, isalar, saltanati, fetretler | İsa:3467 |
| 284 | `sutayogullari` | BELIRSIZ |  | sutayogullari | Sutayogullari:0 |
| 313 | `kibris-ingiliz` | KAPSAYICI | `kibris` (KIBRIS) | kibris-ingiliz, kibris-in-ingiliz-idaresi, kibris-in, kibris-inlar, idaresi, kibrisler, lefkosa | Kıbrıs:454 |
| 300 | `cemisgezek-beyligi` | BELIRSIZ |  | cemisgezek-beyligi, cemisgezek, cemisgezekler, melkisi | Cemisgezek:10 |

### guneydogu-asya (22) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 42 | `nguyen-hanedani` | BELIRSIZ |  | nguyen-hanedani, nguyen, nguyenlar, nguyenler, vietnam, hue | Nguyễn:0 · nguyen:0 |
| 45 | `campa` | BELIRSIZ |  | campa, champa-kralligi, champa, champalar, campalar, vijaya-panduranga | Champa:15 |
| 48 | `bali-kralliklari` | YANLIS? · ✍️ BÂLÎ ≠ Bali adası |  ⚠️`bali`→BÂLÎ | bali-kralliklari, baliler, kralliklari, gelgel, klungkung, karangasem, gelgel-klungkung | Bali:438 |
| 51 | `ternate-sultanligi` | BELIRSIZ |  | ternate-sultanligi, ternate, ternateler, moluk | Ternate:6 |
| 54 | `pagaruyung` | BELIRSIZ |  | pagaruyung, pagaruyung-kralligi, pagaruyunglar, minangkabau | Pagaruyung:0 |
| 74 | `arakan` | AD-MADDESI | `arakan` (ARAKAN) | arakan-kralligi, arakanlar, mrauk-u | Arakan:9 |
| 78 | `bugis-kralliklari` | KAPSAYICI | `bone` (BONE) | bugis-kralliklari, bugis, bugisler, kralliklari, wajo, soppeng-tellumpoccoe | Bugis:2 |
| 89 | `laos-kralliklari` | BELIRSIZ |  | laos-kralliklari, laos, laoslar, kralliklari, luang-prabang, vientiane, champasak | Laos:11 |
| 92 | `banjar-sultanligi` | BELIRSIZ |  | banjar-sultanligi, bancar-sultanligi, bancar, bancarlar, banjar, banjarlar, bancarmasin | Bancar:6 |
| 98 | `dogu-sumatra-sultanliklari` | YANLIS? · ✍️ DELİ Osmanlı süvari sınıfı, Deli Sultanlığı değil |  ⚠️`deli`→DELİ | dogu-sumatra-sultanliklari, dogu, dogular, sultanliklari, jambi, siyak, indragiri | Sumatra:67 |
| 100 | `palembang-sultanligi` | BELIRSIZ |  | palembang-sultanligi, palembang, palembanglar | Palembang:12 |
| 101 | `gova-makassar` | BELIRSIZ |  | gova-makassar, gova-sultanligi, gova, govalar, makassar | Gova:4 |
| 107 | `tidore-sultanligi` | BELIRSIZ |  | tidore-sultanligi, tidore, tidoreler, moluk | Tidore:2 |
| 127 | `magindanao-sultanligi` | BELIRSIZ |  | magindanao-sultanligi, magindanao, magindanaolar, kotabato | Magindanao:0 |
| 145 | `kutai` | BELIRSIZ |  | yetersiz, kutai, kutai-sultanligi, kutailer, dogu-borneo, tenggarong | Kutai:4 |
| 181 | `tay-son` | YANLIS? · ✍️ TAY — Tây Sơn değil |  ⚠️`tay`→TAY | tay-son, tay-son-hanedani, taylar, son, phu-xuan | Tay:6178 |
| 183 | `banda-adalari` | KAPSAYICI | `banda-adalari` (BANDA ADALARI) | banda, bandalar, adalari, orang-kaya-meclisleri, banda-neira | Banda:26 |
| 192 | `tonburi` | KAPSAYICI | `siyam` (SİYAM) | tonburi, thonburi-kralligi, thonburi, thonburiler, tonburiler | Thonburi:0 |
| 227 | `yogyakarta` | BELIRSIZ |  | yogyakarta, yogyakarta-sultanligi, yogyakartalar | Yogyakarta:19 |
| 243 | `surakarta` | BELIRSIZ |  | surakarta, surakarta-sunanligi, surakartalar, sunanligi | Surakarta:5 |
| 257 | `pontianak` | KAPSAYICI | `borneo` (BORNEO) | pontianak, pontianak-sultanligi, pontianaklar | Pontianak:4 |
| 296 | `bali-kralliklari-pejeng` | YANLIS? · ✍️ BÂLÎ ≠ Bali adası |  ⚠️`bali`→BÂLÎ | bali-kralliklari-pejeng, bali-pejeng-kralligi, bali-pejeng, baliler, pejeng | Bali:438 |

### dogu-afrika (21) — KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 43 | `nyamvezi` | KAPSAYICI | `tanzanya` (TANZANYA) | nyamvezi, nyamvezi-seflikleri, nyamveziler, unyanyembe-mirambo, tabora | Nyamvezi:0 |
| 55 | `merina-oncesi` | KAPSAYICI | `madagaskar` (MADAGASKAR) | merina-oncesi, imerina-kralliklari, imerina, imerinalar, kralliklari, merina, merinalar, merina-birlesmesi-oncesi, ambohimanga | İmerina:0 |
| 68 | `antandroy` | KAPSAYICI | `madagaskar` (MADAGASKAR) | antandroy, antandroy-ve-bara-halklari, antandroy-bara, antandroylar, bara | Antandroy:0 |
| 70 | `kaonde-ila` | YANLIS? · ✍️ ÎLÂ Arapça edat/terim |  ⚠️`ila`→ÎLÂ | kaonde-ila, kaonde-ve-ila-halklari, kaonde, kaondeler | Kaonde:0 |
| 71 | `bunyoro` | KAPSAYICI | `uganda` (UGANDA) | bunyoro, bunyoro-kitara-kralligi, bunyoro-kitara, bunyorolar, kitara, hoima | Bunyoro:2 |
| 73 | `fipa-nyakyusa` | BELIRSIZ |  | fipa-nyakyusa, fipa-ve-nyakyusa-halklari, fipa, fipalar, nyakyusa | Fipa:0 |
| 90 | `bemba` | KAPSAYICI | `zambiya` (ZAMBİYA) | bemba, bemba-kralligi, bembalar, citimukulu, kasama | Bemba:0 |
| 114 | `sakalava-boina` | KAPSAYICI | `madagaskar` (MADAGASKAR) | sakalava-boina, boina-sakalava-kralligi, boina-sakalava, boina, boinalar, sakalava, sakalavalar, mahacanga | Boina:0 |
| 120 | `sidamo-kralliklari` | BELIRSIZ |  | sidamo-kralliklari, sidamo, sidamolar, kralliklari, cesitli-merkezler | Sidamo:0 |
| 121 | `kamba` | BELIRSIZ |  | kamba, kamba-halki, kambalar, kitui | Kamba:17 |
| 123 | `vollayta-kralligi` | BELIRSIZ |  | vollayta-kralligi, vollayta, vollaytalar, wolaita, dalgac | Vollayta:0 |
| 151 | `betsileo` | KAPSAYICI | `madagaskar` (MADAGASKAR) | betsileo, betsileo-kralliklari, betsileolar, kralliklari, fianarantsoa | Betsileo:0 |
| 157 | `merina` | KAPSAYICI | `madagaskar` (MADAGASKAR) | merina, merina-kralligi, merinalar, antananarivo | Merina:0 |
| 190 | `yao` | KAPSAYICI | `malavi` (MALAVİ) | yao, yao-sultanliklari, yaolar, sultanliklari, mvembe | Yao:13 |
| 202 | `burundi` | BELIRSIZ |  | burundi, burundi-kralligi, burundiler, gitega | Burundi:6 |
| 208 | `betsimisaraka` | KAPSAYICI | `madagaskar` (MADAGASKAR) | betsimisaraka, betsimisaraka-konfederasyonu, betsimisarakalar, toamasina | Betsimisaraka:0 |
| 228 | `kazembe` | BELIRSIZ |  | kazembe, mvata-kazembe-kralligi, mvata-kazembe, mvata, mvatalar, kazembeler, mvansabombve | Mvata:0 |
| 239 | `ngoni` | KAPSAYICI | `malavi` (MALAVİ) | ngoni, ngoni-devletleri, ngoniler, devletleri | Ngoni:2 |
| 247 | `cimma-sultanligi` | AD-MADDESI | `cimma` (CİMMÂ) | cimma-sultanligi, cimmalar, jimma, ciren | Cimma:3 |
| 263 | `toro` | BELIRSIZ |  | toro, toro-kralligi, torolar, fort-portal | Toro:175 |
| 270 | `hehe` | BELIRSIZ |  | hehe, hehe-kralligi, heheler, kalenga | Hehe:0 |

### arabistan (14) — KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 111 | `benihalid` | KAPSAYICI | `lahsa` (LAHSÂ), `hufuf` (HÜFÛF) | benihalid, beni-halid-emirligi, beni-halid, beni, beniler, halid, benihalidler | Benî:4711 |
| 153 | `usfuri` | KAPSAYICI | `katif` (KATÎF), `lahsa` (LAHSÂ) | usfuri, usfuriler, beni-usfur | Usfûrîler:0 |
| 158 | `cebri` | VAR | `cebriler` (CEBRÎLER), `hufuf` (HÜFÛF) | cebri, beni-cebr |  |
| 259 | `bahreyn` | AD-MADDESI | `bahreyn` (BAHREYN) | bahreynler, al-halife-seyhligi, manama | Bahreyn:352 |
| 272 | `kuayti-sultanligi` | BELIRSIZ |  | kuayti-sultanligi, kuayti, kuaytiler, sihr-mukella, hadramut-kiyisi | Kuaytî:0 |
| 283 | `katar` | AD-MADDESI | `katar` (KATAR), `devha` (DEVHA) | katarlar, al-sani-seyhligi | Katar:328 |
| 287 | `urdun-emirligi` | KAPSAYICI | `urdun` (ÜRDÜN) | urdun-emirligi, sarki-urdun-emirligi, sarki-urdun, sarki, sarkiler, urdunlar, abdullah-bin-huseyin | Şarkî:1109 |
| 290 | `aiz` | KAPSAYICI | `ebha` (EBHÂ) | aiz, aiz-emirligi, aizler, asir | Âiz:41 |
| 333 | `suriye-arap-kralligi` | KAPSAYICI · ✍️ ARAP halk maddesi; SURİYE ülke maddesi | `suriye` (SURİYE) ⚠️`arap`→ARAP | suriye-arap-kralligi, suriye-arap, suriyeler, faysal, sam | Suriye:1964 |
| 329 | `sani-emirligi` | KAPSAYICI · ✍️ SÂNİ‘ ≠ Âl-i Sânî | `katar` (KATAR) ⚠️`sani`→SÂNİ‘ | sani-emirligi, al-i-sani-emirligi, saniler | Sânî:573 |
| 328 | `sabah-emirligi` | KAPSAYICI | `kuveyt` (KÜVEYT) | sabah-emirligi, sabah, sabahlar | Sabah:908 |
| 318 | `lubnan-emirligi` | AD-MADDESI | `lubnan` (LÜBNAN) | yaln, lubnan-emirligi, lubnanlar, ma-nogullari-sihabogullari, dayr-al-kamer-beyteddin | Lübnan:479 |
| 308 | `harfusogullari` | BELIRSIZ |  | yaln, maddesi, harfusogullari, baalbek-emirligi | Harfûşoğulları:0 |
| 299 | `cebel-i-lubnan-mutasarrifligi` | BELIRSIZ |  | cebel-i-lubnan-mutasarrifligi, cebel-lubnan-mutasarrifligi, cebel, cebeller, mutasarrifligi, beyteddin | Cebel:550 |

### dogu-asya (12) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 58 | `goryeo` | KAPSAYICI · ✍️ başlık aramasıyla: yalnız KORE CUMHURİYETİ ülke maddesi | 🔎 `kore-cumhuriyeti` (KORE CUMHURİYETİ) | goryeo, goryeo-hanedani, goryeolar, kore, kaesong | Goryeo:0 |
| 96 | `kamakura` | KAPSAYICI | `japonya` (JAPONYA) | kamakura, kamakura-sogunlugu, kamakuralar, sogunlugu | Kamakura:0 |
| 171 | `ryukyu` | BELIRSIZ |  | ryukyu, ryukyu-kralligi, ryukyular, suri | Ryukyu:0 |
| 251 | `hosut` | BELIRSIZ |  | hosut, hosut-hanligi, hosutlar, kokonor | Hoşut:0 |
| 261 | `tungning` | BELIRSIZ |  | tungning, tungning-kralligi, tungningler, zheng, koxinga, amoy-tainan | Tungning:0 |
| 267 | `kenmu` | KAPSAYICI | `japonya` (JAPONYA) | kenmu, kenmu-restorasyonu, kenmular, restorasyonu, kyoto | Kenmu:0 |
| 268 | `taiping` | BELIRSIZ |  | taiping, taiping-cennetsel-kralligi, taiping-cennetsel, taipingler, cennetsel, nanjing | Taiping:2 |
| 281 | `dashun` | BELIRSIZ |  | dashun, dashunlar, li-zicheng, xi-an-pekin | Dashun:0 |
| 332 | `song` | KAPSAYICI | `cin` (CİN) | song, song-hanedani, songlar, bianjing-lin-an | Song:96 |
| 330 | `sanzan` | BELIRSIZ |  | sanzan, sanzan-donemi, sanzanlar, donemi, uc-krallik, okinawa, uc-ayri-merkez-nakijin, urasoe, shuri, ozato | Sanzan:0 |
| 322 | `mogol-imparatorlugu` | VAR | `mogollar` (MOĞOLLAR) | mogol-imparatorlugu, mogol, bolunmemis, karakurum |  |
| 310 | `jin-hanedani` | BELIRSIZ |  | jin-hanedani, jin, jinler, jurchen, kuzey-cin, zhongdu | Jin:38 |

### guney-afrika (12) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 66 | `herero` | BELIRSIZ |  | herero, herero-halki, hererolar, okahandja | Herero:0 |
| 126 | `manica` | KAPSAYICI | `mozambik` (MOZAMBİK) | manica, manica-kralligi, manicalar | Manica:0 |
| 131 | `xhosa` | BELIRSIZ |  | xhosa, xhosa-kralliklari, xhosalar, kralliklari | Xhosa:0 |
| 174 | `venda` | BELIRSIZ |  | venda, venda-kralligi, vendalar, dzata | Venda:6 |
| 203 | `pedi` | BELIRSIZ |  | pedi, pedi-kralligi, pediler, tjate | Pedi:7 |
| 232 | `rozvi` | BELIRSIZ |  | rozvi, rozvi-imparatorlugu, rozviler, changamire, danangombe | Rozvi:0 |
| 234 | `griqua` | BELIRSIZ |  | griqua, griqua-devletleri, griqualar, devletleri, griqualand-bati-ve-dogu, griquatown | Griqua:0 |
| 245 | `transvaal` | BELIRSIZ |  | transvaal, transvaallar, guney-afrika-cumhuriyeti-zuid-afrikaansche-republiek, pretoria | Transvaal:3 |
| 248 | `basuto` | BELIRSIZ |  | basuto, basuto-kralligi, basutolar, basotho, thaba-bosiu | Basuto:0 |
| 252 | `svazi` | BELIRSIZ |  | svazi, svazi-kralligi, svaziler, lobamba | Svazi:0 |
| 269 | `matabele` | BELIRSIZ |  | matabele, matabele-kralligi, matabeleler, ndebele, bulavayo | Matabele:0 |
| 271 | `oranj` | BELIRSIZ |  | oranj, oranj-hur-devleti, oranj-hur, oranjlar, hur, oranje-vrijstaat, bloemfontein | Oranj:2 |

### iran (11) — **EVET** — birincil

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 47 | `afsar` | AD-MADDESI | `afsar` (AFŞAR), `meshed` (MEŞHED) | afsar-devleti, afsarlar, nadir-sah | Afşar:82 |
| 57 | `muzafferi` | VAR | `muzafferiler` (MUZAFFERÎLER), `siraz` (ŞÎRAZ) | muzafferi, muzafferi-hanedani |  |
| 83 | `serbedariler` | VAR | `serbedariler` (SERBEDÂRÎLER), `sebzevar` (SEBZEVÂR) |  |  |
| 93 | `mazenderan-marasi` | KAPSAYICI | `mazenderan` (MÂZENDERAN) | mazenderan-marasi, mar-asi-seyyidleri, mar-asi, mar-asiler, seyyidleri, mazenderanlar, amul-sari | Mar:6170 |
| 105 | `hurmuz-sultanligi` | AD-MADDESI · ✍️ başlık aramasıyla: `hurmuz--iran` (çıplak `hurmuz` 302) | 🔎 `hurmuz--iran` (HÜRMÜZ هرمز) | hurmuz-sultanligi, hurmuz, hurmuzler, hurmuzlar | Hürmüz:138 |
| 164 | `lur-i-buzurg` | VAR · ✍️ LUR-ı BÜZÜRG doğrudan madde | `lur-i-buzurg` (LUR-ı BÜZÜRG), `buzurg` (BÜZÜRG) | lur-i-buzurg-atabegligi, lur-buzurg, lur, lurler, buzurglar, hazaraspiler, izeh |  |
| 217 | `incu` | AD-MADDESI | `incu` (İNCÜ), `siraz` (ŞÎRAZ) | incu-hanedani, incular | İncû:24 |
| 230 | `lur-i-kucek` | VAR · ✍️ LUR-ı KÛÇEK doğrudan madde | `lur-i-kucek` (LUR-ı KÛÇEK) | lur-i-kucek-atabegligi, lur-kucek, lur, lurler, kucek, kucekler |  |
| 262 | `kert` | VAR · ✍️ KERT hanedan maddesi (Kertler) | `kert` (KERT), `herat` (HERAT) | kertler |  |
| 279 | `galzay` | KAPSAYICI | `kandehar` (KANDEHAR) | galzay, galzaylar, hotaki-afgan-devleti | Galzaylar:9 |
| 317 | `kutlughanli` | VAR | `kutlughanlilar` (KUTLUĞHANLILAR), `kirman` (KİRMAN) | kutlughanli, kutlughanliler |  |

### balkanlar (11) — KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 81 | `fetret-suleyman` | KAPSAYICI · ✍️ EMİR genel terim maddesi | `fetret` (FETRET), `rumeli` (RUMELİ), `edirne` (EDİRNE) ⚠️`emir`→EMİR | fetret-suleyman, emir-suleyman-celebi-saltanati, emirler, saltanati, fetretler | Emîr:4711 |
| 212 | `fetret-musa` | KAPSAYICI | `fetret` (FETRET), `rumeli` (RUMELİ), `edirne` (EDİRNE) | fetret-musa, musa-celebi-saltanati, musa, musalar, saltanati, fetretler | Musa:3506 |
| 278 | `zeta` | BELIRSIZ |  | zeta, zeta-prensligi, zetalar, balsic, crnojevic, skadar-cetine | Zeta:9 |
| 286 | `dukagin` | BELIRSIZ |  | dukagin, dukagin-prensligi, dukaginler, dukagjini | Dukagin:7 |
| 335 | `topia` | BELIRSIZ |  | topia, topia-beyligi, topialar, thopia | Topia:0 |
| 331 | `sarki-rumeli` | KAPSAYICI | `filibe` (FİLİBE) | yetersiz, sarki-rumeli, sarki-rumeli-vilayeti, sarki, sarkiler, vilayeti, ozerk | Şarkî:1109 |
| 325 | `oniki-ada-italyan` | KAPSAYICI | `rodos` (RODOS) | oniki-ada-italyan, italya-nin-oniki-ada-isgali, italya-nin, italya-ninlar, isgali, oniki, onikiler | İtalya:1016 |
| 304 | `dubrovnik` | AD-MADDESI | `dubrovnik` (DUBROVNİK) | dubrovnik-cumhuriyeti, dubrovnikler, ragusa | Dubrovnik:71 |
| 303 | `dejanovic-prensligi` | BELIRSIZ |  | dejanovic-prensligi, dejanovic, dejanovicler, kostadin-ili | Dejanović:7 |
| 302 | `crnojevic-zetasi` | BELIRSIZ |  | crnojevic-zetasi, crnojevic, crnojevicler, zetasi | Crnojević:3 |
| 291 | `garbi-trakya` | KAPSAYICI | `gumulcine` (GÜMÜLCİNE) | garbi-trakya, garbi-trakya-hukumet-i-mustakillesi, garbi-trakya-hukumet-mustakillesi, garbi, garbiler, mustakillesi | Garbî:262 |

### orta-afrika (10) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 50 | `vaday` | AD-MADDESI · ✍️ VEDÂY = Vaday sultanlığı (yazım farkı) | `cad` (ÇAD), `veday` (VEDÂY) | vaday, vaday-sultanligi, vadaylar, abese | Vaday:0 |
| 62 | `lunda-imparatorlugu` | BELIRSIZ |  | lunda-imparatorlugu, lunda, lundalar, musumba | Lunda:2 |
| 106 | `zende` | BELIRSIZ |  | zende, zende-sultanliklari, zendeler, sultanliklari, azande | Zende:48 |
| 168 | `matamba` | BELIRSIZ |  | matamba, matamba-kralligi, matambalar | Matamba:0 |
| 191 | `kasance` | BELIRSIZ |  | kasance, kasance-kralligi, kasanceler, kasanje | Kasance:0 |
| 194 | `kuba` | YANLIS? · ✍️ `kuba--azerbaycan` Azerbaycan'daki Kuba — Kongo'daki Kuba Krallığı DEĞİL |  | kuba, kuba-kralligi, kubalar, nsheng | Kuba:280 |
| 258 | `mangbetu` | BELIRSIZ |  | mangbetu, mangbetu-kralligi, mangbetular, nangazizi | Mangbetu:0 |
| 265 | `darul-kuti` | BELIRSIZ |  | darul-kuti, daru-l-kuti-sultanligi, daru-l-kuti, daru-l, daru-ller, kuti, darul, darullar, senusi, ndele | Dârü:2469 |
| 276 | `yeke` | BELIRSIZ |  | yeke, yeke-kralligi, yekeler, msiri, bunkeya | Yeke:35 |
| 280 | `rabih` | KAPSAYICI | `cad` (ÇAD), `zubeyr` (ZÜBEYR) | rabih, rabih-b-zubeyr-devleti, rabih-zubeyr, rabihler, dikva | Râbih:27 |

### orta-amerika-karayip (7) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 56 | `nahua-sehir-devletleri` | BELIRSIZ |  | nahua-sehir-devletleri, nahua-devletleri, nahua, nahualar, devletleri, altepetl-ler | Nahua:0 |
| 103 | `zapotek-krallik` | BELIRSIZ |  | zapotek-krallik, zapotek-kralligi, zapotek, zapotekler | Zapotek:0 |
| 108 | `purepecha-imparatorlugu` | BELIRSIZ |  | purepecha-imparatorlugu, purepecha, purepechalar, tarasko, tzintzuntzan | Purépecha:0 · purepecha:0 |
| 200 | `tututepec-krallik` | BELIRSIZ |  | tututepec-krallik, tututepec-kralligi, tututepec, tututepecler, yucu-dzaa | Tututepec:0 |
| 231 | `dominik-cumhuriyeti` | BELIRSIZ |  | dominik-cumhuriyeti, dominik, dominikler, santo-domingo | Dominik:41 |
| 309 | `ingiliz-hondurasi` | BELIRSIZ |  | ingiliz-hondurasi, ingiliz, ingilizler, hondurasi, belize | İngiliz:2449 |
| 305 | `el-salvador-cumhuriyeti` | BELIRSIZ |  | el-salvador-cumhuriyeti, salvador, salvadorlar, san-salvador | Salvador:12 |

### kafkasya (6) — **EVET** — birincil

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 52 | `sirvansah` | VAR | `sirvansahlar` (ŞİRVANŞAHLAR) | sirvansah, samahi |  |
| 185 | `kabartay` | VAR | `kabartaylar` (KABARTAYLAR) | kabartay, kabartay-beylikleri, beylikleri, kabardey, beylikler-halinde, sabit-baskent-yok |  |
| 229 | `cerkez` | VAR | `cerkezler` (ÇERKEZLER) | cerkez, cerkez-kabile-birlikleri-bati-grubu, grubu, adige, kabile-birlikleri-halinde, sabit-merkez-yok |  |
| 316 | `kumuk-samhalligi` | VAR | `kumuklar` (KUMUKLAR) | kumuk-samhalligi, kumuk, samhalligi, tarki |  |
| 315 | `kuba-hanligi` | AD-MADDESI · ✍️ başlık aramasıyla: `kuba--azerbaycan` (çıplak `kuba` 302) | 🔎 `kuba--azerbaycan` (KUBA) | kuba-hanligi, kuba, kubalar, hudad-kalesi-kuba-sehri | Kuba:280 |
| 311 | `kaheti-kralligi` | BELIRSIZ |  | kaheti-kralligi, kaheti, kahetiler | Kaheti:6 |

### sibirya-bozkir (6) — **EVET** — birincil

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 60 | `nogay` | VAR | `nogaylar` (NOGAYLAR) | nogay, nogay-ordasi, ordasi, bozkirda-gocebe, sabit-baskent-yok |  |
| 95 | `kazan` | VAR | `kazan` (KAZAN), `kazan-hanligi` (KAZAN HANLIĞI) | kazanlar |  |
| 167 | `astarhan` | VAR | `astarhan-hanligi` (ASTARHAN HANLIĞI) | astarhan, astarhanlar, ejderhan |  |
| 169 | `don-kazak` | KAPSAYICI | `kazaklar` (KAZAKLAR) | don-kazak, don-kazak-ordasi, don, donlar, ordasi, kazak, razdory-cerkassk |  |
| 334 | `tannu-tuva` | KAPSAYICI | `tuva` (TUVA) | kapsam, tannu-tuva, tannu-tuva-halk-cumhuriyeti, tannu, tannular | Tannu:9 |
| 312 | `kasim` | VAR | `kasim-hanligi` (KĀSIM HANLIĞI) | kasim, kasimlar, kasimler, kasimov |  |

### guney-amerika (6) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 79 | `venezuela-cumhuriyeti` | BELIRSIZ |  | venezuela-cumhuriyeti, venezuela, venezuelalar, caracas | Venezuela:12 |
| 193 | `ingiliz-guyanasi` | BELIRSIZ |  | ingiliz-guyanasi, ingiliz, ingilizler, guyanasi | İngiliz:2449 |
| 242 | `fransiz-guyanasi` | BELIRSIZ |  | fransiz-guyanasi, fransiz, fransizlar, guyanasi, fransizler | Fransız:2447 |
| 327 | `ranquel` | BELIRSIZ |  | ranquel, ranquel-konfederasyonu, ranqueller | Ranquel:0 |
| 301 | `charrua` | BELIRSIZ |  | charrua, charrualar, minuan-guenoa | Charrúa:0 · charrua:0 |
| 295 | `arua` | BELIRSIZ |  | arua, arualar, marajo | Aruã:0 · arua:2 |

### kuzey-afrika (5) — KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 64 | `tuareg-accer` | KAPSAYICI | `tuareg` (TUAREG) | tuareg-accer, kel-accer-tuareg-konfederasyonu, kel-accer-tuareg, kel, keller, tuaregler, canet | Kel:7000 |
| 67 | `tuareg-ahaggar` | KAPSAYICI | `tuareg` (TUAREG) | tuareg-ahaggar, kel-ahaggar-tuareg-konfederasyonu, kel-ahaggar-tuareg, kel, keller, tuaregler, tamanrasset | Kel:7000 |
| 289 | `rif-cumhuriyeti` | KAPSAYICI | `abdulkerim-el-hattabi` (ABDÜLKERÎM el-HATTÂBÎ) | kapsam, rif-cumhuriyeti, rif, rifler | Rif:1142 |
| 314 | `konstantin-beyligi` | KAPSAYICI | `ahmed-bey` (AHMED BEY) | konstantin-beyligi, konstantin, konstantinler | Konstantin:332 |
| 293 | `ammarogullari` | KAPSAYICI | `trablusgarp` (TRABLUSGARP) | ammarogullari, trablus | Ammâroğulları:15 |

### misir-sudan (4) — KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 49 | `dacu` | BELIRSIZ |  | dacu, dacu-hanedanligi, dacular, daju | Dâcû:4 |
| 94 | `mehdi` | KAPSAYICI · ✍️ MEHDÎ kavram maddesi, Mehdî Devleti değil | `sudan` (SUDAN) ⚠️`mehdi`→MEHDÎ | mehdi-devleti, mehdiler, ubeyyid-omdurman | Mehdî:1412 |
| 321 | `misir-eyaleti` | VAR | `osmanlilar` (OSMANLILAR), `misir` (MISIR) | misir-eyaleti, osmanli-misir-eyaleti, osmanli, eyaleti, misirler |  |
| 306 | `fransiz-misir-seferi` | KAPSAYICI | `kahire` (KAHİRE) | yetersiz, fransiz-misir-seferi, napolyon-un-misir-seferi, napolyon-un, napolyon-unlar, seferi, fransiz, fransizler | Napolyon:190 |

### italya (4) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 176 | `mantua` | BELIRSIZ |  | mantua, mantua-dukaligi, mantualar, gonzaga | Mantua:2 |
| 187 | `parma` | BELIRSIZ |  | parma, parma-dukaligi, parmalar, farnese, bourbon | Parma:579 |
| 233 | `piombino` | BELIRSIZ |  | piza, kapsam, piombino, piombino-prensligi, piombinolar, appiani-hanedani | Piombino:0 |
| 298 | `bonacolsi` | BELIRSIZ |  | bonacolsi, bonacolsi-senyorlugu, bonacolsiler, senyorlugu, mantova | Bonacolsi:0 |

### orta-asya (3) — **EVET** — birincil

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 86 | `sibir-hanligi` | VAR | `sibir-hanligi` (SİBİR HANLIĞI) | sibir, sibirler, cimgi-tura-sibir |  |
| 288 | `buhara-halk-cumhuriyeti` | AD-MADDESI | `buhara` (BUHARA) | hanl, buhara-halk-cumhuriyeti, buhara-halk-sovyet-cumhuriyeti, buhara-sovyet, buharalar, sovyet | Buhara:569 |
| 307 | `harezm-halk-cumhuriyeti` | AD-MADDESI | `ozbekistan` (ÖZBEKİSTAN), `harezm` (HÂREZM) | harezm-halk-cumhuriyeti, harezm-halk-sovyet-cumhuriyeti, harezm-sovyet, harezmler, sovyet | Harezm:84 |

### okyanusya (3) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 110 | `tui-tonga-imparatorlugu` | BELIRSIZ |  | tui-tonga-imparatorlugu, tu-i-tonga-imparatorlugu, tu-i-tonga, tu-i, tu-iler, tonga, tongalar, mu-a | Tuʻi:0 · tuʻi:0 |
| 188 | `hawaii-kralligi` | BELIRSIZ |  | hawaii-kralligi, hawaii, hawaiiler, honolulu | Hawaii:5 |
| 260 | `tonga-kralligi` | BELIRSIZ |  | tonga-kralligi, tonga, tongalar, nuku-alofa | Tonga:17 |

### dogu-avrupa (3) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 198 | `teodoro` | BELIRSIZ |  | teodoro, theodoro-prensligi, theodoro, theodorolar, teodorolar, gotya, mankup | Theodoro:40 |
| 277 | `krakow-serbest-sehri` | BELIRSIZ |  | krakow-serbest-sehri, krakov-serbest-sehri, krakov-serbest, krakov, krakovlar, serbest, krakow, krakowlar | Krakov:0 |
| 285 | `danzig-serbest-sehri-1807` | BELIRSIZ |  | danzig-serbest-sehri-1807, danzig-serbest-sehri, danzig-serbest, danzig, danzigler, serbest, napolyon-donemi | Danzig:7 |

### orta-avrupa (3) — KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 223 | `prusya-dukaligi` | AD-MADDESI | `prusya` (PRUSYA) | prusya-dukaligi, prusyalar, konigsberg | Prusya:124 |
| 326 | `orta-macar-kralligi` | KAPSAYICI | `tokoli-imre` (TÖKÖLİ, İmre) | orta-macar-kralligi, orta-macar, orta, ortalar, macar | Macar:607 |
| 297 | `bavyera` | BELIRSIZ |  | bavyera, bavyeralar, dukalik-elektorluk-krallik, munih | Bavyera:25 |

### kuzey-avrupa (2) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 282 | `izlanda` | BELIRSIZ |  | izlanda, izlandalar, reykjavik | İzlanda:13 |
| 324 | `norvec-isvec-birligi` | BELIRSIZ |  | norvec-isvec-birligi, norvec-kralligi, norvec, norvecler, isvec-ile-birlik, christiania | Norveç:32 |

### bati-avrupa (1) — **HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla

| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |
|---:|---|---|---|---|---|
| 319 | `luksemburg-hollanda-birligi` | BELIRSIZ |  | luksemburg-hollanda-birligi, luksemburg-buyuk-dukaligi, luksemburg-buyuk, luksemburg, luksemburglar, buyuk, hollanda-ile-sahsi-birlik | Lüksemburg:11 |

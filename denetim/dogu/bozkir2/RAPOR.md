# bozkir2 raporu (Orta Asya/Bozkır parçası 2) — 22 Ekim 2026

Yöntem: TDV İslâm Ansiklopedisi maddeleri bu oturumda `curl` ile çekildi (samaniler, karahanlilar, gazneliler, gurlular, harizmsahlar, karahitaylar, selcuklular, tugrul-bey, dandanakan-savasi, cengiz-han, karluklar, kimek, pecenekler, kipcaklar, kirgizlar, uygurlar, bulgar, ibn-fadlan; önbellek `bozkir2/_ham/`). Dosyalardaki her TDV alıntısı önbellekten **birebir** çekilmiştir (`_uret.py` içindeki `Q()` alıntı yoksa durur). Hicrî tarihler `_hicri.py` ile tablo çevirisi (test: 8 Ramazan 431 = 1040-05-23, 5 Safer 536 = 1141-09-09, 15 Cemâziyelâhir 382 = 992-08-18, 9 Şevval 618 = 1221-11-26 TDV günleriyle birebir tuttu); ±1 gün belirsizliği `ic_not_takvim`'de beyanlı. Çıktılar `_uret.py` + `_uret_b.py` ile üretildi. `node denetim/dogu/dogrula.js bozkir2` → çıkış 0 (ihlal 0, uyarı 0).

## ① Ölçülen
- Girdi: 22 polity (KUNYE_MAIN_DA 11, KUNYE_YOK 4, KUNYE_MS1_DALINDA 4 + alania + 2 mükerrer). Künye yazılan: **2** (`kerait`, `pecenek`). `alania`: atlasta `alania-krallik` (0850-1090) var → künye yazılmadı, kimlik olarak `alania-krallik` kullanılmalı.
- Anlatı kronolojisi: **22 madde** (kamag-mogol 8, pecenek 8, nayman 1, kuclug-karahitay 1, gurlu 1, yenisey-kirgiz 1, mogol-imparatorlugu 1, hazar-kaganligi 1; ilk `taraflar` elemanına göre) + künye kronolojileri (kerait 2, pecenek 2).
- Sınır (Değişmez 2) maddesi: **25** (`toprak-kazanc/kayip`, ±30 gün devir eşleşmesi: dogrula `devir_eslesen 20`, `eşleşmeyen 0`).
- Mevcut yerleşime yama: **13 yerleşim, 33 dilim** (2 dilim `__BOSLUK__` = Gazne ve Kâbil 1157-1173). Yamalı yerleşimler: Buhara, Semerkant, Kaşgar, Taraz (Evliya-Ata), Gazne, Kâbil, Bâmiyan, Belh, Herat, Nîşâbur, Merv (Mari), Serahs, Bulgar (Bolgar). Kapsadığı sahipler: samani, karahanli, dogu-karahanli, karahitay, karluk, gazneli, gurlu, harizmsah, idil-bulgar, mogol-imparatorlugu, altinorda.
- **YENİ yerleşim: 0.** Nedenleri: (a) EK-2 madde 4 öncelik = mevcut yerleşimin zincirini geriye uzatmak; (b) aday şehirlerden Özkent'in 1032-1059 sahipliği TDV Karahanlılar md. içinde birbirini tutmuyor (Özkent: 1025/1032/1035/1037/1044 el değişiyor), Fîrûzkûh/Kara-ordu/Yemekiye için çift tanıklı koordinat bu oturumda kurulmadı. Çift tanık koordinat sayısı: 0 (yerleşim yok).
- bozkir1 ile çakışma: Balasagun yaması (karluk 0766-0840, karahanli 0840-1000) bozkir1 tarafından AYNEN yazılmış ve ana ağaca uygulanmış → bozkir2'de Balasagun yaması ve maddesi YAZILMADI. Belh/Semerkant için bozkir1 0500-0750 yazdı; benim dilimlerim Belh 0900'den, Semerkant 0874'ten başlıyor (`onceki_gerekli` alanında açık: 0750→0900 / 0750→0874 başka küme). Kâbil için hint1 0500-0869 yazdı; benim Kâbil dilimim 0986'dan (0869-0986 boşluğu `onceki_gerekli`'de).
- Pencere dışı polity: yok (22'nin hepsi 500-1281 içinde).

## ② Bulamadığım / yazmadığım
- Künye/kronoloji/yerleşim için kaynak bulunamayan veya atlama nedeni (polity + konu):
  - `kimek` (künye+kuruluş MS1 dalında): TDV Kimek md. yalnız «IX-X. yy.» ve «XI. yy.'da adı kalktı» der → tarihlenebilir tek madde (yıl) yok; kronoloji maddesi YAZILMADI. Yemekiye (yazlık) koordinatı kaynakta yok.
  - `kerait`: TDV'de madde YOK (kereyitler, kerayitler, kereyit-kerayit, kerait slug'ları = boş sayfa). f=1007 yalnız BOZKIR_RAPOR2.md aktarımı (Golden s.285; Golden bu oturumda açılamadı, archive.org yolu 404). Sabit başkent yok → yerleşim yok.
  - `alania-krallik`: TDV'de Alan/Alanya md. yok; kronolojisine ekleme yazılmadı. `gansu-uygur`: CIN kümesi (`ganzhou-uygur`, cin2/kuyrukcin) aynı polity'yi yazmış; mükerrer (künye MS1 dalında) → yazılmadı.
  - `karluk`, `koco-uygur`, `kipcak`, `harizmsah`, `samani`, `gazneli`, `karahanli`, `karahitay`, `mogol-imparatorlugu`, `idil-bulgar`: künye kronolojileri aynı TDV maddelerinden önceki oturumlarca zaten 5-17 maddeye çıkarılmış; yeni, kopyasız TDV maddesi bulunmadığı için ek anlatı yazılmadı (yalnız kamag-mogol/kerait/pecenek/küçlüğ/kırgız/gurlu 1200 maddeleri eklendi).
  - Herat, Belh, Nîşâbur, Merv, Serahs: Selçuklu→(Oğuz→Hârizmşah/Gurlu) arası (1038/1040 → 1175-1221 arası) yazılmadı: `devam_gerekli` her kayıtta. Sebep: Büyük Selçuklu dilimi Selçuklu kümesinin işi; Sencer'in 1153 Oğuz esareti ve sonrası TDV'de şehir düzeyinde günsüz.
  - Gazne 1157-1173: Oğuz elinde (TDV Gurlular md.) ama atlasta Oğuz kimliği yok → `__BOSLUK__` + BOŞLUK BEYANI (Kâbil aynı ABİ MERKEZ ile). Çözüm: `oguz` künyesi açılırsa bağlanır.
  - Taraz 1211-1281, Bâmiyan 1215-1281, Gazne/Kâbil 1221-11-26→1281: Moğol/Çağatay/İlhanlı devri `devam_gerekli`.
  - Hotan, Özkent, Tirmiz, Taşkent/Şaş, Hucend, Lahor/Multan öncesi: bu parçada kaynak-zincir kurulmadı.
- Doğrulanamayan/uyarılar: Buhara/Semerkant/Taraz/Kâbil/Bâmiyan/Horasan şehirlerinde şehir düzeyinde devir cümlesi TDV'de olmayan dilimler `BEYANLI YAKLAŞIKLIK` (ABİ MERKEZ) etiketli (Semerkant 999, Taraz 1041/1130, Kâbil tümü, Horasan şehirlerinin 900 başlangıcı ve 999 devri, Belh/Herat 1040).

## ③ Kararlar / öneriler
**Künye düzeltme önerileri (KUNYE_MAIN_DA; dosyaya yazılmadı):**
1. `dogu-karahanli` t=1210-01-01 → TDV Karahanlılar md. «607/1210-11» (Kâşgar'da III. Muhammed öldürüldü; Küçlüğ Kâşgar'ı aldı): hicrî 607 = 1210-07..1211-05 → t 1211-01-01'e çekilmeli; Kâşgar/Balasagun zincirinde __BOSLUK__ 1211-1218 yerine `kuclug-karahitay` (künye MS1 dalında hazır; TDV Karahıtaylar «Küçlüğ... (1211)», Cengiz Han «Cebe Noyan... (1218)») yazılmalı.
2. `altinorda` f=1242-01-01 → TDV Kıpçaklar md. «Altın Orda Devleti'nin kurulmasından sonra (1241)»; künye 1241'e çekilirse Bulgar 1236→1241 devri ve sınır maddesi 1241-01-01'e alınır (şu an 1242 künyeye uyuyor).
3. `buyuk-selcuklu`: f=1038 TDV Selçuklular md.'ye uyar (Talhâb, Şâban 429 ≈ 1038-05-09); TDV «Büyük Selçuklular (1040-1157)» başlığı Dandanakan'ı kuruluş sayar — iki tanım (1038 fiilî Horasan, 1040 resmî) ic_not'ta beyan edilmeli.
4. `samani`: künye f=819 (Me'mûn'un vali tayini) iken TDV bazı araştırmacıların 261/874-75'i kuruluş saydığını yazar; yamalarda egemenlik 874-10-16'dan (hicrî 261 başı) başlatıldı. t=1005 TDV ile uyumlu.
5. `karahanli`: Buhara 1000-01-01'den karahanli görünüyor; TDV Sâmânîler md. Müntasır'ın «ertesi yıl» (1000) Buhara'yı geri aldığını, Karahanlılar md. 1003 verir (md. içi çelişki); Müntasır 395/1005'te öldü → Buhara 1000/1003→1005 `samani` olabilir. Mevcut zincir 1000-01-01 karahanli — ÇELİŞKİ, düzeltme için Emre kararı (iki TDV maddesi ayrışıyor).
6. `gurlu` f=1000-01-01: TDV tablosunda Muhammed b. Sûrî 390 (1000) ve ilk anılış 1010; Gurlu sultanlığı 1148 (sultan unvanı). Künye f önceki oturumların kararı; bu işte değiştirilmedi.
7. Nîşâbur/Merv/Serahs: TDV Gurlular md. Nîşâbur'u 1200'de, Merv/Serahs'ı 1201'de Gurlu'nun aldığını yazar (kronoloji 1200-01-01 maddesi eklendi); TDV Hârizmşahlar md. Alâeddin Muhammed'in üçünü 1204'te zaptettiğini yazar. Atlas zincirleri: Nîşâbur harizmsah 1202-01-01'den, Serahs 1193'ten, Merv mogol 1221'den. Öneri: Nîşâbur 1200→1204 `gurlu`, harizmsah 1204→1221-04-10 (ya da iki TDV'nin gün düzeyi çelişkisi `ic_not`'a). Zincire dokunulmadı.
8. `yenisey-kirgiz` / `kirgiz-yenisey` mükerrer (BOZKIR_RAPOR2 ile aynı öneri: tek kayıt, 0840-1207).

**YAMA GEREKLİ listesi:** `yama_bozkir2.js` — 13 yerleşim (ad+`mevcut_zincir_basi`+`s_onek`; ilk dilim f=0766/0840/0874/0900/0920/0963/0986/1145, son dilim t= mevcut zincirin f'i ya da `devam_gerekli`):
Buhara (0874-10-16→1000-01-01, mevcut karahanli 1000) · Semerkant (0874-10-16→1000-01-01) · Kaşgar (0840→1000) · Taraz (0766→1211; devam 1211→1281) · Gazne (0963-01-01→1221-11-26; devam →1281; 1157-1173 BOŞLUK) · Kâbil (0986-05-13→1221-11-26; aynı) · Bâmiyan (1145-06-24→1215; devam →1281) · Belh (0900-01-07→1040-05-23; devam →1198) · Herat (aynı; devam →1175) · Nîşâbur (0900-01-07→1038-05-09; devam →1202) · Merv (aynı; devam →1221) · Serahs (aynı; devam →1193) · Bulgar (0920→1281, kesintisiz; idil-bulgar→mogol-imparatorlugu 1236→altinorda 1242).
Yeni `d:` kimlikleri hiç yok; hepsi `data/devletler.js`'te (`kuclug-karahitay` yama dilimlerinde kullanılmadı).

**Boya ihtiyacı** (`arac/renkler.py BOYALAR` taraması, bu oturumda ölçüldü):
- Yama dilimlerinde kullanılan ve BOYALAR'da OLMAYAN tek kimlik: **`karluk`** (Taraz 0766-0840; Balasagun yaması bozkir1'de). Gerekli.
- Yeni künyeler `kerait`, `pecenek`: BOYALAR'da yok; yerleşimleri olmadığı için haritada boyanacak bölge de yok (boya_gerekli:true bırakıldı).
- Kronoloji `taraflar`'ında geçen `yenisey-kirgiz`, `hazar-kaganligi`, `macar-prensligi`, `kiev-rusu` BOYALAR'da yok (bu işte `s:` dilimi yok).

**Yeni tür/bölge:** yok (`bozkir-konfederasyonu` devletler.js'te 1 kullanım; `hanlik`, bölge `orta-asya`/`dogu-avrupa`).

**Emre'den kararlar:** Kerait f (1007/1170/1199); Peçenek f=895 (girdi 889 değil) ve t=1091-04-29 (girdi 1122 değil); boy adı konfederasyonlar siyasî birim mi; Oğuz için künye açılması (Gazne/Kâbil 1157-1173 boşluğu); Buhara 1000-1005 Müntasır dönemi.

Not: `_*.py/_*.js/_ham/` dosyaları bozkir2 işinin üretim araçlarıdır (geçici); `kunye_yeni.js, kronoloji_cok_dogu_bozkir2.js, kronoloji_sinir_dogu_bozkir2.js, yerlesimler_dogu_bozkir2.js, yama_bozkir2.js, RAPOR.md` teslimdir.

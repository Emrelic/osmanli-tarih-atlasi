# GLM-1 · D1923-OLCUM — 1923-10-29 sınır çizgileri envanteri

- Betik: `glm/d1923.js` (aynı sayılar bu betikten yeniden üretilebilir; JSON: `glm/D1923-OLCUM.json`)
- Yöntem: `data/d_sinirlar*.js` (9 dosya) node `vm` ile `window` bağlamında; aktiflik `f <= 1923-10-29 && (!t || t >= 1923-10-29)`.

## 1 · Ön ölçüm doğrulaması

| ölçüm | beklenen | ölçülen | tuttu mu |
|---|---|---|---|
| aktif D kaydı | 319 | 319 | ✓ |
| çizgisi olan (hat var) | 193 | 193 | ✓ |
| çizgisi olmayan (hat YOK) | 126 | 126 | ✓ |
| nokta (hat tepeleri) | 17.133 | 17.133 | ✓ |
| Natural Earth 10m admin-0 (bugünkü sınır) | 185 | 185 | ✓ |

319 = çizgili(hat var) 193 + çizgisiz(hat yok) 126 — TAM BÖLÜNME. Loncadaki «kategori/sinif YOK ya da hat boş» tanımı bu ikiliye göre 127 verir: 1 kayıt (d1923-tr-iq-fiili) hem hat taşıyor hem sinif YOK — ön ölçümün 126'sı HAT YOK kümesidir; o kayıt çizgili 193'ün içinde sayılmış (hat bilgi amaçlı duruyor, çizilmiyor).

NE-toplam (187) ≠ 185: 2 kayıt NE ama admin-0 değil — `d1923-jp-sscb-sahalin` (antlaşma tarifi (50°K paraleli) × Natural Earth 10m kara kıyısı); `d1923-ro-su` (Natural Earth 10m nehirler — Dniester orta çizgisi (Zbruç ağzına en yakın tepeden: 1.8 km sapma))

## 2 · Çizgisiz 126 kayıt

### Sebep sınıfına göre

| sebep sınıfı | adet |
|---|---|
| hat-yok | 38 |
| sonradan-değişti/koordinat-yok | 88 |

### Bölgeye göre (dosya adından)

| bölge | adet |
|---|---|
| amerika | 37 |
| asya | 29 |
| avrupa_bati | 10 |
| avrupa_orta | 33 |
| cekirdek | 3 |
| komsu | 13 |
| ortadogu | 1 |

### Taraf çiftine göre (ilk 25 satır — tam liste JSON'da)

| taraf çifti | adet |
|---|---|
| abd × kanada | 2 |
| abd × meksika | 3 |
| abd × panama-cumhuriyeti | 1 |
| afganistan × cin-cumhuriyeti | 1 |
| afganistan × ingiliz-hindistani | 1 |
| afganistan × kacar | 1 |
| afganistan × sovyet-rusya | 1 |
| almanya × cekoslovakya | 4 |
| almanya × danzig-serbest-sehri | 1 |
| almanya × litvanya | 1 |
| almanya × polonya | 3 |
| almanya × saar-havzasi-mandasi | 1 |
| arjantin-cumhuriyeti × bolivya-cumhuriyeti | 1 |
| arjantin-cumhuriyeti × brezilya-cumhuriyeti | 1 |
| arjantin-cumhuriyeti × paraguay-cumhuriyeti | 1 |
| arjantin-cumhuriyeti × sili-cumhuriyeti | 1 |
| arjantin-cumhuriyeti × uruguay-cumhuriyeti | 1 |
| arnavutluk-bagimsiz × yugoslavya | 2 |
| avusturya-cumhuriyet × macaristan-naiplik | 2 |
| belcika × luksemburg | 1 |
| bolivya-cumhuriyeti × brezilya-cumhuriyeti | 1 |
| bolivya-cumhuriyeti × paraguay-cumhuriyeti | 1 |
| bolivya-cumhuriyeti × sili-cumhuriyeti | 3 |
| brezilya-cumhuriyeti × fransiz-guyanasi | 1 |
| brezilya-cumhuriyeti × kolombiya-cumhuriyeti | 1 |
| …(62 satır daha — JSON) | |

### Tam liste

| id | taraflar | dosya | kategori/sinif | sebep sınıfı | sebep (kısaltılmış) |
|---|---|---|---|---|---|
| `d1923-tr-ir-DEGISTI-kucuk-agri-1932` | tbmm-turkiye × kacar | d_sinirlar.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 1923 hattının koordinatı ELDE YOK (1913 protokol metni/haritası okunmadı) ⇒ bu kutuda D… |
| `d1923-tr-ir-DEGISTI-kotur-1932` | tbmm-turkiye × kacar | d_sinirlar.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 1923 hattının koordinatı ELDE YOK (1913 protokol metni/haritası okunmadı) ⇒ bu kutuda D… |
| `d1923-tr-ir-DEGISTI-bacirge-1932-1937` | tbmm-turkiye × kacar | d_sinirlar.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 1923 hattının koordinatı ELDE YOK (1913 protokol metni/haritası okunmadı) ⇒ bu kutuda D… |
| `d1923-ca-us-DEGISTI-lake-of-the-woods` | kanada × abd | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 1923'te hat 5 noktada kendini kesiyordu (hukuken tanımlı ama kusurlu) · kutu TAHMİNİ · … |
| `d1923-ca-us-alaska-guneydogu` | kanada × abd | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | Envanter d1923-ca-us-4 · hukuken C (işaretleme bilinmiyor) · degisti bilinmediği için ç… |
| `d1923-ca-nf-labrador` | kanada × newfoundland-dominyonu | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | TARTIŞMALI: Kanada kıyıdan 1 millik şerit, Newfoundland Atlantik su ayrımını iddia ediy… |
| `d1923-us-mx-DEGISTI-rio-grande` | abd × meksika | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | hukuken C: hareketli nehir hattı (1884/1905 banco kuralları) · 1923 hattının koordinatı… |
| `d1923-us-mx-DEGISTI-colorado` | abd × meksika | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | hukuken C · kutu TAHMİNİ · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E/D ÇİZİLMEZ, … |
| `d1923-us-mx-chamizal` | abd × meksika | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | TARTIŞMALI: ABD 1911 kararını reddetti · 1923 fiilî idare BULUNAMADI · kutu TAHMİNİ · 1… |
| `d1923-us-pa-kanal-bolgesi` | abd × panama-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter d1923-us-pa-1 · 1914 metni KOORDİNATLI ⇒ çizilebilir; bu turda ÇİZİLMEDİ (borç… |
| `d1923-gt-sv` | guatemala × el-salvador-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | FİİLİ: 1923'te belge yok; 1938 md. I(a) 'mevcut sınır'dan söz eder ama 1923 koordinatı … |
| `d1923-gt-hn` | guatemala × honduras-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | TARTIŞMALI (Honduras Motagua–Belize kıyısını istiyordu) · kutu bugünkü çizgi çevresi; t… |
| `d1923-hn-sv` | honduras-cumhuriyeti × el-salvador-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | Envanter d1923-hn-sv-1: ölçülemedi · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E/D … |
| `d1923-hn-ni-DEGISTI-dogu` | honduras-cumhuriyeti × nikaragua-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | TARTIŞMALI: Nikaragua 1906 kararını reddetti · 1923 hattının koordinatı ELDE YOK ⇒ bu k… |
| `d1923-cr-pa` | kosta-rika-cumhuriyeti × panama-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | TARTIŞMALI · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E/D ÇİZİLMEZ, A/B (ya da C) … |
| `d1923-pa-co` | panama-cumhuriyeti × kolombiya-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | 1903–1922 Kolombiya Panama'yı tanımıyordu; 1 Mar 1922'den sonra hat KABA (C) ve işarets… |
| `d1923-ht-do` | haiti × dominik-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | TARTIŞMALI: etkili belge yok (1777 hattı belirsiz) · 1923 hattının koordinatı ELDE YOK … |
| `d1923-fr-nl-saint-martin` | fransa-cumhuriyet × hollanda | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Hat tanımsız (1648) · f Fransa künyesine çekildi · 1923 hattının koordinatı ELDE YOK ⇒ … |
| `d1923-co-ve` | kolombiya-cumhuriyeti × venezuela-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | PARÇALI: tartışmasız kesimler (Goajira, Táchira) E; dört kesim uygulama bekliyordu. Kes… |
| `d1923-co-br-kuzey` | kolombiya-cumhuriyeti × brezilya-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | hukuken C (işaretsiz) · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E/D ÇİZİLMEZ, A/B… |
| `d1923-co-pe` | kolombiya-cumhuriyeti × peru-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | FİİLİ: 1911 statükosu (Kolombiya La Pedrera'da, Peru Putumayo'da); çizimi BULUNAMADI · … |
| `d1923-co-ec-DEGISTI-dogu` | kolombiya-cumhuriyeti × ekvador-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Putumayo–Napo–Ambiyacu: hukuken C, fiilen Peru iddiasında · kutu TAHMİNİ · 1923 hattını… |
| `d1923-ec-pe` | ekvador-cumhuriyeti × peru-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | TARTIŞMALI: 1923'te hat yok · tartışmalı alan kutudan çok geniş · 1923 hattının koordin… |
| `d1923-br-gf` | brezilya-cumhuriyeti × fransiz-guyanasi | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | hukuken C (Oyapock talvegi + Tumuc-Humac su ayrımı) · 1923 hattının koordinatı ELDE YOK… |
| `d1923-gy-sr` | ingiliz-guyanasi × hollanda-guyanasi | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | PARÇALI: Corentyne alt kesimi FİİLİ (1831'den beri zımni mutabakat, antlaşma yok); üst … |
| `d1923-sr-gf` | hollanda-guyanasi × fransiz-guyanasi | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | PARÇALI: Maroni+Awa C · Stoelman–Portal adaları E (1915) · Awa yukarısı TARTIŞMALI · Ça… |
| `d1923-bo-br` | bolivya-cumhuriyeti × brezilya-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | PARÇALI: 1914 haritalı kesimler E; Rapirran–Bahia · Cuatro Hermanos–Verde · Madeira ada… |
| `d1923-bo-cl-tacna` | bolivya-cumhuriyeti × sili-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Visviri–Santuario–Chipe: 1904 hattı, karşı taraf Şili idaresindeki Tacna · hukuken C · … |
| `d1923-bo-cl-DEGISTI-chipapa-olca` | bolivya-cumhuriyeti × sili-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | hukuken C · kutu TAHMİNİ · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E/D ÇİZİLMEZ, … |
| `d1923-bo-cl-DEGISTI-patalani-panantalla` | bolivya-cumhuriyeti × sili-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | hukuken C · kutu TAHMİNİ; Panantalla GeoNames'te BULUNAMADI, kuzey sınır genişletildi ·… |
| `d1923-cl-pe-tacna-arica` | sili-cumhuriyeti × peru-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | FİİLİ: Şili idaresinin kuzey sınırı Sama nehri (Şili yorumu: Chaspaya kolu, Tarata dahi… |
| `d1923-bo-py-chaco` | bolivya-cumhuriyeti × paraguay-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | TARTIŞMALI: Chaco Boreal · 1923 kale hattı BULUNAMADI · tartışmalı alan kutudan çok gen… |
| `d1923-br-py-DEGISTI-paraguay-nehri` | brezilya-cumhuriyeti × paraguay-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Apa ağzı–Bahía Negra: antlaşmayla TANIMSIZ, batı kıyıyı Bolivya da istiyordu · 1923 hat… |
| `d1923-ar-py-DEGISTI-pilcomayo` | arjantin-cumhuriyeti × paraguay-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Pilcomayo: hukuken C (ağız–Salto Palmar, Horqueta–Esmeralda); Salto Palmar–Horqueta bat… |
| `d1923-ar-bo` | arjantin-cumhuriyeti × bolivya-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | PARÇALI: dağ, nehir ve 22. paralel kesimleri hukuken C; Pilcomayo kesimi tanımsız · 192… |
| `d1923-ar-cl` | arjantin-cumhuriyeti × sili-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | hukuken C (seyrek direkler) · Palena–California 1966'da değişti · Laguna del Desierto (… |
| `d1923-ar-uy` | arjantin-cumhuriyeti × uruguay-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Uruguay nehri: yürürlükte antlaşma YOK (1916 ada antlaşması onaylanmadı) · 1923 hattını… |
| `d1923-ar-br-DEGISTI-brasilera` | arjantin-cumhuriyeti × brezilya-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 1923'te hukuken E (1898 md. I talveg, 1901 işaretleri) ama bugünkü çizgi farklı · 1923 … |
| `d1923-br-uy-invernada` | brezilya-cumhuriyeti × uruguay-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | TARTIŞMALI: Arroyo de la Invernada (Rincón de Artigas) · kutu TAHMİNİ · 1923 hattının k… |
| `d1923-br-uy-brasilera` | brezilya-cumhuriyeti × uruguay-cumhuriyeti | d_sinirlar_amerika.js | D-YOK/YOK | hat-yok | hukuken C, belirsiz (1851: ağızdaki adalar Brezilya'nın); Uruguay itirazı 1940 tarihli … |
| `d1923-sscb-cn-BILINMIYOR-dogu` | sovyet-rusya × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.1: Sungaça–Tumen kara kesimi 1923'te D (1861 20 direk); nehirler C; Mançuli… |
| `d1923-sscb-cn-BILINMIYOR-batialtay` | sovyet-rusya × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Altay'daki kısa kesim (Moğolistan üçlü noktası civarı) · f 1881-08-19 → 1917-11-07 (tar… |
| `d1923-sscb-cn-BILINMIYOR-kazak` | sovyet-rusya × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.1: 1923'te D (Tekes–İli ~12 işaret; Jungar Alatau–Tarbagatay 1883/1893) · H… |
| `d1923-sscb-cn-BILINMIYOR-kirgiz` | sovyet-rusya × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.1: 1923'te D; protokol haritaları IBS'te yok · f 1884-05-22 → 1917-11-07 (t… |
| `d1923-sscb-cn-FIILI-pamir` | sovyet-rusya × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.1 · sınıf FİİLİ: Kizil Jik Dawan güneyinde antlaşma yok · f 1895-03-11 → 19… |
| `d1923-sscb-mn-BILINMIYOR` | sovyet-rusya × mogolistan | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.1/§3.5: 1923'te hukuken Rus–Çin hattı (Dış Moğolistan Çin metbuluğunda), fi… |
| `d1923-cn-mn-FIILI` | cin-cumhuriyeti × mogolistan | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.2 · sınıf FİİLİ: 1923'te hukuken Çin içi özerklik sınırı, fiilen iki yöneti… |
| `d1923-jp-cn-BILINMIYOR-yalu-tumen` | meiji-japonya × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.4: Yalu C · Tumen C · Paektu FİİLİ. Kore ilhakı 1910 (IBS 17 OCR'ında imza … |
| `d1923-jp-sscb-BILINMIYOR-tumen` | meiji-japonya × sovyet-rusya | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.3 · sınıf C (tanımlayan antlaşma yok) · f 1888-08-20 → 1917-11-07 (taraf kü… |
| `d1923-ih-tb-FIILI-mcmahon` | ingiliz-hindistani × tibet-ganden-phodrang | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §3.6 · sınıf FİİLİ. ⚠️ Nota günleri çelişkili (IBS 42: 01.02/25.03.1914 · ikin… |
| `d1923-ih-tb-BILINMIYOR-sikkim` | ingiliz-hindistani × tibet-ganden-phodrang | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §3.6 · 1923'te sınıf C. Taraf SİKKİM (İngiliz himayesi, 1890 md. II) — künyesi… |
| `d1923-ih-tb-FIILI-batihimalaya` | ingiliz-hindistani × tibet-ganden-phodrang | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §3.6 · Spiti/Kinnaur/Kumaon–Tibet · sınıf FİİLİ. 32,5°K güneyi — ayrım TAHMİNİ… |
| `d1923-ck-cn-FIILI-aksaicin` | cammu-kesmir × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.5/§3.6 · sınıf FİİLİ. Taraf Cammu-Keşmir (atlas 1923'te Leh'i bu kimliğe ya… |
| `d1923-ck-cn-FIILI-karakurum` | cammu-kesmir × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.5 · sınıf FİİLİ. Hunza/Gilgit tarafı; hukukî başlangıç YOK — f 1899 Macdona… |
| `d1923-np-tb-FIILI` | nepal × tibet-ganden-phodrang | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.6 · sınıf FİİLİ (tamamı) · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda D … |
| `d1923-ih-np-BILINMIYOR` | ingiliz-hindistani × nepal | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §3.7 · 1923'te sınıf D (1860 kâgir direkler) — ama 1925 sonrası değişim ölçülm… |
| `d1923-ih-cn-FIILI-wa` | ingiliz-hindistani × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.8 Güney-2 · sınıf FİİLİ · f 1897-06-05 → 1911-10-10 (taraf künyesi o tariht… |
| `d1923-ih-cn-FIILI-kuzey` | ingiliz-hindistani × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.8 Kuzey-1/2/3 · sınıf FİİLİ. En kuzeyi McMahon (İngiltere–Tibet, Çin tanıma… |
| `d1923-cn-fc-BILINMIYOR-tonkin` | cin-cumhuriyeti × fransiz-cinhindi | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.10 · 1923'te sınıf D (en az 285 sütun) · f 1896-08-07 → 1911-10-10 (taraf k… |
| `d1923-cn-fc-BILINMIYOR-laos` | cin-cumhuriyeti × fransiz-cinhindi | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.11 · 1923'te sınıf D. ⚠️ üçlü nokta enlemi IBS 34 ile IBS 38 arasında çeliş… |
| `d1923-si-fc-DEGISTI-mekong-1` | siyam-chakri × fransiz-cinhindi | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.15: 1923 hattı Mekong'un SİYAM KIYISI, bütün adalar Laos'un. Mekong ayrımı … |
| `d1923-si-fc-DEGISTI-mekong-2` | siyam-chakri × fransiz-cinhindi | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.15: 1923 hattı Mekong'un SİYAM KIYISI, bütün adalar Laos'un. Mekong ayrımı … |
| `d1923-si-ih-DEGISTI-maesai` | siyam-chakri × ingiliz-hindistani | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.17 · kutu 20,25°K kuzeyi ve 99,75°D doğusu — TAHMİNİ. Burma tarafı Kengtung… |
| `d1923-si-ih-DEGISTI-pakchan` | siyam-chakri × ingiliz-hindistani | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.17 · kutu 10,95°K güneyi — TAHMİNİ (Kra-Mathe kavşağının enlemi okunmadı) ·… |
| `d1923-hd-sw-DEGISTI-api-raja` | hollanda-dogu-hint × sarawak-brooke | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §2.19 · kutu IBS'in Api 110°04'D ve Raja 109°56'D boylamlarıyla · 1923 hattını… |
| `d1923-af-sscb-DEGISTI-amuderya` | afganistan × sovyet-rusya | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §3.11 · sınıf C (nehir içi hat 1923'te tanımsız). ⚠️ Kuzey kıyının bir kısmı 1… |
| `d1923-af-ih-BILINMIYOR-durand` | afganistan × ingiliz-hindistani | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §3.11 · 1923 sınıfları: Vahan–Dorah C · Dorah–Nawa C (Dokalim tartışmalı) · Mo… |
| `d1923-af-cn-FIILI-vahan` | afganistan × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter §3.11 · sınıf FİİLİ; Çin 20. yy başında Pamir'in çoğunu talep ediyordu · f 189… |
| `d1923-en-cn-BILINMIYOR-hongkong` | ingiltere × cin-cumhuriyeti | d_sinirlar_asya.js | D-YOK/YOK | hat-yok | Envanter §2.9 · 1923'te sınıf D (kıyı + kazıklar). f: 1899 tespiti — GÜN ÇELİŞKİLİ (IBS… |
| `d1923-be-lu` | belcika × luksemburg | d_sinirlar_avrupa_bati.js | D-YOK/YOK | hat-yok | §1.8 · f lüksemburg künyesine hizalandı (hat 1843'ten) · 1923 hattının koordinatı ELDE … |
| `d1923-fr-it-DEGISTI-tende` | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | §3.1 · kutu çıpalar etrafında TAHMİNİ · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E… |
| `d1923-fr-it-DEGISTI-chaberton` | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | §3.1 · kutu çıpalar etrafında TAHMİNİ · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E… |
| `d1923-fr-it-DEGISTI-thabor` | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | §3.1 · kutu çıpalar etrafında TAHMİNİ · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E… |
| `d1923-fr-it-DEGISTI-cenis` | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | §3.1 · kutu çıpalar etrafında TAHMİNİ · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E… |
| `d1923-fr-it-DEGISTI-pstbernard` | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | §3.1 · kutu çıpalar etrafında TAHMİNİ · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E… |
| `d1923-it-shs` | italya × yugoslavya | d_sinirlar_avrupa_bati.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | §3.6 · Peč (gn 6934913 Dreiländereck) → Castua. Fiume çevresi de bu kutuda (künye yok).… |
| `d1923-it-shs-zara` | italya × yugoslavya | d_sinirlar_avrupa_bati.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | §3.7 · Zara anklavı (Zadar gn 3186952). f Rapallo imzası · 1923 hattının koordinatı ELD… |
| `d1923-es-pt-guney` | ispanya × portekiz | d_sinirlar_avrupa_bati.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | §3.22 · Cuncos → Guadiana ağzı. f Badajoz Antlaşması 1801-06-06 · 1923 hattının koordin… |
| `d1923-es-gib` | ispanya × ingiltere | d_sinirlar_avrupa_bati.js | D-YOK/YOK | hat-yok | §3.23 · f: çit '1908-1909' — gün yok, 1909-01-01 hassasiyeti YIL. Cebelitarık'ın ayrı k… |
| `d1923-de-pl-1` | almanya × polonya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Pomeranya-Poznan-Aşağı Silezya kesimi. Hat Versa… |
| `d1923-de-pl-2` | almanya × polonya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Yukarı Silezya: MC Konseyi raporu 1921-10-12 → B… |
| `d1923-de-pl-3` | almanya × polonya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Doğu Prusya–Polonya (Allenstein/Marienwerder ple… |
| `d1923-dz-de` | danzig-serbest-sehri × almanya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Danzig–Doğu Prusya (Vistül/Nogat, Frische Nehrun… |
| `d1923-dz-pl` | danzig-serbest-sehri × polonya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Komisyon bitiş günü BULUNAMADI. 🔴 taraf kimliği… |
| `d1923-de-lt-memel` | almanya × litvanya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | hat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Hat Versay md. 28 + 1921-07-18 mektubu. 29 Ekim … |
| `d1923-de-cs-1` | almanya × cekoslovakya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | hat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Bohemya-Bavyera batı kesimi (1914 hattı). · kutu… |
| `d1923-de-cs-2` | almanya × cekoslovakya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | hat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Bohemya-Saksonya kuzey kesimi (1914 hattı). · ku… |
| `d1923-de-cs-3` | almanya × cekoslovakya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | hat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Üçlü nokta (AT-CS-DE) 13,84 D'ye kadar. · kutu T… |
| `d1923-de-cs-4` | almanya × cekoslovakya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Silezya + Hlučín (md. 83); Haatsch 1923-01-24'te… |
| `d1923-saar-de` | saar-havzasi-mandasi × almanya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Saar–Fransa kesimi D3-AVRUPA-BATI'nin (M-4056). … |
| `d1923-pl-su-1` | polonya × sovyet-rusya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Dvina–Polesya kuzey kesimi. · kutu TAHMİNİ (±10-… |
| `d1923-pl-su-2` | polonya × sovyet-rusya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Polesya kesimi. · kutu TAHMİNİ (±10-20 km); hat … |
| `d1923-pl-su-3` | polonya × sovyet-rusya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Volhynya-Zbruç kesimi (Zbruç ağzına kadar). · ku… |
| `d1923-pl-lt` | polonya × litvanya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): D (fiilî, koordinatsız). Vilnius sorunu: Müttefik k… |
| `d1923-pl-lv` | polonya × letonya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): D (fiilî, koordinatsız). 1923'te yalnız ayırma hatt… |
| `d1923-ee-lv` | estonya × letonya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Hukuken D (Tallents hakem kararı). Bugünkü çizgi… |
| `d1923-ee-su` | estonya × sovyet-rusya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. f: onay teatisi 1920-03-30 (Estonya DB, arama öz… |
| `d1923-lv-su` | letonya × sovyet-rusya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. f: imza günü (yürürlük günü BULUNAMADI). · kutu … |
| `d1923-fi-su-kuzey` | finlandiya × sovyet-rusya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Salla kesimi. Kutu 68,98 K'de kesildi: üstünde D… |
| `d1923-fi-su-petsamo` | finlandiya × sovyet-rusya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Petsamo koridorunun doğu kenarı (md. 4; Fin idar… |
| `d1923-fi-su-guney` | finlandiya × sovyet-rusya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Karelya kıstağı (Sestra) ve Ladoga Karelyası. · … |
| `d1923-at-hu-pinka` | avusturya-cumhuriyet × macaristan-naiplik | d_sinirlar_avrupa_orta.js | D-YOK/YOK | hat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Pinka vadisi köyleri 1922-09 MC kararı (🟡), Sze… |
| `d1923-at-hu-olmod` | avusturya-cumhuriyet × macaristan-naiplik | d_sinirlar_avrupa_orta.js | D-YOK/YOK | hat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Ólmod devri 1923 başı (🔴 birincil kaynak yok). … |
| `d1923-cs-pl-ro-stoh` | cekoslovakya × romanya-kralligi | d_sinirlar_avrupa_orta.js | D-YOK/YOK | hat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. ÇS-RO / PL-RO geçişi — kesim belirsizliği. · kut… |
| `d1923-pl-ro-1940` | polonya × romanya-kralligi | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E.  · kutu TAHMİNİ (±10-20 km); hat 1923 haritasınd… |
| `d1923-pl-ro-2` | polonya × romanya-kralligi | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Çeremoş–Dinyester kesimi (Zbruç ağzına kadar). ·… |
| `d1923-cs-pl-1` | cekoslovakya × polonya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E (Javorina kesimi C). Cieszyn/Orava/Spiş: Büyükelç… |
| `d1923-cs-pl-2` | cekoslovakya × polonya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): E. Rutenya–Galiçya Karpat sırtı. · kutu TAHMİNİ (±1… |
| `d1923-ro-yu-banat` | romanya-kralligi × yugoslavya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): C. 29 Ekim 1923'te kesinleşmemişti (takas SONRA imz… |
| `d1923-ro-yu-tuna` | romanya-kralligi × yugoslavya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | hat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): C.  · kutu TAHMİNİ (±10-20 km); hat 1923 haritasınd… |
| `d1923-al-yu-naum` | arnavutluk-bagimsiz × yugoslavya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): C. 1922-12-06 Arnavutluk'a verildi; 29 Ekim 1923'te… |
| `d1923-al-yu-vermos` | arnavutluk-bagimsiz × yugoslavya | d_sinirlar_avrupa_orta.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 29 Ekim 1923 sınıfı (A–F kademesi): C.  · kutu TAHMİNİ (±10-20 km); hat 1923 haritasınd… |
| `d1923-gr-shs-DEGISTI-gevgeli` | yunanistan × yugoslavya | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | kutu GeoNames Gevgelija çıpası etrafında TAHMİNİ (±5 km); taş 69'un koordinatı okunmadı… |
| `d1923-bg-ro-DEGISTI-dobruca` | bulgaristan-kralligi × romanya-kralligi | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 1923 hattı (Turtukaya üstü → Ekrene güneyi) METİN + 1:200.000 harita + köy listesiyle t… |
| `d1923-sscb-ir-DEGISTI-aras-talis` | sovyet-rusya × kacar | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter K6 · sınıf C (1828 metni var, yerinde işaret yok). f: 1921 Sovyet-İran antlaşm… |
| `d1923-sscb-ir-DEGISTI-hazar-serahs` | sovyet-rusya × kacar | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter K7 · sınıf C. Kutu TAHMİNİ · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda D Ç… |
| `d1923-ir-af-FIILI-orta` | kacar × afganistan | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter I1-O · sınıf FİİLİ: 1923'te ~250 mil tanımsız ve işaretsiz (Haştadan ovası, Mu… |
| `d1923-ir-hind-BILINMIYOR` | kacar × ingiliz-hindistani | d_sinirlar_komsu.js | D-YOK/YOK | hat-yok | Envanter I2: direk 1–11 (Kuhak–Gorani) 1896'da işaretli = D; güney (1871) ve kuzey (dir… |
| `d1923-iq-ir-DEGISTI-sattularap` | irak-kralligi × kacar | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda D ÇİZİLMEZ, A/B (ya da C) geçerli. Bugünk… |
| `d1923-fi-sy-DEGISTI` | filistin-mandasi × suriye-lubnan-mandasi | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter L7 Suriye kesimi: 1923'te D (işaretli) ama bugünkü çizgi o hattı göstermez · 1… |
| `d1923-iq-sy-DEGISTI` | irak-kralligi × suriye-lubnan-mandasi | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter L2 · sınıf C · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda D ÇİZİLMEZ, A/B (… |
| `d1923-iq-jo-FIILI` | irak-kralligi × urdun-emirligi | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter L3 · sınıf FİİLİ: 1923'te hukukî hat YOK · 1923 hattının koordinatı ELDE YOK ⇒… |
| `d1923-iq-necd-BILINMIYOR` | irak-kralligi × suud-ucuncu | d_sinirlar_komsu.js | D-YOK/YOK | hat-yok | Envanter L4 · sınıf C (ayrıntılı metin, işaretsiz) + Tarafsız Bölge · 1923 hattının koo… |
| `d1923-iq-kw-DEGISTI` | irak-kralligi × kuveyt | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter L5 · sınıf C. Irak–Kuveyt IBS'i BULUNAMADI · 1923 hattının koordinatı ELDE YOK… |
| `d1923-sy-jo-DEGISTI` | suriye-lubnan-mandasi × urdun-emirligi | d_sinirlar_komsu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | Envanter L8 · sınıf C. f: Şarkî Ürdün Emirliği künyesinin başı · 1923 hattının koordina… |
| `d1923-necid-kuveyt-tarafsiz-guney` | suud-ucuncu × kuveyt | d_sinirlar_ortadogu.js | D-YOK/YOK | sonradan-değişti/koordinat-yok | 1922 metni güney hattını ADLI NOKTALARLA veriyor (eş-Şak → Ayn el-Abd → Ras Mişab'ın ku… |

## 3 · Kapsam boşluğu

- 1923-10-29'da yaşayan devlet (künye `f <= G <= t` — pencere ucu GÜNÜ DAHİL, M-4656 düzeltmesi): **134** (f/t'si eksik künye: 0)
- D kayıtlarında geçip `devletler.js`te künyesi OLMAYAN taraf id: **13** → `belcika-kongo`, `el-salvador-cumhuriyeti`, `fransiz-bati-afrika`, `fransiz-ekvator-afrikasi`, `ingiliz-altin-kiyisi`, `ingiliz-hondurasi`, `ingiliz-kuzey-rodezya`, `ingiliz-nyasaland`, `ingiliz-siyera-leon`, `newfoundland-dominyonu`, `osmanli`, `portekiz-angola`, `portekiz-gine`
- **HİÇ D kaydı olmayan** yaşayan devlet: **42**

| devlet | ad |
|---|---|
| `oniki-ada-italyan` | İtalya'nın Oniki Ada İşgali |
| `umman` | Umman (Ya'rubî / Bû Saîd) Sultanlığı |
| `hicaz-kralligi` | Hicaz Krallığı (Şerif Hüseyin) |
| `habesistan` | Habeşistan İmparatorluğu |
| `cimma-sultanligi` | Cimma (Jimma) Sultanlığı |
| `somali` | Somali Sultanlıkları |
| `senusi` | Senûsî Tarikatı (Senûsiyye) |
| `bahreyn` | Bahreyn (Âl Halîfe Şeyhliği) |
| `katar` | Katar (Âl Sânî Şeyhliği) |
| `nguyen-hanedani` | Nguyễn Hanedanı (Vietnam) |
| `kamboc-kralligi` | Kamboçya Krallığı (Post-Angkor) |
| `brunei-sultanligi` | Brunei Sultanlığı |
| `buganda` | Buganda Krallığı |
| `umman-zengibar` | Umman-Zengibar Sultanlığı |
| `tonga-kralligi` | Tonga Krallığı |
| `yeni-zelanda` | Yeni Zelanda (İngiliz Kolonisi/Dominyonu) |
| `racput` | Racput Devletleri (Mevar, Mârvâr, Amber, Bikaner) |
| `surakarta` | Surakarta Sunanlığı |
| `yogyakarta` | Yogyakarta Sultanlığı |
| `manipur` | Manipûr Krallığı |
| `travankur` | Travankur Krallığı (Venâd) |
| `san-devletleri` | Şan Beylikleri (Sawbwa'lıklar) |
| `cohor-sultanligi` | Cohor (Johor) Sultanlığı |
| `tidore-sultanligi` | Tidore Sultanlığı (Moluk) |
| `izlanda` | İzlanda |
| `haydarabad-nizam` | Haydarabad Nizamlığı (Âsafcâh Hanedanı) |
| `bahavelpur` | Bahavelpur Emirliği (Dâvudpotralar) |
| `bharatpur-cat` | Bharatpur Krallığı (Jat) |
| `bhopal` | Bopal (Bhopal) Devleti |
| `cunagadh` | Cunagadh (Junagadh) Nevablığı |
| `tannu-tuva` | Tannu Tuva Halk Cumhuriyeti |
| `harezm-halk-cumhuriyeti` | Harezm Halk Sovyet Cumhuriyeti |
| `buhara-halk-cumhuriyeti` | Buhara Halk Sovyet Cumhuriyeti |
| `rif-cumhuriyeti` | Rif Cumhuriyeti (Abdülkerim el-Hattâbî) |
| `agadez-sultanligi` | Agadez (Aïr) Sultanlığı — Tuareg |
| `kesiri-sultanligi` | Kesîrî Sultanlığı (Hadramut iç kesimi) |
| `kuayti-sultanligi` | Kuaytî Sultanlığı (Şihr-Mükellâ, Hadramut kıyısı) |
| `meysur-racaligi` | Meysûr Racalığı (Wodeyar Hanedanı, İngiliz himayesinde) |
| `gvalyar` | Gvalyar Devleti (Sindiya Hanedanı) |
| `indor` | İndor Devleti (Holkar Hanedanı) |
| `kolhapur` | Kolhapur Devleti (Şivâcî'nin İkinci Kolu) |
| `baroda` | Baroda Devleti (Gaikvad Hanedanı) |

- O gün aktif D kaydı olmayan (ama başka dönemde kaydı olan) yaşayan devlet: **2**

| devlet | ad |
|---|---|
| `ingiliz-kuzey-amerika` | İngiliz Kuzey Amerika (Kanada) |
| `guney-afrika-birligi` | Güney Afrika Birliği |

- Taraflardan çıkan bilinen komşu çifti (tüm dönemler): **295**; ikisi de G günü yaşayıp **aktif kaydı olmayan** çift: **11**

  - abd × ingiliz-kuzey-amerika
  - belcika × ingiltere
  - danimarka × isvec
  - fransa-cumhuriyet × ingiliz-nijerya
  - fransa-cumhuriyet × liberya
  - guney-afrika-birligi × ingiliz-becuanaland
  - hollanda × ispanya
  - ingiltere × liberya
  - ingiltere × portekiz-mozambik
  - isvec × sovyet-rusya
  - norvec × sovyet-rusya

- Komşuluğun `devletler_harita.js`den ölçümü: **ölçülemedi** — dosya 56 MB ham poligon havuzudur (`window.DEVLET_PARCALAR`); devlet→parça eşlemesi `donemler.js` ekleminde, dosyanın kendisinden komşuluk çıkarılamaz.

## 4 · Hassasiyet (çizgili n=193 üzerinde)

`kesinlik_km` dağılımı — **müstakil bantlar** (medyan 1,5 · min 0.5 · maks 50 · değer taşıyan 163/193):

| bant (km) | adet | kümülatif (≤/>) |
|---|---|---|
| 0–0,5 | 2 | ≤0,5: 2 |
| 0,5–1 | 12 | ≤1: 14 |
| 1–2 | 103 | ≤2: 117 |
| 2–5 | 31 | ≤5: 148 |
| 5–10 | 10 | ≤10: 158 |
| >10 | 5 | >10: 5 |
| değer yok | 30 | — |

Değersizler: `d1923-ch-de-obersee`, `d1923-ch-at-bodensee`, `d1923-de-at`, `d1923-lt-lv`, `d1923-fi-su`, `d1923-ro-su`, `d1923-at-cs`, `d1923-at-cs-morava`, `d1923-at-hu-1`, `d1923-at-hu-2`, `d1923-at-hu-3`, `d1923-at-hu-4`, `d1922-at-hu-sopron`, `d1923-at-yu-stiriya`, `d1923-at-yu-karintiya`, `d1923-hu-cs-1`, `d1923-hu-cs-2`, `d1923-hu-cs-3`, `d1923-hu-cs-rutenya`, `d1923-hu-yu-slovenya`, `d1923-hu-yu-hirvatistan`, `d1923-hu-yu-sirbistan`, `d1923-hu-ro`, `d1923-cs-ro`, `d1923-pl-ro`, `d1923-al-yu-karadag-1`, `d1923-al-yu-karadag-2`, `d1923-al-yu-kosova`, `d1923-al-yu-makedonya-1`, `d1923-al-yu-makedonya-2`

### geometri_kaynagi dağılımı (kısa ad — tam dizge JSON'da)

| kaynak | adet |
|---|---|
| NE 10m admin-0 (bugünkü sınır) | 185 |
| IBS kökenli | 4 |
| antlaşma metninden (cetvel/meridyen/paralel) | 2 |
| NE 10m (diğer — nehir vb.) | 2 |

### 1 km'den kötü çizgili kayıtlar (149)

| id | kesinlik_km | taraflar | dosya |
|---|---|---|---|
| `d1923-oky-yenigine-guney-avustralya` | 50 | hollanda-dogu-hint × avustralya | d_sinirlar_okyanusya.js |
| `d1923-sudan-libya` | 20 | italya × ingiliz-sudani | d_sinirlar_afrika.js |
| `d1923-sudan-misir-kondominyum` | 20 | misir-kralligi × ingiliz-sudani | d_sinirlar_afrika.js |
| `d1923-ruanda-tanganyika` | 15 | ruanda-urundi-mandasi × ingiliz-tanganika-mandasi | d_sinirlar_afrika.js |
| `d1923-burundi-tanganyika` | 15 | ruanda-urundi-mandasi × ingiliz-tanganika-mandasi | d_sinirlar_afrika.js |
| `d1923-tr-sy-bati` | 10 | tbmm-turkiye × suriye-lubnan-mandasi | d_sinirlar.js |
| `d1923-angola-belcika-kongo` | 10 | portekiz-angola × belcika-kongo | d_sinirlar_afrika.js |
| `d1923-angola-guneybati-afrika` | 10 | portekiz-angola × guneybati-afrika-mandasi | d_sinirlar_afrika.js |
| `d1923-fransiz-gine-sierra-leone` | 8 | fransiz-bati-afrika × ingiliz-siyera-leon | d_sinirlar_afrika.js |
| `d1923-cad-libya` | 8 | italya × fransiz-ekvator-afrikasi | d_sinirlar_afrika.js |
| `d1923-altinkiyisi-fildisi-sahili` | 6 | fransiz-bati-afrika × ingiliz-altin-kiyisi | d_sinirlar_afrika.js |
| `d1923-kongo-fransiz-belcika` | 6 | belcika-kongo × fransiz-ekvator-afrikasi | d_sinirlar_afrika.js |
| `d1923-orta-afrika-cumhuriyeti-belcika-kongo` | 6 | fransiz-ekvator-afrikasi × belcika-kongo | d_sinirlar_afrika.js |
| `d1923-guneybati-afrika-kuzey-rodezya-caprivi-dogu` | 6 | guneybati-afrika-mandasi × ingiliz-kuzey-rodezya | d_sinirlar_afrika.js |
| `d1923-cad-anglo-misir-sudani-darfur` | 6 | ingiliz-sudani × fransiz-ekvator-afrikasi | d_sinirlar_afrika.js |
| `d1923-tr-iq-fiili` | 5 | tbmm-turkiye × irak-kralligi | d_sinirlar.js |
| `d1923-senegal-gambiya` | 5 | ingiltere × fransiz-bati-afrika | d_sinirlar_afrika.js |
| `d1923-nijerya-kamerun-milner-simon` | 5 | fransiz-kamerun-mandasi × ingiliz-nijerya | d_sinirlar_afrika.js |
| `d1923-kenya-tanganyika` | 5 | ingiliz-kenya-kolonisi × ingiliz-tanganika-mandasi | d_sinirlar_afrika.js |
| `d1923-becuanaland-guneybati-afrika-caprivi` | 5 | ingiliz-becuanaland × guneybati-afrika-mandasi | d_sinirlar_afrika.js |
| `d1923-hd-en-suayrimi-1` | 5 | hollanda-dogu-hint × ingiltere | d_sinirlar_asya.js |
| `d1923-hd-en-suayrimi-2` | 5 | hollanda-dogu-hint × ingiltere | d_sinirlar_asya.js |
| `d1923-hd-en-suayrimi-3` | 5 | hollanda-dogu-hint × ingiltere | d_sinirlar_asya.js |
| `d1923-hd-en-suayrimi-4` | 5 | hollanda-dogu-hint × ingiltere | d_sinirlar_asya.js |
| `d1923-hd-en-suayrimi-5` | 5 | hollanda-dogu-hint × ingiltere | d_sinirlar_asya.js |
| `d1923-hd-en-suayrimi-6` | 5 | hollanda-dogu-hint × ingiltere | d_sinirlar_asya.js |
| `d1923-hd-sw-suayrimi-1` | 5 | hollanda-dogu-hint × sarawak-brooke | d_sinirlar_asya.js |
| `d1923-hd-sw-suayrimi-2` | 5 | hollanda-dogu-hint × sarawak-brooke | d_sinirlar_asya.js |
| `d1923-filistin-urdun` | 5 | filistin-mandasi × urdun-emirligi | d_sinirlar_ortadogu.js |
| `d1923-libya-cezayir-gadames` | 5 | italya × cezayir-fransiz | d_sinirlar_ortadogu.js |
| `d1923-angola-kuzey-rodezya-barotseland` | 4 | portekiz-angola × ingiliz-kuzey-rodezya | d_sinirlar_afrika.js |
| `d1923-malavi-mozambik` | 4 | portekiz-mozambik × ingiliz-nyasaland | d_sinirlar_afrika.js |
| `d1923-guney-rodezya-mozambik` | 4 | portekiz-mozambik × ingiliz-guney-rodezya | d_sinirlar_afrika.js |
| `d1923-fransiz-gine-portekiz-gine` | 3 | fransiz-bati-afrika × portekiz-gine | d_sinirlar_afrika.js |
| `d1923-liberya-sierra-leone` | 3 | liberya × ingiliz-siyera-leon | d_sinirlar_afrika.js |
| `d1923-liberya-fildisi-sahili` | 3 | fransiz-bati-afrika × liberya | d_sinirlar_afrika.js |
| `d1923-si-fc-kara-1` | 3 | siyam-chakri × fransiz-cinhindi | d_sinirlar_asya.js |
| `d1923-si-fc-kara-2` | 3 | siyam-chakri × fransiz-cinhindi | d_sinirlar_asya.js |
| `d1923-si-fc-kambocya` | 3 | siyam-chakri × fransiz-cinhindi | d_sinirlar_asya.js |
| `d1923-si-ih-1` | 3 | siyam-chakri × ingiliz-hindistani | d_sinirlar_asya.js |
| `d1923-si-ih-2` | 3 | siyam-chakri × ingiliz-hindistani | d_sinirlar_asya.js |
| `d1923-si-ma` | 3 | siyam-chakri × ingiliz-malaya | d_sinirlar_asya.js |
| `d1923-be-de` | 3 | belcika × almanya | d_sinirlar_avrupa_bati.js |
| `d1923-gr-al` | 3 | yunanistan × arnavutluk-bagimsiz | d_sinirlar_komsu.js |
| `d1923-necid-kuveyt-yay` | 3 | kuveyt × suud-ucuncu | d_sinirlar_ortadogu.js |
| `d1923-necid-kuveyt-tarafsiz-bati` | 3 | suud-ucuncu × kuveyt | d_sinirlar_ortadogu.js |
| `d1923-tr-ir-1` | 2 | tbmm-turkiye × kacar | d_sinirlar.js |
| `d1923-tr-ir-2` | 2 | tbmm-turkiye × kacar | d_sinirlar.js |
| `d1923-tr-ir-3` | 2 | tbmm-turkiye × kacar | d_sinirlar.js |
| `d1923-tr-sy-dogu` | 2 | tbmm-turkiye × suriye-lubnan-mandasi | d_sinirlar.js |
| `d1923-ve-br` | 2 | venezuela-cumhuriyeti × brezilya-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-br-gy` | 2 | brezilya-cumhuriyeti × ingiliz-guyanasi | d_sinirlar_amerika.js |
| `d1923-br-sr` | 2 | brezilya-cumhuriyeti × hollanda-guyanasi | d_sinirlar_amerika.js |
| `d1923-ih-fc-mekong` | 2 | ingiliz-hindistani × fransiz-cinhindi | d_sinirlar_asya.js |
| `d1923-nl-de` | 2 | hollanda × almanya | d_sinirlar_avrupa_bati.js |
| `d1923-fr-lu-lorraine` | 2 | fransa-cumhuriyet × luksemburg | d_sinirlar_avrupa_bati.js |
| `d1923-fr-ch-dappes` | 2 | fransa-cumhuriyet × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-fr-ch-savoy-1` | 2 | fransa-cumhuriyet × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-fr-ch-savoy-2` | 2 | fransa-cumhuriyet × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-fr-ch-alsas` | 2 | fransa-cumhuriyet × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-fr-ch-leman` | 2 | fransa-cumhuriyet × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-it-at-yerde-1` | 2 | italya × avusturya-cumhuriyet | d_sinirlar_avrupa_bati.js |
| `d1923-it-at-yerde-2` | 2 | italya × avusturya-cumhuriyet | d_sinirlar_avrupa_bati.js |
| `d1923-it-at-yerde-3` | 2 | italya × avusturya-cumhuriyet | d_sinirlar_avrupa_bati.js |
| `d1923-gr-bg-meric` | 2 | yunanistan × bulgaristan-kralligi | d_sinirlar_komsu.js |
| `d1923-bg-ro-tuna` | 2 | bulgaristan-kralligi × romanya-kralligi | d_sinirlar_komsu.js |
| `d1923-ir-af-guney` | 2 | kacar × afganistan | d_sinirlar_komsu.js |
| `d1923-iq-ir` | 2 | irak-kralligi × kacar | d_sinirlar_komsu.js |
| `d1923-necid-kuveyt-bati` | 2 | suud-ucuncu × kuveyt | d_sinirlar_ortadogu.js |
| `d1923-libya-tunus` | 2 | italya × tunus-beyligi-fransiz | d_sinirlar_ortadogu.js |
| `d1923-tr-bg` | 1,5 | tbmm-turkiye × bulgaristan-kralligi | d_sinirlar.js |
| `d1923-tr-gr-1` | 1,5 | tbmm-turkiye × yunanistan | d_sinirlar.js |
| `d1923-tr-gr-2` | 1,5 | tbmm-turkiye × yunanistan | d_sinirlar.js |
| `d1923-tr-sscb-gurcistan` | 1,5 | tbmm-turkiye × sovyet-rusya | d_sinirlar.js |
| `d1923-tr-sscb-ermenistan` | 1,5 | tbmm-turkiye × sovyet-rusya | d_sinirlar.js |
| `d1923-tr-sscb-nahcivan` | 1,5 | tbmm-turkiye × sovyet-rusya | d_sinirlar.js |
| `d1923-ca-us-dogu` | 1,5 | kanada × abd | d_sinirlar_amerika.js |
| `d1923-ca-us-prairie` | 1,5 | kanada × abd | d_sinirlar_amerika.js |
| `d1923-ca-us-bati-1` | 1,5 | kanada × abd | d_sinirlar_amerika.js |
| `d1923-ca-us-bati-2` | 1,5 | kanada × abd | d_sinirlar_amerika.js |
| `d1923-us-mx-kaliforniya` | 1,5 | abd × meksika | d_sinirlar_amerika.js |
| `d1923-us-mx-gadsden` | 1,5 | abd × meksika | d_sinirlar_amerika.js |
| `d1923-mx-gt` | 1,5 | meksika × guatemala | d_sinirlar_amerika.js |
| `d1923-mx-bh` | 1,5 | meksika × ingiliz-hondurasi | d_sinirlar_amerika.js |
| `d1923-gt-bh` | 1,5 | guatemala × ingiliz-hondurasi | d_sinirlar_amerika.js |
| `d1923-hn-ni-bati` | 1,5 | honduras-cumhuriyeti × nikaragua-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-ni-cr-1` | 1,5 | nikaragua-cumhuriyeti × kosta-rika-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-ni-cr-2` | 1,5 | nikaragua-cumhuriyeti × kosta-rika-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-gy-ve` | 1,5 | ingiliz-guyanasi × venezuela-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-br-pe-tabatinga-apaporis` | 1,5 | brezilya-cumhuriyeti × peru-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-co-ec` | 1,5 | kolombiya-cumhuriyeti × ekvador-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-br-pe` | 1,5 | brezilya-cumhuriyeti × peru-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-bo-pe` | 1,5 | bolivya-cumhuriyeti × peru-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-bo-cl-1` | 1,5 | bolivya-cumhuriyeti × sili-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-bo-cl-2` | 1,5 | bolivya-cumhuriyeti × sili-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-bo-cl-3` | 1,5 | bolivya-cumhuriyeti × sili-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-br-py-1` | 1,5 | brezilya-cumhuriyeti × paraguay-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-br-py-2` | 1,5 | brezilya-cumhuriyeti × paraguay-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-ar-py-nehirler` | 1,5 | arjantin-cumhuriyeti × paraguay-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-ar-br` | 1,5 | arjantin-cumhuriyeti × brezilya-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-br-uy-1` | 1,5 | brezilya-cumhuriyeti × uruguay-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-br-uy-2` | 1,5 | brezilya-cumhuriyeti × uruguay-cumhuriyeti | d_sinirlar_amerika.js |
| `d1923-ih-cn-guney1-1` | 1,5 | ingiliz-hindistani × cin-cumhuriyeti | d_sinirlar_asya.js |
| `d1923-ih-cn-guney1-2` | 1,5 | ingiliz-hindistani × cin-cumhuriyeti | d_sinirlar_asya.js |
| `d1923-ih-cn-guney3` | 1,5 | ingiliz-hindistani × cin-cumhuriyeti | d_sinirlar_asya.js |
| `d1923-hd-pt-orta` | 1,5 | hollanda-dogu-hint × portekiz | d_sinirlar_asya.js |
| `d1923-hd-pt-oecussi` | 1,5 | hollanda-dogu-hint × portekiz | d_sinirlar_asya.js |
| `d1923-af-sscb-bati` | 1,5 | afganistan × sovyet-rusya | d_sinirlar_asya.js |
| `d1923-af-sscb-pamir` | 1,5 | afganistan × sovyet-rusya | d_sinirlar_asya.js |
| `d1923-fr-de` | 1,5 | fransa-cumhuriyet × almanya | d_sinirlar_avrupa_bati.js |
| `d1923-lu-de` | 1,5 | luksemburg × almanya | d_sinirlar_avrupa_bati.js |
| `d1923-be-nl-1` | 1,5 | belcika × hollanda | d_sinirlar_avrupa_bati.js |
| `d1923-be-nl-2` | 1,5 | belcika × hollanda | d_sinirlar_avrupa_bati.js |
| `d1923-be-fr` | 1,5 | belcika × fransa-cumhuriyet | d_sinirlar_avrupa_bati.js |
| `d1923-fr-lu` | 1,5 | fransa-cumhuriyet × luksemburg | d_sinirlar_avrupa_bati.js |
| `d1923-fr-ch-1` | 1,5 | fransa-cumhuriyet × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-fr-ch-2` | 1,5 | fransa-cumhuriyet × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-ch-de` | 1,5 | isvicre × almanya | d_sinirlar_avrupa_bati.js |
| `d1923-ch-at-1` | 1,5 | isvicre × avusturya-cumhuriyet | d_sinirlar_avrupa_bati.js |
| `d1923-ch-at-2` | 1,5 | isvicre × avusturya-cumhuriyet | d_sinirlar_avrupa_bati.js |
| `d1923-dk-de` | 1,5 | danimarka × almanya | d_sinirlar_avrupa_bati.js |
| `d1923-ie-gb` | 1,5 | irlanda-serbest-devlet × ingiltere | d_sinirlar_avrupa_bati.js |
| `d1923-no-se` | 1,5 | norvec × isvec | d_sinirlar_avrupa_bati.js |
| `d1923-fi-no-bati` | 1,5 | finlandiya × norvec | d_sinirlar_avrupa_bati.js |
| `d1923-fi-no-petsamo` | 1,5 | finlandiya × norvec | d_sinirlar_avrupa_bati.js |
| `d1923-fi-se` | 1,5 | finlandiya × isvec | d_sinirlar_avrupa_bati.js |
| `d1923-fr-it-1` | 1,5 | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js |
| `d1923-fr-it-2` | 1,5 | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js |
| `d1923-fr-it-3` | 1,5 | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js |
| `d1923-fr-it-4` | 1,5 | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js |
| `d1923-fr-it-5` | 1,5 | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js |
| `d1923-fr-it-6` | 1,5 | fransa-cumhuriyet × italya | d_sinirlar_avrupa_bati.js |
| `d1923-it-ch` | 1,5 | italya × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-it-ch-saintgermain` | 1,5 | italya × isvicre | d_sinirlar_avrupa_bati.js |
| `d1923-it-at-1` | 1,5 | italya × avusturya-cumhuriyet | d_sinirlar_avrupa_bati.js |
| `d1923-it-at-2` | 1,5 | italya × avusturya-cumhuriyet | d_sinirlar_avrupa_bati.js |
| `d1923-fr-es-bati` | 1,5 | fransa-cumhuriyet × ispanya | d_sinirlar_avrupa_bati.js |
| `d1923-fr-es-dogu` | 1,5 | fransa-cumhuriyet × ispanya | d_sinirlar_avrupa_bati.js |
| `d1923-es-pt-kuzey` | 1,5 | ispanya × portekiz | d_sinirlar_avrupa_bati.js |
| `d1923-es-pt-olivenza` | 1,5 | ispanya × portekiz | d_sinirlar_avrupa_bati.js |
| `d1923-gr-shs-1` | 1,5 | yunanistan × yugoslavya | d_sinirlar_komsu.js |
| `d1923-gr-shs-2` | 1,5 | yunanistan × yugoslavya | d_sinirlar_komsu.js |
| `d1923-gr-bg-bati` | 1,5 | yunanistan × bulgaristan-kralligi | d_sinirlar_komsu.js |
| `d1923-gr-bg-dogu` | 1,5 | yunanistan × bulgaristan-kralligi | d_sinirlar_komsu.js |
| `d1923-bg-shs-1` | 1,5 | bulgaristan-kralligi × yugoslavya | d_sinirlar_komsu.js |
| `d1923-bg-shs-2` | 1,5 | bulgaristan-kralligi × yugoslavya | d_sinirlar_komsu.js |
| `d1923-ir-af-kuzey` | 1,5 | kacar × afganistan | d_sinirlar_komsu.js |
| `d1923-fi-lb` | 1,5 | filistin-mandasi × suriye-lubnan-mandasi | d_sinirlar_komsu.js |
| `d1923-filistin-misir` | 1,5 | misir-kralligi × filistin-mandasi | d_sinirlar_ortadogu.js |


# ENKLAV-1103 — enklav / eksklav ADAYLARI (koşu 32)

Ölçen: LAB SALI · 4 Kasım 2026 gecesi · ağaç: worktree `lab-1103-enklav` @ taban `01d545bdb` (origin/main, kosu_damga no 32) · `coz-c` ile çözülen `devletler_harita.js` + `donemler.js` · alet `denetim/ENKLAV-1103/olc_enklav_1103.py` · üreteç `adaylar_yaz.py`.

## Evren

- Her devlet dönemi (`DEVLET_HARITA[].dnm`, OSMANLI = `DONEMLER[].o`) bir kesittir. Parçalar birleştirilir; en büyük bağlı bileşen ana gövde, ötekiler **kopuk**. Tâbiler yalnız komşu olarak sayılır.
- Kopuk parçanın 0,05° tampon halkası o günün öteki gövdeleriyle kesiştirilir: **ENKLAV** (halkanın ≥ %90'ı başka devlet, tek devlet ≥ %85) · **KARA-EKSKLAV** (≥ %10'u başka devlet) · **DAR-AYRIM** (kendi ana gövdesine ≤ ~5 km) · **ADA** (< %10, deniz ayırıyor).
- **Koridor:** parçadan kendinden büyük en yakın kardeş gövdeye en kısa doğru; doğru üstünde 9 örnek nokta, her birinin o günkü sahibi. Koridor yerleşimleri: doğrunun 0,25° yakınındaki noktalar ve o günkü sahipleri.
- Ardışık dönemlerde örtüşen parça tek aday sayılır; yıl aralığı ilk ve son dönemdir. Alan küresel km², en büyük kesitteki değer. İçindeki yerleşimler o kesitte, o günkü sahipleriyle.
- Yaklaşıklama: tampon düzlemsel derece; koridor düz çizgi (nehir/dağ yok).

## Sayılar

Ölçüm: {"donem": 11428, "cok_bilesen": 8951, "kopuk": 616644}.

| sınıf | ≥1 km² | ≥50 | ≥500 | ≥5.000 |
|---|---|---|---|---|
| ENKLAV | 278 | 121 | 97 | 59 |
| KARA-EKSKLAV | 4.501 | 1.892 | 1.575 | 1.171 |
| DAR-AYRIM | 7.555 | 1.875 | 292 | 64 |
| ADA | 23.816 | 6.013 | 1.863 | 931 |

KARA-EKSKLAV ≥ 50 km²: 1892; koridorunda yabancı kara ≥ 5/9 olan **858**, denizle/boşlukla ayrılan 1034 (çoğunlukla denizaşırı sömürge gövdesi — bu gece incelenmedi).
ADA ve DAR-AYRIM bu gece incelenmedi (koordinatör kararı); yalnız sayı.

`s.eksklav` taşıyan dönem: 247 (yerleşim 197). Devletlere göre: venedik 69, fransa-cumhuriyet 52, italya 37, ispanya 26, avusturya-hollandasi 17, kuzey-yuan 12, ingiltere 11, sardinya 4, almanya 2, fransa 2, mehdi 2, rusya 2, ingiliz-hindistani 2, kongo-serbest-devleti 2, ingiliz-malaya 2, sicilya-aragon 1, burgonya 1, timurlu 1, portekiz 1, hollanda 1.

## Hüküm özeti — 221 / 221 aday hükümlü

Güven: **OLCUM** = yalnız ölçülmüş veri olgusu (noktasızlık, kayıt alanı, gün çakışması) · **KAYNAKLI** = akademik kaynak okundu · **KAYNAK-GEREK** = tarihsel iddia teyitsiz, KASA uygulamadan önce kaynak sırasıyla teyit eder, gün uydurulmaz.

| kova | OLCUM | KAYNAKLI | KAYNAK-GEREK |
|---|---|---|---|
| GERCEK | 0 | 64 | 28 |
| BIRLESMELI | 10 | 1 | 1 |
| YAPAY-a | 32 | 0 | 3 |
| YAPAY-b | 9 | 2 | 2 |
| YAPAY-c | 16 | 19 | 12 |
| YAPAY-d | 6 | 3 | 0 |
| YAPAY-k | 5 | 0 | 0 |
| YAPAY-m | 5 | 2 | 1 |

Kovalar: YAPAY-a noktasız emilme · YAPAY-b ara yerleşimin dönemi eksik · YAPAY-c parçanın içindeki yerleşimin dönemi yanlış · YAPAY-d kısa ara (gün çakışması) · YAPAY-k aynı yapı iki devlet kimliğiyle yazılmış (ör. ingiltere / ingiliz-nijerya) · YAPAY-m motor (veriyle çözülmez) · BIRLESMELI ara yerleşime dönem yazılınca parça ana gövdeye bağlanır.

## ① ENKLAV (hepsi, ≥ 50 km²)

### E001 · Timurlu valiliği (`timurlu`) · 1383-01-01 → 1387-11-01 · 253.511 km²

- nokta [38.121, 47.198], en büyük kesit 1387-01-30 · kesit sayısı 4 · sınıf sayımı {'ENKLAV': 1, 'KARA-EKSKLAV': 3}
- çevre: celayirli 91%, karakoyunlu 23%, sirvansah 16%
- koridor: 267.6 km · muzafferi 9/9
- içindeki yerleşimler (74, s.eksklav 0): Senendec (Sine) (sahipsiz); Merîvan (timurlu); Bîcâr (sahipsiz); Bâne (sahipsiz); Ebher (Abhar) (sahipsiz); Sakkız (timurlu); Sultâniye (timurlu); Izirtu (sahipsiz) … +66
- koridor yerleşimleri: Tahran (muzafferi); Kazvin (muzafferi)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Timur Sultâniye'yi 1385'te aldı (Âdil Ağa'ya verdi), Tebriz 1386. 1383-84'te Sultâniye/Sakkız/Merîvan Celâyirli idi. 74 yerleşimin çoğu sahipsiz: alan noktasız emilmeyle 253 bin km²ye şişmiş. Koridordaki Tahran/Kazvin 'muzafferi' kaydı da şüpheli. [KAYNAK-1104 (kismen): 1384'te Sultan Ahmed Celâyir kardeşi Bayezid'i esir aldı (Irâk-ı Acem Celâyirli); Timur 'bu tarihten başlayarak' Kuzey İran'ı ele geçirdi. — "Timur’un bu tarihten başlayarak Kuzey İran ile Ermenistan’ı ... ele geçirmesi" · 1383 başı Timurlu başlangıcı TDV'ye göre erken (Kuzey İran fethi 1384'ten itibaren) — YAPAY-c destekli. Sultâniye için gün yok; DergiPark 1385.]
  - önerilen düzeltme: Sultâniye, Sakkız, Merîvan: timurlu f → 1385 (gün bulunamadı), öncesi celayirli. Tahran, Kazvin 1383-87 sahibi kaynakla sınansın. Parça içindeki sahipsiz noktalar (Senendec, Bîcâr, Bâne, Ebher…) Değişmez 1 açısından ayrıca bakılsın.
  - kaynak: TDV İslâm Ansiklopedisi, "Celâyirliler" (Muzaffer Ürekli), https://islamansiklopedisi.org.tr/celayirliler; + DergiPark article-file/3863407 (önceki) · önceki: DergiPark makalesi dergipark.org.tr/en/download/article-file/3863407 (Sultâniye 1385, Âdil Ağa) — alt ajan; Iranica 'Timur' çekilemedi

### E002 · Kutsal Roma / Almanya (`almanya`) · 1941-07-11 → 1944-06-28 · 169.996 km²

- nokta [53.401, 33.642], en büyük kesit 1941-11-03 · kesit sayısı 18 · sınıf sayımı {'ENKLAV': 6}
- çevre: sovyet-rusya 100%, ostland 4%
- koridor: 212.1 km · ostland 9/9
- içindeki yerleşimler (7, s.eksklav 0): Kursk (almanya); Orel (almanya); Gomel (Homel) (almanya); Smolensk (almanya); Mogilev (Mahilyow) (almanya); Vitebsk (almanya); Bryansk (almanya)
- koridor yerleşimleri: Minsk (ostland)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `KAYNAK-GEREK`
  - gerekçe: Smolensk–Orel–Kursk–Gomel Alman askerî idaresi ile Reichskommissariat Ostland bitişikti; kopukluk Ostland'ın ayrı devlet boyanmasından. Ayrıca çevre %100 'sovyet-rusya': Sol yaka Ukrayna noktalarında (Poltava, Çuguyev, Sumı, Yekaterinoslav, Kremençuk) 1941-43 Alman işgali yok (ölçüldü, bkz. E046).
  - önerilen düzeltme: Model kararı (KASA/koordinatör): Ostland–Almanya askerî idare bağlılığı beyan ya da tek tutucu. Veri: Sol yaka Ukrayna şehirlerine 1941-43 işgal dönemleri (E046 kovası).
  - kaynak: bulunamadı (Smolensk 16.07.1941, Orel 03.10.1941, Bryansk 06.10.1941 — teyitsiz)

### E003 · Britanya (`ingiltere`) · 1885-02-05 → 1923-10-29 · 133.909 km²

- nokta [19.511, 36.615], en büyük kesit 1891-05-14 · kesit sayısı 134 · sınıf sayımı {'ENKLAV': 12, 'KARA-EKSKLAV': 4}
- çevre: mehdi 88%, italya 14%, habesistan 12%
- koridor: 797.2 km · DENIZ/BOS 6/9, italya 2/9, fransa-cumhuriyet 1/9
- içindeki yerleşimler (9, s.eksklav 2): Bûr Sûdân (sahipsiz); Akīk (ingiltere); Tokar (ingiltere); Trinkitât (ingiltere); Sevâkin (ingiltere); Derûdeb (ingiltere); Hayyâ (ingiltere); Sinkat (ingiltere) … +1
- koridor yerleşimleri: Cibûtî (fransa-cumhuriyet); Tacûra (fransa-cumhuriyet); Dehlek-i Kebîr (sahipsiz); Dahlak (italya)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Sevâkin ve Kızıldeniz kıyısı 1885-98 Mehdîlere karşı İngiliz-Mısır elinde: gerçek enklav. 1898 Ümmüderman sonrası Sudan bütünüyle Anglo-Mısır; 1898-1923 kısmı YAPAY (Mehdî boyası sürüyor olabilir). Alan noktasız emilmeyle şişkin.
  - önerilen düzeltme: 1898-99 sonrası Sudan iç noktalarında mehdi dönemi biter mi sınansın; Sevâkin vb. s: tutarlılığı. Gün bulunamadı.
  - kaynak: bulunamadı (TDV 'Sevâkin' önerilir)

### E004 · Güney Afrika Birliği (`guney-afrika-birligi`) · 1915-07-09 → 1920-12-17 · 44.658 km²

- nokta [-22.502, 19.593], en büyük kesit 1915-07-09 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: ingiltere 90%
- koridor: 244.1 km · DENIZ/BOS 6/9, KENDI 3/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Güneybatı Afrika noktaları (Gobabis, Aranos) 1915-07-09 → 1920-12-17 'ingiltere'; aynı aralıkta komşu noktalar 'guney-afrika-birligi'. Bölge Güney Afrika Birliği askerî işgalinde/idaresindeydi (Khorab 9.7.1915); karışık sahiplik parçayı çevreletiyor. Parçada nokta yok.
  - önerilen düzeltme: Güneybatı Afrika'daki bütün noktalar: 1915-07-09 → 1920-12-17 d:'ingiltere' → 'guney-afrika-birligi' (Gobabis, Aranos ve aynı dönemi taşıyanlar). Kaynak ile teyit.
  - kaynak: veri ölçümü; tarih: Khorab teslimi 9.7.1915 (kaynak gerek: Cambridge History of Africa c.7)

### E005 · Afşâr Devleti (Nâdir Şah) (`afsar`) · 1747-06-20 → 1785-01-01 · 44.542 km²

- nokta [36.075, 58.329], en büyük kesit 1747-06-20 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: zend 94%
- koridor: 79.4 km · zend 9/9
- içindeki yerleşimler (4, s.eksklav 0): Nîşâbur (afsar); Sebzevâr (afsar); Meşhed (afsar); Tûs (afsar)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Nâdir sonrası Afşar hâkimiyeti Meşhed merkezli Horasan'a çekildi (Şâhruh 1748-96). Çekirdek gerçek; ama çevrenin %94 'zend' olması şüpheli — Zendler Horasan'a uzanmadı. [KAYNAK-1104 (tam): Horasan emîrleri Ekim 1748'de Nâdir Şah'ın torunu Şâhruh'u Meşhed'de hükümdar yaptı; İbrâhim Han Tebriz'de ayrı şahlık ilân etti (8 Aralık 1748). — "Horasan emîrleri Meşhed’de Nâdir Şah’ın hayatta kalan tek torunu Şâhruh Mirza’yı hükümdarlık makamına geçirdiler (Ekim 1748)" · Nâdir sonrası Afşar hâkimiyetinin Meşhed-Horasan'a çekilmesi teyitli: GERÇEK.]
  - önerilen düzeltme: Horasan çevresi (Tûs/Nîşâbur dışı) noktalarında 1747-85 zend dönemleri sınansın.
  - kaynak: TDV İslâm Ansiklopedisi, "Avşarlılar" (Faruk Sümer), https://islamansiklopedisi.org.tr/avsarlilar · önceki: Kyoto Üniv. deposu 2433/155132 (özet); Iranica 'Afsharids' çekilemedi

### E006 · İngiliz Hindistanı (Şirket ve Taç Dönemi) (`ingiliz-hindistani`) · 1803-02-18 → 1818-01-01 · 32.788 km²

- nokta [22.575, 71.725], en büyük kesit 1807-01-01 · kesit sayısı 10 · sınıf sayımı {'ENKLAV': 5, 'KARA-EKSKLAV': 3}
- çevre: maratha 97%, cunagadh 20%, racput 14%
- koridor: 8.0 km · DENIZ/BOS 9/9
- içindeki yerleşimler (5, s.eksklav 0): Valabhi (sahipsiz); Kanbâyet (Khambhat) (ingiliz-hindistani); Lothal (sahipsiz); Wadhwan (Vardhamana) (ingiliz-hindistani); Dholka (ingiliz-hindistani)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: 1803-18'de İngilizler Gucerat'ta Surat/Broach/Kaira'yı tuttu; Wadhwan (Kathiawar) ve Dholka doğrudan İngiliz değildi (Dholka 1817-18'e dek Peşva/Gaekwad).
  - önerilen düzeltme: Wadhwan, Dholka: 1818 öncesi ingiliz-hindistani dönemi kaldırılsın/düzeltilsin; gün bulunamadı.
  - kaynak: bulunamadı (Imperial Gazetteer of India 'Kaira', 'Ahmadabad' önerilir)

### E007 · Delhi Sultanlığı (`delhi-sultanligi`) · 1297-01-01 → 1304-01-01 · 32.733 km²

- nokta [22.573, 71.621], en büyük kesit 1303-08-26 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 1, 'ENKLAV': 2}
- çevre: racput 100%, vaghela 15%
- koridor: 15.1 km · racput 9/9
- içindeki yerleşimler (4, s.eksklav 0): Lothal (sahipsiz); Wadhwan (Vardhamana) (delhi-sultanligi); Dholka (delhi-sultanligi); Ahmedâbâd (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Delhi'nin Gucerat fethi 1299 (Ulug Han/Nusret Han), Vaghela 1304'te düştü; arada Racput toprakları. 1297 başlangıcı erken (YAPAY-c kısmı).
  - önerilen düzeltme: Wadhwan/Dholka delhi-sultanligi f 1297 → 1299 (gün bulunamadı).
  - kaynak: bulunamadı (TDV 'Alâeddin Halcî' önerilir)

### E008 · Racput Devletleri (`racput`) · 1311-01-01 → 1365-01-01 · 32.239 km²

- nokta [24.678, 75.147], en büyük kesit 1311-01-01 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: delhi-sultanligi 99%
- koridor: 137.9 km · delhi-sultanligi 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (1, s.eksklav 0): Çitor (Chittorgarh) (racput)
- koridor yerleşimleri: Codhpûr (Jodhpur) (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Çitor 1303'te Delhi'ye düştü; Hammîr 1321 ya da 1326'da geri aldı. 1311 başlangıcı erken; 1326 sonrası gerçek.
  - önerilen düzeltme: Çitor racput f 1311 → 1321/1326 (kaynak çelişkisi ic_not'a); öncesi delhi-sultanligi.
  - kaynak: yalnız Vikipedi ipucu — akademik bulunamadı

### E009 · Kırım Hanlığı (`kirim`) · 1777-01-01 → 1783-04-19 · 32.069 km²

- nokta [44.794, 43.226], en büyük kesit 1777-01-01 · kesit sayısı 5 · sınıf sayımı {'ENKLAV': 2}
- çevre: rusya 92%
- koridor: 8.0 km · DENIZ/BOS 9/9
- içindeki yerleşimler (1, s.eksklav 0): Stavropol–Kuma bozkırı (kirim)
- koridor yerleşimleri: Nizhny Arkhyz (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `KAYNAK-GEREK`
  - gerekçe: Tek nokta bir bölge adı ('Stavropol–Kuma bozkırı'); Stavropol 1777'de Rus kalesi. Hanlık 1777-83 Rus himayesinde; bölge noktasız emilme.
  - önerilen düzeltme: 'Stavropol–Kuma bozkırı' kirim 1777-83 dönemi kaynakla sınansın; yoksa kırp.
  - kaynak: bulunamadı (TDV 'Şâhin Giray' önerilir)

### E010 · Nogay Ordası (`nogay`) · 1556-01-01 → 1663-01-01 · 31.504 km²

- nokta [53.442, 45.056], en büyük kesit 1644-01-01 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 2, 'ENKLAV': 1}
- çevre: rusya 100%
- koridor: 26.0 km · rusya 9/9
- içindeki yerleşimler (1, s.eksklav 0): Penza (nogay)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Penza 1663'te Rus kalesi olarak kuruldu; 1556-1663 'Penza (nogay)' o devirde yoktu (merdiven ④).
  - önerilen düzeltme: Penza: kur 1663 (gün bulunamadı), nogay dönemleri silinsin; toprak komşu peteklere kalır.
  - kaynak: bulunamadı

### E011 · Moğulistan (Doğu Çağatay Hanlığı) (`mogulistan`) · 1485-01-01 → 1503-01-01 · 26.922 km²

- nokta [41.344, 68.826], en büyük kesit 1485-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: timurlu 92%
- koridor: 267.3 km · timurlu 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (1, s.eksklav 0): Taşkent (mogulistan)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Yûnus Han Taşkent'i 1484'te aldı, Mahmud Han 1503'e dek tuttu. Çekirdek gerçek; koridorun 8/9 'timurlu' boyanması şüpheli (arada Kazak/Özbek bozkırı). [KAYNAK-1104 (tam): Taşkent ve çevresi 890/1485'te Yûnus Han'ın idaresine girdi; oğlu Mahmud Han'dan 908/1503'te Şeybânî Han aldı. — "Taşkent ve çevresi Yûnus Han’ın idaresine girdi (890/1485)" · Moğolistan Taşkent'i 1485-1503 GERÇEK. Hicrî kural: 890 ∩ 1485 → ilk gün 1485-01-18 (atlas 1485-01-01, 17 gün erken; KASA ic_not ile 1485-01-18'e çekebilir). Koridor boyası ayrı.]
  - önerilen düzeltme: Taşkent mogulistan f 1485 → 1484 (gün bulunamadı); koridor bozkır noktaları sınansın.
  - kaynak: TDV İslâm Ansiklopedisi, "Taşkent" (Abdullah Muhammedcanov), https://islamansiklopedisi.org.tr/taskent · önceki: yalnız Vikipedi ipucu

### E012 · Kutsal Roma / Almanya (`almanya`) · 1941-10-03 → 1941-10-06 · 26.625 km²

- nokta [53.051, 36.545], en büyük kesit 1941-10-03 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: sovyet-rusya 100%
- koridor: 119.1 km · sovyet-rusya 9/9
- içindeki yerleşimler (1, s.eksklav 0): Orel (almanya)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `KAYNAK-GEREK`
  - gerekçe: Orel 03.10.1941'de Guderian'ın Sevsk–Kromı ekseniyle alındı; ileri uç Alman hattına bağlıydı. 3 günlük kopukluk koridorda (Sevsk, Dmitrovsk, Kromı) nokta olmamasından (koridor yerleşimi 0, ölçüldü). [alt ajan GERÇEK demişti; LAB SALI düzeltti]
  - önerilen düzeltme: Koridora nokta (Sevsk ya da Kromı) + 1941-10 Alman dönemi, kaynakla; yoksa beyanlı kabul.
  - kaynak: bulunamadı

### E013 · Bâbürlü (Timurlu-Hint) İmparatorluğu (`babur-imparatorlugu`) · 1727-01-01 → 1756-01-01 · 26.574 km²

- nokta [26.695, 74.413], en büyük kesit 1752-04-01 · kesit sayısı 14 · sınıf sayımı {'ENKLAV': 7}
- çevre: racput 100%
- koridor: 34.0 km · racput 9/9
- içindeki yerleşimler (1, s.eksklav 0): Ecmîr (Ajmer) (babur-imparatorlugu)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Ecmîr Bâbürlü sûbesi, Racput devletleri içinde; alan tek noktanın peteği (26.574 km²) — abartılı. [KAYNAK-1104 (celiski): Ekber'le başlayan İslâmî dönem 1721'de Racpût hâkimiyetinin tekrar gelmesine kadar sürdü; sonra yerini giderek Maratalar, 1818'de İngilizler aldı. — "1721’de Racpût hâkimiyetinin tekrar gelmesine kadar sürdü" · Atlas Ecmîr babur 1727-1756: TDV'ye göre 1721'den Racpût. Hüküm GERCEK → YAPAY-c; düzeltme: Ecmîr babur t → 1721-01-01, 1721 → Maratha geçişi racput (Maratha yılı: 1911 EB 1770, bkz. E015).] [hüküm GERCEK/GERCEK → YAPAY/YAPAY-c, kaynak üzerine]
  - önerilen düzeltme: Ecmîr babur t → 1721-01-01 (TDV Ecmîr: 1721'de Racpût hâkimiyeti); 1721 → Maratha yılı arası racput.
  - kaynak: TDV İslâm Ansiklopedisi, "Ecmîr" (Rıza Kurtuluş), https://islamansiklopedisi.org.tr/ecmir · önceki: bulunamadı (Imperial Gazetteer 'Ajmer-Merwara')

### E014 · İngiliz Hindistanı (Şirket ve Taç Dönemi) (`ingiliz-hindistani`) · 1818-06-25 → 1947-08-15 · 26.574 km²

- nokta [26.695, 74.413], en büyük kesit 1839-02-03 · kesit sayısı 28 · sınıf sayımı {'ENKLAV': 3}
- çevre: racput 100%
- koridor: 34.0 km · racput 9/9
- içindeki yerleşimler (1, s.eksklav 0): Ecmîr (Ajmer) (ingiliz-hindistani)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Ajmer-Merwara 1818-1947 İngiliz doğrudan idaresi, Rajputana içinde klasik enklav. Gerçek alan ~7.000 km²; petek 26.574 km² (noktasız emilme abartısı). [KAYNAK-1104 (kismen): Ajmer 1818'de Marathalar tarafindan 50.000 rupi karsiligi Ingilizlere devredildi; o tarihten beri 'unbroken peace'. — "unbroken peace and a stable government" · Sindhia adi gecmiyor; Merwara kapsami yok; 1818-06-25 gunu yok. 1911 kaynak.]
  - önerilen düzeltme: yok (alan abartısı için Merwara çevresine Racput noktası önerilir)
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Ajmere, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Ajmere · önceki: bulunamadı (Imperial Gazetteer 'Ajmer-Merwara')

### E015 · Maratha Konfederasyonu (`maratha`) · 1756-01-01 → 1818-06-03 · 26.574 km²

- nokta [26.695, 74.413], en büyük kesit 1761-01-14 · kesit sayısı 23 · sınıf sayımı {'ENKLAV': 9}
- çevre: racput 100%
- koridor: 122.1 km · racput 9/9
- içindeki yerleşimler (1, s.eksklav 0): Ecmîr (Ajmer) (maratha)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Ecmîr 1756'dan Sindia (Maratha) elinde, 1818'de İngiliz. 1787-91 Racput geri alışı sınanmalı. [KAYNAK-1104 (celiski): Ajmer 1770'te Marathalara devredildi (Mogollar tarafindan); 1770-1818 Mewar ve Marwar racalari tarafindan tekrar tekrar ele gecirilip Marathalarca geri alindi. — "the unhappy district" · Atlas f=1756-01-01 (Sindia elinde); kaynak 1770 diyor ve araya Racput isgalleri girdigini soyluyor (1787-91 sinavi ile uyumlu). 1818 bitis uyumlu. 1911 kaynak.] [hüküm GERCEK/GERCEK → GERCEK/GERCEK, kaynak üzerine]
  - önerilen düzeltme: Ecmîr maratha f 1756 → 1770 sınansın (1911 EB 'Ajmere': Bâbürlüler 1770'te Marathalara bıraktı; Racput-Maratha çekişmesi 1818'e dek); E013 bâbür t ucu aynı.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Ajmere, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Ajmere

### E016 · Haydarâbâd Nizamlığı (`haydarabad-nizam`) · 1853-05-21 → 1948-09-17 · 23.277 km²

- nokta [20.41, 75.242], en büyük kesit 1853-05-21 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: ingiliz-hindistani 100%
- koridor: 34.0 km · ingiliz-hindistani 9/9
- içindeki yerleşimler (2, s.eksklav 0): Evrengâbâd (haydarabad-nizam); Devagiri (Devletâbâd) (haydarabad-nizam)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `KAYNAK-GEREK`
  - gerekçe: 1853 antlaşmasıyla Berar İngilizlere atandı; Nizam'ın Marathwada'sı (Evrengâbâd) Nanded hattında ana gövdeye bitişikti. 34 km 'İngiliz koridoru' Berar peteğinin noktasız şişmesi.
  - önerilen düzeltme: Nanded/Hingoli'ye Nizam noktası (kaynakla).
  - kaynak: bulunamadı (Aitchison, Treaties)

### E017 · Emîr Abdülkādir Devleti (`abdulkadir`) · 1832-11-22 → 1841-05-30 · 22.032 km²

- nokta [35.239, 4.339], en büyük kesit 1841-01-01 · kesit sayısı 3 · sınıf sayımı {'ENKLAV': 2, 'KARA-EKSKLAV': 1}
- çevre: TABI 86%, fransa-cumhuriyet 26%
- koridor: 226.3 km · fransa-cumhuriyet 9/9
- içindeki yerleşimler (3, s.eksklav 2): Bû Sa'âde (abdulkadir); Mesîle (abdulkadir); Kal‘atü Benî Hammâd (sahipsiz)
- koridor yerleşimleri: Tâhert (Tiaret) (fransa-cumhuriyet)
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `KAYNAKLI`
  - gerekçe: Tâhert/Tagdemt 1841 Mayıs'ında Bugeaud yıkana dek Emîr'in iç merkeziydi; atlas Tâhert'i fransa yaparak Mesîle–Bû Saâde parçasını ayırıyor. [KAYNAK-1104 (kismen): Abdülkādir Tâfnâ (30 Mayıs 1837) sonrası idare merkezini Muasker'den Tagdempt'e taşıdı; Aralık 1840'ta vali olan Bugeaud'nun kuvvetleri Tagdempt, Muasker ve Tilimsân'ı işgal etti. — "Daha önce Muasker’de olan idare merkezini Tagdempt’e naklettikten sonra" · Tagdemt'in 1841'e dek Emîr'in merkezi olduğu teyitli: BİRLEŞMELİ hükmü destekli. Tagdemt'in düşüş günü TDV'de yok (Mayıs 1841 teyitsiz).]
  - önerilen düzeltme: Tâhert (Tiaret): fransa-cumhuriyet f → 1841-05 sonrası (gün bulunamadı), arası abdulkadir.
  - kaynak: TDV İslâm Ansiklopedisi, "Abdülkādir el-Cezâirî" (Ercüment Kuran), https://islamansiklopedisi.org.tr/abdulkadir-el-cezairi · önceki: TDV 'Abdülkādir el-Cezâirî' (tam metin çekilemedi)

### E018 · Âdilşâhî Sultanlığı (Bîcâpûr) (`bicapur`) · 1686-09-12 → 1686-09-22 · 22.014 km²

- nokta [18.432, 76.498], en büyük kesit 1686-09-12 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: babur-imparatorlugu 100%
- koridor: 377.6 km · babur-imparatorlugu 9/9
- içindeki yerleşimler (1, s.eksklav 0): Kalyani (Basavakalyan) (bicapur)
- koridor yerleşimleri: Kurnûl (Kurnool) (babur-imparatorlugu); Manyakheta (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Kalyani 1657'de Bâbürlülere geçti; 1686'da Bîcâpûr'un değildi. 10 günlük kesit. [KAYNAK-1104 (kismen): Evrengzîb 1657 başlarında Âdilşâhî ülkesine girip Bîder ve Kalyan'ı ele geçirdi, sonra barış imzaladı; Bîcâpûr 1686'da Bâbürlülere teslim oldu. — "önce Bîder, sonra da Kalyan şehirlerini ele geçirdi" · Kalyani'nin 1657'de Bâbürlüye geçtiği teyitli: YAPAY-c destekli. 1657 barışında iade edilip edilmediği TDV'de yok.]
  - önerilen düzeltme: Kalyani (Basavakalyan) bicapur dönemi 1657 sonrası kaldırılsın (gün bulunamadı).
  - kaynak: TDV İslâm Ansiklopedisi, "Âdilşâhîler" (Erdoğan Merçil), https://islamansiklopedisi.org.tr/adilsahiler · önceki: yalnız Vikipedi ipucu

### E019 · Umman-Zengibar Sultanlığı (`umman-zengibar`) · 1893-01-01 → 1893-03-04 · 20.413 km²

- nokta [-3.905, 26.308], en büyük kesit 1893-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: kongo-serbest-devleti 91%
- koridor: 882.9 km · DENIZ/BOS 4/9, kongo-serbest-devleti 3/9, alman-dogu-afrikasi 2/9
- içindeki yerleşimler (1, s.eksklav 0): Nyangve (Nyangwe) (umman-zengibar)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Nyangwe'yi Svahili-Arap tüccar beylikleri tuttu; Zengibar sultanlığı orada fiilî hâkim değildi. 883 km koridor.
  - önerilen düzeltme: Nyangwe 1893 öncesi sahibi kaynakla; Kongo Serbest Devleti 04.03.1893 (teyitsiz).
  - kaynak: bulunamadı

### E020 · Reichskommissariat Ostland (`ostland`) · 1944-07-27 → 1944-08-01 · 18.450 km²

- nokta [54.997, 23.441], en büyük kesit 1944-07-27 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: sovyet-rusya 87%, almanya 13%
- koridor: 44.6 km · sovyet-rusya 9/9
- içindeki yerleşimler (2, s.eksklav 0): Kaunas (ostland); Litvanya (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Bagration sonrası Sovyetler 27.07.1944'te Şiauliai'ye ulaşıp Litvanya cebini Letonya'dan kesti; Kaunas 01.08.1944. 5 günlük cephe anı.
  - önerilen düzeltme: yok
  - kaynak: bulunamadı

### E021 · Uzak Doğu Cumhuriyeti (Çita Cumhuriyeti) (`uzak-dogu-cumhuriyeti`) · 1920-11-10 → 1922-11-14 · 16.466 km²

- nokta [51.803, 113.962], en büyük kesit 1920-11-10 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: sovyet-rusya 100%
- koridor: 210.4 km · sovyet-rusya 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (1, s.eksklav 0): Çita (uzak-dogu-cumhuriyeti)
- koridor yerleşimleri: Irgen (sovyet-rusya)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `KAYNAK-GEREK`
  - gerekçe: Ölçüldü: Irgen (Zabaykalye, Çita yakını) 1654-1917 rusya, 1917-11-07 → 1991 kesintisiz sovyet-rusya; Uzak Doğu Cumhuriyeti dönemi yok. Çita (UDC) tek nokta; UDC Zabaykalye'yi ve Amur/Primorye'yi kapsayan bitişik bir tampon devletti, 16 bin km² 'enklav' çevre noktaların UDC'ye yazılmamasından.
  - önerilen düzeltme: Irgen ve Zabaykalye/Amur noktalarına 1920-1922 UDC dönemi (gün bulunamadı; kuruluş ve Çita başkent geçişi kaynakla sınansın).
  - kaynak: bulunamadı (TDV kapsamıyor; akademik UDC kaynağı gerek)

### E022 · Timurlu valiliği (`timurlu`) · 1398-12-17 → 1399-01-01 · 15.417 km²

- nokta [28.355, 77.012], en büyük kesit 1398-12-17 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: delhi-sultanligi 92%, racput 8%
- koridor: 789.9 km · delhi-sultanligi 7/9, DENIZ/BOS 2/9
- içindeki yerleşimler (1, s.eksklav 1): Delhi (timurlu)
- koridor yerleşimleri: Hisâr-ı Fîrûze (delhi-sultanligi); Harappa (sahipsiz); Dera İsmail Han (sahipsiz)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Delhi 1398-12-17 → 1399-01-01 timurlu: Timur'un Delhi'yi işgali kısa askerî işgaldir; çevre Delhi Sultanlığı (Hisâr-ı Fîrûze ölçüldü: delhi-sultanligi 1354-1526). Gerçek enklav (14 gün). Harappa, Dera İsmail Han koridorda sahipsiz (alakasız nokta). [KAYNAK-1104 (kismen): Timur Receb 800'de (Mart-Nisan 1398) Semerkant'tan çıktı, Delhi yakınında Tuğluk hükümdarını yendi, Delhi'yi yağmaladı, 29 Nisan 1399'da Semerkant'a döndü. — "Delhi’de büyük bir yağma ve katliamda bulundu." · Kısa askerî işgal GERÇEK. Delhi'ye giriş ve çıkış günü TDV'de yok (1398-12-17 → 1399-01-01 teyitsiz).]
  - önerilen düzeltme: Gün/ay teyidi kaynakla; yapısal düzeltme gerekmez.
  - kaynak: TDV İslâm Ansiklopedisi, "Timur" (İsmail Aka), https://islamansiklopedisi.org.tr/timur · önceki: bulunamadı (Iranica 'Timur' 403 verdi)

### E023 · Ming Hanedanı (`ming-hanedani`) · 1382-01-06 → 1382-01-15 · 13.572 km²

- nokta [25.484, 100.461], en büyük kesit 1382-01-06 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: kuzey-yuan 91%
- koridor: 109.8 km · kuzey-yuan 9/9
- içindeki yerleşimler (1, s.eksklav 0): Dali (ming-hanedani)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Dali 1382-01-06'dan ming, çevresi (Chuxiong, Yuanjiang, Tonghai) 1382-01-15'e dek kuzey-yuan. Dali'nin (Duan ailesi) Ming'e düşüşü Kunming'den sonradır; Dali'nin ming başlangıcı Kunming'le aynı güne yazılmış görünüyor.
  - önerilen düzeltme: Dali ming f 1382-01-06 → Dali'nin fethi (1382 baharı; gün bulunamadı), arası kuzey-yuan/Duan. Kaynak: Cambridge History of China c.7 ya da Ming Shilu.
  - kaynak: veri ölçümü; tarih kaynak gerek

### E024 · Milliyetçi İspanya (Franco, Burgos) (`ispanya-milliyetci`) · 1936-07-18 → 1936-08-14 · 13.470 km²

- nokta [37.575, -5.9], en büyük kesit 1936-07-19 · kesit sayısı 3 · sınıf sayımı {'ENKLAV': 2}
- çevre: ispanya 99%
- koridor: 161.7 km · ispanya 9/9
- içindeki yerleşimler (2, s.eksklav 0): Sevilla (ispanya-milliyetci); Ilipa (Alcalá del Río) (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Sevilla 1936-07-18 → 1939-04-01 ispanya-milliyetci; Seville darbe günü Queipo de Llano'nun elinde, Cumhuriyet toprağıyla çevrili, Afrika Ordusu bağlantısı Ağustos ortasında kuruldu. Atlas tutarlı; alan şişkin (Cádiz/Córdoba/Granada milliyetçi tutuldu, bu noktalar ayrıca sınanmalı). Ilipa (Alcalá del Río) kayıtta bit 1281: dönemsiz (ölçüldü).
  - önerilen düzeltme: Cádiz, Córdoba, Granada, Huelva milliyetçi dönemleri 1936-07 sonrası sınansın; Ilipa'ya dönem ya da kaldırma.
  - kaynak: bulunamadı (TDV kapsamaz; akademik İç Savaş kaynağı gerek)

### E025 · Habeşistan (`habesistan`) · 1936-06-01 → 1941-11-30 · 12.499 km²

- nokta [7.808, 36.942], en büyük kesit 1936-06-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: italya 100%
- koridor: 454.5 km · italya 9/9
- içindeki yerleşimler (1, s.eksklav 0): Cimma (Jiren) (habesistan)
- koridor yerleşimleri: Addis (italyan-dogu-afrikasi); Ankober (italyan-dogu-afrikasi); Debre Berhan (italyan-dogu-afrikasi)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Cimma kaydı 1933-01-01 → 1974-09-12 'habesistan' kesintisiz; İtalyan Doğu Afrikası dönemi (1936-41) yazılmamış. Koridor noktaları (Addis, Ankober, Debre Berhan) italyan-dogu-afrikasi. Habeşistan 1936-06-01 → 1941 'enklavı' bu eksiklikten.
  - önerilen düzeltme: Cimma'ya 1936-1941 italyan-dogu-afrikasi (ya da fiilî işgal durumu) dönemi; günler kaynakla (gün bulunamadı).
  - kaynak: veri ölçümü

### E026 · Güney Afrika Birliği (`guney-afrika-birligi`) · 1915-07-09 → 1920-12-17 · 12.484 km²

- nokta [-17.979, 23.477], en büyük kesit 1915-07-09 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: ingiltere 96%, portekiz 0%
- koridor: 115.6 km · DENIZ/BOS 9/9
- içindeki yerleşimler (1, s.eksklav 0): Katima Mulilo (ingiltere)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Caprivi (Katima Mulilo 'ingiltere') çevresinde noktasız yüz Güney Afrika noktasına emiliyor; parçanın tek noktası Katima Mulilo başka sahipli. E004 ile aynı karışık sahiplik.
  - önerilen düzeltme: E004 düzeltmesi + Caprivi'nin 1915-20 sahibi (Bechuanaland idaresi) kaynakla sınansın.
  - kaynak: veri ölçümü

### E027 · Timurlu valiliği (`timurlu`) · 1393-08-29 → 1394-01-01 · 12.177 km²

- nokta [33.48, 44.883], en büyük kesit 1393-08-29 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: celayirli 100%
- koridor: 64.3 km · celayirli 9/9
- içindeki yerleşimler (5, s.eksklav 0): Sippar (Tell Abu Habbah) (sahipsiz); Ktesiphon (sahipsiz); Seleukeia (sahipsiz); Bağdat (timurlu); Eşnunna (Tell Asmar) (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Bağdat 1393-08-29 → 1394-01-01 timurlu: Timur Bağdat'ı alınca Celâyirli Ahmed kaçtı, şehir garnizonu çevre Celâyirli toprağında kaldı; 4 aylık gerçek enklav. 12 bin km² Sippar, Ktesiphon, Seleukeia, Eşnunna dönemsiz (ölçüldü: YOK) noktalarının Bağdat peteğine emilmesinden şişkin. [KAYNAK-1104 (kismen): Bağdat Timur tarafından 795'te (1393) işgal edildi; Ahmed Celâyir Timur Semerkant'a dönünce Memlük yardımıyla Bağdat'ı geri aldı. — "Bağdat Timur tarafından 795’te (1393) ve 803’te (1401) olmak üzere iki defa işgal edildi." · 1393 kısa Timurlu işgali teyitli: GERÇEK. Ahmed'in dönüş yılı TDV'de yok (1394-01-01 teyitsiz).]
  - önerilen düzeltme: Gün 1393-08-29 ve 1394-01-01 teyit. Antik noktalar dönemsiz bırakılmış, gizlensin.
  - kaynak: TDV İslâm Ansiklopedisi, "Bağdat", https://islamansiklopedisi.org.tr/bagdat; "Celâyirliler" (Muzaffer Ürekli), https://islamansiklopedisi.org.tr/celayirliler · önceki: TDV celayirliler atlas kaydından yalnız 1393 yılı; gün bulunamadı

### E028 · Timurlu valiliği (`timurlu`) · 1401-01-01 → 1405-01-01 · 12.177 km²

- nokta [33.48, 44.883], en büyük kesit 1401-01-01 · kesit sayısı 6 · sınıf sayımı {'ENKLAV': 2}
- çevre: celayirli 100%
- koridor: 64.3 km · celayirli 9/9
- içindeki yerleşimler (5, s.eksklav 0): Sippar (Tell Abu Habbah) (sahipsiz); Ktesiphon (sahipsiz); Seleukeia (sahipsiz); Bağdat (timurlu); Eşnunna (Tell Asmar) (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Bağdat 1401-01-01 → 1405-01-01 timurlu: başlangıç 1 Ocak yıl-hassasiyeti; Timur Bağdat'ı Temmuz 1401'de aldı (teyitsiz), yani ilk 6 ay sahte enklav. Alan şişkini E027 ile aynı. [KAYNAK-1104 (kismen): İkinci Timur işgali 803 (1401); Ahmed Celâyir 1405'te Bağdat'a döndü. — "Ahmed Celâyir 1405’te Bağdat’a dönerek Timur’un yıktığı duvarları ... tamir ettirmeye çalıştı" · TDV yalnız hicrî yıl verir: 803 = 1400-08-22 → 1401-08-11; ∩ 1401 → ilk gün 1401-01-01. Atlas başlangıcı CLAUDE.md hicrî kuralıyla uyumlu çıkıyor; 'Temmuz 1401' iddiası TDV'de yok. YAPAY-c hükmü ikinci kaynakla (gün) sınanmadan uygulanmamalı; 1405 bitişi teyitli.]
  - önerilen düzeltme: Bağdat timurlu f → 1401-07 (gün bulunamadı); t 1405-01-01 teyit.
  - kaynak: TDV İslâm Ansiklopedisi, "Bağdat", https://islamansiklopedisi.org.tr/bagdat · önceki: bulunamadı (Iranica 'Jalayerids' 403)

### E029 · Karakoyunlular (`karakoyunlu`) · 1408-04-13 → 1410-01-01 · 11.834 km²

- nokta [36.301, 48.813], en büyük kesit 1408-04-13 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: timurlu 88%, gilan-kiya 12%
- koridor: 12.0 km · timurlu 9/9
- içindeki yerleşimler (3, s.eksklav 0): Ebher (Abhar) (sahipsiz); Sultâniye (karakoyunlu); Şemîrân Kalesi (sahipsiz)
- koridor yerleşimleri: Deylem (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: 50 km içinde yalnız Sultâniye (karakoyunlu 1408-04-13 → 1469) var; Ebher (Abhar) ve Şemîrân Kalesi 'bit 1281' dönemsiz, Deylem sahipsiz; Zencan (51 km) 1383-1410 timurlu, Kazvin (107 km) 1387-1452 timurlu. 11,8 bin km² kopuk parça Sultâniye'nin noktasız emilmesinden. Sultâniye'nin 1408 Karakoyunlu sahibi kaynaksız (Zencan 1410'a dek timurlu).
  - önerilen düzeltme: Ebher (Abhar) gerçek ortaçağ şehridir: dönem yazılsın; Sultâniye 1408-04-13 ve Zencan 1410 kaynakla hizalansın.
  - kaynak: veri ölçümü; TDV 'sultaniyye' slug'ı Memlük askerî birliği maddesi çıktı (yanlış madde), Sultâniye şehri maddesi bulunamadı

### E030 · Karakoyunlular (`karakoyunlu`) · 1469-01-01 → 1469-04-01 · 11.834 km²

- nokta [36.301, 48.813], en büyük kesit 1469-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: akkoyunlu 88%, gilan-kiya 12%
- koridor: 12.0 km · akkoyunlu 9/9
- içindeki yerleşimler (3, s.eksklav 0): Ebher (Abhar) (sahipsiz); Sultâniye (karakoyunlu); Şemîrân Kalesi (sahipsiz)
- koridor yerleşimleri: Deylem (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `OLCUM`
  - gerekçe: Ölçüldü: Zencan ve Kazvin 1469-01-01'de akkoyunlu olurken Sultâniye 1469-04-01'e kadar karakoyunlu; 3 aylık kopukluk, ayrıca E029'daki noktasız emilme.
  - önerilen düzeltme: Sultâniye karakoyunlu t'si Zencan/Kazvin ile hizalansın (gün bulunamadı); Ebher'e dönem.
  - kaynak: veri ölçümü

### E031 · Safevî İran (`safevi`) · 1501-07-01 → 1503-01-01 · 11.809 km²

- nokta [36.301, 48.813], en büyük kesit 1501-07-01 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: akkoyunlu 88%, gilan-kiya 12%
- koridor: 12.0 km · akkoyunlu 9/9
- içindeki yerleşimler (3, s.eksklav 0): Ebher (Abhar) (sahipsiz); Sultâniye (safevi); Şemîrân Kalesi (sahipsiz)
- koridor yerleşimleri: Deylem (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Sultâniye safevi 1501-07-01'den; Zencan ve Kazvin 1503-01-01'e dek akkoyunlu (Zencan kaydı TDV safeviler alıntılı: 909/1503). 17 aylık kopukluk; Sultâniye f=1501-07-01 şüpheli. Noktasız emilme E029 ile aynı.
  - önerilen düzeltme: Sultâniye safevi f kaynakla (1503 civarı olabilir); gün bulunamadı.
  - kaynak: veri ölçümü; TDV zencan atlas kaydında alıntılı

### E032 · Britanya (`ingiltere`) · 1918-12-17 → 1920-07-07 · 9.752 km²

- nokta [41.343, 41.851], en büyük kesit 1918-12-24 · kesit sayısı 5 · sınıf sayımı {'ENKLAV': 1, 'KARA-EKSKLAV': 1}
- çevre: OSMANLI 100%, gurcistan-demokratik-cumhuriyeti 48%, ermenistan-demokratik-cumhuriyeti 11%
- koridor: 362.3 km · OSMANLI 9/9
- içindeki yerleşimler (9, s.eksklav 0): Artvin (ingiltere); Şavşat (ingiltere); Saylıca (gurcistan-demokratik-cumhuriyeti); Borçka (ingiltere); Sarp (ingiltere); Murvaneti (ingiltere); Makhalak’auri (ingiltere); Batum (ingiltere) … +1
- koridor yerleşimleri: Malikiye (Derik) (fransa-cumhuriyet); Cibri (Güçlü) (OSMANLI); Cizre (OSMANLI); Siirt (OSMANLI); Bitlis (OSMANLI)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: TDV Batum: 'şehir İngilizler tarafından işgal edildi (24 Aralık 1918)'; 'Temmuz 1920'de çekildiklerinde Batum'u da boşalttılar ve buraya Gürcistan hükümeti el koydu'. Batum bölgesi Osmanlı toprağıyla İngiliz Irak/Musul işgalinden kopuk gerçek dış parça. Ölçüldü: Artvin, Şavşat, Borçka f=1918-12-17, TDV'nin Batum işgal günü 24 Aralık'tan 7 gün önce; Saylıca 1918-04-03 → 1919-04-20 dönemsiz.
  - önerilen düzeltme: Artvin/Şavşat/Borçka ingiltere f için kaynak aranmalı; Batum t 1920-07-07 TDV 'Temmuz 1920' ile uyumlu (gün bulunamadı).
  - kaynak: TDV batum (islamansiklopedisi.org.tr/batum)

### E033 · Safevî İran (`safevi`) · 1516-03-26 → 1516-05-01 · 9.201 km²

- nokta [38.925, 39.785], en büyük kesit 1516-03-26 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 86%, memluk 13%
- koridor: 10.3 km · OSMANLI 9/9
- içindeki yerleşimler (5, s.eksklav 0): Arsamosata (sahipsiz); Palu (safevi); Çemişgezek (safevi); Tunceli (Kalan) (sahipsiz); Hozat (sahipsiz)
- koridor yerleşimleri: Çayönü Tepesi (sahipsiz); Ergani (sahipsiz)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Palu ve Çemişgezek safevi 1507 → 1516-05-01, Osmanlı Diyarbakır çevresinde; Osmanlı fethi (Bıyıklı Mehmed Paşa; TDV palu: 'Harput, Çermik, Ergani, Palu ve Sincar ele geçirildi', tarihsiz). Kopukluk gerçek olabilir; parça Tunceli/Arsamosata/Hozat dönemsiz (ölçüldü) noktalarını emiyor, alan şişkin.
  - önerilen düzeltme: Palu ve Çemişgezek geçiş günleri (gün bulunamadı); dönemsiz noktalar gizlensin.
  - kaynak: TDV palu: 'Palu … ele geçirildi' (tarihsiz)

### E034 · Serbedârîler (`serbedariler`) · 1381-01-01 → 1381-04-01 · 8.782 km²

- nokta [36.082, 59.876], en büyük kesit 1381-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: timurlu 100%
- koridor: 256.0 km · timurlu 9/9
- içindeki yerleşimler (1, s.eksklav 0): Meşhed (serbedariler)
- koridor yerleşimleri: Nîşâbur (timurlu); Sebzevâr (timurlu)
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `OLCUM`
  - gerekçe: Ölçüldü: Nîşâbur ve Sebzevâr timurlu f=1381-01-01, Meşhed serbedariler → 1381-04-01; aynı yıl içinde 3 aylık çakışma (Meşhed çevresi yeni timurlu).
  - önerilen düzeltme: Meşhed t ile Nîşâbur/Sebzevâr f aynı güne hizalansın (Serbedâr teslimi 1381; gün bulunamadı).
  - kaynak: veri ölçümü; Iranica 'Sarbedarids' 403

### E035 · Sırbistan Krallığı (Nemanjić Hanedanı) (`sirbistan-nemanjic`) · 1345-01-01 → 1378-01-01 · 8.742 km²

- nokta [42.855, 21.84], en büyük kesit 1345-01-01 · kesit sayısı 4 · sınıf sayımı {'ENKLAV': 1}
- çevre: sirbistan 88%, bulgar-carligi 12%
- koridor: 96.3 km · sirbistan 9/9
- içindeki yerleşimler (5, s.eksklav 0): Balkanlar (sahipsiz); İvranye (Vranje) (sirbistan-nemanjic); Leskofça (Leskovac) (sirbistan-nemanjic); Kurşunlu (Kuršumlija) (sirbistan-nemanjic); Ürküp (Prokuplje) (sirbistan-nemanjic)
- koridor yerleşimleri: Mitroviça (Mitrovicë) (sahipsiz)
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: Ölçüldü: İvranye, Leskofça, Kurşunlu, Ürküp 'sirbistan-nemanjic' (1281-1402); Niş, Şehirköy, Priştine, Alacahisar 'sirbistan'. Aynı Sırp devleti iki kimlikte; sirbistan-nemanjic künyesi harita:'sirbistan' diyor, renk aynı, kopukluk yalnız dnm ayrımında. Balkanlar sahipsiz.
  - önerilen düzeltme: Aynı devlete tek kimlik ya da evrende birleştirme (ölçüt düzeltmesi); veri değişimi gerekmez.
  - kaynak: veri ölçümü (devletler.js sirbistan-nemanjic harita: sirbistan)

### E036 · Safevî İran (`safevi`) · 1516-08-24 → 1517-05-01 · 8.282 km²

- nokta [37.424, 40.986], en büyük kesit 1516-08-24 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 100%
- koridor: 102.6 km · OSMANLI 9/9
- içindeki yerleşimler (4, s.eksklav 0): Mardin (safevi); Mezopotamya (sahipsiz); Midyat (safevi); Hasankeyf (safevi)
- koridor yerleşimleri: Siirt (OSMANLI); Bitlis (OSMANLI)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: TDV Mardin: 'Safevî kuvvetleri kaleye çekildi (Ekim 1515)'; Bıyıklı Mehmed Paşa 'burayı 1516 sonlarında (veya Mayıs 1517) zaptetti'. Mardin Safevî elinde kaldı; atlas 1507 → 1517-05-01 TDV'nin ikinci seçeneğiyle uyumlu. Midyat, Hasankeyf aynı sürede safevi (kaynaksız); Mezopotamya/Batman dönemsiz (ölçüldü).
  - önerilen düzeltme: Gün bulunamadı (TDV 'veya' diyor: ic_not'a iki seçenek); Midyat, Hasankeyf için ayrı kaynak.
  - kaynak: TDV mardin (islamansiklopedisi.org.tr/mardin)

### E037 · Macaristan Krallığı (Habsburg Tacı) (`macaristan-habsburg`) · 1685-10-12 → 1686-09-02 · 8.100 km²

- nokta [47.1, 20.188], en büyük kesit 1685-10-15 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: OSMANLI 100%
- koridor: 27.9 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Solnok (Szolnok) (macaristan-habsburg)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Solnok (Szolnok) macaristan-habsburg f=1685-10-12; çevre Osmanlı. Szolnok'un 1685 sonunda Habsburg eline geçip Buda'ya (1686) dek ayrı kalması muhtemel ama teyitsiz; tek noktalı parça.
  - önerilen düzeltme: Gün 1685-10-12 ve t=1686-09-02 sınansın.
  - kaynak: bulunamadı

### E038 · Karakoyunlular (`karakoyunlu`) · 1450-01-01 → 1457-01-01 · 7.620 km²

- nokta [39.779, 38.925], en büyük kesit 1450-01-01 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: akkoyunlu 86%, OSMANLI 11%, memluk 3%
- koridor: 34.8 km · akkoyunlu 9/9
- içindeki yerleşimler (3, s.eksklav 0): Kemah (karakoyunlu); Erzincan (karakoyunlu); Refahiye (karakoyunlu)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: TDV Erzincan: 'Uzun Hasan Karakoyunlular'ı yenerek Erzincan'ı yeniden Akkoyunlu hâkimiyetine aldı (1457)'; 1422-1457 Akkoyunlu-Karakoyunlu arasında el değiştirdi. Atlas 1450 → 1457 karakoyunlu Erzincan/Kemah/Refahiye ile uyumlu; 1450 başlangıcı TDV'de yok.
  - önerilen düzeltme: 1450-01-01 başlangıç yıl-teyitsiz; 1457 günü bulunamadı.
  - kaynak: TDV erzincan (islamansiklopedisi.org.tr/erzincan)

### E039 · Rodezya ve Nyasaland Federasyonu (Orta Afrika Federasyonu) (`rodezya-nyasaland-federasyonu`) · 1953-08-01 → 1963-12-31 · 6.658 km²

- nokta [-19.917, 28.743], en büyük kesit 1953-08-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: ingiltere 100%
- koridor: 271.4 km · ingiltere 9/9
- içindeki yerleşimler (2, s.eksklav 0): Bulavayo (ingiltere); Bulawayo (rodezya-nyasaland-federasyonu)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Bulavayo (ingiltere 1893-1965) ve Bulawayo (federasyon 1953-1963) aynı yerin çift kaydı (-20.15, 28.58). Federasyon yalnız Bulawayo'ya yazılı; Federasyon Güney/Kuzey Rodezya ve Nyasaland'ı kapsıyordu. Tek noktalı sahte enklav.
  - önerilen düzeltme: Bulawayo mükerrerini birleştir; federasyon dönemini bütün üyelere yaz.
  - kaynak: veri ölçümü

### E040 · Yemen İmamlığı (`yemen`) · 1547-01-01 → 1547-02-01 · 6.593 km²

- nokta [13.478, 44.1], en büyük kesit 1547-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 100%
- koridor: 79.8 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Taiz (yemen)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `KAYNAKLI`
  - gerekçe: Taiz yemen 1517-04-15 → 1547-02-01; çevre Osmanlı. Ölçüldü: 1547-02-01 → 1629-01-01 Taiz'in dönem kaydı hiç yok. 1 aylık parça Osmanlı fetih günü teyitsizliğinden. [KAYNAK-1104 (tam): Taiz Zilhicce 953'te (Şubat 1547) Üveys Paşa tarafından zaptedildi; Rebîülâhir 975'te (Ekim 1567) İmam Mutahhar'ın eline geçti; Osman Paşa Receb 976'da (Ocak 1569) geri aldı; Osmanlılar 1038'de (1629) Taiz'i terk etti. — "Taiz Zilhicce 953’te (Şubat 1547) zaptedildi." · YAPAY-d teyitli: Taiz'in 1547-02-01 → 1629 dönemi yok. Düzeltme: OSMANLI 1547-02-01 → 1567-10-05 (Rebîülâhir 975 ∩ Ekim 1567 ilk günü); zeydî imamlık 1567-10-05 → 1569-01-01 (Receb 976 ∩ Ocak 1569); OSMANLI 1569-01-01 → 1629-01-01. İmamlık kimliği devletler.js'ten seçilmeli.]
  - önerilen düzeltme: Taiz 1547 sonrası Osmanlı dönemi eklensin; fetih günü kaynakla (gün bulunamadı).
  - kaynak: TDV İslâm Ansiklopedisi, "Taiz" (İdris Bostan), https://islamansiklopedisi.org.tr/taiz · önceki: bulunamadı (TDV 'yemen' önerilir)

### E041 · Yemen İmamlığı (`yemen`) · 1629-01-01 → 1635-01-01 · 6.593 km²

- nokta [13.478, 44.1], en büyük kesit 1629-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 100%
- koridor: 79.8 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Taiz (yemen)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Taiz yemen f=1629-01-01 (yıl hassasiyeti); Osmanlı Sana'yı 1629'da kaybetti, Yemen'den 1635'te çıktı; Taiz'in Zeydî elinde, çevrenin Osmanlı kalması muhtemel gerçek ama teyitsiz. 1547-1629 Taiz sahipsiz (ölçüldü). [KAYNAK-1104 (tam): Osmanlılar 1038'de (1629) Yemen'deki hâkimiyetlerini San'a'daki Kāsımî yönetimine bıraktıkları için Taiz'i de terk ettiler. — "Osmanlılar, 1038’de (1629) ... Taiz’i de terkettiler." · Taiz 1629'dan Kāsımî: GERÇEK. 1038 = 1628-08-31 → 1629-08-20; ∩ 1629 → 1629-01-01 atlasla uyumlu.]
  - önerilen düzeltme: Taiz 1629 başlangıcı ve Osmanlı çıkışı kaynakla; 1547-1629 dolgusu.
  - kaynak: TDV İslâm Ansiklopedisi, "Taiz" (İdris Bostan), https://islamansiklopedisi.org.tr/taiz

### E042 · Osmanlı (`OSMANLI`) · 1920-04-23 → 1923-10-29 · 6.553 km²

- nokta [38.254, 41.057], en büyük kesit 1920-04-23 · kesit sayısı 3 · sınıf sayımı {'ENKLAV': 2}
- çevre: tbmm-turkiye 98%
- koridor: 364.7 km · tbmm-turkiye 9/9
- içindeki yerleşimler (4, s.eksklav 0): Batman (sahipsiz); Meyyâfârikīn (OSMANLI); Erzen (sahipsiz); Hallan Çemi (sahipsiz)
- koridor yerleşimleri: Maraş (tbmm-turkiye); Nevalı Çori (sahipsiz); Samosata (Samsat) (sahipsiz); Behisni (Besni) (tbmm-turkiye); Siverek (tbmm-turkiye); Hısn-ı Mansûr (Adıyaman) (tbmm-turkiye); Kâhta (tbmm-turkiye); Diyarbakır (tbmm-turkiye)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Meyyâfârikīn (Silvan) d: 1515-01-01 → 1923-10-29 (OSMANLI); s: TBMM dönemi yok; Maraş, Siverek, Diyarbakır tbmm-turkiye 1920-04-23'ten. Batman, Erzen, Hallan Çemi dönemsiz. Osmanlı 'enklavı' Silvan d: bitişinin 1920-04-23'te kesilmemesinden.
  - önerilen düzeltme: Meyyâfârikīn d t → 1920-04-23 ve s: tbmm-turkiye 1920-04-23 → 1923-10-29; dönemsiz noktalara bit.
  - kaynak: veri ölçümü

### E043 · Celâyirliler (`celayirli`) · 1340-01-01 → 1353-01-01 · 6.383 km²

- nokta [37.825, 42.05], en büyük kesit 1340-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: ilhanli 86%, eyyubi-hisnikeyfa 13%, artuklu 1%
- koridor: 21.3 km · ilhanli 9/9
- içindeki yerleşimler (1, s.eksklav 0): Siirt (celayirli)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Siirt kaydındaki TDV alıntısı: 'Celâyirliler'in hâkimiyeti altına giren Siirt, Timur istilâsını da gördükten sonra' — Celâyirli sahipliği var ama 1340 yılı yok (künye f'sinden). Ölçüldü: çevre Meyyâfârikīn ilhanli 1264-1353, Siirt celayirli 1340-1394: 13 yıllık çakışma. [LAB SALI: güven KAYNAK-GEREK'e indirildi — kaynak sayfası okunmadı]
  - önerilen düzeltme: Siirt celayirli f yıl-teyitsiz; ilhanli/celayirli geçişi komşularla hizalansın (gün bulunamadı).
  - kaynak: TDV siirt (atlas kaydındaki alıntı; sayfayı okumadım)

### E044 · Macaristan (`macaristan`) · 1526-11-10 → 1526-12-17 · 6.094 km²

- nokta [46.747, 21.174], en büyük kesit 1526-11-10 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: TABI 100%
- koridor: 11.4 km · TABI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Gyula (Göle) (macaristan)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Solnok 1526-11-10 → 1541 v: Zapolya vasal krallığı (TABI), Gyula ise 1526-12-17'ye dek s: macaristan, v: yalnız 1530-01-01'den. Çevre TABI 100%, Gyula aynı Macaristan: aynı Zapolya alanı iki katmanda tutarsız.
  - önerilen düzeltme: Gyula'ya Mohaç sonrası v: Zapolya dönemi (1526-11-10) ya da s tutarlılığı; gün kaynakla.
  - kaynak: veri ölçümü

### E045 · Macaristan Krallığı (Habsburg Tacı) (`macaristan-habsburg`) · 1526-12-17 → 1530-01-01 · 6.094 km²

- nokta [46.747, 21.174], en büyük kesit 1527-05-01 · kesit sayısı 5 · sınıf sayımı {'ENKLAV': 3}
- çevre: TABI 100%
- koridor: 32.9 km · TABI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Gyula (Göle) (macaristan-habsburg)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Gyula macaristan-habsburg 1526-12-17 → 1530-01-01; çevre TABI (Zapolya) 100%. Habsburg 17 Aralık 1526 Ferdinand seçimi; Gyula'nın Ferdinand tarafında kalması teyitsiz (Zapolya doğu Macaristan'ı tuttu). Solnok ile tutarsız, E044 ile aynı kova.
  - önerilen düzeltme: Gyula dönemi kaynakla (Zapolya mı Ferdinand mı); gün bulunamadı.
  - kaynak: bulunamadı

### E046 · Kutsal Roma / Almanya (`almanya`) · 1941-10-25 → 1943-02-16 · 6.040 km²

- nokta [49.817, 35.85], en büyük kesit 1941-10-25 · kesit sayısı 3 · sınıf sayımı {'ENKLAV': 3}
- çevre: sovyet-rusya 100%
- koridor: 205.9 km · sovyet-rusya 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: Harkov'un güneybatısındaki noktasız yüz (49,82K 35,85D) Harkov peteğine emiliyor; Harkov 1941-10 → 1943-02 almanya, çevresi ise sovyet-rusya: Poltava, Çuguyev, Sumı, İzyum, Yekaterinoslav, Kremençuk, Lubnı, Bahmut 1917-11-07 → 1991-08-24 kesintisiz sovyet-rusya (ölçüldü). Bu şehirlerin Alman işgali yazılmamış.
  - önerilen düzeltme: Poltava, Çuguyev, Sumı, İzyum, Yekaterinoslav (Dnipro), Kremençuk, Lubnı, Bahmut: 1941-43 Alman işgali dönemleri (günler kaynakla; ör. Poltava 1941-09-18 → 1943-09-23 teyitsiz). Ek: yetim yüze nokta (Merefa ya da Valki).
  - kaynak: veri ölçümü; günler için Encyclopedia of Ukraine (CIUS) önerilir

### E047 · Kutsal Roma / Almanya (`almanya`) · 1943-03-15 → 1943-08-23 · 6.040 km²

- nokta [49.817, 35.85], en büyük kesit 1943-03-15 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: sovyet-rusya 100%
- koridor: 214.3 km · sovyet-rusya 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: E046 ile aynı yetim yüz, Harkov'un 1943-03-15 → 08-23 ikinci Alman dönemi.
  - önerilen düzeltme: E046 kovası.
  - kaynak: veri ölçümü

### E048 · Güney Rusya Silahlı Kuvvetleri ve Hükûmeti (Denikin → Wrangel) (`guney-rusya-beyaz`) · 1919-08-01 → 1919-12-11 · 6.040 km²

- nokta [49.817, 35.85], en büyük kesit 1919-08-01 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: sovyet-rusya 100%
- koridor: 415.4 km · sovyet-rusya 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: Aynı yetim yüz; Harkov 1919-06-25 → 12-11 guney-rusya-beyaz, çevre (Poltava, Çuguyev…) sovyet-rusya. Denikin ordusu 1919 yazında Poltava ve Yekaterinoslav'ı da aldı.
  - önerilen düzeltme: Sol yaka Ukrayna noktalarına 1919 Güney Rusya Silahlı Kuvvetleri dönemi (günler kaynakla).
  - kaynak: veri ölçümü; günler kaynak gerek

### E049 · Ukrayna Devleti (Skoropadski Hetmanlığı) (`ukrayna-devleti-1918`) · 1918-04-29 → 1918-12-14 · 6.040 km²

- nokta [49.817, 35.85], en büyük kesit 1918-12-01 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: sovyet-rusya 100%
- koridor: 146.9 km · sovyet-rusya 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: Aynı yetim yüz; Harkov 1918-04-29 → 12-14 ukrayna-devleti-1918 (Hetmanlık), çevredeki Poltava, Çuguyev, Yekaterinoslav, Kremençuk, Lubnı ise sovyet-rusya. Hetmanlık bu şehirleri de kapsıyordu.
  - önerilen düzeltme: Sol yaka Ukrayna noktalarına Harkov'un 1918 zinciri (ukrayna-halk-cumhuriyeti 04-19→04-29, ukrayna-devleti-1918 04-29→12-14, ukrayna-halk-cumhuriyeti 12-14→1919-01-03), her şehir kendi günüyle kaynakla.
  - kaynak: veri ölçümü; Encyclopedia of Ukraine 'Hetman government' önerilir

### E050 · Ukrayna Halk Cumhuriyeti (`ukrayna-halk-cumhuriyeti`) · 1918-04-19 → 1918-04-29 · 6.040 km²

- nokta [49.817, 35.85], en büyük kesit 1918-04-19 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: sovyet-rusya 100%
- koridor: 146.9 km · sovyet-rusya 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: E049 ile aynı — Ukrayna Halk Cumhuriyeti 1918-04-19 → 04-29.
  - önerilen düzeltme: E049 kovası.
  - kaynak: veri ölçümü

### E051 · Ukrayna Halk Cumhuriyeti (`ukrayna-halk-cumhuriyeti`) · 1918-12-14 → 1919-01-03 · 6.040 km²

- nokta [49.817, 35.85], en büyük kesit 1918-12-14 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: sovyet-rusya 100%
- koridor: 146.9 km · sovyet-rusya 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: E049 ile aynı — UHC 1918-12-14 → 1919-01-03.
  - önerilen düzeltme: E049 kovası.
  - kaynak: veri ölçümü

### E052 · Transkafkasya (Federasyon) (`transkafkasya`) · 1918-02-24 → 1918-02-28 · 5.766 km²

- nokta [40.556, 39.42], en büyük kesit 1918-02-24 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 100%
- koridor: 16.5 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Gümüşhane (transkafkasya)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `OLCUM`
  - gerekçe: Gümüşhane transkafkasya → 1918-02-28 (TDV gumushane, kayıtta). Çevresi 02-24'te Osmanlı'ya dönmüş: 4 günlük cep, komşu noktaların kurtuluş günleri ile TDV günü arasındaki farktan.
  - önerilen düzeltme: Gümüşhane–Trabzon–Kelkit hattındaki komşuların 1918 kurtuluş günleri TDV ile karşılaştırılsın; TDV esastır, çelişki ic_not'a.
  - kaynak: TDV gumushane (kayıtta, 28 Şubat 1918)

### E053 · Papalık (`papalik`) · 1155-01-01 → 1809-05-17 · 5.706 km²

- nokta [41.39, 14.778], en büyük kesit 1540-01-01 · kesit sayısı 19 · sınıf sayımı {'KARA-EKSKLAV': 2, 'ENKLAV': 5}
- çevre: napoli 100%, sicilya-kralligi 62%
- koridor: 72.3 km · napoli 9/9
- içindeki yerleşimler (2, s.eksklav 0): Benevento (papalik); Bovianum (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Benevento 1051-07-05 → 1861-03-17 papalik (benevento-papalik 1000-1051): Napoli Krallığı içinde Papalık eksklavı gerçektir. Bovianum 'bit 1281' dönemsiz (ölçüldü). Not: Benevento 1806-1815 Talleyrand prensliği idi ve 1860 sonrası İtalya; atlas kaydı 1861-03-17'ye dek papalik. [KAYNAK-1104 (kismen): Benevento 1051'de Papalige gecti, 1077'de tam denetim; 1806 Napoleon Talleyrand icin prenslik yapti; Viyana Kongresi Pius VII'ye iade etti; 1860'ta Garibaldi Italya Krallıgi'na bagli il merkezi ilan etti. — "la restituì a Pio VII" · Gun yok. Treccani bitis olarak 1860 veriyor; atlas t=1861-03-17 (Krallik ilani) ile 1860 arasinda fark olabilir.]
  - önerilen düzeltme: 1806-1815 Benevento prensliği ve 1860 ilhakı kaynakla; Bovianum'a dönem ya da gizleme.
  - kaynak: Treccani, Benevento, https://www.treccani.it/enciclopedia/benevento/

### E054 · Papalık (`papalik`) · 1814-04-16 → 1861-03-17 · 5.706 km²

- nokta [41.39, 14.778], en büyük kesit 1814-04-16 · kesit sayısı 8 · sınıf sayımı {'ENKLAV': 1}
- çevre: napoli 100%
- koridor: 71.3 km · napoli 9/9
- içindeki yerleşimler (2, s.eksklav 0): Benevento (papalik); Bovianum (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: E053'ün 1814-04-16 → 1861-03-17 devamı: Benevento papalik, çevre napoli 100%. Gerçek eksklav (1860 Ekim plebisiti öncesi). [KAYNAK-1104 (kismen): 1815 Viyana Kongresi Benevento'yu Kilise'ye iade etti (gun yok); 1860'ta Garibaldi Italya Krallıgi il merkezi ilan etti. — "la restituì a Pio VII" · 16 Nisan 1814 ve 17 Mart 1861 sayfada yok; Treccani 1860 diyor.]
  - önerilen düzeltme: Benevento papalik t kaynakla (1860); 1806-1815 aralığı ayrıca.
  - kaynak: Treccani, Benevento, https://www.treccani.it/enciclopedia/benevento/

### E055 · Osmanlı (`OSMANLI`) · 1448-01-01 → 1460-01-01 · 5.661 km²

- nokta [44.05, 18.288], en büyük kesit 1459-03-07 · kesit sayısı 18 · sınıf sayımı {'ENKLAV': 7}
- çevre: bosna 98%, macaristan 2%
- koridor: 96.1 km · bosna 9/9
- içindeki yerleşimler (4, s.eksklav 0): Pale (sahipsiz); Saraybosna (OSMANLI); Visoko (OSMANLI); Vitez (sahipsiz)
- koridor yerleşimleri: Foça (Foča) (bosna)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: TDV Saraybosna: 'Hodidjed vilâyeti Saray ovası ile beraber 852’de (1448) tamamen Osmanlı idaresi altına girdi'; 'Bosna’nın tamamen fethedilmesiyle (1463) … Bosna sancağı kurulunca'. 1448-1463 Saray ovası Osmanlı, çevre Bosna Krallığı: gerçek enklav. Ölçüldü: Saraybosna d f=1458-01-01 TDV'nin 1448'inden geç; Visoko d f=1448 TDV'de geçmiyor (madde Visoko'yu anmıyor). Pale, Vitez dönemsiz.
  - önerilen düzeltme: Saraybosna d f → 1448 (gün bulunamadı); Visoko'nun 1448 sahibi için ayrı kaynak.
  - kaynak: TDV saraybosna (islamansiklopedisi.org.tr/saraybosna)

### E056 · Osmanlı (`OSMANLI`) · 1913-05-30 → 1913-09-29 · 5.621 km²

- nokta [41.719, 25.274], en büyük kesit 1913-07-21 · kesit sayısı 4 · sınıf sayımı {'ENKLAV': 3}
- çevre: bulgaristan-kralligi 100%
- koridor: 13.6 km · bulgaristan-kralligi 9/9
- içindeki yerleşimler (1, s.eksklav 0): Kırcaali (OSMANLI)
- koridor yerleşimleri: Çirmen (bulgaristan-kralligi); Mustafapaşa (Svilengrad) (OSMANLI)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: TDV Kırcaali: Kırcaali bir süre 'Garbî Trakya Hükûmet-i Müstakillesi'ne bağlıydı, 'savaşlardan sonra Bulgaristan Krallığı’na geçti' (Ağustos 1913 II. Balkan Savaşı sırasında). Ölçüldü: Kırcaali OSMANLI d 1482 → 1913-09-29, sonra bulgaristan-kralligi; Garbî Trakya dönemi yok. Osmanlı 'enklavı' bu kaydın Osmanlı olarak sürmesinden; Mustafapaşa (Svilengrad) Osmanlı Temmuz 1913 sonrası için ayrı sınanmalı.
  - önerilen düzeltme: Kırcaali d t → Bulgar işgali (1912 sonu, kaynakla) ve Garbî Trakya Hükûmeti (Ağustos-Ekim 1913) dönemi; gün bulunamadı.
  - kaynak: TDV kircaali (islamansiklopedisi.org.tr/kircaali): Osmanlı geri alışı ve 29 Eylül 1913 antlaşması metinde yok

### E057 · Britanya (`ingiltere`) · 1436-04-13 → 1439-01-01 · 5.446 km²

- nokta [48.875, 3.127], en büyük kesit 1436-04-13 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: fransa 90%, burgonya 10%
- koridor: 62.0 km · fransa 9/9
- içindeki yerleşimler (1, s.eksklav 0): Meaux (ingiltere)
- koridor yerleşimleri: Paris (fransa); Senlis (fransa)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Meaux ingiltere 1422-01-01 → 1439-01-01; çevre fransa (Paris 1436'da Fransız eline geçti, 13 Nisan 1436 teyitsiz) ve burgonya. Meaux İngiliz garnizonu olarak Fransız toprağı içinde: gerçek eksklav. Bitiş 1439 yıl-hassasiyeti. Melun, Soissons dönemsiz (ölçüldü). [KAYNAK-1104 (kismen): Paris 13 Nisan 1436'da kurtarıldı. — "liberation of Paris on 13 April 1436" · Parça başlangıcı 1436-04-13 teyitli; Meaux'nun Fransızlarca geri alınışı (1439) okunmadı.]
  - önerilen düzeltme: Meaux t gün (1439) ve Paris f 1436 gün kaynakla; Melun/Soissons dönemleri.
  - kaynak: Oxford Dictionary of the Renaissance, "Dunois" — EMRELİC okuması (Oxford Reference)

### E058 · Lehistan-Litvanya (`lehistan`) · 1649-08-18 → 1654-01-18 · 5.438 km²

- nokta [49.141, 33.654], en büyük kesit 1649-08-18 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: kazak-hetmanligi 92%, zaporojye 8%
- koridor: 294.2 km · kazak-hetmanligi 9/9
- içindeki yerleşimler (1, s.eksklav 0): Kremençuk (lehistan)
- koridor yerleşimleri: Lubnı (kazak-hetmanligi)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Encyclopedia of Ukraine (Kremenchuk): 'a Cossack company center in Chyhyryn regiment (1648–61, 1663–7)'; sonra Myrhorod alayı (1667-1765); 'A Polish castle was built there in 1596'. Ölçüldü: Kremençuk lehistan 1571 → 1654-01-18, çevre kazak-hetmanligi 92%. 1648'den sonra Lehistan'a yazılması yanlış.
  - önerilen düzeltme: Kremençuk kazak-hetmanligi 1648 → 1765 (gün bulunamadı); lehistan t → 1648.
  - kaynak: Encyclopedia of Ukraine, Kremenchuk (encyclopediaofukraine.com)

### E059 · Rusya (`rusya`) · 1654-01-18 → 1764-11-21 · 5.421 km²

- nokta [49.141, 33.649], en büyük kesit 1721-09-10 · kesit sayısı 76 · sınıf sayımı {'ENKLAV': 14, 'KARA-EKSKLAV': 59}
- çevre: kazak-hetmanligi 92%, OSMANLI 35%, lehistan 35%
- koridor: 51.2 km · lehistan 9/9
- içindeki yerleşimler (1, s.eksklav 0): Kremençuk (rusya)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Aynı kaynak: Kremenchuk Hetmanlık alay/sotnya merkeziydi (1667-1765 Myrhorod alayı); Novorossiya 1765'te. Ölçüldü: Kremençuk rusya 1654-01-18 → 1917 (kazak-hetmanligi 92% çevre). 1654-1764 'rusya' yanlış; Rus doğrudan idaresi 1765.
  - önerilen düzeltme: Kremençuk rusya f → 1765 (gün bulunamadı); arada kazak-hetmanligi.
  - kaynak: Encyclopedia of Ukraine, Kremenchuk (encyclopediaofukraine.com)

### E060 · Hafsîler (Tunus) (`hafsi`) · 1281-01-01 → 1519-09-01 · 4.920 km²

- nokta [36.295, 6.727], en büyük kesit 1510-01-01 · kesit sayısı 6 · sınıf sayımı {'ENKLAV': 4}
- çevre: zeyyani 100%
- koridor: 43.5 km · zeyyani 9/9
- içindeki yerleşimler (1, s.eksklav 1): Konstantin (hafsi)
- koridor yerleşimleri: Sikikde (zeyyani)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: TDV Hafsîler: 1285'te Constantine başkent, 1370'te Bougie/Tunus/Constantine emirlikleri; Zeyyânîlerden yalnız Tlemcen bağlamında söz ediyor. Ölçüldü: Sikikde ve Mîle 'zeyyani' 1281 → 1519-09-01 (Tlemcen 300 km batıda); Konstantin hafsi. Hafsî eksklavı Zeyyânî yazılmasından.
  - önerilen düzeltme: Sikikde, Mîle: zeyyani → hafsi (gün bulunamadı; Bicâye vb. de sınansın).
  - kaynak: TDV hafsiler (islamansiklopedisi.org.tr/hafsiler)

### E061 · Hafsîler (Tunus) (`hafsi`) · 1526-01-01 → 1527-01-01 · 4.920 km²

- nokta [36.295, 6.727], en büyük kesit 1526-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 100%
- koridor: 43.5 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 1): Konstantin (hafsi)
- koridor yerleşimleri: Sikikde (OSMANLI)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Konstantin hafsi 1526-01-01 → 1527-01-01 tek yıllık ara; d OSMANLI 1519-09-01 → 1526-01-01 ve 1527-01-01 → 1671; çevre OSMANLI. TDV hafsiler 1519-1529 Constantine'i kapsamıyor; yıl hassasiyetli ara kaynaksız. [KAYNAK-1104 (celiski): Kostantîne 1519 veya 1520'de Barbaros'un adamı Hasan Ağa tarafından zaptedildi; Hafsîler 1526'da geri aldı; bir yıl sonra tekrar Osmanlı'ya geçti; tam hâkimiyet ancak 940'ta (1533-34) garnizonla sağlandı (Mercier'ye atfen). — "Hafsîler’in 1526’da geri aldığı şehir bir yıl sonra tekrar Osmanlılar’ın eline geçtiyse de" · Hüküm YAPAY-d → GERCEK: 1526-1527 Hafsî arası TDV'de var, kaynaksız değil. Yıl hassasiyetli (1526-01-01 → 1527-01-01) kalabilir; silinmemeli. TDV de Mercier'den aktarıyor (tek dayanak).] [hüküm YAPAY/YAPAY-d → GERCEK/GERCEK, kaynak üzerine]
  - önerilen düzeltme: Yok — 1526-1527 Hafsî arası TDV Kostantîne'de var; silinmesin.
  - kaynak: TDV İslâm Ansiklopedisi, "Kostantîne" (Muhammed Rezûk), https://islamansiklopedisi.org.tr/kostantine · önceki: TDV hafsiler okundu: dönem yok; bulunamadı

### E062 · Anadolu Selçukluları (`selcuklu`) · 1281-01-01 → 1308-01-01 · 4.605 km²

- nokta [39.867, 41.064], en büyük kesit 1300-01-01 · kesit sayısı 7 · sınıf sayımı {'ENKLAV': 6}
- çevre: ilhanli 100%
- koridor: 96.6 km · ilhanli 9/9
- içindeki yerleşimler (1, s.eksklav 0): Erzurum (selcuklu)
- koridor yerleşimleri: Bingöl (Çapakçur) (ilhanli)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: TDV Erzurum: Anadolu Selçuklu Devleti Kösedağ'dan (1243) sonra Moğol hâkimiyetini tanıdı; 1308'den sonra İlhanlılar'a bağlandı. Ölçüldü: Erzurum selcuklu 1202 → 1308 iken Aşkale, Pasinler ilhanli (1300); Bingöl ilhanli. Aynı Moğol-bağlı alan iki ayrı boyada.
  - önerilen düzeltme: Erzurum için selcuklu (tâbi) / ilhanli tutarlılığı: tâbi katmanı ya da komşuların aynı statüsü (gün bulunamadı).
  - kaynak: TDV erzurum (islamansiklopedisi.org.tr/erzurum)

### E063 · Transkafkasya (Federasyon) (`transkafkasya`) · 1917-11-07 → 1918-04-25 · 4.436 km²

- nokta [40.657, 42.984], en büyük kesit 1918-02-26 · kesit sayısı 11 · sınıf sayımı {'ENKLAV': 4}
- çevre: sovyet-rusya 97%, OSMANLI 3%
- koridor: 5.5 km · sovyet-rusya 9/9
- içindeki yerleşimler (2, s.eksklav 0): Kars (transkafkasya); Ardahan (transkafkasya)
- koridor yerleşimleri: Arpaçay (Akyaka) (sovyet-rusya)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Kars 1917-11-07 → 1918-04-25 ve Ardahan transkafkasya; Arpaçay, Digor, Sarıkamış, Küçükperveli (Kars bölgesi) aynı aralıkta kesintisiz sovyet-rusya. Kars ili tek parça; komşulara transkafkasya dönemi yok.
  - önerilen düzeltme: Arpaçay, Digor, Sarıkamış, Küçükperveli, Kars vilayeti noktalarına 1917-11-07 → 1918-04-25 transkafkasya (gün bulunamadı; Brest-Litovsk 1918-03-03, Kars 1918-04-25).
  - kaynak: veri ölçümü

### E064 · Bağımsız Hırvat Devleti (NDH) (`hirvatistan-bagimsiz`) · 1941-04-10 → 1945-04-22 · 4.229 km²

- nokta [43.35, 17.749], en büyük kesit 1941-04-10 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: yugoslavya 92%
- koridor: 105.6 km · yugoslavya 9/9
- içindeki yerleşimler (3, s.eksklav 0): Çapljina (Čapljina) (sahipsiz); Mostar (hirvatistan-bagimsiz); Posušje (sahipsiz)
- koridor yerleşimleri: Vitez (sahipsiz); Travnik (yugoslavya)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü: Mostar NDH iken Konjic, Ston, Travnik yugoslavya kesintisiz (1918-12-01 → 1945-11-29); Čapljina, Posušje, Vitez ve Delminium bu dönemde dönemsiz. Hersek-Bosna NDH'nin parçasıydı. Kapsama: 1941-04-10 → 1945-05-06 Bosna-Hersek, Slavonya ve Hırvat topraklarındaki noktalara hirvatistan-bagimsiz (NDH) dönemi; Sisak, Konjic, Travnik, Jajce, Bosanska Dubica, Kostajnica, Tuzla, Zvornik, Visoko, Foča, Višegrad. Günler kaynakla (gün bulunamadı); Bijeljina 1945-05-31 ile 05-06 uyumsuz.
  - önerilen düzeltme: Mostar çevresi; Kapsama: 1941-04-10 → 1945-05-06 Bosna-Hersek, Slavonya ve Hırvat topraklarındaki noktalara hirvatistan-bagimsiz (NDH) dönemi; Sisak, Konjic, Travnik, Jajce, Bosanska Dubica, Kostajnica, Tuzla, Zvornik, Visoko, Foča, Višegrad. Günler kaynakla (gün bulunamadı); Bijeljina 1945-05-31 ile 05-06 uyumsuz.
  - kaynak: veri ölçümü

### E065 · Bâbürlü (Timurlu-Hint) İmparatorluğu (`babur-imparatorlugu`) · 1753-04-01 → 1757-01-01 · 3.824 km²

- nokta [22.715, 72.467], en büyük kesit 1756-01-01 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: maratha 97%, baroda 3%
- koridor: 31.5 km · maratha 7/9, DENIZ/BOS 2/9
- içindeki yerleşimler (2, s.eksklav 0): Lothal (sahipsiz); Dholka (babur-imparatorlugu)
- koridor yerleşimleri: Kanbâyet (Khambhat) (maratha)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Dholka babur-imparatorlugu 1741 → 1757-01-01; Ahmedâbâd 1756'da maratha, Kanbâyet maratha. Gucerat'ta Ahmedabad ve çevre Marathalara 1750'lerin başında geçti (1753-1758 aralığı teyitsiz); Lothal MÖ 2449-1999 (dönemsiz). Dholka'nın Babür kalması komşudan geç.
  - önerilen düzeltme: Dholka Maratha f ve Ahmedabad f hizalansın (Imperial Gazetteer 'Gujarat' bakılmalı); gün bulunamadı.
  - kaynak: bulunamadı (Imperial Gazetteer çekilmedi)

### E066 · Fransa Cumhuriyeti (`fransa-cumhuriyet`) · 1918-10-30 → 1920-07-24 · 3.395 km²

- nokta [37.002, 42.068], en büyük kesit 1918-11-19 · kesit sayısı 12 · sınıf sayımı {'ENKLAV': 1, 'KARA-EKSKLAV': 4}
- çevre: OSMANLI 87%, ingiltere 54%
- koridor: 14.7 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Malikiye (Derik) (fransa-cumhuriyet)
- koridor yerleşimleri: Subat-Enlil (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Malikiye (Derik) fransa-cumhuriyet f=1918-10-30 (Mudros günü); Cizre, Cibri OSMANLI, Silopi, Zaho, Cumai ingiltere. Fransız fiilî işgalinin Malikiye'ye 1918'de ulaşması teyitsiz; Subat-Enlil dönemsiz (ölçüldü).
  - önerilen düzeltme: Malikiye f kaynakla (Fransız işgal tarihi); gün bulunamadı.
  - kaynak: bulunamadı

### E067 · İsviçre Konfederasyonu (`isvicre`) · 1918-11-12 → 2000-12-31 · 3.221 km²

- nokta [46.8, 9.76], en büyük kesit 1923-10-29 · kesit sayısı 4 · sınıf sayımı {'ENKLAV': 3, 'DAR-AYRIM': 1}
- çevre: avusturya-cumhuriyet 100%, italya 48%, liechtenstein 27%
- koridor: 1.1 km · DENIZ/BOS 9/9
- içindeki yerleşimler (2, s.eksklav 0): Davos (isvicre); Chur (Coira) (isvicre)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Davos ve Chur (Graubünden) 60 km içinde başka İsviçre noktası yok; ana İsviçre gövdesi (Luzern 90 km) arası noktasız ve Vaduz/Feldkirch petekleri emiyor. 1918-11-12 başlangıcı Avusturya Cumhuriyeti kuruluşu.
  - önerilen düzeltme: Sargans/Walenstadt/Glarus yönünde İsviçre noktaları; dönemsiz.
  - kaynak: veri ölçümü

### E068 · Macaristan Krallığı (Habsburg Tacı) (`macaristan-habsburg`) · 1527-09-23 → 1529-09-08 · 3.164 km²

- nokta [47.316, 19.21], en büyük kesit 1527-09-23 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: macaristan 88%, TABI 10%
- koridor: 27.0 km · macaristan 9/9
- içindeki yerleşimler (3, s.eksklav 0): Macaristan (sahipsiz); Peşte (macaristan-habsburg); Aquincum-Óbuda-Pest (macaristan-habsburg)
- koridor yerleşimleri: Vaç (Vác) (macaristan)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `KAYNAKLI`
  - gerekçe: Peşte/Aquincum macaristan-habsburg 1527-09-23 → 1529-09-08 (Buda 8 Eylül 1529'da Süleyman tarafından Zapolya'ya geri verildi); Vaç macaristan. Ferdinand'ın tuttuğu Estergon-Tata-Székesfehérvár hattı noktalarına Habsburg dönemi yazılı mı sınanmalı (Estergon 1530-01-01'e dek habsburg, ölçüldü). Macaristan sahipsiz nokta. [KAYNAK-1104 (kismen): Ferdinand 17 Aralık 1526'da seçildi, 1527 Ağustos'unda Buda'yı ele geçirdi; Süleyman 1529'da Buda'yı alıp Szapolyai'ye bıraktı. — "1527 Ağustosunda Buda’yı ele geçiren Ferdinand’a karşı János Szapolyai Sultan Süleyman’dan yardım istedi." · Peşte/Buda 1527-1529 Habsburg teyitli; atlas başlangıcı 1527-09-23 TDV'deki Ağustos 1527 ile çelişiyor (Buda kaydı varsa 1527-08-01'e çekilmeli, gün teyitsiz). YAPAY-b (komşu Vaç/Hatvan dönemleri) TDV'de yok — o kısım teyitsiz.]
  - önerilen düzeltme: Komşu noktaların (Vaç, Hatvan…) 1527-1529 Habsburg/Zapolya durumu kaynakla.
  - kaynak: TDV İslâm Ansiklopedisi, "Budin" (Géza Dávid), https://islamansiklopedisi.org.tr/budin

### E069 · Osmanlı (`OSMANLI`) · 1920-04-23 → 1923-10-29 · 3.071 km²

- nokta [37.0, 39.163], en büyük kesit 1923-07-24 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 1, 'ENKLAV': 2}
- çevre: tbmm-turkiye 90%, fransa-cumhuriyet 15%, suriye-lubnan-mandasi 10%
- koridor: 119.5 km · tbmm-turkiye 9/9
- içindeki yerleşimler (1, s.eksklav 0): Harran (OSMANLI)
- koridor yerleşimleri: Diyarbakır (tbmm-turkiye)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Harran OSMANLI d 1516-01-01 → 1923-10-29; Urfa, Akçakale, Diyarbakır tbmm-turkiye 1920-04-23'ten. Harran 1261-1516 BOSLUK, TBMM dönemi yok; Göbekli Tepe dönemsiz.
  - önerilen düzeltme: Harran d t → 1920-04-23, s: tbmm-turkiye 1920-04-23 → 1923-10-29 (Fransız işgali ayrıca).
  - kaynak: veri ölçümü

### E070 · Brezilya Cumhuriyeti (`brezilya-cumhuriyeti`) · 1900-05-26 → 1923-10-29 · 2.719 km²

- nokta [-28.209, -57.07], en büyük kesit 1914-10-02 · kesit sayısı 24 · sınıf sayımı {'ENKLAV': 22}
- çevre: arjantin-cumhuriyeti 97%, paraguay-cumhuriyeti 1%
- koridor: 53.2 km · arjantin-cumhuriyeti 8/9, paraguay-cumhuriyeti 1/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: 120 km içinde hiç nokta yok (Corrientes/Misiones, -28,2 -57,1). Arjantin içindeki 'Brezilya' parçası noktasız yüz.
  - önerilen düzeltme: Arjantin noktası (ör. Santo Tomé ya da Paso de los Libres) kaynakla.
  - kaynak: veri ölçümü

### E071 · Osmanlı (`OSMANLI`) · 1920-04-23 → 1923-10-29 · 2.540 km²

- nokta [38.587, 28.057], en büyük kesit 1920-07-01 · kesit sayısı 3 · sınıf sayımı {'ENKLAV': 2}
- çevre: tbmm-turkiye 100%
- koridor: 595.2 km · tbmm-turkiye 9/9
- içindeki yerleşimler (1, s.eksklav 0): Sart (OSMANLI)
- koridor yerleşimleri: Niğde (tbmm-turkiye); Uşak (tbmm-turkiye); Ilgın (tbmm-turkiye); Yalvaç (tbmm-turkiye); Akşehir (tbmm-turkiye); İshaklı (tbmm-turkiye)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Sart OSMANLI d 1481-01-01 → 1923-10-29; Birgi, Akhisar, Alaşehir, Manisa tbmm-turkiye 1920-04-23'ten (E069 ile aynı sebep). Sart lidya MÖ 651 başlangıçlı antik nokta.
  - önerilen düzeltme: Sart d t → 1920-04-23 ve tbmm-turkiye dönemi.
  - kaynak: veri ölçümü

### E072 · Karamanoğulları (`karaman`) · 1365-01-01 → 1366-01-01 · 2.537 km²

- nokta [38.587, 34.629], en büyük kesit 1365-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: eretna 92%
- koridor: 35.4 km · eretna 9/9
- içindeki yerleşimler (1, s.eksklav 0): Nevşehir (Muşkara) (karaman)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `KAYNAKLI`
  - gerekçe: Nevşehir (Muşkara) karaman f=1365-01-01; Ürgüp, Aksaray eretna; 1 yıllık parça komşunun 1366'da karamana geçmesinden. Eretna-Karaman geçişi gün bulunamadı. [KAYNAK-1104 (kismen): Nevşehir bölgesi 766 (1365) yılına doğru Karamanoğulları'nca ele geçirildi; Alâeddin Bey Eretna karışıklığında Konya (1366-1367), Aksaray, Niğde Karahisarı vb.'ni kattı. — "766 (1365) yılına doğru Karamanoğulları tarafından ele geçirildi." · Nevşehir 1365 teyitli ("yılına doğru" — yaklaşık). Aksaray'ın 1366-67 geçişi ile 1 yıllık kopukluk kaynaklarda da yaklaşık; YAPAY-d (hizalama) destekli: Nevşehir ve Aksaray aynı yıla (766 ∩ 1365 → 1365-01-01 ya da 1366) beyanla hizalanmalı.]
  - önerilen düzeltme: Nevşehir f ve Ürgüp/Aksaray geçişi hizalansın (TDV karamanoğulları).
  - kaynak: TDV İslâm Ansiklopedisi, "Nevşehir" (İlhan Şahin), https://islamansiklopedisi.org.tr/nevsehir; "Karamanoğulları" (Faruk Sümer), https://islamansiklopedisi.org.tr/karamanogullari

### E073 · Transkafkasya (Federasyon) (`transkafkasya`) · 1918-02-19 → 1918-02-26 · 2.352 km²

- nokta [39.816, 39.576], en büyük kesit 1918-02-19 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 100%
- koridor: 16.4 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Erzincan (transkafkasya)
- koridor yerleşimleri: Kelkit (OSMANLI)
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `OLCUM`
  - gerekçe: Erzincan transkafkasya → 1918-02-26 (kayıt: TDV erzincan 26 Şubat 1918); komşu Kelkit 02-19'da Osmanlı. 7 günlük cep. Yaygın Türk tarihyazımı Erzincan için 13 Şubat 1918 der; TDV günüyle çelişki ic_not'ta beyan edilmeli.
  - önerilen düzeltme: TDV erzincan metni yeniden okunsun (26 Şubat neyi tarihliyor?); Kelkit vb. komşuların günleri TDV'ye göre hizalansın.
  - kaynak: TDV erzincan (kayıtta)

### E074 · Bağımsız Hırvat Devleti (NDH) (`hirvatistan-bagimsiz`) · 1941-04-10 → 1945-05-06 · 2.190 km²

- nokta [43.906, 18.6], en büyük kesit 1944-10-18 · kesit sayısı 3 · sınıf sayımı {'ENKLAV': 2}
- çevre: yugoslavya 99%
- koridor: 17.2 km · yugoslavya 9/9
- içindeki yerleşimler (2, s.eksklav 0): Pale (sahipsiz); Saraybosna (hirvatistan-bagimsiz)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü: Saraybosna hirvatistan-bagimsiz 1941-04-10 → 1945-05-06; Visoko, Foča, Višegrad, Konjic yugoslavya kesintisiz. Pale dönemsiz. Kapsama: 1941-04-10 → 1945-05-06 Bosna-Hersek, Slavonya ve Hırvat topraklarındaki noktalara hirvatistan-bagimsiz (NDH) dönemi; Sisak, Konjic, Travnik, Jajce, Bosanska Dubica, Kostajnica, Tuzla, Zvornik, Visoko, Foča, Višegrad. Günler kaynakla (gün bulunamadı); Bijeljina 1945-05-31 ile 05-06 uyumsuz.
  - önerilen düzeltme: Kapsama: 1941-04-10 → 1945-05-06 Bosna-Hersek, Slavonya ve Hırvat topraklarındaki noktalara hirvatistan-bagimsiz (NDH) dönemi; Sisak, Konjic, Travnik, Jajce, Bosanska Dubica, Kostajnica, Tuzla, Zvornik, Visoko, Foča, Višegrad. Günler kaynakla (gün bulunamadı); Bijeljina 1945-05-31 ile 05-06 uyumsuz.
  - kaynak: veri ölçümü

### E075 · İtalya (`italya`) · 1943-09-23 → 1945-04-28 · 1.950 km²

- nokta [44.8, 10.715], en büyük kesit 1943-09-23 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: salo-cumhuriyeti 100%
- koridor: 29.6 km · salo-cumhuriyeti 9/9
- içindeki yerleşimler (1, s.eksklav 0): Guastalla (italya)
- koridor yerleşimleri: Canossa (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Guastalla italya 1861-03-17 → 1946-06-18 kesintisiz; Modena, Parma, Mantova salo-cumhuriyeti 1943-09-23 → 1945-04-28. Guastalla Reggio Emilia ilinde, RSI içindeydi. Canossa dönemsiz.
  - önerilen düzeltme: Guastalla'ya salo-cumhuriyeti dönemi (gün bulunamadı).
  - kaynak: veri ölçümü

### E076 · Sırp Cumhuriyeti (Republika Srpska) (`bosna-sirp-cumhuriyeti`) · 1992-01-09 → 1995-12-14 · 1.919 km²

- nokta [43.934, 18.774], en büyük kesit 1992-01-09 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: bosna-hersek 99%
- koridor: 32.5 km · bosna-hersek 9/9
- içindeki yerleşimler (1, s.eksklav 0): Pale (bosna-sirp-cumhuriyeti)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü (1993-06-01): Pale ve Doboj bosna-sirp-cumhuriyeti, Bijeljina RS; Vişegrad, Foča, Zvornik 'bosna-hersek' (Sırp Cumhuriyeti dönemi yok; hepsi 1992-03-03'ten kesintisiz bosna-hersek). RS ana gövdesi bu noktalarda eksik.
  - önerilen düzeltme: Foča, Višegrad, Zvornik ve Sarajevo-Romanija noktalarına 1992 → 1995-12-14 bosna-sirp-cumhuriyeti (gün bulunamadı).
  - kaynak: veri ölçümü

### E077 · Konbaung Hanedanı (Birmanya) (`konbaung`) · 1752-01-01 → 1752-04-23 · 1.884 km²

- nokta [22.331, 96.055], en büyük kesit 1752-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: toungoo 100%
- koridor: 420.6 km · san-devletleri 7/9, toungoo 2/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Loikaw (san-devletleri); Kalaw (san-devletleri); Ava (İnwa) (toungoo)
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `OLCUM`
  - gerekçe: Ölçüldü: Halin konbaung 1752-01-01'den, Alaungpaya'nın merkezi Shwebo (Moksobo) ise 1752-04-23'e dek toungoo. Konbaung'un kurulduğu şehir kendi devletinden sonra başlıyor; parça noktasız.
  - önerilen düzeltme: Shwebo ve Halin konbaung f aynı kaynaklı güne hizalansın (Alaungpaya'nın taç giymesi 1752; gün kaynakla: Lieberman 1984 ya da Htin Aung).
  - kaynak: veri ölçümü; gün kaynak gerek

### E078 · Bağımsız Hırvat Devleti (NDH) (`hirvatistan-bagimsiz`) · 1941-04-10 → 1945-05-06 · 1.689 km²

- nokta [45.838, 16.545], en büyük kesit 1945-04-22 · kesit sayısı 3 · sınıf sayımı {'ENKLAV': 3}
- çevre: yugoslavya 100%
- koridor: 230.8 km · yugoslavya 9/9
- içindeki yerleşimler (1, s.eksklav 0): Zagreb (hirvatistan-bagimsiz)
- koridor yerleşimleri: Hırvatistan (sahipsiz); Sisak (yugoslavya); Posušje (sahipsiz); Delminium (sahipsiz); Yayça (Jajce) (yugoslavya); Bosna Dubiçası (Bosanska Dubica) (yugoslavya); Kostayniçe (Kostajnica) (yugoslavya)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü: Zagreb NDH 1941-04-10 → 1945-05-06; Sisak (1920-06-04 → 1945-11-29), Kostajnica, Jajce, Dubica yugoslavya kesintisiz. NDH çekirdeği Hırvatistan'dı. Kapsama: 1941-04-10 → 1945-05-06 Bosna-Hersek, Slavonya ve Hırvat topraklarındaki noktalara hirvatistan-bagimsiz (NDH) dönemi; Sisak, Konjic, Travnik, Jajce, Bosanska Dubica, Kostajnica, Tuzla, Zvornik, Visoko, Foča, Višegrad. Günler kaynakla (gün bulunamadı); Bijeljina 1945-05-31 ile 05-06 uyumsuz.
  - önerilen düzeltme: Kapsama: 1941-04-10 → 1945-05-06 Bosna-Hersek, Slavonya ve Hırvat topraklarındaki noktalara hirvatistan-bagimsiz (NDH) dönemi; Sisak, Konjic, Travnik, Jajce, Bosanska Dubica, Kostajnica, Tuzla, Zvornik, Visoko, Foča, Višegrad. Günler kaynakla (gün bulunamadı); Bijeljina 1945-05-31 ile 05-06 uyumsuz.
  - kaynak: veri ölçümü

### E079 · Sırp Krajina Cumhuriyeti (RSK; fiilî) (`sirp-krajina-cumhuriyeti`) · 1991-12-19 → 1995-08-05 · 1.683 km²

- nokta [45.389, 16.014], en büyük kesit 1991-12-19 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: hirvatistan 86%, bosna-hersek 14%
- koridor: 89.0 km · bosna-hersek 9/9
- içindeki yerleşimler (1, s.eksklav 0): Glina (sirp-krajina-cumhuriyeti)
- koridor yerleşimleri: Ostrovica (Stara Ostrovica, Kulen Vakuf) (bosna-hersek); Bihaç (Bihać) (bosna-hersek); Krupa (Bosanska Krupa) (bosna-hersek)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Glina RSK 1991-12-19 → 1995-08-07; Kostajnica hirvatistan 1991-06-25'ten kesintisiz; Sisak/Karlovac hirvatistan. Banija'nın Hrvatska Kostajnica'sı RSK kontrolündeydi (tarihsel, teyitsiz); 'Hırvatistan' diye sahipsiz nokta var. [KAYNAK-1104 (kismen): Oluja 4-7 Agustos 1995; 7 Agustos'ta kuzey Dalmacya, dogu Lika, Kordun ve Banovina Hirvat denetimine girdi; Knin 5 Agustos. Banovina cephesinde Hrvatska Kostajnica, Sisak, Petrinja, Glina anilir. — "Već 5. kolovoza oslobođen je Knin." · RSK ilan tarihi (19 Aralik 1991) ve Glina/Kostajnica bazinda gunler bu kaynaklarda yok.]
  - önerilen düzeltme: Banija/Kordun/Lika noktalarına RSK dönemi (Petrinja, Kostajnica, Vojnić…; gün bulunamadı).
  - kaynak: Hrvatska enciklopedija, Domovinski rat, https://enciklopedija.hr/clanak/domovinski-rat ; Benkovac, https://enciklopedija.hr/clanak/benkovac · önceki: bulunamadı (Hrvatska enciklopedija 'Oluja' önerilir)

### E080 · İspanya (`ispanya`) · 1531-04-16 → 1535-04-17 · 1.534 km²

- nokta [18.752, -98.555], en büyük kesit 1533-01-01 · kesit sayısı 10 · sınıf sayımı {'ENKLAV': 4}
- çevre: yeni-ispanya-ilk-donem 100%
- koridor: 21.4 km · yeni-ispanya-ilk-donem 9/9
- içindeki yerleşimler (1, s.eksklav 0): Cholula (ispanya)
- koridor yerleşimleri: Tepeaca (ispanya); Puebla de los Ángeles (yeni-ispanya-ilk-donem); Huexotzinco (Huejotzingo) (yeni-ispanya-ilk-donem); Cacaxtla (sahipsiz); Tlaxcala (yeni-ispanya-ilk-donem)
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: Ölçüldü: Cholula ispanya 1519-10-18 → 1535-04-17 ve Tepeaca ispanya 1520-09-04 →; Puebla ve Huexotzinco 'yeni-ispanya-ilk-donem' 1531-1535. Aynı sömürge iki kimlikte.
  - önerilen düzeltme: Aynı dönem tek kimlik (ispanya ya da yeni-ispanya-ilk-donem).
  - kaynak: veri ölçümü

### E081 · Herzeg-Bosna (Hırvat Topluluğu 1991 → Hırvat Cumhuriyeti 1993-08-28) (`herzeg-bosna`) · 1991-11-18 → 1996-08-14 · 1.489 km²

- nokta [44.225, 17.923], en büyük kesit 1991-11-18 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: yugoslavya 100%
- koridor: 16.4 km · yugoslavya 9/9
- içindeki yerleşimler (1, s.eksklav 0): Vitez (herzeg-bosna)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Vitez herzeg-bosna: Lašva vadisi HVO enklavı 1993-94'te bosna-hersek içinde gerçek enklavdı. Ölçüldü: Mostar bosna-hersek (HB dönemi yok), Čapljina ve Posušje herzeg-bosna; 1991-11-18 → 1992 çevre yugoslavya-federal. Ana HB gövdesi (Mostar, Livno, Tomislavgrad) eksik; erken dönem enklavı yapay.
  - önerilen düzeltme: Mostar ve Hersek noktalarına HB dönemi; Vitez enklavı 1993-94'e özgülensin (gün bulunamadı).
  - kaynak: bulunamadı

### E082 · Fransa Cumhuriyeti (`fransa-cumhuriyet`) · 1831-01-04 → 1841-05-30 · 1.430 km²

- nokta [35.425, -0.541], en büyük kesit 1831-01-04 · kesit sayısı 10 · sınıf sayımı {'ENKLAV': 10}
- çevre: TABI 96%, abdulkadir 96%
- koridor: 19.0 km · abdulkadir 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-m` · güven `OLCUM`
  - gerekçe: Ölçüldü: Oran'ın peteği Oran Sebhası'nın (tuz gölü) güneyine taşıyor; göl peteği ikiye bölüyor, güney yarısı abdulkadir/tâbi içinde 1.430 km²lik parça. Sîdî Bel Abbès 1843'e dek yok, Ayn Temûşent 56 km. Oran'ın Fransız dönemi 'eksklav:true'.
  - önerilen düzeltme: Sebha güneyine (Mekerra/Tlelat) yerel nokta, abi merkez Muaskar zinciriyle (merdiven ⑤). 1831-41 Fransız Oran'ının sınırı Tafna (30.5.1837) metninden okunsun.
  - kaynak: veri ölçümü

### E083 · İspanya (`ispanya`) · 1509-05-17 → 1708-04-04 · 1.430 km²

- nokta [35.425, -0.541], en büyük kesit 1535-01-18 · kesit sayısı 167 · sınıf sayımı {'ENKLAV': 99}
- çevre: zeyyani 96%, OSMANLI 96%, TABI 96%
- koridor: 184.6 km · DENIZ/BOS 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Oran (ispanya); Mersa'l-Kebîr (ispanya); Mojácar (ispanya)
- **HÜKÜM: YAPAY** · kova `YAPAY-m` · güven `OLCUM`
  - gerekçe: Aynı Sebha güneyi parçası, İspanyol Oran'ı (1509-1708). Oran ve Mersa'l-Kebîr 'enklav:true' taşıyor (ölçüldü) ama bayrak yalnız yetim yüz devrini keser; kalenin kendi Voronoi hücresi 30+ km içeri uzanıyor. Presidio hinterlandsızdı.
  - önerilen düzeltme: Motor sorusu (HAVVA): enklav:true noktanın hücresi kale çevresiyle sınırlansın. Veri yolu: Sebha güneyine zeyyani/OSMANLI zincirli nokta. Ek: Mersa'l-Kebîr 1505'te İspanyol oldu, kayıt 1509 diyor (TDV vehran ile sınansın).
  - kaynak: veri ölçümü

### E084 · İspanya (`ispanya`) · 1732-07-01 → 1792-09-12 · 1.430 km²

- nokta [35.425, -0.541], en büyük kesit 1732-07-01 · kesit sayısı 39 · sınıf sayımı {'ENKLAV': 39}
- çevre: TABI 96%
- koridor: 184.6 km · DENIZ/BOS 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Oran (ispanya); Mersa'l-Kebîr (ispanya); Mojácar (ispanya)
- **HÜKÜM: YAPAY** · kova `YAPAY-m` · güven `OLCUM`
  - gerekçe: E083 ile aynı, 1732-1792 ikinci İspanyol dönemi.
  - önerilen düzeltme: E083 kovası.
  - kaynak: veri ölçümü

### E085 · Bağımsız Hırvat Devleti (NDH) (`hirvatistan-bagimsiz`) · 1941-04-10 → 1945-05-06 · 1.407 km²

- nokta [44.722, 19.157], en büyük kesit 1944-10-18 · kesit sayısı 3 · sınıf sayımı {'ENKLAV': 2}
- çevre: yugoslavya 100%
- koridor: 52.2 km · yugoslavya 9/9
- içindeki yerleşimler (1, s.eksklav 0): Bijeljina (hirvatistan-bagimsiz)
- koridor yerleşimleri: İzvornik (Zvornik) (yugoslavya); Tuzla (Bosna) (yugoslavya)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü: Bijeljina NDH 1941-04-10 → 1945-05-31; İzvornik, Tuzla, Srebrenik yugoslavya kesintisiz. Kapsama: 1941-04-10 → 1945-05-06 Bosna-Hersek, Slavonya ve Hırvat topraklarındaki noktalara hirvatistan-bagimsiz (NDH) dönemi; Sisak, Konjic, Travnik, Jajce, Bosanska Dubica, Kostajnica, Tuzla, Zvornik, Visoko, Foča, Višegrad. Günler kaynakla (gün bulunamadı); Bijeljina 1945-05-31 ile 05-06 uyumsuz.
  - önerilen düzeltme: Kapsama: 1941-04-10 → 1945-05-06 Bosna-Hersek, Slavonya ve Hırvat topraklarındaki noktalara hirvatistan-bagimsiz (NDH) dönemi; Sisak, Konjic, Travnik, Jajce, Bosanska Dubica, Kostajnica, Tuzla, Zvornik, Visoko, Foča, Višegrad. Günler kaynakla (gün bulunamadı); Bijeljina 1945-05-31 ile 05-06 uyumsuz.
  - kaynak: veri ölçümü

### E086 · Osmanlı (`OSMANLI`) · 1664-06-14 → 1685-08-19 · 1.287 km²

- nokta [48.02, 18.051], en büyük kesit 1683-10-27 · kesit sayısı 17 · sınıf sayımı {'ENKLAV': 9}
- çevre: macaristan-habsburg 100%
- koridor: 19.0 km · macaristan-habsburg 9/9
- içindeki yerleşimler (1, s.eksklav 0): Uyvar (OSMANLI)
- koridor yerleşimleri: Komárom (Komárno) (macaristan-habsburg)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: TDV Uyvar: kuşatma 17 Ağustos 1663, kale 26 Eylül'de teslim; 'Vasvár Antlaşması ile (9 Ağustos 1664) buradaki Osmanlı hâkimiyeti tasdik edildi'; Habsburg 'idaresine girdi (19 Ağustos 1685)'. Uyvar eyaleti Habsburg arasında gerçek Osmanlı parçasıydı; Nitra (d t 1664-05-03) ve Léva (d t 1664-06-14) Habsburga döndü. Ölçüldü: atlas Uyvar f=1663-09-24 TDV'nin 26 Eylül'ünden 2 gün önce; 1683-10-27'ye dek Estergon Osmanlı ve Párkány köprüsü atlasta yok.
  - önerilen düzeltme: Uyvar d f → 1663-09-26; Párkány (Štúrovo) noktası ile 1664-1683 bağlantı.
  - kaynak: TDV uyvar (islamansiklopedisi.org.tr/uyvar)

### E087 · Osmanlı (`OSMANLI`) · 1534-09-22 → 1535-07-21 · 1.233 km²

- nokta [36.805, 9.979], en büyük kesit 1534-09-22 · kesit sayısı 4 · sınıf sayımı {'ENKLAV': 2}
- çevre: hafsi 96%
- koridor: 148.7 km · hafsi 9/9
- içindeki yerleşimler (1, s.eksklav 0): Tunus (OSMANLI)
- koridor yerleşimleri: Mekter (Maktar) (hafsi); Testûr (hafsi)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: TDV Barbaros Hayreddin Paşa: Barbaros 'Mevlây Hasan’ın terkettiği şehri ele geçirdi (22 Eylül)' (1534); 'V. Karl şehri geri alarak (21 Temmuz 1535)'. Atlas Tunus d 1534-09-22 → 1535-07-21 birebir uyumlu. Ölçüldü: Halkulvâdî, Kartaca, Mekter, Testûr hafsi 1535-07-21'e dek; Osmanlı elinde yalnız Tunus şehri.
  - önerilen düzeltme: Yapısal düzeltme yok; Hafsî çevresi için ayrıca bir şey gerekmez.
  - kaynak: TDV barbaros-hayreddin-pasa (islamansiklopedisi.org.tr/barbaros-hayreddin-pasa)

### E088 · Nijerya Federasyonu (Cumhuriyet 1963-10-01) (`nijerya`) · 1967-05-30 → 1970-01-15 · 1.003 km²

- nokta [5.406, 7.299], en büyük kesit 1967-05-30 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: biafra 100%
- koridor: 16.7 km · biafra 9/9
- içindeki yerleşimler (1, s.eksklav 0): Aroçukvu (nijerya)
- koridor yerleşimleri: Owerri (biafra)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Aroçukvu nijerya 1960-10-01 → 2000 kesintisiz; çevre biafra (Owerri, Umuahia, Aba) 1967-05-30 → 1970-01-15. Aroçukvu Biafra bölgesindeydi; Nijerya elindeki dönem Biafra'nın düştüğü kadar uzun değil (Nijerya ele geçirişi teyitsiz).
  - önerilen düzeltme: Aroçukvu'ya biafra dönemi 1967-05-30 → Nijerya ele geçirişi (gün bulunamadı).
  - kaynak: bulunamadı (UNESCO GHA / akademik İç Savaş kaynağı gerek)

### E089 · Memlûk (`memluk`) · 1516-09-27 → 1516-10-01 · 986 km²

- nokta [33.614, 35.645], en büyük kesit 1516-09-27 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 92%
- koridor: 123.0 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Deyrülkamer (Dayr al-Kamer) (memluk)
- koridor yerleşimleri: Câbiye (sahipsiz); Ain Mallaha (Eynan) (sahipsiz); Akrabâ (‘Aqrabā) (sahipsiz); Banyas (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü: koridordaki Câbiye, Banyas, Ain Mallaha, Akrabâ 1516-09'da SAHİPSİZ. Memlûk Deyrülkamer'i ana gövdeye bağlayacak noktalar sahipsiz kaldığı için 4 günlük enklav.
  - önerilen düzeltme: Banyas, Câbiye: 1516 Osmanlı fethine dek memluk dönemi (kaynakla). Ain Mallaha, Akrabâ arkeolojik yer ise 1516'da 'o devirde yok' (bit) — merdiven ④.
  - kaynak: veri ölçümü

### E090 · Sırp Krajina Cumhuriyeti (RSK; fiilî) (`sirp-krajina-cumhuriyeti`) · 1995-08-05 → 1995-08-07 · 918 km²

- nokta [44.065, 15.701], en büyük kesit 1995-08-05 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: hirvatistan 93%
- koridor: 95.3 km · bosna-hersek 6/9, hirvatistan 3/9
- içindeki yerleşimler (1, s.eksklav 0): Benkovac (sirp-krajina-cumhuriyeti)
- koridor yerleşimleri: Glina (sirp-krajina-cumhuriyeti); Udbina (hirvatistan); Ostrovica (Stara Ostrovica, Kulen Vakuf) (bosna-hersek); Bihaç (Bihać) (bosna-hersek); Krupa (Bosanska Krupa) (bosna-hersek)
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `KAYNAKLI`
  - gerekçe: Benkovac sirp-krajina → 1995-08-07; Fırtına Harekâtı'nda Benkovac 5 Ağustos 1995'te alındı (teyitsiz). Çevre 08-05'te Hırvat. [KAYNAK-1104 (kismen): Benkovac 1991'de isgal edildi, 1995 Oluja'da kurtarildi (yalniz yil); Oluja 4-7 Agustos 1995. — "Oslobođen u vojno-redarstvenoj akciji Oluja 1995." · Benkovac icin 5 Agustos gunu kaynakta yok; t=1995-08-07 operasyon sonuyla uyumlu.]
  - önerilen düzeltme: Benkovac t 1995-08-07 → kaynaklı düşüş günü; hirvatistan dönemi eklensin (kayıtta 1995 sonrası dönem YOK — sahipsizlik).
  - kaynak: Hrvatska enciklopedija, Benkovac, https://enciklopedija.hr/clanak/benkovac ; Domovinski rat, https://enciklopedija.hr/clanak/domovinski-rat · önceki: bulunamadı (Hrvatska enciklopedija 'Oluja' önerilir)

### E091 · Yunanistan Geçici Demokratik Hükûmeti (Markos, iç savaş) (`yunanistan-gecici-demokratik-hukumet`) · 1947-12-24 → 1949-08-28 · 900 km²

- nokta [40.553, 21.452], en büyük kesit 1947-12-24 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: yunanistan 100%
- koridor: 23.3 km · yunanistan 9/9
- içindeki yerleşimler (1, s.eksklav 0): Vitsi (Grammos-Vitsi, DSE üssü) (yunanistan-gecici-demokratik-hukumet)
- koridor yerleşimleri: Görice (Korçë) (arnavutluk-halk-cumhuriyeti); Grammos (DSE üssü) (yunanistan-gecici-demokratik-hukumet); Kesriye (Kastoria) (yunanistan); Filorina (Florina) (yunanistan)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Vitsi ve Grammos DSE üsleri (Vitsi 1947-12-24 → 1949-08-28): Grammos-Vitsi sığınağı Yunan Ulusal Ordusu çevrili dağ üssü; koridor Görice (Arnavutluk) sınır hattı. Gerçek eksklav; Pirsos Harekâtı Ağustos 1949'da sonlandırdı (gün teyitsiz).
  - önerilen düzeltme: Vitsi/Grammos t günleri kaynakla.
  - kaynak: bulunamadı

### E092 · Gurcistan Demokratik Cumhuriyeti (`gurcistan-demokratik-cumhuriyeti`) · 1919-04-20 → 1920-04-01 · 857 km²

- nokta [41.213, 42.24], en büyük kesit 1919-04-20 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: ingiltere 99%
- koridor: 7.4 km · DENIZ/BOS 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Şavşat (ingiltere); Saylıca (gurcistan-demokratik-cumhuriyeti); Makhalak’auri (ingiltere); Hulo (Acara) (ingiltere)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Şavşat (ingiltere) ile Ardahan/Saylıca (Gürcistan) arasında noktasız yüz; 7 km. Şavşat 1878-1918 Ardahan okrugundaydı, 1919 Batum İngiliz idaresinde gösterilmesi ayrıca sınanmalı.
  - önerilen düzeltme: Şavşat 1919-20 sahibi kaynakla (Ardahan okrugu ile Gürcistan'a mı geçti?).
  - kaynak: veri ölçümü

### E093 · İsviçre Konfederasyonu (`isvicre`) · 1500-04-14 → 1503-01-01 · 758 km²

- nokta [46.414, 9.04], en büyük kesit 1500-04-14 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: milanoduka 100%
- koridor: 7.5 km · milanoduka 9/9
- içindeki yerleşimler (1, s.eksklav 0): Bellinzona (isvicre)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Bellinzona isvicre 1500-04-14'ten; 110 km içinde başka İsviçre noktası yok (Luzern 90 km 'isvicre'); Uri/Leventina yolu noktasız. Locarno, Lugano, Chiavenna milanoduka. İsviçre gövdesine bağlanan koridor noktasız emilmeyle kopuk.
  - önerilen düzeltme: Uri, Leventina (Altdorf, Airolo) noktaları; Bellinzona 1500 Uri/Schwyz/Nidwalden teyidi.
  - kaynak: veri ölçümü

### E094 · Fransa Cumhuriyeti (`fransa-cumhuriyet`) · 1912-01-01 → 1923-10-29 · 580 km²

- nokta [4.482, 27.154], en büyük kesit 1912-01-01 · kesit sayısı 29 · sınıf sayımı {'ENKLAV': 16}
- çevre: belcika 96%, ingiliz-sudani 2%
- koridor: 40.6 km · belcika 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Uele havzasında 120 km içinde tek nokta (Niangara). Belçika Kongosu içindeki Fransız parçası noktasız yüz.
  - önerilen düzeltme: Uele'ye Belçika Kongosu noktası (Ango ya da Bondo) kaynakla.
  - kaynak: veri ölçümü

### E095 · Osmanlı (`OSMANLI`) · 1918-10-06 → 1920-07-01 · 566 km²

- nokta [32.728, 35.598], en büyük kesit 1918-11-08 · kesit sayısı 17 · sınıf sayımı {'KARA-EKSKLAV': 2, 'ENKLAV': 4}
- çevre: ingiltere 100%
- koridor: 466.8 km · DENIZ/BOS 7/9, fransa-cumhuriyet 2/9
- içindeki yerleşimler (1, s.eksklav 0): Tiberya (Tabariyye / Tiberias) (OSMANLI)
- koridor yerleşimleri: Ain Mallaha (Eynan) (sahipsiz); Banyas (sahipsiz); Sayda (fransa-cumhuriyet); Deyrülkamer (Dayr al-Kamer) (fransa-cumhuriyet); Beyrut (fransa-cumhuriyet); Gubla (Byblos) (sahipsiz); Trablusşam (fransa-cumhuriyet); Tartus (sahipsiz); Cebele (Jablah) (sahipsiz); Lazkiye (Latakia) (sahipsiz) … +4
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Tiberya OSMANLI d 1840-11-27 → 1920-07-01; Akkâ ingiltere 1918-09-23 → 1920-07-01 (aynı bölge). Osmanlı 'enklavı' Tiberya d'sinin İngiliz işgalinde kesilmemesinden. Banyas, Câbiye, Ain Mallaha dönemsiz (E089 ile aynı).
  - önerilen düzeltme: Tiberya d t → İngiliz işgali (Akkâ ile hizalı; gün bulunamadı), s: ingiltere 1918 → 1920-07-01.
  - kaynak: TDV tiberya sonuç vermedi; veri ölçümü

### E096 · Macaristan Krallığı (Habsburg Tacı) (`macaristan-habsburg`) · 1689-09-11 → 1689-09-16 · 544 km²

- nokta [43.955, 21.226], en büyük kesit 1689-09-11 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 100%
- koridor: 11.1 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Yagodina (Jagodina) (macaristan-habsburg)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-d` · güven `OLCUM`
  - gerekçe: Yagodina 1689-09-11 → 09-16 macaristan-habsburg, çevre Osmanlı: 5 günlük cep. D287 Semendire–Jagodina B4 vakasının kardeşi (Jagodina günleri bulunamamıştı).
  - önerilen düzeltme: D287 B4 kararı bekliyor; Jagodina 1689 Habsburg günü kaynakla.
  - kaynak: denetim/D3-EKSKLAV-0917.md (bulunamadı beyanı)

### E097 · Osmanlı (`OSMANLI`) · 1303-01-01 → 1321-04-01 · 523 km²

- nokta [40.103, 28.866], en büyük kesit 1305-01-01 · kesit sayısı 4 · sınıf sayımı {'ENKLAV': 4}
- çevre: bizans 100%
- koridor: 8.4 km · bizans 9/9
- içindeki yerleşimler (1, s.eksklav 0): Kite (Kete) (OSMANLI)
- koridor yerleşimleri: Adranos (Orhaneli) (bizans); Dimbos (OSMANLI); Bursa (bizans); Kestel (OSMANLI)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Kite (Kete) OSMANLI d 1303-01-01 → 1402; Kestel, Dimbos aynı 1303-01-01; çevre Bursa, Adranos, Mudanya bizans. Erken Osmanlı ileri karakolu olabilir ama 1303-01-01 yıl-hassasiyetli ve TDV Bursa Kite/Kestel'i yalnız ilçe listesinde anıyor (Osman'ın Bursa kuşatması 1308 sonrası).
  - önerilen düzeltme: Kite, Kestel, Dimbos Osmanlı f'sinin kaynağı (gün bulunamadı).
  - kaynak: TDV bursa okundu: Kite/Kestel erken dönemi yok; bulunamadı

### E098 · Bizans (`bizans`) · 1323-09-01 → 1326-04-06 · 326 km²

- nokta [40.175, 29.037], en büyük kesit 1326-01-01 · kesit sayısı 4 · sınıf sayımı {'ENKLAV': 4}
- çevre: OSMANLI 100%
- koridor: 8.5 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Bursa (bizans)
- koridor yerleşimleri: Kite (Kete) (OSMANLI); Gölyazı (Apollonia) (bizans); Kestel (OSMANLI); Mudanya (OSMANLI)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: TDV Bursa: Osman Bey'in kuşatması ve abluka sonunda 'şehir Osmanlılar’a teslim edildi (6 Nisan 1326)'. Atlas Bursa bizans 1261-07-25 → 1326-04-06 birebir uyumlu; kuşatılmış Bizans şehri çevresi Osmanlı: gerçek enklav.
  - önerilen düzeltme: Yapısal düzeltme yok (başlangıç 1323-09-01 komşu Osmanlı f'sine bağlı).
  - kaynak: TDV bursa (islamansiklopedisi.org.tr/bursa)

### E099 · Maratha Konfederasyonu (`maratha`) · 1803-08-12 → 1818-01-01 · 266 km²

- nokta [19.325, 73.881], en büyük kesit 1817-01-01 · kesit sayısı 9 · sınıf sayımı {'ENKLAV': 5}
- çevre: ingiliz-hindistani 99%
- koridor: 2.7 km · ingiliz-hindistani 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Pune yakınında (19,33K 73,88D) 60 km içinde nokta yok. 1803-18'de Pune Peşva başkenti; çevrenin 'ingiliz-hindistani' olması seyrek noktadan.
  - önerilen düzeltme: Pune (Peşva başkenti) noktası var mı sınansın; yoksa eklensin (maratha → 1817-11-17 İngiliz, kaynakla).
  - kaynak: veri ölçümü

### E100 · Polonya Cumhuriyeti (`polonya`) · 1919-08-27 → 1923-10-29 · 265 km²

- nokta [47.826, 24.974], en büyük kesit 1919-08-27 · kesit sayısı 8 · sınıf sayımı {'ENKLAV': 2}
- çevre: romanya-kralligi 100%
- koridor: 39.2 km · romanya-kralligi 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Güney Bukovina'da (47,83K 24,97D) 80 km içinde nokta yok; Romanya içinde 'Polonya' parçası.
  - önerilen düzeltme: Câmpulung Moldovenesc ya da Vatra Dornei noktası (romanya-kralligi) kaynakla.
  - kaynak: veri ölçümü

### E101 · İngiliz Sudanı (Anglo-Mısır Kondominyumu) (`ingiliz-sudani`) · 1910-06-16 → 1923-10-29 · 215 km²

- nokta [4.027, 26.871], en büyük kesit 1919-09-08 · kesit sayısı 5 · sınıf sayımı {'KARA-EKSKLAV': 2, 'ENKLAV': 1}
- çevre: belcika 92%, zende 67%, fransa-cumhuriyet 8%
- koridor: 77.8 km · belcika 8/9, fransa-cumhuriyet 1/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: E094 ile aynı Uele boşluğu; Belçika Kongosu içinde İngiliz Sudanı parçası.
  - önerilen düzeltme: E094 kovası.
  - kaynak: veri ölçümü

### E102 · İsviçre Konfederasyonu (`isvicre`) · 1862-12-08 → 1923-10-29 · 205 km²

- nokta [46.378, 5.572], en büyük kesit 1862-12-08 · kesit sayısı 10 · sınıf sayımı {'ENKLAV': 1}
- çevre: fransa-cumhuriyet 100%
- koridor: 17.5 km · fransa-cumhuriyet 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Fransız Jura'sında (Saint-Claude yöresi) Cenevre peteğinin emdiği yüz; 60 km içinde yalnız Cenevre ve Annemasse.
  - önerilen düzeltme: Saint-Claude (fransa) noktası.
  - kaynak: veri ölçümü

### E103 · Bizans (`bizans`) · 1299-01-01 → 1313-01-01 · 185 km²

- nokta [40.059, 29.976], en büyük kesit 1303-01-01 · kesit sayısı 10 · sınıf sayımı {'ENKLAV': 4}
- çevre: OSMANLI 100%
- koridor: 14.0 km · OSMANLI 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Bozüyük (OSMANLI); Ermeni Derbendi (OSMANLI); Pazaryeri (OSMANLI); Söğüt (OSMANLI); Harmankaya (bizans); Bilecik (OSMANLI); Lefke (Osmaneli) (bizans); Leblebicihisar (bizans); Absu (Hypsu) (bizans)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Harmankaya 1299-1313 bizans; çevre Osmanlı. Harmankaya tekfuru Köse Mihal erken dönemde Osman'a katıldı; ihtida yılı (1300'ler başı) ile bizans döneminin sonu karşılaştırılmalı. [KAYNAK-1104 (celiski): Osmanlı geleneğine göre Köse Mihal Bizans'a bağlı Harmankaya tekfuru iken Osman'ın silah arkadaşı oldu, muhtemelen 713'te (1313) Osmanlılar'a tâbi olup İslâm'ı kabul etti; bir kısım araştırmacı (Imber) rivayeti uydurma sayar. — "muhtemelen 713’te (1313) Osmanlılar’a tâbi olarak İslâmiyet’i kabul etmiştir" · Hüküm YAPAY-c → GERCEK (beyanlı): Harmankaya'nın 1313'e dek Bizans tekfurluğu olarak Osmanlı arasında kalması TDV'deki geleneksel anlatıyla uyumlu. Hicrî kural: 713 ∩ 1313 → bitiş 1313-04-28 (atlas 1313-01-01). ic_not: rivayetin tartışmalı olduğu (Imber).] [hüküm YAPAY/YAPAY-c → GERCEK/GERCEK, kaynak üzerine]
  - önerilen düzeltme: Harmankaya bizans t → 1313-04-28 (713 ∩ 1313, TDV Mihaloğulları); ic_not: rivayet tartışmalı (Imber).
  - kaynak: TDV İslâm Ansiklopedisi, "Mihaloğulları" (Fahameddin Başar), https://islamansiklopedisi.org.tr/mihalogullari · önceki: TDV 'Köse Mihal' önerilir (okunmadı)

### E104 · İspanya (`ispanya`) · 1564-01-01 → 1673-01-01 · 174 km²

- nokta [34.82, -4.056], en büyük kesit 1565-01-01 · kesit sayısı 63 · sınıf sayımı {'ENKLAV': 4}
- çevre: sadi 100%
- koridor: 41.0 km · sadi 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Nekor (Temsaman yöresi) (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-m` · güven `OLCUM`
  - gerekçe: Ölçüldü: Bâdis (Peñón de Vélez) 'enklav:true' (1564-2000), ama Rif kıyısında 174 km²lik hücre İspanyol; Nekor o devirde yok, en yakın Sa'dî noktası el-Hüseyme 49 km. Kayalık bir adanın hücresi karaya taşıyor.
  - önerilen düzeltme: Motor sorusu (E083 ile aynı). Veri yolu: Rif kıyısına Sa'dî/Alevî noktası (Bâdis şehri ya da Targuist).
  - kaynak: veri ölçümü

### E105 · Memlûk (`memluk`) · 1516-10-01 → 1516-12-21 · 169 km²

- nokta [31.855, 35.116], en büyük kesit 1516-10-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: OSMANLI 99%
- koridor: 18.8 km · OSMANLI 9/9
- içindeki yerleşimler (1, s.eksklav 0): Gibea (sahipsiz)
- koridor yerleşimleri: Hebron (sahipsiz); Betar (Battir) (sahipsiz); Kudüs (OSMANLI); Ramallah (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü: Gibea, Hebron, Betar, Ramallah 1516-10'da SAHİPSİZ; Kudüs Osmanlı. Memlûk parçasını sahipsiz noktalar çevreliyor.
  - önerilen düzeltme: Hebron, Ramallah: memluk → Osmanlı fethi günü (kaynakla). Gibea, Betar arkeolojik yer ise bit (merdiven ④).
  - kaynak: veri ölçümü

### E106 · Bâbürlü (Timurlu-Hint) İmparatorluğu (`babur-imparatorlugu`) · 1759-01-01 → 1760-01-01 · 157 km²

- nokta [19.361, 73.899], en büyük kesit 1759-01-01 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 2}
- çevre: maratha 99%
- koridor: 2.7 km · maratha 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: E099 ile aynı Pune boşluğu, 1759.
  - önerilen düzeltme: E099 kovası.
  - kaynak: veri ölçümü

### E107 · Avusturya Cumhuriyeti (I. Cumhuriyet) (`avusturya-cumhuriyet`) · 1919-01-01 → 1920-07-16 · 156 km²

- nokta [48.529, 16.771], en büyük kesit 1920-06-04 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 2, 'ENKLAV': 1}
- çevre: cekoslovakya 100%, macaristan-naiplik 51%
- koridor: 9.6 km · cekoslovakya 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Marchfeld'de (48,53K 16,77D) Klosterneuburg ve Mikulčice epok dışında; Klosterneuburg kaydı 'bit:1281-01-01' ve dönemsiz — atlasta 1281 sonrası yok.
  - önerilen düzeltme: Klosterneuburg kaydı incelensin (bit 1281 neden?); Marchegg ya da Gänserndorf noktası.
  - kaynak: veri ölçümü

### E108 · Karnatik Nevablığı (`karnatik`) · 1763-01-01 → 1801-07-31 · 145 km²

- nokta [12.63, 79.381], en büyük kesit 1763-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: ingiliz-hindistani 100%
- koridor: 7.8 km · ingiliz-hindistani 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Kançipuram (Kanchipuram) (ingiliz-hindistani)
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `KAYNAK-GEREK`
  - gerekçe: Ölçüldü: Arkot 1714-1801 karnatik; Vellor 1760'tan, Cinci 1761-04-05'ten ingiliz-hindistani. Karnatik nevvabı 31.07.1801 antlaşmasına dek egemendi; Vellor nevvabın kalesiydi. Kançipuram 1763 cagirinde (İngiliz) — doğru olabilir.
  - önerilen düzeltme: Vellor (1760 → 1801-07-31) ve Cinci (1761 → 1801-07-31) karnatik (İngiliz garnizonu beyanla). Kaynak: Imperial Gazetteer 'North Arcot', 'South Arcot'.
  - kaynak: veri ölçümü; tarih kaynak gerek

### E109 · Paraguay Cumhuriyeti (`paraguay-cumhuriyeti`) · 1872-03-26 → 1915-11-11 · 144 km²

- nokta [-21.662, -57.466], en büyük kesit 1900-01-17 · kesit sayısı 9 · sınıf sayımı {'ENKLAV': 5}
- çevre: brezilya-imparatorlugu 100%, brezilya-cumhuriyeti 100%
- koridor: 13.6 km · brezilya-cumhuriyeti 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Mato Grosso güneyinde (Porto Murtinho yöresi) 80 km içinde nokta yok; Brezilya içinde 'Paraguay' parçası.
  - önerilen düzeltme: Porto Murtinho (brezilya) noktası.
  - kaynak: veri ölçümü

### E110 · İspanya (`ispanya`) · 1866-11-04 → 1923-10-29 · 106 km²

- nokta [38.912, -7.501], en büyük kesit 1899-11-17 · kesit sayısı 14 · sınıf sayımı {'ENKLAV': 8}
- çevre: portekiz 100%
- koridor: 24.5 km · portekiz 7/9, KENDI 2/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Elvas/Campo Maior yöresinde Portekiz noktası yok; Badajoz peteği sınırı aşıyor. (Olivenza 1801'den beri İspanyol — o ayrı ve gerçek.)
  - önerilen düzeltme: Elvas ve Campo Maior (portekiz) noktaları.
  - kaynak: veri ölçümü

### E111 · Kaçar Hanedanı (İran) (`kacar`) · 1812-01-01 → 1925-10-31 · 97 km²

- nokta [30.53, 47.753], en büyük kesit 1812-01-01 · kesit sayısı 14 · sınıf sayımı {'DAR-AYRIM': 9, 'ENKLAV': 1}
- çevre: irak-kralligi 100%, OSMANLI 77%, ingiltere 77%
- koridor: 0.1 km · irak-kralligi 9/9
- içindeki yerleşimler (1, s.eksklav 0): Basra (OSMANLI)
- koridor yerleşimleri: Eski Basra (Zübeyr) (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-m` · güven `OLCUM`
  - gerekçe: Ölçüldü: Basra'da Şattülarap kıyısında 97 km²lik Kaçar şeridi; koridor 0,1 km, 9 kesitte DAR-AYRIM. Nehir yaslanmasının geometrik artığı.
  - önerilen düzeltme: Veri değil motor (nehir yaslanması); HAVVA'ya not.
  - kaynak: veri ölçümü

### E112 · Britanya (`ingiltere`) · 1420-05-21 → 1422-01-01 · 93 km²

- nokta [48.34, 3.185], en büyük kesit 1420-05-21 · kesit sayısı 2 · sınıf sayımı {'ENKLAV': 1}
- çevre: fransa 100%
- koridor: 3.3 km · fransa 5/9, DENIZ/BOS 4/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü: Melun kaydı 'bit:1281-01-01' ve dönemsiz — atlasta 1420'de Melun yok. V. Henry'nin 1420 Melun kuşatması bilinen olay; noktasız yüz İngiliz parçası oluyor.
  - önerilen düzeltme: Melun kaydı incelensin (bit 1281 neden? mükerrer mi?); 1420-11 İngiliz alışı (kaynakla).
  - kaynak: veri ölçümü

### E113 · Sovyet Rusya (`sovyet-rusya`) · 1918-01-04 → 1920-12-31 · 83 km²

- nokta [63.502, 30.584], en büyük kesit 1918-04-08 · kesit sayısı 40 · sınıf sayımı {'ENKLAV': 10}
- çevre: finlandiya 100%
- koridor: 42.1 km · finlandiya 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Fin Karelyası'nda (63,5K 30,58D) yakın noktalar Nurmes 59 km, Joensuu 108 km (finlandiya); Sovyet parçası noktasız yüz.
  - önerilen düzeltme: Lieksa (finlandiya) noktası.
  - kaynak: veri ölçümü

### E114 · Kutsal Roma / Almanya (`almanya`) · 1129-01-01 → 1180-01-01 · 82 km²

- nokta [46.75, 15.835], en büyük kesit 1129-01-01 · kesit sayısı 5 · sınıf sayımı {'ENKLAV': 4}
- çevre: macaristan 100%
- koridor: 3.1 km · macaristan 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Maribor (Marburg) (sahipsiz)
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: Ölçüldü: Maribor ve Ptuj'un 1281 öncesi dönemi yok (ikisi de 1281-01-01'de başlıyor) → 1129-80'de sahipsiz. Ptuj kaydının kendi kaynağı (Hrvatska enciklopedija 'Ptuj') 977'den Salzburg diyor.
  - önerilen düzeltme: Ptuj: salzburg-prens-basepiskoposlugu f 1281 → 0977 (kayıttaki kaynak). Maribor: 1281 öncesi Steiermark/almanya zinciri (kaynakla).
  - kaynak: Hrvatska enciklopedija 'Ptuj' (Ptuj kaydında)

### E115 · Kutsal Roma / Almanya (`almanya`) · 1276-11-21 → 1281-01-01 · 82 km²

- nokta [46.75, 15.835], en büyük kesit 1276-11-21 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: macaristan 95%
- koridor: 3.1 km · macaristan 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Maribor (Marburg) (sahipsiz)
- **HÜKÜM: BIRLESMELI** · kova `BIRLESMELI` · güven `OLCUM`
  - gerekçe: E114 ile aynı, 1276-81.
  - önerilen düzeltme: E114 kovası.
  - kaynak: veri ölçümü

### E116 · Ming Hanedanı (`ming-hanedani`) · 1382-01-06 → 1382-01-15 · 79 km²

- nokta [24.212, 101.904], en büyük kesit 1382-01-06 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: kuzey-yuan 100%
- koridor: 30.1 km · kuzey-yuan 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: E023 ile aynı Ming 1382 Yunnan günü çakışması.
  - önerilen düzeltme: E023 kovası.
  - kaynak: veri ölçümü

### E117 · Karamanoğulları (`karaman`) · 1365-01-01 → 1366-01-01 · 78 km²

- nokta [39.001, 34.044], en büyük kesit 1365-01-01 · kesit sayısı 1 · sınıf sayımı {'ENKLAV': 1}
- çevre: eretna 98%
- koridor: 1.7 km · eretna 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: Kırşehir (eretna)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Kırşehir yanında 1,7 km'lik geometrik kopma; parça noktasız.
  - önerilen düzeltme: yok (geometri artığı)
  - kaynak: veri ölçümü

### E118 · İspanya (`ispanya`) · 1866-11-04 → 1923-10-29 · 70 km²

- nokta [38.931, -7.26], en büyük kesit 1898-12-10 · kesit sayısı 14 · sınıf sayımı {'ENKLAV': 9}
- çevre: portekiz 99%
- koridor: 6.8 km · portekiz 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: E110 ile aynı Badajoz taşması.
  - önerilen düzeltme: E110 kovası.
  - kaynak: veri ölçümü

### E119 · Amerika Birleşik Devletleri (`abd`) · 1846-06-15 → 1877-10-05 · 68 km²

- nokta [45.958, -117.13], en büyük kesit 1848-05-30 · kesit sayısı 42 · sınıf sayımı {'ENKLAV': 12}
- çevre: nez-perce 97%
- koridor: 1.5 km · nez-perce 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Wallowa yöresinde 80 km içinde nokta yok; Nez Perce içinde ABD parçası.
  - önerilen düzeltme: Bölgeye nokta (kaynakla) ya da beyan.
  - kaynak: veri ölçümü

### E120 · İtalya (`italya`) · 1918-11-12 → 1923-10-29 · 58 km²

- nokta [46.805, 10.257], en büyük kesit 1918-11-12 · kesit sayısı 6 · sınıf sayımı {'ENKLAV': 6}
- çevre: isvicre 99%, avusturya-cumhuriyet 0%
- koridor: 4.2 km · DENIZ/BOS 9/9
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Engadin'de İsviçre noktası yok (Davos 32 km); Bormio peteği sınırı aşıyor.
  - önerilen düzeltme: Zernez ya da Scuol (isvicre) noktası.
  - kaynak: veri ölçümü

### E121 · İsviçre Konfederasyonu (`isvicre`) · 1815-06-09 → 1923-10-29 · 50 km²

- nokta [46.075, 9.475], en büyük kesit 1815-06-09 · kesit sayısı 17 · sınıf sayımı {'KARA-EKSKLAV': 6, 'ENKLAV': 11}
- çevre: italya 100%, avusturya 85%, sardinya 85%
- koridor: ? km · 
- içindeki yerleşimler (0, s.eksklav 0): —
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Valchiavenna/Como gölü kuzeyinde İsviçre parçası; Chiavenna ve Sondrio avusturya, Bellinzona peteği aşıyor.
  - önerilen düzeltme: Gravedona ya da Colico noktası.
  - kaynak: veri ölçümü

## ② KARA-EKSKLAV — koridorda yabancı kara (alanı en büyük 100)

### K001 · İtalya (`italya`) · 1936-06-01 → 1941-11-30 · 920.610 km²

- nokta [28.107, 16.077], en büyük kesit 1941-04-01 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: misir-kralligi 9%, fransa-cumhuriyet 4%
- koridor: 2025.3 km · ingiliz-sudani 5/9, DENIZ/BOS 4/9
- içindeki yerleşimler (45, s.eksklav 32): Ramletü Murzuk (sahipsiz); Gât (italya); İdehân Ubârî (sahipsiz); İdehân Murzuk (sahipsiz); el-Katrûn (italya); Ramletü Zellâf (sahipsiz); Murzuk (Fizan) (italya); Tırgan (Traghan) (italya) … +37
- koridor yerleşimleri: Esh-Shaheinab (sahipsiz); Kortî (ingiliz-sudani); Dongola (ingiliz-sudani); Kerma (ingiliz-sudani)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (koridor 2025 km). Parça Libya (Trablusgarp/Fizan) kesiti; öteki İtalyan gövde Doğu Afrika (AOI). Libya ile AOI arasında Mısır, İngiliz Sudanı, Fransız toprakları var: ayrı denizaşırı sömürge gövdeleri. Ölçüldü: içteki noktaların çoğu (Ramletü Murzuk, İdehân Ubârî/Murzuk, Ramletü Zellâf) sahipsiz çöl yerleri, parçanın varlığını bunlar değil Libya yerleşimleri taşıyor. [KAYNAK-1104 (kismen): AOI 1 Haziran 1936 kraliyet kararnamesiyle kuruldu (baslangic tam teyit). Libya'da Italyan donemi 1911-12'den; Fizan isgali 1913 (Treccani). — "con regio decreto 1° giugno 1936" · Bitis (Gondar, Kasim 1941) Treccani'de yok; AOI'nin sonu 1947 baris antlasmasi diye geciyor. Treccani Fizan isgalini 1913 veriyor (hukum metnindeki Fizan kesiti ile uyumlu ama gun yok).]
  - önerilen düzeltme: Yapısal düzeltme yok. Sahipsiz çöl noktaları ayrı iş (Değişmez 1).
  - kaynak: Treccani, Africa Orientale Italiana (Dizionario di Storia), https://www.treccani.it/enciclopedia/africa-orientale-italiana_(Dizionario-di-Storia)/ ; Treccani, Libia, https://www.treccani.it/enciclopedia/libia/ · önceki: bulunamadı (web harcanmadı, UZAK)

### K002 · Britanya (`ingiltere`) · 1897-01-01 → 1960-10-01 · 867.291 km²

- nokta [9.111, 8.804], en büyük kesit 1916-06-06 · kesit sayısı 105 · sınıf sayımı {'KARA-EKSKLAV': 25}
- çevre: fransa-cumhuriyet 56%, sokoto 31%, jukun-kvararafa 22%
- koridor: 2406.0 km · fransa-cumhuriyet 4/9, belcika 4/9, portekiz 1/9
- içindeki yerleşimler (29, s.eksklav 0): Aba (Nijerya) (sahipsiz); Aroçukvu (ingiltere); Owerri (sahipsiz); Umuahia (sahipsiz); Igbo-Ukwu (ingiliz-nijerya); Onitsha (ingiltere); Nri (Agukwu Nri) (ingiliz-nijerya); Eski Kalabar (ingiltere) … +21
- koridor yerleşimleri: Sandoa (belcika-kongo)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (2406 km). Nijerya, öteki İngiliz gövdelerden (Mısır-Sudan, Doğu/Güney Afrika) Fransız ve Belçika toprakları ile ayrı: gerçek denizaşırı gövde. KIMLIK etiketi: parça 'ingiltere', Igbo-Ukwu/Nri 'ingiliz-nijerya' — ölçüldü: devletler.js'te ingiliz-nijerya kaydı `harita: ingiltere` taşıyor, yani boya aynı, iki kimlik YAPAY-k değil (takma ad). Aba/Owerri/Umuahia sahipsiz (üçü). [KAYNAK-1104 (kismen): Nijerya 1 Ekim 1960'ta bagimsizlik/taninma; oncesinde Britanya egemenligi altinda. Baslangic (1897) teyit edilemedi. — "previously under British sovereignty" · Britannica 403.]
  - önerilen düzeltme: Yok. Sahipsiz üç Nijerya noktası ayrı iş.
  - kaynak: Office of the Historian (ABD Disisleri), Countries: Nigeria, https://history.state.gov/countries/nigeria · önceki: veri ölçümü (devletler.js harita: alanı)

### K003 · Portekiz (`portekiz`) · 1902-01-01 → 1974-09-20 · 728.282 km²

- nokta [-19.047, 34.173], en büyük kesit 1922-07-20 · kesit sayısı 22 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: ingiltere 41%, guney-afrika-birligi 6%, ingiliz-svaziland 4%
- koridor: 931.5 km · ingiltere 9/9
- içindeki yerleşimler (17, s.eksklav 0): Angoche (portekiz-mozambik); Mozambik Adası (portekiz-mozambik); Montepuez (portekiz-mozambik); İbo (Kerimba) (portekiz-mozambik); Mosimboa (portekiz-mozambik); Lourenço Marques (portekiz-mozambik); Mabalane (portekiz-mozambik); Cikualakuala (portekiz-mozambik) … +9
- koridor yerleşimleri: Kasempa (ingiltere)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Mozambik, Portekiz Angola'sından Britanya Rodezya/Zambiya (koridor 931 km, Kasempa) ile ayrı: gerçek ayrı sömürge gövdesi. İçteki 17 noktanın hepsi 'portekiz-mozambik'; ölçüldü: devletler.js'te `harita: portekiz` -> boya aynı, YAPAY-k değil.
  - önerilen düzeltme: Yok.
  - kaynak: veri ölçümü (devletler.js harita: alanı)

### K004 · Fransa Cumhuriyeti (`fransa-cumhuriyet`) · 1960-08-11 → 1960-08-17 · 608.753 km²

- nokta [-1.121, 13.494], en büyük kesit 1960-08-13 · kesit sayısı 3 · sınıf sayımı {'DAR-AYRIM': 1, 'KARA-EKSKLAV': 1}
- çevre: kamerun 42%, kongo-kinsasa 18%, orta-afrika-cumhuriyeti 2%
- koridor: 2682.5 km · ingiltere 3/9, nijer 3/9, kamerun 1/9, DENIZ/BOS 1/9, KENDI 1/9
- içindeki yerleşimler (16, s.eksklav 0): Puent-Nuar (fransa-cumhuriyet); Loango (Buali) (fransa-cumhuriyet); Cibanga (fransa-cumhuriyet); Muila (Mouila) (fransa-cumhuriyet); Ogooué havzası (fransa-cumhuriyet); Lambarene (fransa-cumhuriyet); Librevil (Libreville) (fransa-cumhuriyet); Sibiti (fransa-cumhuriyet) … +8
- koridor yerleşimleri: Bauci (Bauchi) (ingiltere); Hoggar (sahipsiz)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: 1960 Ağustos'unda AEF ülkeleri sırayla bağımsız oldu (Çad 11, OAC 13, Kongo 15, Gabon 17); Gabon 6 gün Fransız kalıntısı olarak kaldı. Sömürge çözülmesinin gerçek anı. [KAYNAK-1104 (tam): Cad 11 Agustos 1960'ta, Gabon 17 Agustos 1960'ta bagimsizligini ilan etti (Fransiz Ekvator Afrikasi'ndan). OAC (13 Agustos) ve Kongo (15 Agustos) okunmadi. — "Gabon's independence from French Equatorial Africa was proclaimed" · Gabon'un 6 gun 'Fransiz kalintisi' olmasi bir yorum; kaynak yalniz bagimsizlik gunlerini verir.]
  - önerilen düzeltme: yok
  - kaynak: Office of the Historian (ABD Disisleri), Countries: Chad, https://history.state.gov/countries/chad ; Gabon, https://history.state.gov/countries/gabon

### K005 · Britanya (`ingiltere`) · 1914-11-22 → 1963-12-12 · 585.911 km²

- nokta [0.909, 37.14], en büyük kesit 1962-08-31 · kesit sayısı 73 · sınıf sayımı {'KARA-EKSKLAV': 7, 'DAR-AYRIM': 15}
- çevre: ingiliz-uganda-himayesi 61%, somali-cumhuriyeti 9%, tanganika 8%
- koridor: 804.3 km · tanganika 9/9
- içindeki yerleşimler (19, s.eksklav 0): Maçakos (ingiltere); Kitui (ingiltere); Garissa (ingiltere); İsiolo (ingiltere); Vacir (Wajir) (ingiltere); Marsabit (ingiltere); Mbarara (Nkore) (ingiltere); Hoima (Bunyoro) (ingiltere) … +11
- koridor yerleşimleri: Babati (tanganika)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: En büyük kesit 1962-08-31: Kenya+Uganda (İngiliz) ile Kuzey Rodezya/Nyasaland arasında 1961-12-09'da bağımsız olan Tanganika (devletler.js f=1961-12-09) var; koridor 804 km tanganika 9/9, iç noktalar hep ingiltere. 1914-1961 arasındaki DAR-AYRIM kesitler Tanganika mandası ile ilgili (ayrı mesele). [KAYNAK-1104: aday kaynak reddedildi — South African History Online akademik başvuru eseri değil] [KAYNAK-1104: aday kaynak reddedildi — South African History Online akademik başvuru eseri değil]
  - önerilen düzeltme: Yok.
  - kaynak: veri ölçümü (devletler.js tanganika f=1961-12-09)

### K006 · Fransa Cumhuriyeti (`fransa-cumhuriyet`) · 1817-01-01 → 1960-06-26 · 567.988 km²

- nokta [-18.707, 46.721], en büyük kesit 1900-01-01 · kesit sayısı 146 · sınıf sayımı {'ADA': 21, 'KARA-EKSKLAV': 5}
- çevre: antandroy 17%
- koridor: 3414.2 km · kongo-serbest-devleti 4/9, ingiltere 2/9, DENIZ/BOS 1/9, portekiz 1/9, alman-dogu-afrikasi 1/9
- içindeki yerleşimler (20, s.eksklav 0): Ambovombe (Antandroy) (fransa-cumhuriyet); İhosy (Bara) (fransa-cumhuriyet); Vohipeno (Antemoro) (fransa-cumhuriyet); Fianarantsoa (fransa-cumhuriyet); Mananjary (fransa-cumhuriyet); Ambositra (fransa-cumhuriyet); Antsirabe (fransa-cumhuriyet); Antananarivo (fransa-cumhuriyet) … +12
- koridor yerleşimleri: Tunduru (ingiltere); Njombe (ingiltere); Basankusu (kongo-serbest-devleti)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (3414 km). Parça Madagaskar (ada); sınıf KARA-EKSKLAV çünkü adada ayrı Antandroy petek var. Fransız gövdesinden denizle ayrı: denizaşırı. Eksklav olarak doğru, motor kaynaklı kusur değil. [KAYNAK-1104 (kismen): Fransa 19. yy basinda anakara postlarini birakip yalniz Sainte-Marie adasini tuttu; 1895'te Antananarivo isgal edildi (30 Eylul 1895), 1896 ayaklanmasindan sonra Gallieni monarsiyi kaldirip adayi Fransiz kolonisi ilan etti. — "retained nothing but" · 1817-1818 gunu ve 26 Haziran 1960 bagimsizlik bu kaynakta yok (1911). Tek dayanak 1911 EB oldugu icin en cok kismen.]
  - önerilen düzeltme: Yok.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Madagascar, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Madagascar · önceki: bulunamadı (UZAK)

### K007 · Fransa Cumhuriyeti (`fransa-cumhuriyet`) · 1818-01-01 → 1893-01-01 · 459.908 km²

- nokta [13.927, -11.871], en büyük kesit 1891-01-01 · kesit sayısı 63 · sınıf sayımı {'KARA-EKSKLAV': 33}
- çevre: moritanya-emirlikleri 37%, bundu 36%, futa-toro 29%
- koridor: 3001.9 km · DENIZ/BOS 3/9, ispanya 3/9, fas 2/9, moritanya-emirlikleri 1/9
- içindeki yerleşimler (19, s.eksklav 0): Dingiray (Dinguiraye) (fransa-cumhuriyet); Kangaba (fransa-cumhuriyet); Kirina (Mali) (sahipsiz); Bamako (fransa-cumhuriyet); Kita (fransa-cumhuriyet); Kahone (Salum) (fransa-cumhuriyet); Diahav (Sine) (fransa-cumhuriyet); Bulebane (Bundu) (fransa-cumhuriyet) … +11
- koridor yerleşimleri: Tâze (Taza) (fas); Nekor (Temsaman yöresi) (sahipsiz); el-Hüseyme (Alhucemas) (ispanya); Motril (ispanya); Cuenca (ispanya); Pamplona (ispanya)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (3001 km). Parça Senegal-Sudan (Bamako, Kita, Kahone); ana gövde Cezayir/Fransa. Aradan Fas, Moritanya emirlikleri geçiyor: gerçek ayrı gövde. Kirina sahipsiz (tek). [KAYNAK-1104 (kismen): Bamako 1883'te Fransiz sömürge birlikleri tarafindan isgal edildi (Galliéni 1880'de tanimisti); Samori ve Segu krali aleyhine arka us oldu. — "occupée par les troupes coloniales françaises" · Yalniz Bamako/yil; 1818 baslangici, Kita, Kahone yok.]
  - önerilen düzeltme: Yok.
  - kaynak: Meillassoux, 'The Social Structure of Modern Bamako', Africa 35/2 (1965), Cambridge ozet, https://www.cambridge.org/core/journals/africa/article/abs/the-social-structure-of-modern-bamako1/57CFCA0C94A8057967FEADF422D76BCA · önceki: bulunamadı (UZAK)

### K008 · Amerika Birleşik Devletleri (`abd`) · 1817-01-01 → 1856-01-01 · 442.493 km²

- nokta [44.85, -100.807], en büyük kesit 1851-11-13 · kesit sayısı 40 · sınıf sayımı {'KARA-EKSKLAV': 6, 'ADA': 3}
- çevre: pavni 18%, mandan 11%, lakota 4%
- koridor: 90.4 km · pavni 7/9, DENIZ/BOS 2/9
- içindeki yerleşimler (11, s.eksklav 0): Cheyenne (Wyoming) (sahipsiz); Fort Laramie (abd); Büyük Ovalar (orta kesim) (sahipsiz); Fort Pierre (Arikara/Lakota) (abd); Fort Fetterman (Powder Irmağı) (sahipsiz); Crow Agency (Apsáalooke) (abd); Miles City (Tongue Irmağı) (sahipsiz); Fort Benton (abd) … +3
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Büyük Ovalar (Dakota) kesiti 1851: ABD hukuken Louisiana Satın Alması içinde, fiilen Pavni (t=1857-09-24), Mandan (t=1851-09-17), Lakota (t=1890-12-29) denetiminde. Atlas yerli devletleri fiilî egemen modelliyor; koridorda yerleşim yok (ölçüldü). Bu bir model tercihi, bozukluk değil; kaynakla kesinleşmedi. İçte Cheyenne (1867'de kurulan şehir), Fort Fetterman gibi noktalar sahipsiz = o tarihte yok. [KAYNAK-1104 (kismen): Fort Laramie Antlasmasi 17 Eylul 1851'de imzalandi; Lakota ve Mandan-Hidatsa-Arikara topraklari Missouri boyunca ayri ayri tanimlandi. — "territory" · Pawnee (t=1857) ve hukuki ABD egemenligi vs fiili yerli denetim bu sayfada yok. Okul mufredat sayfasi; akademik degil.]
  - önerilen düzeltme: Yok. İsteğe: hukuki-fiilî ayrımı dipnotu.
  - kaynak: North Dakota Studies (State Historical Society of ND), Treaty of Fort Laramie 1851, https://www.ndstudies.gov/gr8/content/unit-iii-waves-development-1861-1920/lesson-1-changing-landscapes/topic-4-reservation-boundaries/section-2-treaty-fort-laramie-1851

### K009 · Çin Cumhuriyeti (`cin-cumhuriyeti`) · 1932-03-09 → 1945-08-17 · 420.760 km²

- nokta [47.056, 126.663], en büyük kesit 1939-02-10 · kesit sayısı 6 · sınıf sayımı {'KARA-EKSKLAV': 4}
- çevre: sovyet-rusya 14%, mancukuo 11%, meiji-japonya 1%
- koridor: 95.8 km · mancukuo 9/9
- içindeki yerleşimler (8, s.eksklav 0): Cilin (Jilin) (cin-cumhuriyeti); Dongjingcheng (Sanggyeong / Shangjing Longquanfu) (sahipsiz); Ningguta (cin-cumhuriyeti); Harbin (cin-cumhuriyeti); Sanxing (Yilan) (cin-cumhuriyeti); Qiqihar (cin-cumhuriyeti); Mergen (Nenjiang) (cin-cumhuriyeti); Aigun (cin-cumhuriyeti)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-b` · güven `OLCUM`
  - gerekçe: Ölçüldü: Mançukuo (devletler.js f=1932-03-09, t=1945-08-17); 1938-01-01'de Hsinking 'mancukuo' ama Harbin, Qiqihar, Cilin (Jilin), Ningguta, Sanxing (Yilan), Mergen (Nenjiang), Aigun hâlâ 'cin-cumhuriyeti' (kayıtlarında Qing -> 1912 cin-cumhuriyeti -> 1949, hiç mancukuo dönemi yok). Mançurya'nın büyük kısmı Mançukuo olduğu hâlde parça Çin boyalı kalıyor, 95 km koridor mancukuo.
  - önerilen düzeltme: Harbin, Qiqihar, Cilin, Ningguta, Sanxing, Mergen, Aigun: mancukuo dönemi (kaynakla gün; Mançukuo ilanı 1932-03-09 künyede) ve 1945 sonrası dönüş.
  - kaynak: veri ölçümü (kayit.py, cevre.py 1938-01-01)

### K010 · Yuan Hanedanı (Moğol Çin) (`yuan-hanedani`) · 1368-01-23 → 1368-06-29 · 420.134 km²

- nokta [23.706, 110.976], en büyük kesit 1368-01-23 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: ming-hanedani 11%, tran-hanedani 4%
- koridor: 747.2 km · ming-hanedani 6/9, DENIZ/BOS 3/9
- içindeki yerleşimler (14, s.eksklav 0): Leizhou (yuan-hanedani); Beihai (Pakhoi) (yuan-hanedani); Makao (Macau) (yuan-hanedani); Hong Kong (sahipsiz); Nanning (yuan-hanedani); Kanton (Guangzhou) (yuan-hanedani); Zhangzhou (yuan-hanedani); Zeytun (Quanzhou) (yuan-hanedani) … +6
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: UZAK (747 km). 1368 başında Ming'in kuruluşu (künye 1368-01-23) ile Yuan'ın Dadu'dan çekilmesi arasında Guangxi/Guangdong Yuan'da kalmış; Orta Çin Ming'e geçtiği için bölge ana Yuan gövdesinden kopuk. Hong Kong sahipsiz (tek). Parçanın bitiş günü (1368-06-29) kaynakla teyit edilmeli.
  - önerilen düzeltme: Bitiş günü Guangzhou/Guangxi için kaynak (gün bulunamadı).
  - kaynak: bulunamadı (UZAK)

### K011 · Amerika Birleşik Devletleri (`abd`) · 1778-05-27 → 1788-12-28 · 372.332 km²

- nokta [36.09, -86.895], en büyük kesit 1783-09-03 · kesit sayısı 6 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: ingiltere 28%, yeni-ispanya 18%, cherokee 16%
- koridor: 155.0 km · creek-konfederasyonu 9/9
- içindeki yerleşimler (7, s.eksklav 0): Moundville (abd); Etowah (abd); French Lick (Nashville) (abd); Kaskaskia (abd); Louisville (abd); Cahokia (sahipsiz); Vincennes (Poste Vincennes) (abd)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: 1783 civarı Cumberland (Nashville), Kentucky, Illinois yerleşimleri Atlantik eyaletlerinden Cherokee/Creek toprağı ile ayrı. Ölçüldü: koridorda yerleşim yok, creek-konfederasyonu 9/9. Tarihsel olarak doğru yapı; hukukî (1783 Paris) ile fiilî ayrımı belirsiz. [KAYNAK-1104 (kismen): Paris Antlasmasi 3 Eylul 1783'te imzalandi; ABD'nin bati siniri Mississippi. Hukuki egemenlik Mississippi'ye kadar ABD'de; fiili Cherokee/Creek denetimi kaynakta yok. — "from thence on a due west course to the river Mississippi" · t=1788-12-28 ve f=1778-05-27 teyit edilmedi. Sayfa basliginda 30 Eylul 1783 yazili, metin 3 Eylul diyor.]
  - önerilen düzeltme: Yok.
  - kaynak: Avalon Project (Yale Law), Definitive Treaty of Peace 1783, https://avalon.law.yale.edu/18th_century/paris.asp

### K012 · Fransa Cumhuriyeti (`fransa-cumhuriyet`) · 1897-01-01 → 1903-01-01 · 369.392 km²

- nokta [11.973, 18.096], en büyük kesit 1902-01-01 · kesit sayısı 16 · sınıf sayımı {'KARA-EKSKLAV': 7}
- çevre: kanem-tubu 24%, darul-kuti 24%, kanem-bornu 16%
- koridor: 259.1 km · kanem-tubu 9/9
- içindeki yerleşimler (6, s.eksklav 0): Massenya (fransa-cumhuriyet); Ndjamena (fransa-cumhuriyet); Mao (Kanem) (fransa-cumhuriyet); Sarh (Fort-Archambault) (fransa-cumhuriyet); Am Timan (fransa-cumhuriyet); Mongo (fransa-cumhuriyet)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Ölçüldü (1902-01-01): Fort-Archambault (Sarh) ile Bangui arasında Banda-Gbaya (t=1903-01-01) ve Dâru'l-Kûtî (t=1911-01-12); Ndele Dâru'l-Kûtî'de. Fransız Çad kesiti 1903'te banda-gbaya bitince kapanıyor. Fiilî denetim modeli ile tutarlı.
  - önerilen düzeltme: Yok.
  - kaynak: veri ölçümü (cevre.py)

### K013 · İngiliz Hindistanı (Şirket ve Taç Dönemi) (`ingiliz-hindistani`) · 1759-04-08 → 1803-10-14 · 365.531 km²

- nokta [14.116, 75.598], en büyük kesit 1803-09-11 · kesit sayısı 25 · sınıf sayımı {'KARA-EKSKLAV': 12}
- çevre: haydarabad-nizam 54%, meysur-racaligi 18%, karnatik 15%
- koridor: 405.8 km · maratha 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (24, s.eksklav 1): Kolam (Quilon) (ingiliz-hindistani); Madurai (ingiliz-hindistani); Koçin (Kochi) (ingiliz-hindistani); Nagapatnam (ingiliz-hindistani); Tancûr (Thanjavur) (ingiliz-hindistani); Trichinopoly (Tiruchirappalli) (ingiliz-hindistani); Kalikut (Kozhikode) (ingiliz-hindistani); Cinci (Gingee) (ingiliz-hindistani) … +16
- koridor yerleşimleri: Sonepur (Subarnapur) (sahipsiz); Sambalpur (maratha)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Madras (Güney Hindistan) ile Bengal arasında Maratha Orissa'sı (Cuttack, Sambalpur). Parça bitişi 1803-10-14, Orissa'nın Ekim 1803'te İngilizlerce alınmasıyla uyumlu (gün kaynakla teyit edilmedi). Sonepur sahipsiz (tek). [KAYNAK-1104 (kismen): Orissa Maratha (Nagpur Racasi) elindeydi; Ingilizler 1803'te Marathalardan 'kesin fethetti'. Yalniz yil. — "finally conquered" · Gun (1803-10-14) yok; 1759 baslangici yok. Metin Wikisource transkripsiyonu (1911 EB), dayanak olarak dikkat. Britannica Deogaon sayfasi 403.]
  - önerilen düzeltme: Yok.
  - kaynak: Encyclopaedia Britannica 11. baski (1911), Orissa, Wikisource uzerinden: https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Orissa

### K014 · Amerika Birleşik Devletleri (`abd`) · 1846-06-15 → 2000-12-31 · 362.137 km²

- nokta [45.237, -120.87], en büyük kesit 1867-10-18 · kesit sayısı 82 · sınıf sayımı {'KARA-EKSKLAV': 12}
- çevre: nez-perce 19%, sahaptin 13%, ingiliz-kuzey-amerika 12%
- koridor: 83.7 km · sosoni 9/9
- içindeki yerleşimler (9, s.eksklav 0): Fort Klamath / Klamath Bataklığı (abd); Fort Harney (Harney Havzası, Payut) (abd); Boise (Fort Boise) (abd); Fort Vancouver (abd); Wayám (Celilo Şelâleleri) (abd); Fort Nez Percés (Walla Walla) (abd); Seattle (Duwamish) (abd); Spokane House (abd) … +1
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: şoşoni t=1868-07-03; 1867'de Idaho'daki Camas Ovası şoşoni, Fort Hall/Boise/Salt Lake abd. Oregon (1846) Pasifik gövdesi, Şoşoni toprağı ile ABD ana gövdesinden ayrı; 1868'den sonra parça yok (1900 ve 1950 sorgusunda hepsi abd). Fiilî-denetim modeli; hukuki ABD egemenliği ile çelişen model tercihi. [KAYNAK-1104 (kismen): Oregon Antlasmasi 15 Haziran 1846'da imzalandi (49. paralel); Fort Bridger Antlasmasi (Dogu Shoshone ve Bannock) 3 Temmuz 1868, Royce devir listesinde 14 Haziran 1867 ve 3 Temmuz 1868 geciyor. — "Eastern Band of Shoshoni and Bannock" · Camas Ovasi'nin 1867-68 durumu sayfada yok; t=1868-07-03 antlasma gunuyle uyumlu.]
  - önerilen düzeltme: Yok.
  - kaynak: Avalon Project (Yale), Oregon Treaty 1846, https://avalon.law.yale.edu/19th_century/br-1846.asp ; DigiTreaties, Shoshone-Bannock cession, https://digitreaties.org/treaties/cession/524/ · önceki: veri ölçümü (devletler.js, cevre.py 1867/1900/1950)

### K015 · Britanya (`ingiltere`) · 1916-05-23 → 1923-10-29 · 333.051 km²

- nokta [12.732, 24.054], en büyük kesit 1921-08-23 · kesit sayısı 40 · sınıf sayımı {'KARA-EKSKLAV': 25}
- çevre: ingiliz-sudani 48%, fransa-cumhuriyet 41%, darfur 11%
- koridor: 715.2 km · fransa-cumhuriyet 9/9
- içindeki yerleşimler (15, s.eksklav 0): Radom (ingiltere); Burâm (ingiltere); Ed-Da'în (ingiltere); Nyala (ingiltere); Şa'riyye (ingiltere); Ümmü Keddâde (ingiltere); El-Fâşir (ingiltere); Mellît (ingiltere) … +7
- koridor yerleşimleri: Ndjamena (fransa-cumhuriyet); Mongo (fransa-cumhuriyet)
- **HÜKÜM: YAPAY** · kova `YAPAY-k` · güven `OLCUM`
  - gerekçe: Ölçüldü: El-Fâşir ve Nyala 1916-05-23 -> 1923-10-29 'ingiltere'; 1923-10-29'dan 'ingiliz-sudani' (f=1899-01-19). Aynı İngiliz-Mısır idaresi iki kimlikte; devletler.js'te ingiliz-sudani `harita:` takma adı yok. Darfur 1917 başında Sudan'a katıldı (Wingate raporu kayıtta); parça Sudan komşusu ('ingiliz-sudani %48').
  - önerilen düzeltme: Darfur noktaları 1916-05-23(?) -> 1923-10-29 aralığı 'ingiliz-sudani' (ya da kimlik birleştirme); darfur t=1916-11-06 ile uyum kaynakla.
  - kaynak: veri ölçümü (kayit.py El-Fâşir, Nyala)

### K016 · Britanya (`ingiltere`) · 1914-11-06 → 1923-10-29 · 331.825 km²

- nokta [33.576, 43.573], en büyük kesit 1918-11-08 · kesit sayısı 54 · sınıf sayımı {'KARA-EKSKLAV': 23}
- çevre: OSMANLI 39%, kacar 34%, kuveyt 15%
- koridor: 2406.7 km · DENIZ/BOS 3/9, ingiliz-sudani 3/9, sammar 1/9, hicaz 1/9, misir-sultanligi 1/9
- içindeki yerleşimler (77, s.eksklav 0): Dîvâniye (ingiltere); Necef (ingiltere); Hîre (sahipsiz); Kûfe (ingiltere); Fâv (ingiltere); Bağuz (Baghuz Fawqani) (sahipsiz); Eski Basra (Zübeyr) (sahipsiz); Eridu (Abu Shahrain) (sahipsiz) … +69
- koridor yerleşimleri: Nefud çölü (sammar); Ebû Ramâd (Şalâtîn) (misir-sultanligi)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (2406 km). İngiliz Mezopotamya'sı (Basra 1914-11-06 -> Irak mandası) öteki İngiliz gövdelerden ayrı denizaşırı. Ayrı borç: içteki 77 noktanın 39'u sahipsiz (Hîre, Bağuz, Eridu gibi antik yerler) — Değişmez 1/merdiven ④. [KAYNAK-1104 (tam): Basra 22 Kasım 1914'te İngilizlerce işgal edildi; 1920'de yönetim yerliye devredildi, 1920-1932 manda. Denizaşırı İngiliz Mezopotamyası gerçek. — "Basra bu son vali zamanında 22 Kasım 1914’te İngilizler tarafından işgal edildi." · Atlasta Basra ingiltere f=1914-11-06 (Fav çıkarması günü); TDV şehir için 22 Kasım 1914 verir — Basra kaydı f → 1914-11-22, Fav 1914-11-06 kalabilir (KASA, ic_not'ta iki gün).]
  - önerilen düzeltme: Yapısal yok; 39 sahipsiz nokta ayrı iş.
  - kaynak: TDV İslâm Ansiklopedisi, "Basra" (Abdulhalik Bakır), https://islamansiklopedisi.org.tr/basra · önceki: bulunamadı (UZAK)

### K017 · Kiev Rus'u (Kiev Büyük Knezliği) (`kiev-rusu`) · 1024-01-01 → 1136-01-01 · 313.910 km²

- nokta [50.35, 26.583], en büyük kesit 1085-01-01 · kesit sayısı 5 · sınıf sayımı {'KARA-EKSKLAV': 4}
- çevre: polotsk-knezligi 16%, cernigov-knezligi 13%, polonya-erken 8%
- koridor: 344.7 km · polotsk-knezligi 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (31, s.eksklav 0): Rîbnița (Rıbnitsa) (sahipsiz); Balta (sahipsiz); Soroka (Soroca) (sahipsiz); Hotin (sahipsiz); Kamaniçe (sahipsiz); Yazlofça (Yazlovets) (sahipsiz); Haliç (sahipsiz); Novomirgorod (sahipsiz) … +23
- koridor yerleşimleri: Daugavpils (Dünaburg) (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü (1085-01-01): Kiev çevresinde Fastov, Bila Tserkva, Pereyaslavl, Kaniv, Jitomir, Çerkasi, Lubnı, Baturin, Mozır, Gomel hep sahipsiz (None); parçadaki 31 noktanın 28'i sahipsiz. Kiev Rus'unun çekirdek toprağı noktasız -> en yakın peteğe (Polotsk, Çernigov) emiliyor, Kiev Rus' kopuk görünüyor. Sebep-sonuç çıkarımdır.
  - önerilen düzeltme: Pereyaslavl, Kaniv, Bila Tserkva, Jitomir, Çerkasi, Lubnı ... 1024-1136 için sahip dönemi (kiev-rusu/Pereyaslavl knezliği), kaynak Encyclopedia of Ukraine.
  - kaynak: veri ölçümü (cevre.py 1085-01-01)

### K018 · Britanya (`ingiltere`) · 1979-12-12 → 1980-04-18 · 310.824 km²

- nokta [-19.414, 26.885], en büyük kesit 1979-12-12 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: zambiya 12%, mozambik 12%, botsvana 8%
- koridor: 407.5 km · botsvana 7/9, DENIZ/BOS 2/9
- içindeki yerleşimler (8, s.eksklav 0): Gvanda (ingiltere); Khami (ingiltere); Umtali (Mutare) (ingiliz-guney-rodezya); Salisbury (Harare) (ingiltere); Danangombe (Rozvi) (ingiltere); Gveru (ingiltere); Hvange (ingiltere); Binga (ingiltere)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Güney Rodezya, Aralık 1979-Nisan 1980 geçiş dönemi (Lancaster House, Soames); künye ingiliz-guney-rodezya t=1980-04-18 ile uyumlu. Öteki İngiliz gövdelerden çok uzak; iç noktalar 'ingiltere' (Umtali 'ingiliz-guney-rodezya', ama harita: ingiltere takma adı, boya aynı). [KAYNAK-1104 (kismen): Zimbabwe 18 Nisan 1980'de bagimsiz (eski Guney Rodezya, Ingiliz kolonisi); atlasin t=1980-04-18'i ile uyumlu. — "previously been a British colony known as Southern Rhodesia" · Aralik 1979 baslangici (Lancaster House/Soames) sayfada yok.]
  - önerilen düzeltme: Yok.
  - kaynak: Office of the Historian (ABD Disisleri), Countries: Zimbabwe, https://history.state.gov/countries/zimbabwe · önceki: veri ölçümü (devletler.js)

### K019 · Gazneliler (Gazneli Devleti) (`gazneli`) · 1038-05-09 → 1043-01-01 · 286.884 km²

- nokta [42.316, 60.24], en büyük kesit 1040-05-23 · kesit sayısı 5 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: buyuk-selcuklu 13%, karahanli 13%, ziyari 0%
- koridor: 687.5 km · buyuk-selcuklu 7/9, DENIZ/BOS 2/9
- içindeki yerleşimler (7, s.eksklav 0): Karakum (sahipsiz); Hazârasp (sahipsiz); Hîve (sahipsiz); Yeni Ürgenç (sahipsiz); Köhne Ürgenç (Gürgenç) (gazneli); Küngrat (sahipsiz); Üstyurt platosu (doğu) (sahipsiz)
- koridor yerleşimleri: Kâin (sahipsiz); Turbet-i Haydariye (sahipsiz); Nîşâbur (buyuk-selcuklu); Kûçân (sahipsiz); Anau (sahipsiz); Aşkabad (sahipsiz); Jeitun (sahipsiz)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (687 km). Harezm 1038-1043: Selçuklular Horasan'ı alınca (Dandanakan 1040) Gazneli Harezm'i ana gövdeden kopuk. İçteki 7 noktanın 6'sı sahipsiz (Hive, Hazarasp...) — petek emilmesiyle boyalı. Kesin tarihler kaynakla. [KAYNAK-1104 (kismen): Altuntaş 1017-1032 Gazneli valisi; oğlu Hârun döneminde ilişkiler bozuldu; Şah Melik 12 Şubat 1041'de Gürgenç'e girip Sultan Mesud adına hutbe okuttu; iki yıl sonra (1043) Tuğrul ve Çağrı Şah Melik'i çıkardı. — "Şah Melik, 12 Şubat 1041 tarihinde Hârizm kuvvetlerini bozguna uğratarak başşehir Gürgenç’e girdi" · Parça bitişi 1043 teyitli. 1038-1041 Hârizm fiilen Gazneli'ye isyan eden Altuntaşoğulları (Hârun, İsmâil) elinde: bu ara GERÇEK Gazneli eksklavı değil, 1041-02-12'den sonrası Gazneli adına. Düzeltme önerisi: Hârizm noktaları 1034/35-1041-02-12 isyankâr hârizmşah dönemi (yıl kaynakla), 1041-02-12 → 1043 gazneli.]
  - önerilen düzeltme: Sahipsiz Harezm noktaları için dönem (ayrı iş).
  - kaynak: TDV İslâm Ansiklopedisi, "Hârizm" (Abdülkerim Özaydın), https://islamansiklopedisi.org.tr/harizm · önceki: bulunamadı (UZAK)

### K020 · Moğol İmparatorluğu (bölünmemiş) (`mogol-imparatorlugu`) · 1213-12-30 → 1256-01-01 · 276.726 km²

- nokta [39.663, 116.529], en büyük kesit 1233-07-17 · kesit sayısı 26 · sınıf sayımı {'KARA-EKSKLAV': 6, 'ADA': 4}
- çevre: jin-hanedani 47%
- koridor: 3715.5 km · cagatay 5/9, DENIZ/BOS 3/9, KENDI 1/9
- içindeki yerleşimler (9, s.eksklav 0): Pingyao (sahipsiz); Taiyuan (mogol-imparatorlugu); Zhengding (mogol-imparatorlugu); Leshou (Xianxian) (mogol-imparatorlugu); Baoding (sahipsiz); Tiencin (Tianjin) (sahipsiz); Pekin (Hanbalık) (mogol-imparatorlugu); Kalgan (Zhangjiakou) (sahipsiz) … +1
- koridor yerleşimleri: Xiazhou (Tongwancheng) (sahipsiz); Andican (cagatay); Özkent (Uzgen) (sahipsiz); Taşkent (cagatay)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (3715 km). Kuzey Çin kesiti ile Orta Asya (Çağatay f=1227-01-01) arasında, bölünmemiş imparatorluk içinde ulus ayrışması modeli. Çağatay kimliği ayrı id; 'bölünmemiş' etiketi ile uyumsuz ama tasarım tercihi. [KAYNAK-1104 (kismen): Kuzey Çin Mukali'ye emanet edildi. — "Muqali, to whom China was entrusted" · Kuzey Çin'in Büyük Han adına Mukali'nin genel valiliği altında olduğu teyitli; 1217 tarihi ve Çağatay'dan ayrık statü teyitsiz.]
  - önerilen düzeltme: Yok.
  - kaynak: Berkshire Encyclopedia of World History, "Mongol Empire" — EMRELİC okuması (Oxford Reference) · önceki: bulunamadı (UZAK)

### K021 · İspanyol Perusu (`ispanyol-peru`) · 1819-12-17 → 1821-06-24 · 267.675 km²

- nokta [9.291, -68.47], en büyük kesit 1819-12-17 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: gran-kolombiya 24%, ispanya 5%
- koridor: 715.1 km · gran-kolombiya 6/9, DENIZ/BOS 3/9
- içindeki yerleşimler (9, s.eksklav 0): San Cristóbal (Táchira) (ispanyol-peru); Mérida (Venezuela) (ispanyol-peru); Barinas (Altamira de Cáceres) (ispanyol-peru); Guanare (ispanyol-peru); Carora (ispanyol-peru); Maracaibo (ispanyol-peru); Calabozo (Villa de Nuestra Señora de la Candelaria) (ispanyol-peru); Valencia (Venezuela) (ispanyol-peru) … +1
- koridor yerleşimleri: San Vicente del Caguán (sahipsiz); Bacatá (Bogotá) (gran-kolombiya); Hunza (Tunja) (gran-kolombiya)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Ölçüldü: Maracaibo ve Mérida (Venezuela) 'ispanyol-peru' -> 1821-06-24 (Carabobo günü) gran-kolombiya. 1819-12-17 Gran Kolombiya kuruluşunda Royalist Venezuela, Peru'dan Yeni Granada ile ayrılıyor: gerçek. Not: Venezuela'nın 'ispanyol-peru' kimliği adlandırma tercihi.
  - önerilen düzeltme: Yok.
  - kaynak: veri ölçümü (kayit.py)

### K022 · Avustralya Milletler Topluluğu (`avustralya`) · 1901-01-01 → 1911-01-01 · 264.691 km²

- nokta [-17.057, 127.976], en büyük kesit 1903-01-01 · kesit sayısı 7 · sınıf sayımı {'KARA-EKSKLAV': 2, 'ADA': 1}
- çevre: ingiltere 15%
- koridor: 738.1 km · ingiltere 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (5, s.eksklav 0): Halls Creek (avustralya); Fitzroy Crossing (avustralya); Broome (avustralya); Derby (avustralya); Wyndham (avustralya)
- koridor yerleşimleri: Tennant Creek Telgraf İstasyonu (kuzey-bolgesi-sa)
- **HÜKÜM: YAPAY** · kova `YAPAY-k` · güven `OLCUM`
  - gerekçe: Ölçüldü: kuzey-bolgesi-sa f=1863-07-06 t=1911-01-01 ve `harita: ingiltere`; Tennant Creek 1872 -> 1911 'kuzey-bolgesi-sa', 1903-01-01'de Halls Creek/Camooweal 'avustralya'. Kuzey Bölgesi 1901-1911 hukuken Güney Avustralya eyaleti, yani Birlik içinde; ingiltere boyası Kimberley parçasını Avustralya ana gövdesinden ayırıyor (koridor 8/9 ingiltere). guney-avustralya t=1901-01-01 'ingiltere' ile tutarlı, Kuzey Bölgesi tutarsız.
  - önerilen düzeltme: kuzey-bolgesi-sa 1901-01-01 -> 1911-01-01 boyası 'avustralya' (harita: alanı veya dönem); kaynak: Kuzey Bölgesi 1 Ocak 1911 devri.
  - kaynak: veri ölçümü (devletler.js, cevre.py 1903-01-01)

### K023 · Kiev Rus'u (Kiev Büyük Knezliği) (`kiev-rusu`) · 1147-01-01 → 1157-01-01 · 248.025 km²

- nokta [50.425, 26.705], en büyük kesit 1147-01-01 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: polotsk-knezligi 13%, cernigov-knezligi 10%
- koridor: 474.2 km · smolensk-knezligi 7/9, cernigov-knezligi 2/9
- içindeki yerleşimler (23, s.eksklav 0): Rîbnița (Rıbnitsa) (sahipsiz); Balta (sahipsiz); Novomirgorod (sahipsiz); Uman (sahipsiz); Braslav (Bratslav) (sahipsiz); Vinnitsa (Vinnytsia) (sahipsiz); Meciboj (Mejibuji) (sahipsiz); Bila Tserkva (Belaya Tserkov) (sahipsiz) … +15
- koridor yerleşimleri: Gomel (Homel) (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: K017'nin 1147-1157 devamı: parçadaki 23 noktanın 20'si sahipsiz (Uman, Vinnitsa, Bratslav, Bila Tserkva, Gomel...). Kiev çekirdeği noktasız emilmeye açık (K017 ölçümü).
  - önerilen düzeltme: K017 ile birlikte: Kiev çevresi yerleşimlerine dönem.
  - kaynak: veri ölçümü

### K024 · Fransa (`fransa`) · 1634-01-01 → 1763-02-10 · 244.544 km²

- nokta [46.754, -92.496], en büyük kesit 1732-01-01 · kesit sayısı 72 · sınıf sayımı {'KARA-EKSKLAV': 15, 'ADA': 2}
- çevre: ojibwe 18%, ingiltere 1%
- koridor: 394.8 km · ojibwe 4/9, DENIZ/BOS 3/9, miami 2/9
- içindeki yerleşimler (6, s.eksklav 0): La Baye (Green Bay) (fransa); Duluth (Fond du Lac) (sahipsiz); Grand Portage (fransa); Fort William (Thunder Bay) (sahipsiz); Fort St. Pierre (Rainy Lake) (fransa); Fort Nipigon (fransa)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Yeni Fransa'nın üst göller ticaret karakolları (Green Bay, Grand Portage, Rainy Lake) St. Lawrence gövdesinden Ojibwe toprağı ile ayrı. İki sahipsiz (Duluth, Fort William).
  - önerilen düzeltme: Yok.
  - kaynak: bulunamadı

### K025 · Britanya (`ingiltere`) · 1664-05-01 → 1957-03-06 · 239.488 km²

- nokta [7.716, -1.226], en büyük kesit 1917-01-09 · kesit sayısı 345 · sınıf sayımı {'KARA-EKSKLAV': 28}
- çevre: hollanda 66%, fransa-cumhuriyet 62%, asanti 45%
- koridor: 133.9 km · fransa-cumhuriyet 9/9
- içindeki yerleşimler (11, s.eksklav 0): Elmina (São Jorge da Mina) (ingiltere); Cape Coast (ingiltere); Akra (Accra) (ingiltere); Kumasi (ingiltere); Sokodé (sahipsiz); Kara (Togo) (sahipsiz); Bono-Manso (Techiman kuzeyi) (ingiliz-altin-kiyisi); Begho (Bighu) (ingiltere) … +3
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Altın Kıyısı, Nijerya'dan 134 km Fransız toprağı ile ayrı: gerçek ayrı koloni. Altın Kıyısı kaydı `harita: ingiltere` takma adlı, boya aynı (YAPAY-k değil). Sokodé, Kara (Togo) sahipsiz. [KAYNAK-1104 (kismen): Gana (eski Altin Kiyisi) 6 Mart 1957'de Britanya Imparatorlugu'ndan bagimsiz ilan edildi (atlasin t=1957-03-06 ile uyumlu). — "formerly known as the Gold Coast" · 1664 baslangici ve Nijerya ile ayrik gövde teyit edilmedi.]
  - önerilen düzeltme: Yok.
  - kaynak: Office of the Historian, Ghana, https://history.state.gov/countries/ghana · önceki: veri ölçümü (devletler.js)

### K026 · Yuan Hanedanı (Moğol Çin) (`yuan-hanedani`) · 1260-01-01 → 1368-09-14 · 236.213 km²

- nokta [24.949, 100.879], en büyük kesit 1358-11-01 · kesit sayısı 26 · sınıf sayımı {'KARA-EKSKLAV': 11}
- çevre: mogol-imparatorlugu 20%, san-devletleri 17%, tran-hanedani 11%
- koridor: 155.9 km · tran-hanedani 9/9
- içindeki yerleşimler (15, s.eksklav 12): Kaihua (Wenshan) (yuan-hanedani); Mengzi (yuan-hanedani); Yuanjiang (yuan-hanedani); Lin'an (Jianshui) (yuan-hanedani); Mianning (Lincang) (yuan-hanedani); Tonghai (yuan-hanedani); Jingdong (yuan-hanedani); Shunning (Fengqing) (yuan-hanedani) … +7
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü (1300-01-01): Yunnan Yuan noktaları (Kunming, Mengzi...) var ama 400 km yarıçapta Guizhou/Guangxi tarafında hiç yerleşim yok; en yakın doğu komşu Cao Bằng (tran-hanedani, 273 km). Yuan'ın Çin gövdesi ile Yunnan arasındaki bölge noktasız -> Tran'a emiliyor. 1279'dan sonra Yunnan Yuan'la bitişikti. 1358 kesiti için Kızıl Türban/Ming Yuzhen Sichuan dönemi ayrı olabilir.
  - önerilen düzeltme: Guizhou/Guangxi (Nanning dışı) yerleşimleri 1260-1368 Yuan dönemi; Sichuan-Yunnan hattı noktaları.
  - kaynak: veri ölçümü (cevre.py 1300-01-01)

### K027 · Kiev Rus'u (Kiev Büyük Knezliği) (`kiev-rusu`) · 1136-01-01 → 1147-01-01 · 231.304 km²

- nokta [57.325, 40.875], en büyük kesit 1136-01-01 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: ryazan 32%, novgorod 12%, idil-bulgar 9%
- koridor: 551.4 km · smolensk-knezligi 7/9, cernigov-knezligi 2/9
- içindeki yerleşimler (16, s.eksklav 0): Arzamas (sahipsiz); Murom (sahipsiz); Moskova (sahipsiz); Vladimir (kiev-rusu); Sergiyev Posad (sahipsiz); Dmitrov (sahipsiz); Suzdal (kiev-rusu); Rostov Veliki (sahipsiz) … +8
- koridor yerleşimleri: Gomel (Homel) (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü (1140-01-01): Vladimir ve Suzdal kiev-rusu ama Rostov, Yaroslavl, Şuya, Kostroma, Uglich, Murom, Kolomna, Tver, Vologda sahipsiz; parçadaki 16 noktanın 14'ü sahipsiz. vladimir-suzdal f=1157. Kiev Rus'u kuzeydoğu parçası emilme ile boyalı; ana gövde yine noktasız. Moskova 1147'de kuruldu (sahipsiz doğru).
  - önerilen düzeltme: Rostov, Murom, Yaroslavl, Tver vb. 1136-1147 sahip dönemi (kaynak Encyclopedia of Ukraine/Rus kaynakları).
  - kaynak: veri ölçümü (cevre.py 1140-01-01)

### K028 · İtalya (`italya`) · 1905-01-01 → 1936-06-01 · 224.923 km²

- nokta [2.921, 44.13], en büyük kesit 1923-10-29 · kesit sayısı 13 · sınıf sayımı {'KARA-EKSKLAV': 9}
- çevre: somali 37%, habesistan 32%, ingiltere 6%
- koridor: 3182.5 km · habesistan 3/9, ingiliz-sudani 3/9, DENIZ/BOS 3/9
- içindeki yerleşimler (14, s.eksklav 0): Cilib (italya); Afgoye (italya); Merka (italya); Bardere (italya); Diinsoor (italya); Vanlaveyn (italya); Baydoa (italya); Garbahârey (italya) … +6
- koridor yerleşimleri: Fiçe (habesistan); Mota (habesistan); Bahır Dar (habesistan); Metemma (habesistan); Kadârif (ingiliz-sudani); Şendî (ingiliz-sudani); Selîme (Nûbe çölü batısı) (sahipsiz); Merevî (ingiliz-sudani); Delgo (Sükkût) (ingiliz-sudani)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (3182 km). İtalyan Somalisi, Eritre/Libya'dan Habeşistan ve İngiliz Sudanı ile ayrı. Somali kıyısındaki yerli emirlikler 1925-27 fethine dek çevrede. [KAYNAK-1104 (kismen): Zanzibar'in Benadir limanlari 1905'te Italya'ya satildi (1890'dan beri kiradaydi). — "sold in 1905" · Italyan Somalisi'nin dogrudan 1905 baslangicini destekler (yalniz yil); 1925-27 emirlikler teyit yok. 1911 kaynak, Somaliland maddesi kesildi.]
  - önerilen düzeltme: Yok.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Zanzibar, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Zanzibar · önceki: bulunamadı (UZAK)

### K029 · Osmanlı (`OSMANLI`) · 1871-01-01 → 1918-10-30 · 222.209 km²

- nokta [16.535, 44.467], en büyük kesit 1916-06-10 · kesit sayısı 123 · sınıf sayımı {'KARA-EKSKLAV': 14}
- çevre: yemen 29%, TABI 12%, lahic-sultanligi 8%
- koridor: 113.8 km · hicaz 9/9
- içindeki yerleşimler (16, s.eksklav 0): Marib (sahipsiz); Kunfüze (el-Kunfüze) (OSMANLI); Moha (OSMANLI); Taiz (OSMANLI); Zûcible (sahipsiz); Zebîd (OSMANLI); Zafâr (sahipsiz); Hudeyde (OSMANLI) … +8
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: En büyük kesit 1916-06-10: Hicaz (Şerif Hüseyin isyanı) Yemen ile Osmanlı gövdesi arasına giriyor; koridor 114 km hicaz 9/9. Geçerli yalnız 1916-06-10 sonrası; 1871-1916 DAR/KARA kesitleri Asir-Necran çevresinde (Necran, Karna 'YOK epok', Marib sahipsiz) — ayrı borç. Hicaz id'si devletler.js'te 'hicaz' adıyla bulunamadı (ölçülemedi). [KAYNAK-1104 (tam): Şerîf Hüseyin Haziran 1916'da Mekke'de isyanı başlattı (bildiri 27 Haziran); Medine dışındaki Hicaz şehirleri isyancılara geçti; Medine Ocak 1919'a kadar Osmanlı'da kaldı. — "Şerîf Hüseyin Haziran 1916’da Mekke’de isyanı başlattı" · Hicaz'ın Yemen ile Osmanlı gövdesi arasına girmesi 1916 Haziran sonrası gerçek. Ek: Medine 1916-1919 Osmanlı enklavı olmalı — atlasta ayrıca sınanmalı.]
  - önerilen düzeltme: Yok. Marib, Zucible, Zafâr dönemi ayrı iş.
  - kaynak: TDV İslâm Ansiklopedisi, "Şerîf Hüseyin" (Azmi Özcan), https://islamansiklopedisi.org.tr/serif-huseyin · önceki: veri ölçümü (kısmi)

### K030 · Büyük Selçuklu Devleti (`buyuk-selcuklu`) · 1043-01-01 → 1064-01-01 · 209.382 km²

- nokta [30.425, 60.942], en büyük kesit 1045-07-19 · kesit sayısı 10 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: gazneli 43%, kirman-selcuklu 21%
- koridor: 261.3 km · gazneli 9/9
- içindeki yerleşimler (2, s.eksklav 0): Hâş (sahipsiz); Zerenc (Sîstan) (buyuk-selcuklu)
- koridor yerleşimleri: Turbet-i Câm (sahipsiz)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: TDV Sistan: 'Ertaş tarafından zaptedildi (432/1040-41)'; Zerenc atlasta gazneli -> 1040-09-11 buyuk-selcuklu (ölçüldü) uyumlu. Dandanakan'dan sonra Gazneli toprağı Sistan ile Selçuklu Horasan arasına girmiş olabilir; ara bölgenin sahibi (Hâş sahipsiz, Turbet-i Câm sahipsiz) ayrıca ölçülmedi, bu nedenle eksklavlığın tamamı değil Selçuklu mülkiyeti teyitli.
  - önerilen düzeltme: Hâş, Turbet-i Câm sahipsiz: Sistan-Horasan arası sahip dönemleri.
  - kaynak: TDV sistan (islamansiklopedisi.org.tr/sistan): 'Ertaş tarafından zaptedildi (432/1040-41).'

### K031 · Delhi Sultanlığı (`delhi-sultanligi`) · 1392-01-01 → 1484-01-01 · 200.382 km²

- nokta [22.773, 72.322], en büyük kesit 1392-01-01 · kesit sayısı 10 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: racput 29%, malva-sultanligi 9%, behmeni 7%
- koridor: 218.3 km · racput 9/9
- içindeki yerleşimler (13, s.eksklav 0): Sûrat (delhi-sultanligi); Broaç (Bharuch) (delhi-sultanligi); Valabhi (sahipsiz); Baroda (Vadodara) (delhi-sultanligi); Kanbâyet (Khambhat) (delhi-sultanligi); Çampâner (delhi-sultanligi); Lothal (sahipsiz); Wadhwan (Vardhamana) (delhi-sultanligi) … +5
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Sûrat/Broaç delhi-sultanligi 1304-1407, gucerat-sultanligi 1407-1573. 1392-1407 Gucerat Delhi valiliği, Rajput toprağı (koridor 218 km) ile Delhi'den ayrı: gerçek. 1407 sonrası Delhi aralığında parça artık Gucerat'ı içermiyor; aday aralığı (1484'e dek) 1392-1407 dışı kesitler için ayrı kontrol ister. [KAYNAK-1104 (tam): Tuğluklular 1391'de Zafer Han'ı Gucerât valisi tayin etti; 1407'de Muzaffer Şah unvanıyla Gucerât Sultanlığı kuruldu. — "Tuğluklular 1391’de Zafer Han’ı vali tayin ettiler." · 1392-1407 Delhi valiliği olarak gerçek. Atlas başlangıcı 1392 (TDV valilik 1391) — sorun değil; 1407 bitişi teyitli.]
  - önerilen düzeltme: Yok (1407-1484 kesitleri ayrıca ölçülmeli).
  - kaynak: TDV İslâm Ansiklopedisi, "Gucerât" (Khaliq Ahmad Nizami), https://islamansiklopedisi.org.tr/gucerat · önceki: veri ölçümü (kayit.py)

### K032 · Britanya (`ingiltere`) · 1668-01-01 → 1763-02-10 · 192.416 km²

- nokta [50.819, -81.347], en büyük kesit 1749-08-21 · kesit sayısı 51 · sınıf sayımı {'KARA-EKSKLAV': 14, 'ADA': 4}
- çevre: fransa 21%, kri 4%
- koridor: 523.5 km · DENIZ/BOS 4/9, haudenosaunee 3/9, fransa 2/9
- içindeki yerleşimler (4, s.eksklav 0): Abitibi House (ingiltere); Moose Factory (ingiltere); Fort Albany (ingiltere); Attawapiskat (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Hudson Körfezi Şirketi karakolları (Moose Factory, Fort Albany) Britanya koloni gövdesinden ayrı; Attawapiskat sahipsiz. [KAYNAK-1104 (celiski): Moose Factory 1672-73'te Charles Bayly tarafindan kuruldu (HBC'nin ikinci karakolu). — "Founded in 1672–73 by Charles Bayly" · Atlas f=1668-01-01. Eger 1668 Rupert Nehri/Nonsuch seferine dayaniyorsa Moose Factory icin erken. Fort Albany sayfada yok. Hukum degisikligi sizde.]
  - önerilen düzeltme: Yok.
  - kaynak: The Canadian Encyclopedia, Moose Factory, https://thecanadianencyclopedia.ca/en/article/moose-factory · önceki: bulunamadı (UZAK-benzeri)

### K033 · Sovyet Rusya (`sovyet-rusya`) · 1917-11-07 → 1920-09-02 · 187.369 km²

- nokta [38.683, 58.565], en büyük kesit 1917-12-15 · kesit sayısı 42 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: kacar 28%, buhara 4%
- koridor: 251.7 km · buhara 9/9
- içindeki yerleşimler (9, s.eksklav 0): Merv (Mari) (sovyet-rusya); Ebîverd (sovyet-rusya); Aşkabad (sovyet-rusya); Nesâ (sovyet-rusya); Dihistan ovası (Meşhed-i Misriyân) (sovyet-rusya); Jeitun (sahipsiz); Kızılarvat (sovyet-rusya); Çeleken (sovyet-rusya) … +1
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Transhazar (Aşkabad, Merv, Kızılarvat) ile Taşkent/Türkistan arasında Buhara Emirliği (koridor 252 km). 1918-07 -> 1920-02 Transhazar'ın Bolşevik-karşıtı hükümet/İngiliz dönemi atlasta 'sovyet-rusya' olarak görünüyor olabilir; bu sahiplik konusu ölçülmedi, kaynak gerekir. Jeitun sahipsiz (antik). [KAYNAK-1104 (kismen): Aralık 1917'de Bolşevik yönetim kuruldu; Temmuz 1918'de Beyaz Rus ve Türkmen karşı devrimcilerin eline geçti; sonra Kızıl Ordu (Kuybişev) şehri geri aldı. — "Temmuz 1918’de Beyaz Rus ve Türkmenler’den oluşan karşı devrimcilerin eline geçtiyse de" · Hüküm GERÇEK yalnız Bolşevik aralıkları için; 1918-07 → Kızıl Ordu dönüşü arası Aşkabad/Merv/Kızılarvat 'sovyet-rusya' YANLIŞ (YAPAY-b: Transhazar geçici hükümeti dönemi yok). TDV dönüş günü vermiyor — ikinci kaynak gerek (gün teyitsiz).]
  - önerilen düzeltme: Aşkabad/Merv/Kızılarvat 1918-1920 sahipliği kaynakla (gün bulunamadı).
  - kaynak: TDV İslâm Ansiklopedisi, "Aşkābâd" (Sargon Erdem), https://islamansiklopedisi.org.tr/askabad

### K034 · Britanya (`ingiltere`) · 1763-02-10 → 1783-09-03 · 175.125 km²

- nokta [38.25, -88.913], en büyük kesit 1763-02-10 · kesit sayısı 13 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: sauk 13%, miami 8%, cikasav 5%
- koridor: 228.1 km · cikasav 9/9
- içindeki yerleşimler (4, s.eksklav 0): Kaskaskia (ingiltere); St. Louis (sahipsiz); Cahokia (sahipsiz); Vincennes (Poste Vincennes) (ingiltere)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: 1763-1783 İllinois Ülkesi (Kaskaskia, Vincennes) İngiliz iddiası, Doğu sömürgelerinden Çikasav/Kızılderili toprağı ile ayrı; hukukî-fiilî model tercihi. St. Louis, Cahokia sahipsiz. [KAYNAK-1104 (tam): 10 Subat 1763'te Fransa Mississippi dogusunu (Kanada dahil) Britanya'ya birakti; 3 Eylul 1783 Paris Antlasmasi ile sinir Mississippi'de ABD'ye gecti. Hukuki egemenlik tarihleri atlas ile uyumlu. — "Done at Paris, this third day of September" · Illinois Ulkesi'nin fiili Ingiliz denetimi (Kaskaskia 1765) kaynakta okunmadi; yalniz hukuki tarihler teyitli.]
  - önerilen düzeltme: Yok.
  - kaynak: Avalon Project (Yale), Definitive Treaty 1763, https://avalon.law.yale.edu/18th_century/paris763.asp ; Treaty of Paris 1783, https://avalon.law.yale.edu/18th_century/paris.asp

### K035 · Büyük Selçuklu Devleti (`buyuk-selcuklu`) · 1041-01-01 → 1043-01-01 · 169.473 km²

- nokta [37.65, 61.688], en büyük kesit 1041-01-01 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: gazneli 35%, bati-karahanli 22%
- koridor: 261.3 km · gazneli 9/9
- içindeki yerleşimler (3, s.eksklav 0): Serahs (buyuk-selcuklu); Merv (Mari) (buyuk-selcuklu); Ebîverd (sahipsiz)
- koridor yerleşimleri: Turbet-i Câm (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü (1042-01-01): Serahs, Nîşâbur, Merv buyuk-selcuklu; ama Tûs __BOSLUK__, Meşhed, Ebîverd, Kûçân, Nesâ, Kelât-ı Nâdirî, Turbet-i Câm sahipsiz. Selçuklu Horasan'ı ortasındaki noktasız bölge Gazneli peteğine emiliyor (koridor gazneli 9/9) -> Merv/Serahs kopuk. Dandanakan 1040 sonrası Horasan Selçuklu'ydu.
  - önerilen düzeltme: Tûs (boşluk merdiveni), Ebîverd, Nesâ, Kûçân, Meşhed için 1038-1064 sahip dönemi (TDV).
  - kaynak: veri ölçümü (cevre.py 1042-01-01)

### K036 · Osmanlı (`OSMANLI`) · 1832-06-16 → 1841-02-25 · 168.503 km²

- nokta [29.377, 36.666], en büyük kesit 1840-11-27 · kesit sayısı 26 · sınıf sayımı {'KARA-EKSKLAV': 10}
- çevre: TABI 39%
- koridor: 276.4 km · TABI 9/9
- içindeki yerleşimler (26, s.eksklav 0): Hicaz (sahipsiz); el-Ulâ (OSMANLI); Medâin-i Sâlih (el-Hicr) (OSMANLI); el-Vech (OSMANLI); Tebük (OSMANLI); Maan (OSMANLI); Kerak (OSMANLI); Ürdün (sahipsiz) … +18
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Şam d/v: v (Mısır, İbrâhim Paşa) 1832-06-16 -> 1841-02-25; Gazze v 1831-10-31 -> 1841-02-25. Oysa Maan, Kerak, Tebük aynı 1832-1841 aralığında yalnızca OSMANLI (v dönemi yok), çevre TABI %39, koridor TABI 9/9. Mısır'ın Suriye ve Hicaz hâkimiyeti (1840 Kasım'a dek) hac yolu noktalarını da kapsıyordu (tarihsel iddia, kaynak sırasıyla teyit). 1840-11-27 kesit tarihi İskenderiye Mukavelesi ile uyumlu. [KAYNAK-1104 (kismen): İbrâhim Paşa Şam'ı 16 Haziran 1832'de aldı; Mehmed Ali Hicaz'ı Mısır meselesi 1840'ta halledilene dek elinde tuttu, sonra Bâbıâli'ye geçti. — "Mısır meselesinin büyük devletlerin araya girmesiyle halledilmesine kadar (1840) elinde tuttu" · Atlas Şam v 1832-06-16 TDV ile aynı gün. Hicaz/hac yolu noktalarına (Tebük, el-Vech, el-Ulâ, Medâin-i Sâlih) Mısır v dönemi eksik iddiası TDV ile destekli; Maan/Kerak için TDV'de açık ifade yok.]
  - önerilen düzeltme: Maan, Kerak, Tebük, el-Vech, Medâin-i Sâlih, el-Ulâ: 1832/33-1840/41 v (misir-kavalali) dönemi, gün TDV/İSAM kaynakla; Hicaz ve Ürdün sahipsiz noktaları için sahip.
  - kaynak: TDV İslâm Ansiklopedisi, "Hicaz" (Mustafa Sabri Küçükaşçı), https://islamansiklopedisi.org.tr/hicaz; "İbrâhim Paşa, Kavalalı" (M. Hanefi Kutluoğlu), https://islamansiklopedisi.org.tr/ibrahim-pasa-kavalali · önceki: veri ölçümü (kayit.py Şam, Gazze, Maan, Kerak, Tebük)

### K037 · Maratha Konfederasyonu (`maratha`) · 1743-01-01 → 1818-01-01 · 158.028 km²

- nokta [23.261, 73.657], en büyük kesit 1774-12-28 · kesit sayısı 27 · sınıf sayımı {'KARA-EKSKLAV': 15}
- çevre: babur-imparatorlugu 40%, racput 36%, indor 22%
- koridor: 200.4 km · bhopal 7/9, haydarabad-nizam 2/9
- içindeki yerleşimler (11, s.eksklav 0): Valabhi (sahipsiz); Kanbâyet (Khambhat) (maratha); Mandu (Mândû) (maratha); Çampâner (maratha); Lothal (sahipsiz); Dhâr (sahipsiz); Wadhwan (Vardhamana) (maratha); Dholka (maratha) … +3
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Maratha Malva/Gucerat payları (Holkar, Sindhiya, Gaekwad) ana Deccan gövdesinden Bhopal ve Nizam topraklarıyla ayrı; konfederasyon yapısı. Valabhi, Lothal, Dhâr sahipsiz. [KAYNAK-1104 (kismen): Damaji Gaekwar Gucerat'ta (Baroda), Tukoji Holkar Malva yaylalarinda, Mahadji Sindhia Agra-Delhi guneyinde guclenerek kendi beyliklerini kurdu; Maratha gucu 1750 civarinda zirvede, Panipat 1761. — "subdued the uplands of Malwa" · Yil yok (1743 teyit edilmedi); konfederasyon yapisi dogrulaniyor. 1911 kaynak.]
  - önerilen düzeltme: Yok.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Mahrattas, https://en.wikisource.org/wiki/Page:EB1911_-_Volume_17.djvu/441

### K038 · Kongo Serbest Devleti (`kongo-serbest-devleti`) · 1885-01-01 → 1888-01-01 · 157.884 km²

- nokta [-7.52, 22.815], en büyük kesit 1887-01-01 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: kuba 28%, lunda-imparatorlugu 22%, portekiz 21%
- koridor: 81.5 km · kuba 9/9
- içindeki yerleşimler (4, s.eksklav 0): Sandoa (kongo-serbest-devleti); Musumba (kongo-serbest-devleti); Luebo (kongo-serbest-devleti); İlebo (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Sandoa ve Musumba lunda-imparatorlugu -> 1887-01-01, ardından kongo-serbest-devleti; Luebo 1885. Lunda başkenti Musumba'nın KSD'ye 1887'de geçmesi kaynaksız; KSD'nin Kasai/Lunda'da fiilî varlığı 1885-1888'de çok zayıftı (tarihsel iddia). Parça yalnız 1885-1888, kuba (t=1900) araya giriyor. [KAYNAK-1104 (kismen): KSD egemenligi 1 Temmuz 1885'te Boma'da ilan edildi; Portekiz ile Lunda sinir antlasmasi 25 Mayis 1891 (onay 24 Mart 1894); Lunda 'imparatorlugu' basi Muteba 1892'de oldurulunce dagildi; KSD orta Kasai'de otoritesini hic tam kuramadi. — "never fully established its authority" · Hukumle (YAPAY) uyumlu: Musumba/Sandoa'nin 1887'de KSD'ye gecmesi kaynakta yok, Lunda icin 1891-92 daha uygun gorunur. Karar sizde. 1911.]
  - önerilen düzeltme: Sandoa, Musumba KSD başlangıcı kaynakla (Lunda ilhakı 1890'lar); İlebo sahipsiz.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Congo Free State, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Congo_Free_State · önceki: veri ölçümü (kayit.py Sandoa, Musumba, Luebo)

### K039 · Britanya (`ingiltere`) · 1684-01-01 → 1763-02-10 · 154.374 km²

- nokta [57.111, -93.893], en büyük kesit 1720-01-01 · kesit sayısı 40 · sınıf sayımı {'ADA': 6, 'KARA-EKSKLAV': 2}
- çevre: kri 8%, inuit 4%
- koridor: 296.5 km · kri 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (2, s.eksklav 0): Fort Severn (ingiltere); Prince of Wales Fort (Churchill) (ingiltere)
- koridor yerleşimleri: Fort Severn güneyi — Winisk (kri)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Fort Severn, Churchill: Hudson Körfezi Şirketi karakolları, Britanya gövdesinden Kri toprağı ve denizle ayrı.
  - önerilen düzeltme: Yok.
  - kaynak: bulunamadı

### K040 · Moğol İmparatorluğu (bölünmemiş) (`mogol-imparatorlugu`) · 1256-01-01 → 1260-01-01 · 153.345 km²

- nokta [40.415, 63.676], en büyük kesit 1256-01-01 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: cagatay 25%, ilhanli 24%, altinorda 22%
- koridor: 2029.9 km · cagatay 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (1, s.eksklav 0): Buhara (mogol-imparatorlugu)
- koridor yerleşimleri: Özkent (Uzgen) (sahipsiz); Taşkent (cagatay)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (2030 km). 1256-1260 Büyük Han'ın doğrudan idare ettiği Maveraünnehir (Buhara), Çağatay/İlhanlı/Altın Orda arasında; parçada yalnız Buhara noktası var. Düşük güven: bu tarihte Buhara idaresinin Büyük Han'a bağlılığı kaynakla. [KAYNAK-1104 (kismen): Orta Asya'nın sivil idaresi Alğu döneminde (1260-66) Büyük Han'a değil Çağatay ulusunun başına bağlandı; Mesud Bey 1289'a dek idareci. — "subordinated to the head of Čaḡatai's ulus ... rather than to the great khan" · 1260 sonrası Çağatay'a geçiş teyitli (parça bitişi 1260 ile uyumlu); 1256-1260'ta doğrudan Büyük Han'a bağlılık açıkça söylenmiyor, yalnız çıkarım.]
  - önerilen düzeltme: Yok.
  - kaynak: Encyclopaedia Iranica, "CHAGHATAYID DYNASTY" (Peter Jackson); "BUKHARA iii" (Yuri Bregel) — EMRELİC okuması · önceki: bulunamadı (UZAK)

### K041 · Birleşik Arap Cumhuriyeti (Mısır-Suriye; Suriye 28.09.1961'de ayrıldı, Mısır adı 1971'e dek korudu) (`birlesik-arap-cumhuriyeti`) · 1958-02-22 → 1961-09-28 · 151.016 km²

- nokta [35.153, 38.462], en büyük kesit 1958-02-22 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: tbmm-turkiye 47%, lubnan-cumhuriyeti 15%, irak-kralligi 15%
- koridor: 237.7 km · urdun-emirligi 4/9, DENIZ/BOS 3/9, lubnan-cumhuriyeti 1/9, israil-devleti 1/9
- içindeki yerleşimler (34, s.eksklav 0): Şam (birlesik-arap-cumhuriyeti); Humus (birlesik-arap-cumhuriyeti); Krak des Chevaliers (sahipsiz); Katna (Al-Mashrafah) (sahipsiz); Mısyâf (Maşyāf) (sahipsiz); Hama (birlesik-arap-cumhuriyeti); Margat (Marqab) (sahipsiz); Şeyzer (sahipsiz) … +26
- koridor yerleşimleri: Masada (sahipsiz); Dibon (Dhībān) (sahipsiz); Eriha (Tell es-Sultan) (sahipsiz); Amman (urdun-hasimi-krallik); Ain Ghazal (sahipsiz); Câbiye (sahipsiz)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Birleşik Arap Cumhuriyeti: Suriye bölgesi ile Mısır arasında İsrail ve Ürdün (koridor 238 km). Bilinen gerçek eksklav. İçteki 34 noktanın 20'si sahipsiz (Krak des Chevaliers, Margat, Mısyâf... ortaçağ kaleleri): boyama sorunu ayrı. [KAYNAK-1104 (kismen): Şubat 1958'de Mısır ve Suriye Birleşik Arap Cumhuriyeti adı altında birleşti; başkan Abdünnâsır. — "Şubat 1958’de Mısır ve Suriye’nin Birleşik Arap Cumhuriyeti adı altında birleşmesiyle sonuçlandı" · Mısır-Suriye arası İsrail/Ürdün ile ayrık BAC: GERCEK. Başlangıç ayı teyitli (gün 22 Şubat TDV'de yok); 1961 ayrılış bu pencerede okunmadı.]
  - önerilen düzeltme: Yok. 20 sahipsiz kale noktası ayrı iş.
  - kaynak: TDV İslâm Ansiklopedisi, "Suriye" (Cemalettin Şahin vd.), https://islamansiklopedisi.org.tr/suriye · önceki: veri ölçümü (devletler.js f=1958-02-22)

### K042 · Fransız Çinhindi (`fransiz-cinhindi`) · 1883-08-25 → 1907-03-23 · 150.426 km²

- nokta [20.671, 105.555], en büyük kesit 1883-08-25 · kesit sayısı 5 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: qing-hanedani 20%, laos-kralliklari 9%, nguyen-hanedani 3%
- koridor: 210.1 km · laos-kralliklari 8/9, siyam-chakri 1/9
- içindeki yerleşimler (12, s.eksklav 0): Vinh (fransiz-cinhindi); Thanh Hoa (fransiz-cinhindi); Ninh Binh (fransiz-cinhindi); Nam Dinh (fransiz-cinhindi); Hai Phong (fransiz-cinhindi); Hanoi (Thăng Long) (fransiz-cinhindi); Bac Ninh (Vu Ninh / Long Bien bolgesi) (sahipsiz); Co Loa (sahipsiz) … +4
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Tek KARA-EKSKLAV kesit 1883-08-25 (Tonkin ilhakı ile Annam protektora ilanı arasında); Güney (Cochinchina) ile Tonkin arası Nguyen/Laos toprağı. 1884 sonrası bitişik; kısa gerçek eksklav. Aday aralığı 1907'ye kadar uzuyor, aralık fazla.
  - önerilen düzeltme: Aralık gerçek eksklav için yalnız 1883-1884.
  - kaynak: bulunamadı

### K043 · Bâbürlü (Timurlu-Hint) İmparatorluğu (`babur-imparatorlugu`) · 1752-04-01 → 1753-04-01 · 144.365 km²

- nokta [27.926, 77.723], en büyük kesit 1752-04-01 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: afgan-durrani 21%, racput 21%, bharatpur-cat 15%
- koridor: 310.9 km · racput 5/9, DENIZ/BOS 2/9, maratha 2/9
- içindeki yerleşimler (9, s.eksklav 1): Gvalyar (Gwalior) (babur-imparatorlugu); Agra (babur-imparatorlugu); Mathura (babur-imparatorlugu); Koil (Aligarh) (babur-imparatorlugu); Delhi (babur-imparatorlugu); Mîrat (Meerut) (babur-imparatorlugu); Hisâr-ı Fîrûze (babur-imparatorlugu); Rakhigarhi (sahipsiz) … +1
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Düşük güven. 1752'de Bâbürlü Delhi-Agra çekirdeği, Bengal/Dekan Bâbürlü gövdelerinden Racput ve Maratha toprağıyla ayrı görünüyor; hangi gövdenin 'büyük kardeş' olduğu ölçülmedi. Rakhigarhi sahipsiz (antik).
  - önerilen düzeltme: Yok; sınıflama doğrulaması için gövdenin kimliği ölçülmeli.
  - kaynak: bulunamadı

### K044 · Timurlu valiliği (`timurlu`) · 1402-07-28 → 1404-03-01 · 143.602 km²

- nokta [38.626, 32.557], en büyük kesit 1402-08-17 · kesit sayısı 4 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: karaman 35%, candar 11%, germiyan 9%
- koridor: 411.0 km · mutahharten 4/9, dulkadir 3/9, memluk 2/9
- içindeki yerleşimler (29, s.eksklav 0): Burdur (timurlu); Söke (timurlu); Denizli (timurlu); Ermenek (timurlu); Karaman (timurlu); Çatalhöyük (sahipsiz); Karapınar (timurlu); Boncuklu Höyük (sahipsiz) … +21
- koridor yerleşimleri: Zamantı (Pınarbaşı) (dulkadir); Gemerek (dulkadir); Divriği (memluk); Kemah (mutahharten); Erzincan (mutahharten)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Ankara Savaşı (1402-07-28) sonrası Timur'un Anadolu valiliği; Timur'un tâbileri Mutahharten (Erzincan) ve Dulkadir araya giriyor, Memlük Divriği'de. Çatışan yapı model tercihi; Timurlu denetiminin Batı Anadolu'da bu kadar geniş olup olmadığı ayrıca kaynak ister (Söke, Denizli). [KAYNAK-1104 (celiski): Timur İzmir'den doğuya döndü, Denizli'den Akşehir'e yönelirken Bayezid'in ölüm haberini aldı (Mart 1403); bir yıl kadar Anadolu'da kalıp Anadolu beyliklerini canlandırdı; Muharrem 807'de (Temmuz 1404) Semerkant'a döndü. — "Bir yıl kadar Anadolu’da kalıp Anadolu beyliklerini canlandıran Timur" · TDV'ye göre Batı Anadolu (Denizli, Söke, Burdur) doğrudan Timurlu idaresine değil, yeniden kurulan beyliklere (Germiyan, Menteşe, Aydın, Karaman, Hamîd) verildi. Hüküm GERÇEK → YAPAY-c önerisi: bu noktalarda 1402-08 sonrası ilgili beylik d: + timurlu tâbiliği (v:) — beylik iade günleri kaynakla. Bitiş 1404-03-01 yerine Timur'un Anadolu'dan ayrılışı Temmuz 1404 (Muharrem 807 ∩ Temmuz → 1404-07-10).] [hüküm GERCEK/GERCEK → YAPAY/YAPAY-c, kaynak üzerine]
  - önerilen düzeltme: Denizli, Söke, Burdur, Isparta vb. 1402-08 sonrası ilgili beylik (Germiyan/Menteşe/Aydın/Hamîd/Karaman) d: + timurlu v: — beylik iade günleri kaynakla; timurlu bitişi Temmuz 1404 (Muharrem 807, TDV Timur).
  - kaynak: TDV İslâm Ansiklopedisi, "Timur" (İsmail Aka), https://islamansiklopedisi.org.tr/timur

### K045 · San Fan (Üç Feudatori) İsyanı (`san-fan`) · 1674-03-15 → 1677-01-01 · 141.255 km²

- nokta [24.489, 116.815], en büyük kesit 1676-04-05 · kesit sayısı 5 · sınıf sayımı {'ADA': 2, 'KARA-EKSKLAV': 2}
- çevre: qing-hanedani 18%, tungning 0%, portekiz 0%
- koridor: 44.1 km · qing-hanedani 9/9
- içindeki yerleşimler (6, s.eksklav 0): Hong Kong (sahipsiz); Kanton (Guangzhou) (san-fan); Zhangzhou (san-fan); Zeytun (Quanzhou) (san-fan); Chaozhou (san-fan); Fuzhou (san-fan)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Geng Jingzhong (Fujian) ve Shang Zhixin (Guangdong) payları, Wu Sangui'nin Hunan/Yunnan gövdesinden Qing elindeki Jiangxi ile ayrı (koridor 44 km qing 9/9). Zhangzhou/Chaozhou 'san-fan', Amoy 'tungning' (ölçüldü); Zhangzhou'nun Tungning'e geçişi 1676 civarı kaynakla bakılmalı. Hong Kong sahipsiz. [KAYNAK-1104 (kismen): Geng Jingzhong 1674'te isyan etti (ay yok), 9 Kasım 1676'da teslim oldu; Shang Zhixin 1676 başında isyana katıldı, 1677'de teslim oldu. — "Early in 1676 Shang Zhixin joined the rebellion" · Fujian payının bitişi 1676-11-09 (Geng teslimi); Guangdong payı 1677. Atlas parça bitişi 1677-01-01 Fujian için ~2 ay geç — kesit ayrı ölçülmeli.]
  - önerilen düzeltme: Zhangzhou/Chaozhou sahipliği ve bitiş günü kaynakla.
  - kaynak: Eminent Chinese of the Qing Period, "GIYEŠU" ve "ZHENG Jing" maddeleri; "WU Sangui" (Fang Chao-ying) — EMRELİC okuması (Oxford Reference) · önceki: veri ölçümü (cevre.py 1676-04-05)

### K046 · Memlûk (`memluk`) · 1517-01-22 → 1517-04-13 · 139.417 km²

- nokta [19.386, 36.593], en büyük kesit 1517-01-24 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: funj 29%, habesistan 29%
- koridor: 180.8 km · habesistan 9/9
- içindeki yerleşimler (9, s.eksklav 2): Bûr Sûdân (sahipsiz); Akīk (memluk); Tokar (memluk); Trinkitât (memluk); Sevâkin (memluk); Derûdeb (memluk); Hayyâ (memluk); Sinkat (memluk) … +1
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. 1517 Ocak-Nisan Memlûk kalıntısı: ölçüldü (1517-03-01) Sinkat, Sevâkin, Tokar, Trinkitât, Cidde (352 km) memluk; Berber/Şereyk funj, Nakfa habesistan. Memlûk'ün Kızıldeniz Sudan sahilindeki fiilî denetimi kaynak gerektirir; Kahire 1517'de düştüğü hâlde atlas memluk'u 1517-04-13'e dek tutuyor. [KAYNAK-1104 (tam): Ridâniye 22 Ocak 1517; Tomanbay 30 Mart 1517'de yakalandı, 13 Nisan 1517 (21 Rebîülevvel 923) Bâbüzüveyle'de asıldı. — "21 Rebîülevvel 923 (13 Nisan 1517) tarihinde Kahire kapılarından Bâbüzüveyle’de asıldı" · Parça aralığı 1517-01-22 → 1517-04-13 TDV'deki iki günle birebir: Memlük devleti Tomanbay'ın idamına dek sürdü. Sevâkin kıyısının fiilî Memlük denetimi TDV'de yok (o kısım teyitsiz).]
  - önerilen düzeltme: Gün/sahiplik kaynakla (TDV Tomanbay/Memlûkler).
  - kaynak: TDV İslâm Ansiklopedisi, "Tomanbay" (Cüneyt Kanat), https://islamansiklopedisi.org.tr/tomanbay · önceki: veri ölçümü (cevre.py)

### K047 · Meksika (`meksika`) · 1825-09-01 → 2000-12-31 · 136.403 km²

- nokta [27.824, -113.451], en büyük kesit 1900-12-01 · kesit sayısı 28 · sınıf sayımı {'ADA': 6, 'KARA-EKSKLAV': 4}
- çevre: abd 11%
- koridor: 40.8 km · abd 9/9
- içindeki yerleşimler (6, s.eksklav 0): La Paz (Baja California Sur) (meksika); Loreto (Baja California) (meksika); Misión Santa Gertrudis (Baja California) (meksika); Misión San Francisco de Borja (meksika); El Rosario (Baja California) (meksika); Misión San Vicente Ferrer (meksika)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-m` · güven `KAYNAKLI`
  - gerekçe: Aşağı Kaliforniya yarımadası Sonora'ya Colorado ırmağı deltasında kara komşu (Baja California-Sonora sınırı); 40,8 km 'abd' koridoru motor/kıyı sınırı yaklaşıklığı olmalı (çok kesit; 28 kesitin 4'ü KARA, 6'sı ADA). Ölçülmedi, eksklav tarihsel değil. [KAYNAK-1104 (kismen): 30 Aralik 1853 Gadsden Antlasmasi: sinir Colorado Irmagi'nin ortasindan gider, 'iki Kaliforniya' arasindaki eski bolme cizgisi korunur; yani Baja California'nin kuzey siniri Colorado/Kaliforniya cizgisidir. — "retaining the same dividing line between the two Californias" · Sonora-Baja kara komsulugunun delta ayrintisi ve 40,8 km 'abd' koridoru motor sorusu; kaynak yalniz sinir hattini verir.]
  - önerilen düzeltme: Motor sorusu (HAVVA): Colorado deltası ABD/Meksika sınırı kesişimi.
  - kaynak: Avalon Project (Yale), Gadsden Purchase Treaty, https://avalon.law.yale.edu/19th_century/mx1853.asp

### K048 · Delhi Sultanlığı (`delhi-sultanligi`) · 1311-01-01 → 1323-01-01 · 131.035 km²

- nokta [11.475, 78.617], en büyük kesit 1311-01-01 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: hoysala 17%, travankur 12%, kalikut 3%
- koridor: 686.2 km · kakatiya 7/9, yadava 2/9
- içindeki yerleşimler (8, s.eksklav 0): Madurai (delhi-sultanligi); Nagapatnam (delhi-sultanligi); Tancûr (Thanjavur) (delhi-sultanligi); Trichinopoly (Tiruchirappalli) (delhi-sultanligi); Pondişeri (sahipsiz); Cinci (Gingee) (delhi-sultanligi); Arkot (Arcot) (delhi-sultanligi); Vellor (Vellore) (delhi-sultanligi)
- koridor yerleşimleri: Kurnûl (Kurnool) (kakatiya); Bîdar (kakatiya)
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: UZAK (686 km). Madurai, Nagapatnam, Tancûr, Trichinopoly, Cinci, Arkot, Vellor 1311-1323 'delhi-sultanligi': Ala'üddin Halci'nin Malik Kafur akını (1311) kalıcı idare değil; Delhi'nin Ma'bar valiliği 1323 sonrasıdır (tarihsel iddia, kaynak sırasıyla teyit). Dönem uçları akın tarihine dayanıyor olabilir. [KAYNAK-1104 (kismen): Alâeddin döneminde Devâgirî, Telingana, Dvârasamudra ve Madura Halacî üstünlüğünü kabul edip vergiye bağlandı (ilhak değil); Ma'ber Delhi'nin en güney eyaleti iken Celâleddin Ahsen Şah'ın isyanıyla 735/1334-35'te Delhi idaresinden çıktı. — "Dvârasamudra ve Madura gibi vilâyetler Delhi Halacîleri’nin üstünlüğünü kabul ederek vergiye bağlandılar" · 1311-1323 Madura için Delhi d: dönemi YAPAY-c destekli: o aralık en çok v: (vergili tâbi). Eyalet (d:) başlangıç günü TDV'de yok; bitiş 1334-35 (735 ∩ 1334 → 1334-08-30) teyitli.]
  - önerilen düzeltme: Güney Hindistan noktalarının delhi-sultanligi f ucu: Imperial Gazetteer (dsal) Madura/Ma'bar ile teyit (gün bulunamadı).
  - kaynak: TDV İslâm Ansiklopedisi, "Halacîler" (Enver Konukçu), https://islamansiklopedisi.org.tr/halaciler; "Tuğluklular" (S. Haluk Kortel), https://islamansiklopedisi.org.tr/tugluklular · önceki: bulunamadı (UZAK)

### K049 · Maratha Konfederasyonu (`maratha`) · 1732-01-01 → 1818-06-03 · 129.443 km²

- nokta [18.675, 74.432], en büyük kesit 1760-01-01 · kesit sayısı 36 · sınıf sayımı {'KARA-EKSKLAV': 12}
- çevre: babur-imparatorlugu 50%, haydarabad-nizam 47%, portekiz 28%
- koridor: 19.6 km · haydarabad-nizam 5/9, ingiliz-hindistani 4/9
- içindeki yerleşimler (9, s.eksklav 0): Bîcâpur (Bijapur) (maratha); Satâra (maratha); Raygad (maratha); Pûne (Poona) (maratha); Çaul (Chaul) (maratha); Ahmednagar (maratha); Thane (maratha); Pratishthana (Paithan) (sahipsiz) … +1
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Düşük güven. Ölçüldü: 1760'ta Ahmednagar maratha, Evrengâbâd (104 km) ve Devagiri haydarabad-nizam; Pûne, Nâsik, Satâra maratha. Nizam'ın Evrengâbâd'ı Peşva çekirdeği ile kuzey/doğu Maratha paylarını ayırıyor (koridor 19,6 km). 1818 öncesi dönem için doğru; İngiliz 4/9 örneği 1818 sonrası için ayrıca bakılmalı.
  - önerilen düzeltme: Yok.
  - kaynak: veri ölçümü (cevre.py 1760/1790)

### K050 · Avusturya (Habsburg) (`avusturya`) · 1918-10-28 → 1918-11-03 · 129.320 km²

- nokta [49.472, 19.08], en büyük kesit 1918-10-28 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: macaristan-habsburg 28%, almanya 24%, sovyet-rusya 13%
- koridor: 109.0 km · cekoslovakya 7/9, almanya 2/9
- içindeki yerleşimler (14, s.eksklav 0): Suçava (Suceava) (avusturya); Çernovitz (Çernivtsi) (avusturya); Yazlofça (Yazlovets) (avusturya); Ostrava (Mährisch Ostrau) (avusturya); Karviná (Fryštát) (avusturya); Opava (Troppau) (avusturya); Lvov (avusturya); Zamość (avusturya) … +6
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Çekoslovakya 28.10.1918'de ayrıldı; Galiçya/Bukovina/Silezya Avusturya'da birkaç gün daha kaldı (Batı Ukrayna 1 Kasım, Krakov 31 Ekim). Çözülme anı. [KAYNAK-1104 (kismen): Ukrayna Ulusal Rada'si 18 Ekim 1918'de Lviv'de kuruldu; 1 Kasim 1918'de Lviv ve Galiciya ilce kentlerinde yonetimi ele gecirdi (yaklasik 150 yillik Avusturya yonetiminin sonu). 9 Kasim: ZUNR yapisi belirlendi. — "bringing to an end nearly 150 years of Austrian rule" · Cekoslovakya 28 Ekim ve Krakov 31 Ekim bu kaynakta okunmadi. Makalenin son 66.692 karakteri okunmadi.]
  - önerilen düzeltme: yok
  - kaynak: Encyclopedia of Ukraine, Galicia, http://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CA%5CGalicia.htm

### K051 · Umman-Zengibar Sultanlığı (`umman-zengibar`) · 1830-01-01 → 1890-11-04 · 126.599 km²

- nokta [-5.075, 32.126], en büyük kesit 1852-01-01 · kesit sayısı 12 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: burundi 26%
- koridor: 341.1 km · nyamvezi 6/9, DENIZ/BOS 3/9
- içindeki yerleşimler (2, s.eksklav 0): Ucici (Ujiji) (umman-zengibar); Tabora (Kazeh) (umman-zengibar)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Ucici (Ujiji) ve Tabora (Kazeh) Zengibar sultanının iç Afrika kervan merkezleri; Nyamvezi (devletler.js t=1890-11-04) araya giriyor, koridor 341 km. Fiilî denetim zayıf, model tercihi; kaynakla kesinleşmedi.
  - önerilen düzeltme: Yok.
  - kaynak: bulunamadı

### K052 · Yeni İspanya (`yeni-ispanya`) · 1692-08-01 → 1804-01-01 · 121.513 km²

- nokta [35.778, -107.217], en büyük kesit 1769-07-16 · kesit sayısı 30 · sınıf sayımı {'KARA-EKSKLAV': 7}
- çevre: zuni 14%, navaho 9%, meskalero-apaci 9%
- koridor: 77.3 km · meskalero-apaci 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (5, s.eksklav 0): Acoma Pueblo (Sky City) (yeni-ispanya); Albuquerque (yeni-ispanya); Santa Fe (yeni-ispanya); Pueblo Bonito (sahipsiz); Taos Pueblo (yeni-ispanya)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Yeni Meksika (Santa Fe, Albuquerque, Taos) Yeni İspanya'nın geri kalanından Mescalero Apaçi toprağı ile ayrı (koridor 77 km). Tarihsel olarak bilinen izolasyon. Pueblo Bonito sahipsiz (harabe).
  - önerilen düzeltme: Yok.
  - kaynak: bulunamadı

### K053 · Avusturya (Habsburg) (`avusturya`) · 1918-11-03 → 1919-09-10 · 119.118 km²

- nokta [47.426, 14.264], en büyük kesit 1918-11-03 · kesit sayısı 4 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: macaristan-habsburg 25%, italya 20%, cekoslovakya 16%
- koridor: 109.0 km · cekoslovakya 7/9, almanya 2/9
- içindeki yerleşimler (24, s.eksklav 0): Fiume (Rijeka) (sahipsiz); Ljubljana (avusturya); Maribor (Marburg) (avusturya); Villach (avusturya); Klagenfurt (avusturya); Lienz (avusturya); Graz (avusturya); Hartberg (avusturya) … +16
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Ljubljana ve Maribor 'avusturya' -> 1918-11-11, sonra yugoslavya; yugoslavya künyesi f=1918-12-01. Slovence bölge SHS Devleti ilanıyla (29 Ekim 1918, tarihsel iddia) bu kesitten önce Habsburg dışına çıkıyor; 1918-11-03 kesiti ile uyumsuz. Habsburg `habsburg` kimliği harita:avusturya takma adlı (t=1918-11-12). Fiume sahipsiz. [KAYNAK-1104 (kismen): Sloven toprakları 1918'de Avusturya'dan ayrılarak Güney Slav devletine katıldı. · Yalnız yıl teyitli; 29 Ekim 1918 günü okunmadı. YAPAY-c (Ljubljana/Maribor 'avusturya' 1918-11-11'e dek) yıl düzeyinde destekli.]
  - önerilen düzeltme: Ljubljana/Maribor/Celje: SHS Devleti dönemi (29.10.1918) ve atlasın yugoslavya f ucu uyumu, kaynakla (gün bulunamadı).
  - kaynak: Oxford Companion to Politics of the World, "Slovenia" — EMRELİC okuması (Oxford Reference) · önceki: veri ölçümü (kayit.py, devletler.js)

### K054 · Portekiz (`portekiz`) · 1887-01-01 → 1902-01-01 · 118.842 km²

- nokta [-8.694, 20.457], en büyük kesit 1895-06-16 · kesit sayısı 8 · sınıf sayımı {'KARA-EKSKLAV': 6}
- çevre: kongo-serbest-devleti 58%, ovimbundu 19%, kasance 14%
- koridor: 991.7 km · ingiltere 5/9, ovimbundu 2/9, kongo-serbest-devleti 1/9, DENIZ/BOS 1/9
- içindeki yerleşimler (2, s.eksklav 0): Saurimo (portekiz-angola); Dundo (portekiz-angola)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (992 km). Lunda (Saurimo, Dundo) Portekiz Angola'sından Kongo Serbest Devleti ve Ovimbundu ile ayrı. Portekiz-angola kaydı `harita: portekiz` takma adlı (ölçüldü) -> YAPAY-k değil. Dundo'nun 1887-1902 arasında var olup olmadığı kaynak ister. [KAYNAK-1104 (celiski): Lunda Portekiz ile Kongo Serbest Devleti arasinda uluslararasi anlasma ile paylasildi: 25 Mayis 1891 antlasmasi, 24 Mart 1894 beyan. — "divided by international agreement between Portugal and the Congo Free State" · Atlas f=1887-01-01; kaynak Portekiz Lunda sinirini 1891/1894'e baglar. Dundo/Saurimo'nun 1887'de Portekiz oldugu teyit edilmedi. 1911 kaynak.]
  - önerilen düzeltme: Dundo/Saurimo için kuruluş ve Portekiz hâkimiyeti başlangıcı kaynakla.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Angola, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Angola ; Congo Free State maddesi · önceki: veri ölçümü (devletler.js)

### K055 · Portekiz (`portekiz`) · 1575-01-01 → 1902-01-01 · 117.541 km²

- nokta [-8.582, 15.139], en büyük kesit 1895-01-01 · kesit sayısı 92 · sınıf sayımı {'KARA-EKSKLAV': 24}
- çevre: kongo-kralligi 28%, ovimbundu 28%, ndongo 24%
- koridor: 248.4 km · kasance 9/9
- içindeki yerleşimler (7, s.eksklav 0): Kambambe (Cambambe) (portekiz-angola); Pungo Andongo (portekiz-angola); Massangano (portekiz-angola); Matamba (portekiz-angola); Kabasa (portekiz-angola); Luanda (portekiz-angola); Soyo (portekiz-angola)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Luanda/Massangano/Pungo Andongo Portekiz payı, Benguela-Güney payından Kasanç-Ovimbundu-Ndongo toprağı ile ayrı (koridor 248 km); 1575-1902 boyu parçalı Portekiz varlığı. portekiz-angola `harita: portekiz` takma adı (ölçüldü). [KAYNAK-1104 (celiski): Luanda 1576'da kuruldu, Benguela 1617; Hollandalilar 1640-1648'de limanlari elinde tuttu (Portekiz egemenliginin tek kesintisi). — "The Dutch held the ports" · Atlas f=1575-01-01 (Luanda 1576, 1 yil fark) ve atlas 1640-48 Hollanda kesintisini gostermiyor olabilir. Massangano/Pungo Andongo yok. 1911 kaynak.]
  - önerilen düzeltme: Yok.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Angola, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Angola · önceki: veri ölçümü (devletler.js)

### K056 · Britanya (`ingiltere`) · 1763-02-10 → 1783-09-03 · 116.208 km²

- nokta [46.15, -91.408], en büyük kesit 1765-05-10 · kesit sayısı 13 · sınıf sayımı {'KARA-EKSKLAV': 4}
- çevre: ingiliz-kuzey-amerika 14%, ojibwe 7%
- koridor: 601.7 km · miami 5/9, DENIZ/BOS 2/9, savni 2/9
- içindeki yerleşimler (3, s.eksklav 0): La Baye (Green Bay) (ingiltere); Duluth (Fond du Lac) (sahipsiz); Fort William (Thunder Bay) (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-k` · güven `OLCUM`
  - gerekçe: Ölçüldü: La Baye (Green Bay) 1763-02-10 -> 1783-09-03 'ingiltere'; Fort St. Pierre (Rainy Lake) aynı tarihlerde 'ingiliz-kuzey-amerika' (f=1763-02-10). Aynı İngiliz Kuzey Amerikası, bitişik iki kimlikte; ingiliz-kuzey-amerika için harita: takma adı yok. Duluth, Fort William sahipsiz.
  - önerilen düzeltme: Üst Göller noktaları (La Baye vb.) tek kimlik: ingiliz-kuzey-amerika (ya da harita: takma adı).
  - kaynak: veri ölçümü (kayit.py)

### K057 · Pakistan (`pakistan`) · 1947-08-15 → 1971-12-16 · 113.821 km²

- nokta [23.297, 91.78], en büyük kesit 1948-03-27 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: hindistan-cumhuriyeti 30%, ingiliz-hindistani 8%, manipur 7%
- koridor: 1569.8 km · hindistan-cumhuriyeti 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (8, s.eksklav 0): Mainamati (Cumilla) (sahipsiz); Pattikera (sahipsiz); Karmanta (sahipsiz); Vikramapura (sahipsiz); Vikramapura (Bikrampur) (sahipsiz); Sonârgâon (pakistan); Dakka (Dhaka) (pakistan); Agartala (sahipsiz)
- koridor yerleşimleri: Simraungarh (sahipsiz); Mîrat (Meerut) (hindistan-cumhuriyeti); Pânipat (hindistan-cumhuriyeti)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: UZAK (1570 km). Doğu Pakistan (Bengal) ile Batı Pakistan arasında Hindistan: 1947-1971'in bilinen eksklavı. Mainamati, Vikramapura vb. sahipsiz (antik/ortaçağ yerler).
  - önerilen düzeltme: Yok.
  - kaynak: bulunamadı (UZAK)

### K058 · Buhara Hanlığı (`buhara`) · 1500-01-01 → 1503-01-01 · 111.959 km²

- nokta [43.181, 70.221], en büyük kesit 1500-01-01 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: kazak-hanligi 34%, mogulistan 21%
- koridor: 65.5 km · mogulistan 9/9
- içindeki yerleşimler (4, s.eksklav 0): Sayram (İsficâb) (buhara); Çimkent (buhara); Türkistan (Yesi) (buhara); Taraz (Evliya-Ata) (buhara)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. 1500-1503 Şeybanî ilerleyişi: Sayram, Çimkent, Türkistan, Taraz 'buhara', koridor 65 km Moğulistan (Taşkent 1503'e dek Moğul). Şeybânî Han'ın bu şehirlere geliş tarihi kaynak ister. [KAYNAK-1104 (kismen): Moğol hanı Mahmud Han Türkistan'ı (Yesi) Şeybânî Han'a yurtluk verdi (893/1488); Şeybânî 905-913 (1500-1507) yıllarında Mâverâünnehir, Hârizm ve Horasan'ı aldı. — "Mahmud Han, Türkistan’ı (Yesi) kendisine yurtluk olarak verdi (893/1488)" · Sir-Derya kentlerinin 1500-1503'te Şeybânî elinde, Taşkent'in Moğol elinde olması teyitli (Taşkent 1503, bkz. E011): GERÇEK. Sayram/Çimkent için ayrı tarih TDV'de yok.]
  - önerilen düzeltme: Yok; Sayram/Türkistan için f ucu kaynakla.
  - kaynak: TDV İslâm Ansiklopedisi, "Şeybânîler" (İsmail Türkoğlu), https://islamansiklopedisi.org.tr/seybaniler

### K059 · Memlûk (`memluk`) · 1517-04-13 → 1517-05-19 · 111.759 km²

- nokta [30.847, 26.507], en büyük kesit 1517-04-13 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: OSMANLI 40%
- koridor: 309.5 km · OSMANLI 9/9
- içindeki yerleşimler (26, s.eksklav 0): Mersâ Matruh (memluk); Sellûm (memluk); Bilbîs (Şarkiye) (memluk); Benhâ (Kalyûbiye) (memluk); Şibînülkûm (Menûfiye) (memluk); Bubastis (sahipsiz); İsmâiliye (sahipsiz); Leontopolis (sahipsiz) … +18
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: memluk künyesi t=1517-04-13 (Tomanbay'ın idamı günü); fakat Mersâ Matruh, Bilbîs vb. memluk dönemi t=1517-05-19 ve OSMANLI d f=1517-05-19. Parça 04-13 -> 05-19 arasında yalnız bu 36 günlük künye aşımından doğuyor.
  - önerilen düzeltme: Aynı polity sürüyorsa memluk künye t genişlet; sürmüyorsa yerleşim t 1517-04-13 (ya da Osmanlı f erkene) — kaynakla sınıflandırılmalı (gün bulunamadı).
  - kaynak: veri ölçümü (devletler.js memluk t, kayit.py)

### K060 · Nogay Ordası (`nogay`) · 1502-03-01 → 1556-01-01 · 110.958 km²

- nokta [45.389, 45.592], en büyük kesit 1552-01-01 · kesit sayısı 3 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: astarhan 34%, TABI 20%, kabartay 14%
- koridor: 33.4 km · astarhan 9/9
- içindeki yerleşimler (6, s.eksklav 0): Urus-Martan (sahipsiz); Şali (Shali) (sahipsiz); Grozni (Groznıy) (sahipsiz); Gudermes (sahipsiz); Terek deltası (Kızlar) (nogay); Kalmuk bozkırı (nogay)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Nogay Ordası Terek-Kuma kanadı, Volga-Yayık ana gövdesinden Astarhan Hanlığı (1466-1556) ile ayrı (koridor 33 km). Bilinen iki kanat yapısı. Şali, Grozni, Gudermes sahipsiz: Grozni 1818'de kuruldu, o devirde yok.
  - önerilen düzeltme: Yok.
  - kaynak: veri ölçümü (devletler.js astarhan)

### K061 · Britanya (`ingiltere`) · 1776-07-04 → 1783-09-03 · 109.005 km²

- nokta [35.398, -78.834], en büyük kesit 1779-09-21 · kesit sayısı 8 · sınıf sayımı {'KARA-EKSKLAV': 5}
- çevre: abd 33%
- koridor: 263.2 km · cherokee 6/9, DENIZ/BOS 3/9
- içindeki yerleşimler (3, s.eksklav 0): Wilmington (Kuzey Karolayna) (ingiltere); Occaneechi (Hillsborough) (ingiltere); Norfolk (Virginia) (ingiltere)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Wilmington (KK), Norfolk, Hartford, Providence 'ingiltere' 1783-09-03'e dek, çevre 'abd' 9/9. ABD 1776-07-04'te ilan edildi; Hartford/Providence savaşta İngiliz denetiminde değil (tarihsel iddia). Atlas hukuki egemenliği (1783 Paris) kullanıyor, çevre 'abd' fiilî; ikisi karışmış. [KAYNAK-1104 (kismen): Hukuki devir 3 Eylul 1783 Paris Antlasmasi ile; atlasin t=1783-09-03'u hukuki tarihtir. 4 Temmuz 1776 ve fiili Ingiliz isgal pencereleri okunmadi. — "Done at Paris, this third day of September" · Hukum fiili/hukuki karisikligini kaynak cozmez.]
  - önerilen düzeltme: Atlantik kıyısı noktaları 1776-07-04 -> 1783-09-03 abd (fiilî) ya da hepsi ingiltere; İngiliz işgal pencereleri (Norfolk 1776, Wilmington 1781-82) kaynakla.
  - kaynak: Avalon Project (Yale), Definitive Treaty 1783, https://avalon.law.yale.edu/18th_century/paris.asp · önceki: veri ölçümü (kayit.py)

### K062 · Britanya (`ingiltere`) · 1876-01-01 → 1899-01-01 · 108.209 km²

- nokta [-14.531, 34.263], en büyük kesit 1895-05-01 · kesit sayısı 71 · sınıf sayımı {'KARA-EKSKLAV': 10}
- çevre: portekiz 46%, umman-zengibar 15%, yao 15%
- koridor: 254.0 km · portekiz 6/9, DENIZ/BOS 3/9
- içindeki yerleşimler (6, s.eksklav 0): Blantyre (ingiltere); Zomba (ingiltere); Kuamba (sahipsiz); Mangoçi (ingiltere); Mankhamba (Maravi) (ingiltere); Nkhotakota (Cumbe) (ingiltere)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Blantyre 'ingiltere' f=1876-01-01 (1876 İskoç misyonu kuruluşu); İngiliz himayesi Shire Highlands 1889, Britanya Orta Afrika Himayesi 1891 (tarihsel iddia). Parça 1876-1899, dönem başı erken. Kuamba sahipsiz. [KAYNAK-1104 (kismen): Blantyre 1876'da Iskoc misyonerlerce kuruldu; Ingiliz himayesi/etki alani Johnston'in 1889 misyonu ve antlasmalariyla, imperial commissioner olarak donusu 1891; 'British Central Africa' adi 1893'te resmilesti. — "Blantyre was founded in 1876 by Scottish missionaries" · Hukumle (YAPAY) uyumlu: 1876 misyon kurulusu, Ingiliz egemenligi degil; himaye 1889-1891. 1911 kaynak.]
  - önerilen düzeltme: Blantyre/Zomba/Mangoçi 'ingiltere' f ucu kaynakla (1889-1891), öncesi yerel devlet (yao/maravi).
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Blantyre (Nyasaland) ve British Central Africa, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/British_Central_Africa · önceki: veri ölçümü (kayit.py Blantyre)

### K063 · Britanya (`ingiltere`) · 1683-01-01 → 1885-03-31 · 106.542 km²

- nokta [-19.75, 28.462], en büyük kesit 1839-01-19 · kesit sayısı 193 · sınıf sayımı {'KARA-EKSKLAV': 6}
- çevre: venda 16%, mutapa 16%, tsvana 13%
- koridor: 1025.7 km · tsvana 3/9, transvaal 2/9, KENDI 2/9, basuto 2/9
- içindeki yerleşimler (6, s.eksklav 0): Gvanda (sahipsiz); Khami (ingiltere); Bulavayo (sahipsiz); Bulawayo (sahipsiz); Danangombe (Rozvi) (ingiltere); Gveru (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: Khami 'ingiltere' 1683-01-01 -> 1965 (torva 1450-1683); Danangombe 'ingiltere' 1834-01-01 -> 1965 (rozvi 1684-1834). 1683-1885 Zimbabve platosunda İngiliz egemenliği yok: Rozvi, sonra Ndebele (Matabele); Bulavayo, Gvanda, Gveru sahipsiz. Parça bu yanlış ingiltere dönemlerinden doğuyor.
  - önerilen düzeltme: Khami: 1683 sonrası Rozvi; Danangombe: 1834 sonrası Ndebele (matabele); Bulavayo/Gvanda/Gveru dönem; İngiliz başlangıcı (BSAC 1890-1895) kaynakla (gün bulunamadı).
  - kaynak: veri ölçümü (kayit.py Khami, Danangombe)

### K064 · İspanya (`ispanya`) · 1571-06-24 → 1898-08-13 · 105.189 km²

- nokta [15.593, 120.74], en büyük kesit 1894-03-05 · kesit sayısı 166 · sınıf sayımı {'KARA-EKSKLAV': 3, 'ADA': 25}
- çevre: filipin-racaliklari 17%
- koridor: 10818.8 km · DENIZ/BOS 3/9, ingiliz-hindistani 2/9, kacar 2/9, racput 1/9, OSMANLI 1/9
- içindeki yerleşimler (7, s.eksklav 0): Legazpi (ispanya); Naga (Camarines) (ispanya); Batangas (ispanya); Manila (ispanya); Malolos (sahipsiz); Vigan (ispanya); Tuguegarao (ispanya)
- koridor yerleşimleri: Ava (İnwa) (ingiliz-hindistani); Çatgam (Chittagong) (ingiliz-hindistani); Nadia (Navadvipa/Nabadwip) (ingiliz-hindistani); Kâlincar (sahipsiz); Mahoba (sahipsiz); Orchha (Orcha) (bundela-orcha); İzeh (sahipsiz); Dur-Untaş (Çoğa Zanbil) (sahipsiz); Şüşter (kacar); Susa (sahipsiz) … +20
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (10819 km). Filipinler (Luzon), İspanya'dan uzak denizaşırı; çoğu kesit ADA. Malolos sahipsiz. [KAYNAK-1104 (kismen): Ispanyol fethi 1565'te Legazpi ile Cebu'da basladi; 1898'de koloni ABD'ye devredildi. — "la conquista spagnola delle F. fu avviata (1565)" · Manila 24 Haziran 1571 ve Aralik 1898 gunleri sayfada yok; yalniz yil.]
  - önerilen düzeltme: Yok.
  - kaynak: Treccani, Filippine, https://www.treccani.it/enciclopedia/filippine/ · önceki: bulunamadı (UZAK)

### K065 · Cungar Hanlığı (Kalmuk) (`cungar`) · 1720-01-01 → 1736-01-01 · 104.836 km²

- nokta [52.372, 82.138], en büyük kesit 1720-01-01 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: rusya 70%
- koridor: 170.6 km · rusya 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (2, s.eksklav 0): Zmeinogorsk (cungar); Barnaul (cungar)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. Üst Ob/Altay Cungar kesiti, Cungar ana gövdesinden Rus Irtış hattı ile ayrı (koridor 171 km). Ölçüldü: Barnaul cungar t=1730-01-01; Barnaul 1730'da kuruldu ve Zmeinogorsk 1736'da (tarihsel iddia) — 1720 kesitinde o yerler yok, nokta yer tutucu. [KAYNAK-1104 (kismen): Barnaul 1730'da A. Demidov tarafindan kuruldu (Altay madencilik merkezi). — "founded in 1730 by A. Demidov" · Hukumdeki 'Barnaul 1730'da kuruldu' dogrulaniyor; Zmeinogorsk 1736 ve Cungar-Rus hatti okunmadi. 1911 kaynak.]
  - önerilen düzeltme: Barnaul/Zmeinogorsk 'o devirde yok' (merdiven ④), Cungar-Altay hâkimiyeti noktaları kaynakla.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Barnaul, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Barnaul · önceki: veri ölçümü (kayit.py Barnaul)

### K066 · Britanya (`ingiltere`) · 1776-07-04 → 1783-09-03 · 103.732 km²

- nokta [43.716, -70.784], en büyük kesit 1778-01-01 · kesit sayısı 8 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: abd 30%, ingiliz-kuzey-amerika 21%
- koridor: 73.0 km · abd 9/9
- içindeki yerleşimler (5, s.eksklav 2): Hartford (ingiltere); Providence (ingiltere); Portsmouth (New Hampshire) (ingiltere); Pemaquid (ingiltere); Norridgewock (Abenaki) (ingiltere)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: K061 ile aynı: Hartford, Providence, Portsmouth (NH), Pemaquid 'ingiltere' 1783-09-03'e dek (Hartford, Providence ölçüldü), çevre abd 9/9 (koridor 73 km, 3 kesit). Yeni İngiltere kentleri 1776'dan itibaren fiilen ABD'dir (tarihsel iddia); İngiliz işgali yok. [KAYNAK-1104 (kismen): Hukuki devir 3 Eylul 1783 (bkz. K061). — "Done at Paris, this third day of September" · Penobscot/Pemaquid 1779 isgali okunmadi.]
  - önerilen düzeltme: Yeni İngiltere noktaları 1776-07-04 f abd; Penobscot/Pemaquid İngiliz işgal penceresi (1779) kaynakla.
  - kaynak: Avalon Project (Yale), Definitive Treaty 1783, https://avalon.law.yale.edu/18th_century/paris.asp · önceki: veri ölçümü (kayit.py)

### K067 · Bengal Sultanlığı (`bengal-sultanligi`) · 1576-01-01 → 1576-07-12 · 102.548 km²

- nokta [21.138, 85.906], en büyük kesit 1576-01-01 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: babur-imparatorlugu 13%
- koridor: 50.0 km · babur-imparatorlugu 9/9
- içindeki yerleşimler (8, s.eksklav 0): Banapur (sahipsiz); Puri (bengal-sultanligi); Kattak (Cuttack) (bengal-sultanligi); Jajpur (sahipsiz); Bâlâsor (Balasore) (bengal-sultanligi); Kalküta (sahipsiz); Çandernagor (sahipsiz); Hûglî (Hooghly) (bengal-sultanligi)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `OLCUM`
  - gerekçe: Ölçüldü: bengal-sultanligi künyesi t=1576-01-01; parça 1576-01-01 -> 1576-07-12 yani künye bittikten sonra 6 ay. Rajmahal Muharebesi günü 1576-07-12 (tarihsel iddia): Karrânî devletinin Orissa'daki son aşaması. Aynı polity sürüyor -> künyeyi genişlet. Kalküta, Çandernagor 1576'da yok. Parça, Orissa-Bengal Babürlü fethiyle ayrı.
  - önerilen düzeltme: bengal-sultanligi t -> 1576-07-12 (kaynakla); Kalküta/Çandernagor/Banapur 'o devirde yok' kontrolü.
  - kaynak: veri ölçümü (devletler.js bengal-sultanligi t=1576-01-01)

### K068 · Altın Orda ve ardılları (`altinorda`) · 1466-01-01 → 1502-03-01 · 101.475 km²

- nokta [52.925, 49.634], en büyük kesit 1466-01-01 · kesit sayısı 4 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: nogay 40%, kazan 25%, astarhan 17%
- koridor: 232.8 km · astarhan 4/9, nogay 3/9, KENDI 2/9
- içindeki yerleşimler (6, s.eksklav 0): Petrovsk (Saratov) (altinorda); Hvalınsk (sahipsiz); Syzran (altinorda); Samara (altinorda); Stavropol (Volga) (sahipsiz); Buzuluk (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. 1466-1502 Büyük Orda, Astarhan Hanlığı (f=1466) ve Nogay ile bölünmüş Volga; Orta Volga (Samara, Saratov) payı ana gövdeden kopuk. Hvalınsk, Stavropol (Volga), Buzuluk sahipsiz (sonraki kentler). [KAYNAK-1104 (kismen): Astarhan Hanlığı 1466-1556 hüküm sürdü (Kasım Han 1466-1490); Altın Orda (Şeyh Ahmed Han 1481-1502) 1502'de Mengli Giray'ın Saray'ı tahribiyle sona erdi, toprakları Kırım ve Nogay arasında paylaşıldı. — "1466-1556 yılları arasında hüküm süren hanlıklardan biri" · 1466-1502 Büyük Orda'nın Astarhan'la bölünmüş Volga'da ayrık payları olması yapıyla uyumlu: GERCEK (düşük güven sürer — Orta Volga'nın Büyük Orda'ya ait olduğu TDV'de açıkça yok).]
  - önerilen düzeltme: Yok.
  - kaynak: TDV İslâm Ansiklopedisi, "Astarhan Hanlığı" (Mehmet Saray), https://islamansiklopedisi.org.tr/astarhan-hanligi; "Altın Orda Hanlığı" (Mehmet Saray), https://islamansiklopedisi.org.tr/altin-orda-hanligi

### K069 · Muvahhidler Devleti (`muvahhidler`) · 1150-01-01 → 1235-01-01 · 101.112 km²

- nokta [33.962, -1.9], en büyük kesit 1230-11-09 · kesit sayısı 13 · sınıf sayımı {'ADA': 4, 'KARA-EKSKLAV': 2}
- çevre: merini 15%, hafsi 11%
- koridor: 99.1 km · merini 7/9, DENIZ/BOS 2/9
- içindeki yerleşimler (10, s.eksklav 8): Tâhert (Tiaret) (sahipsiz); Şelif (sahipsiz); Fîgîg (Figuig) (sahipsiz); Vecde (Oujda) (muvahhidler); Tilimsan (muvahhidler); Nedrûme (sahipsiz); Ayn Temûşent (sahipsiz); Muaskar (sahipsiz) … +2
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Tilimsan ve Vecde muvahhidler iken Tâhert, Şelif, Fîgîg, Nedrûme, Ayn Temûşent, Muaskar sahipsiz (10 noktanın 7-8'i); Cezayir iç kesimi noktasız -> Merinî/Hafsî peteklerine emiliyor. Merinî Fas'ın doğu steplerinde 1230'da etkindi (tarihsel iddia) ama koridoru 99 km bu emilmeyle şişiyor.
  - önerilen düzeltme: Tâhert, Şelif, Muaskar, Fîgîg, Nedrûme: 1150-1235 Muvahhid/Zeyyânî sahibi (TDV).
  - kaynak: veri ölçümü

### K070 · İtalya (`italya`) · 1885-02-05 → 1936-06-01 · 100.851 km²

- nokta [15.68, 38.282], en büyük kesit 1923-10-29 · kesit sayısı 18 · sınıf sayımı {'KARA-EKSKLAV': 7}
- çevre: habesistan 62%, ingiliz-sudani 37%, mehdi 21%
- koridor: 1003.9 km · habesistan 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (12, s.eksklav 0): Adi Kuala (italya); Adi Kayh (italya); Debârve (italya); Barentu (italya); Zula (italya); Asmara (italya); Ğındâ (italya); Arkîko (italya) … +4
- koridor yerleşimleri: İmi (habesistan)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: UZAK (1004 km). Eritre, İtalyan Somalisi/Libya'dan Habeşistan ve Sudan ile ayrı (bkz. K028). [KAYNAK-1104 (kismen): Italya 1885'te Massaua'da Misir egemenliginin yerini aldi; 1890'da 'Colonia Eritrea' birlestirildi; 1941'de Ingiliz isgali. — "Colonia Eritrea" · 5 Subat 1885 gunu sayfada yok (yalniz yil).]
  - önerilen düzeltme: Yok.
  - kaynak: Treccani, Eritrea, https://www.treccani.it/enciclopedia/eritrea/ ; Treccani AOI (K001) · önceki: bulunamadı (UZAK)

### K071 · Osmanlı (`OSMANLI`) · 1604-06-08 → 1607-01-01 · 98.293 km²

- nokta [41.365, 47.735], en büyük kesit 1604-06-08 · kesit sayısı 5 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: safevi 21%, kaheti-kralligi 12%, rusya 8%
- koridor: 84.8 km · safevi 9/9
- içindeki yerleşimler (19, s.eksklav 0): Mahmudâbâd (OSMANLI); Hadrut (sahipsiz); Salyan (OSMANLI); Şuşa (sahipsiz); Hankendi (Stepanakert) (sahipsiz); Askeran (sahipsiz); Ağdere (Martakert) (sahipsiz); Bakü (OSMANLI) … +11
- koridor yerleşimleri: Şerur (Sharur) (safevi)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: 1604-1607 Şirvan/Karabağ Osmanlı payı (Bakü, Salyan, Mahmudâbâd), Erivan-Nahçıvan hattında Safevî (Şerur safevi) geri alımı ile ana gövdeden ayrı. İçteki sahipsizler (Şuşa 1750, Hankendi, Askeran, Ağdere, Hadrut) 1604'te yok = doğru. [KAYNAK-1104 (kismen): Şah Abbas Revan'ın kontrolünü 1013/1604'te sağladı; Şah Abbas 1607'de Şirvan'ı yeniden Safevî idaresine kattı. — "Şah Abbas 1607’de bölgeyi yeniden Safevî idaresine kattı." · Revan hattında Safevî kopuşu (1604) ve Şirvan'ın 1607'ye dek Osmanlı'da kalması teyitli: GERÇEK. TDV yalnız yıl verir; 1604-06-08 hicrî 1013 (1604-05-30 → 1605-05-19) içinde, uyumlu. Gün teyitsiz.]
  - önerilen düzeltme: Yok.
  - kaynak: TDV İslâm Ansiklopedisi, "Şirvan" (Mustafa Aydın), https://islamansiklopedisi.org.tr/sirvan; "Revan" (Mustafa Aydın), https://islamansiklopedisi.org.tr/revan · önceki: veri ölçümü (cevre.py)

### K072 · Fransa (`fransa`) · 1661-01-01 → 1763-02-10 · 97.092 km²

- nokta [51.563, -76.156], en büyük kesit 1661-01-01 · kesit sayısı 64 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: kri 13%
- koridor: 280.9 km · kri 7/9, DENIZ/BOS 2/9
- içindeki yerleşimler (1, s.eksklav 0): Nemiscau (fransa)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Düşük güven. James Körfezi'ndeki Fransız ticaret karakolu (Nemiscau), Quebec gövdesinden Kri toprağı ile ayrı. Tek nokta.
  - önerilen düzeltme: Nemiscau dönemi kaynakla.
  - kaynak: bulunamadı

### K073 · Britanya (`ingiltere`) · 1899-04-09 → 1911-01-01 · 95.030 km²

- nokta [-0.166, 30.727], en büyük kesit 1901-12-20 · kesit sayısı 26 · sınıf sayımı {'KARA-EKSKLAV': 8}
- çevre: kongo-serbest-devleti 21%, buganda 21%, ingiliz-uganda-himayesi 17%
- koridor: 16.8 km · ingiliz-uganda-himayesi 5/9, DENIZ/BOS 4/9
- içindeki yerleşimler (5, s.eksklav 0): Bveranyange (Karagve) (ingiltere); Mbarara (Nkore) (ingiltere); Hoima (Bunyoro) (ingiltere); Fort Portal (Toro) (ingiltere); Masindi (ingiltere)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-k` · güven `OLCUM`
  - gerekçe: Ölçüldü: Hoima 1899-04-09 -> 1962, Mbarara 1901-10-25 -> 1962 'ingiltere'; ingiliz-uganda-himayesi f=1894-06-18 t=1962-10-09 (harita: takma adı yok). Koridor 16,8 km ingiliz-uganda-himayesi 5/9. Aynı Uganda yönetimi iki kimlikte.
  - önerilen düzeltme: Bunyoro, Nkore, Toro, Karagve noktaları ingiltere yerine ingiliz-uganda-himayesi (ya da harita: takma adı).
  - kaynak: veri ölçümü (kayit.py Hoima, Mbarara)

### K074 · Britanya (`ingiltere`) · 1781-05-08 → 1783-09-03 · 93.303 km²

- nokta [29.881, -82.471], en büyük kesit 1781-05-08 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: creek-konfederasyonu 19%, abd 8%, ispanya 5%
- koridor: 87.7 km · ispanya 5/9, creek-konfederasyonu 4/9
- içindeki yerleşimler (2, s.eksklav 0): St. Augustine (ingiltere); Mission San Luis (Apalaçi) (ingiltere)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Doğu Florida (St. Augustine), Pensacola'nın düşüşünden (1781-05-08) sonra İngiliz Batı Florida'sından ayrı; İspanya ve Creek ile çevrili. Parça 1781-05-08 -> 1783-09-03 Paris Antlaşması. Gün tarihsel iddia, kaynakla teyit edilmedi. [KAYNAK-1104 (kismen): 10 Subat 1763'te Florida Britanya'ya gecti ve Dogu/Bati Florida'ya bolundu; Galvez yonetimindeki Ispanya Bati Florida'da Pensacola'yi aldi (sayfada gun yok); 1783 Paris Baris'i Florida'yi Ispanya'ya geri verdi. — "returned Florida to Spain" · 8 Mayis 1781 (hukumdeki gun) bu sayfada yok; Pensacola 10 Mayis 1781 diye arama ozetinde gecti ama sayfa okunmadi.]
  - önerilen düzeltme: Yok.
  - kaynak: National Park Service, Fort Matanzas, The British Period (1763-1784), https://www.nps.gov/foma/learn/historyculture/the-british-period.htm

### K075 · Osmanlı (`OSMANLI`) · 1623-11-28 → 1638-12-24 · 89.304 km²

- nokta [30.145, 46.422], en büyük kesit 1629-01-01 · kesit sayısı 13 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: safevi 42%
- koridor: 385.3 km · safevi 9/9
- içindeki yerleşimler (14, s.eksklav 0): Kuveyt (sahipsiz); Fâv (OSMANLI); Abâdân (OSMANLI); Eski Basra (Zübeyr) (sahipsiz); Muhammere (sahipsiz); Basra (OSMANLI); Eridu (Abu Shahrain) (sahipsiz); Charax Spasinou (sahipsiz) … +6
- koridor yerleşimleri: Necef (safevi); Hîre (sahipsiz); Kûfe (safevi); Marad (Tell Wannat es-Sadum) (sahipsiz); Dilbat (Tell ed-Duleym) (sahipsiz); Hille (safevi); Babil (sahipsiz); Kiş (Tell Uhaimir) (sahipsiz); Kutha (Tell Ibrahim) (sahipsiz); Sippar (Tell Abu Habbah) (sahipsiz) … +3
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Safevîler Bağdat'ı 1623'te aldı ve Murad IV 24 Aralık 1638'de geri aldı (parça bitişi 1638-12-24 ile uyumlu, tarihsel iddia). Basra/Fâv/Abâdân Osmanlı'da kalıp Bağdat-Kûfe-Hille Safevî (ölçüldü, koridor 385 km). Koridordaki sahipsizler antik yerler (Babil, Kiş, Sippar vb.): emilme sorunu ayrı. [KAYNAK-1104 (tam): Derviş Mehmed iç kaleyi 28 Kasım 1623'te Safevîlere teslim etti; Bağdat 15 Ekim 1638'de başlayan kırk günlük kuşatma sonunda yeniden Osmanlı idaresine girdi. — "müdafaa etmekte olduğu iç kaleyi Safevîler’e teslim etti (28 Kasım 1623)" · Parça başlangıcı 1623-11-28 TDV ile birebir; bitiş 1638-12-24 kırk günlük kuşatmanın sonuyla uyumlu (15 Ekim + 40 gün ≈ 24 Kasım-Aralık; gün TDV'de yok).]
  - önerilen düzeltme: Yok.
  - kaynak: TDV İslâm Ansiklopedisi, "Bağdat" (Abdülazîz ed-Dûrî vd.), https://islamansiklopedisi.org.tr/bagdat · önceki: veri ölçümü (cevre.py)

### K076 · Bâbürlü (Timurlu-Hint) İmparatorluğu (`babur-imparatorlugu`) · 1753-04-01 → 1760-01-01 · 89.226 km²

- nokta [20.07, 73.631], en büyük kesit 1753-04-01 · kesit sayısı 5 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: haydarabad-nizam 44%, maratha 31%, baroda 6%
- koridor: 475.5 km · maratha 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (5, s.eksklav 0): Ahmednagar (babur-imparatorlugu); Pratishthana (Paithan) (sahipsiz); Nâsik (babur-imparatorlugu); Sûrat (babur-imparatorlugu); Broaç (Bharuch) (babur-imparatorlugu)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Ölçüldü: Ahmednagar babur 1600-08-28 -> 1759-01-01 iken Evrengâbâd ve Devagiri haydarabad-nizam (1760); aynı Aurangabad subesi içinde tutarsız. Nizam, Babür'e nominal bağlı (tarihsel iddia). Surat 'babur' 1573-1759 doğru olabilir (Surat nâibi). Parça Maratha ile çevrili (koridor 475 km maratha 8/9).
  - önerilen düzeltme: Ahmednagar 1753-1759 Nizam mı Maratha mı kaynak (gün bulunamadı); Nâsik, Broaç sahipliği.
  - kaynak: veri ölçümü (kayit.py Ahmednagar, cevre.py 1760)

### K077 · Altın Orda ve ardılları (`altinorda`) · 1466-01-01 → 1502-03-01 · 87.935 km²

- nokta [49.599, 48.045], en büyük kesit 1500-01-01 · kesit sayısı 4 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: astarhan 60%, nogay 5%
- koridor: 33.4 km · astarhan 9/9
- içindeki yerleşimler (2, s.eksklav 0): Rın kumulları (Volga-Yayık arası) (altinorda); Kamışin (altinorda)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. Volga-Yayık arası Büyük Orda payı, Astarhan Hanlığı (koridor 33 km) ile ana gövdeden ayrı; göçebe alanda sınır ölçeği belirsiz. [KAYNAK-1104 (kismen): Bkz. K068: Astarhan 1466'da kuruldu; Altın Orda 1502'de son buldu. · K068 ile aynı dayanak; Volga-Yayık payının sınır ölçeği belirsiz.]
  - önerilen düzeltme: Yok.
  - kaynak: TDV İslâm Ansiklopedisi, "Astarhan Hanlığı" ve "Altın Orda Hanlığı" (Mehmet Saray), https://islamansiklopedisi.org.tr/astarhan-hanligi, https://islamansiklopedisi.org.tr/altin-orda-hanligi

### K078 · Osmanlı (`OSMANLI`) · 1871-04-20 → 1913-07-08 · 87.498 km²

- nokta [25.858, 49.047], en büyük kesit 1871-04-20 · kesit sayısı 43 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: suud-ikinci 19%, katar 9%, TABI 6%
- koridor: 198.1 km · TABI 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (4, s.eksklav 0): Lahsa (OSMANLI); Katîf (OSMANLI); Cübeyl (OSMANLI); Ukayr (Uceyr) (OSMANLI)
- koridor yerleşimleri: Kuveyt (TABI)
- **HÜKÜM: YAPAY** · kova `YAPAY-m` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Lahsa OSMANLI d 1871-04-20 -> 1913-07-08; Kuveyt v (Sabah emirliği, Osmanlı kazâsı) 1871-01-01 -> 1914-11-22 (statu vassal). Koridor TABI 8/9: Lahsa ile Basra arasındaki tek şerit Osmanlı'ya bağlı Kuveyt. Tâbi aynı hükümdara bağlı olduğu için kopukluk tâbiyi 'komşu' sayma artefaktı (Evren tanımı). [KAYNAK-1104 (kismen): Küveyt I. Dünya Savaşı öncesinde Basra vilâyetinin Basra sancağına bağlı üç kazadan biriydi; 23 Ocak 1899 Mübârek-İngiltere gizli antlaşması; 29 Temmuz 1913 Hakkı Paşa-Grey mukavelesi Küveyt'i Osmanlı'ya bağlı idarî birim saydı. — "Küveyt, I. Dünya Savaşı’ndan önceki yıllarda Osmanlı Devleti’nin Basra vilâyetinin Basra sancağına bağlı üç kazadan biri iken" · Lahsa ile Basra arasındaki Kuveyt şeridinin Osmanlı'ya bağlı olduğu teyitli: kopukluk tâbiyi yabancı sayma artefaktı (YAPAY-m) destekli. Motor sorusu olarak kalır.]
  - önerilen düzeltme: Motor sorusu: tâbi aracılı bitişiklik eksklav sayılmasın. Veri düzeltmesi yok.
  - kaynak: TDV İslâm Ansiklopedisi, "Küveyt" (Sırrı Erinç vd.), https://islamansiklopedisi.org.tr/kuveyt · önceki: veri ölçümü (kayit.py Lahsa, Kuveyt)

### K079 · Qing Hanedanı (Mançu) (`qing-hanedani`) · 1659-01-07 → 1677-01-01 · 87.494 km²

- nokta [22.456, 110.786], en büyük kesit 1676-04-05 · kesit sayısı 9 · sınıf sayımı {'DAR-AYRIM': 4, 'KARA-EKSKLAV': 1}
- çevre: san-fan 36%
- koridor: 493.7 km · san-fan 9/9
- içindeki yerleşimler (3, s.eksklav 0): Leizhou (qing-hanedani); Beihai (Pakhoi) (qing-hanedani); Wuzhou (qing-hanedani)
- koridor yerleşimleri: Chenzhou (Hunan) (san-fan)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. Qing Guangxi/Guangdong batı payı (Leizhou, Wuzhou), Qing ana gövdesinden Wu Sangui'nin Hunan'ı (Chenzhou san-fan) ile ayrı, 1676. Parça aralığı 1659 başlıyor, San Fan 1674 sonrası; ilk yıllar DAR-AYRIM (K045'in karşı parçası). [KAYNAK-1104 (kismen): Shang Zhixin 1676 başında Wu Sangui isyanına katıldı, 1677'de teslim oldu. — "Early in 1676 Shang Zhixin joined the rebellion" · Qing'in batı Guangdong/Guangxi payının 1676'da Wu Sangui Hunan'ı ve Shang'ın Guangdong'u arasında kalması isyan takvimiyle uyumlu; Leizhou/Wuzhou ayrıntısı okunmadı.]
  - önerilen düzeltme: Yok; aralık 1674-1677 olmalı.
  - kaynak: Eminent Chinese of the Qing Period, "WU Sangui" (Fang Chao-ying) — EMRELİC okuması (Oxford Reference) · önceki: veri ölçümü (cevre.py benzeri)

### K080 · Avusturya (Habsburg) (`avusturya`) · 1809-10-14 → 1915-10-01 · 87.155 km²

- nokta [49.472, 23.139], en büyük kesit 1915-09-01 · kesit sayısı 19 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: rusya 33%, macaristan-habsburg 22%, habsburg 21%
- koridor: 22.6 km · almanya 5/9, DENIZ/BOS 2/9, macaristan-habsburg 2/9
- içindeki yerleşimler (8, s.eksklav 0): Suçava (Suceava) (avusturya); Çernovitz (Çernivtsi) (avusturya); Yazlofça (Yazlovets) (avusturya); Lvov (avusturya); Zamość (avusturya); Chełm (Kholm) (avusturya); Lublin (avusturya); Radom (Polonya) (avusturya)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-m` · güven `KAYNAK-GEREK`
  - gerekçe: Ölçüldü (1850 ve 1915): Karviná 12 km, Ostrava 25 km, Opava 54 km hepsi 'avusturya'. Galiçya ile Moravya/Avusturya Silezyası kara komşudur (tarihsel iddia), koridor 22,6 km 'almanya' 5/9 ölçüm hatası: Prusya Silezyası şeridi veya petek yaklaşıklığı. Galiçya, Macaristan'a Karpatlar'da da komşu.
  - önerilen düzeltme: Motor sorusu: Avusturya Silezyası (Teschen) peteği Galiçya'ya bağlansın; veri düzeltmesi yok.
  - kaynak: veri ölçümü (cevre.py)

### K081 · Portekiz (`portekiz`) · 1640-12-01 → 1975-11-11 · 86.895 km²

- nokta [39.791, -8.045], en büyük kesit 1822-09-07 · kesit sayısı 96 · sınıf sayımı {'KARA-EKSKLAV': 10}
- çevre: ispanya 57%
- koridor: 5400.4 km · DENIZ/BOS 4/9, fas 1/9, tuareg-adag 1/9, adar 1/9, borgu 1/9, nri 1/9
- içindeki yerleşimler (11, s.eksklav 0): Faro (portekiz); Lagos (Algarve) (portekiz); Setúbal (portekiz); Évora (portekiz); Lizbon (portekiz); Santarém (Şenterîn) (sahipsiz); Coimbra (portekiz); Aveiro (portekiz) … +3
- koridor yerleşimleri: Soyo (kongo-kralligi); Puent-Nuar (sahipsiz); Loango (Buali) (loango); Cibanga (sahipsiz); Librevil (Libreville) (sahipsiz); Bonny (nijer-deltasi); Owerri (sahipsiz); Onitsha (benin-kralligi); Busa (Borgu) (borgu); Tinğîr (fas) … +2
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: UZAK (5400 km). Anakara Portekiz ile sömürge gövdeleri (Angola/Brezilya vb.) ayrı; metropol-sömürge ayrımı.
  - önerilen düzeltme: Yok.
  - kaynak: bulunamadı (UZAK)

### K082 · Portekiz (`portekiz`) · 1530-01-01 → 1580-08-25 · 86.268 km²

- nokta [39.788, -8.039], en büyük kesit 1541-03-12 · kesit sayısı 24 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: ispanya 55%
- koridor: 7161.6 km · DENIZ/BOS 3/9, merini 2/9, tuareg-ahaggar 1/9, agadez-sultanligi 1/9, kanem-bornu 1/9, banda-gbaya 1/9
- içindeki yerleşimler (11, s.eksklav 0): Faro (portekiz); Lagos (Algarve) (portekiz); Setúbal (portekiz); Évora (portekiz); Lizbon (portekiz); Santarém (Şenterîn) (sahipsiz); Coimbra (portekiz); Aveiro (portekiz) … +3
- koridor yerleşimleri: Goure (sahipsiz); Advâr (Tuvât) (merini); Benî Abbâs (Sâvre) (merini); Agadez (agadez-sultanligi); Hoggar (sahipsiz); Mvansabombve (Kazembe) (sahipsiz); Sefrû (merini); Fas (Fez) (merini); Vezzân (Ouezzane) (merini); Kasrülkebîr (merini) … +2
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: UZAK (7162 km). K081'in 1530-1580 karşılığı; Santarém sahipsiz tek.
  - önerilen düzeltme: Yok.
  - kaynak: bulunamadı (UZAK)

### K083 · Konbaung Hanedanı (Birmanya) (`konbaung`) · 1752-04-23 → 1757-05-06 · 85.833 km²

- nokta [19.084, 98.717], en büyük kesit 1755-05-03 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: ayutthaya 19%, laos-kralliklari 19%, san-devletleri 12%
- koridor: 33.6 km · hanthawaddy 9/9
- içindeki yerleşimler (4, s.eksklav 0): Lamphun (Haripuñjaya) (konbaung); Nan (konbaung); Chiang Mai (konbaung); Chiang Rai (konbaung)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. Ölçüldü: Chiang Mai toungoo 1558-04-02 -> 1752-04-23, konbaung 1752-04-23 -> 1774-01-15; toungoo künye t=1752-01-01, konbaung f=1752-01-01 (geçiş günleri künyeyle çelişir). Hanthawaddy (t=1757-05-06) Konbaung gövdesi ile Lan Na arasına giriyor (33,6 km). [KAYNAK-1104 (kismen): Lan Na 1774'te Burma'ya karşı ayaklandı. — "In 1774, Lan Na rebelled against Burma" · Chiang Mai'nin 1774'e dek Burma (Konbaung) idaresinde olduğu teyitli (atlas t=1774-01-15 uyumlu); 1752/1762-63 başlangıcı teyitsiz.]
  - önerilen düzeltme: Konbaung/toungoo künye uçları ile Chiang Mai dönem günü 1752 (gün bulunamadı).
  - kaynak: Oxford Encyclopedia of Economic History, "Thailand" — EMRELİC okuması (Oxford Reference) · önceki: veri ölçümü (devletler.js, kayit.py)

### K084 · Toungoo Hanedanı (Birmanya) (`toungoo`) · 1740-01-01 → 1752-04-23 · 85.751 km²

- nokta [19.084, 98.717], en büyük kesit 1740-01-01 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: ayutthaya 19%, laos-kralliklari 19%, san-devletleri 12%
- koridor: 33.6 km · hanthawaddy 9/9
- içindeki yerleşimler (4, s.eksklav 0): Lamphun (Haripuñjaya) (toungoo); Nan (toungoo); Chiang Mai (toungoo); Chiang Rai (toungoo)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: K083 ile aynı parça (1740-1752): Hanthawaddy 1740 Mon isyanından sonra Ava-Pegu arasında; toungoo t=1752-01-01 ile Chiang Mai dönemi t=1752-04-23 çelişkisi var. [KAYNAK-1104 (kismen): Bkz. K083: Lan Na 1774'te Burma'ya karşı ayaklandı. · 1740-1752 Toungoo dönemi için doğrudan teyit yok; yalnız Burma bağlılığının genel çerçevesi.]
  - önerilen düzeltme: K083.
  - kaynak: Oxford Encyclopedia of Economic History, "Thailand" — EMRELİC okuması (Oxford Reference) · önceki: veri ölçümü

### K085 · Delhi Sultanlığı (`delhi-sultanligi`) · 1394-01-01 → 1479-01-01 · 81.686 km²

- nokta [24.6, 84.411], en büyük kesit 1451-01-01 · kesit sayısı 7 · sınıf sayımı {'KARA-EKSKLAV': 4}
- çevre: cavnpur-sultanligi 26%, bengal-sultanligi 21%, kalacuri-ratnapura 14%
- koridor: 364.5 km · cavnpur-sultanligi 9/9
- içindeki yerleşimler (4, s.eksklav 0): Rohtasgarh (sahipsiz); Gayâ (delhi-sultanligi); Rajagriha (Rājgīr) (sahipsiz); Patna (Azîmâbâd) (delhi-sultanligi)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Ölçüldü: Patna ve Gayâ delhi-sultanligi 1281 -> 1497, sonra bengal-sultanligi; cavnpur-sultanligi künyesi 1394-1483 (Cevnpur). Bihar 1394-1479 Cevnpur ve Bengal etkisi altındaydı (tarihsel iddia); Delhi Bihar'a Sikender Lodi ile 1490'larda ulaştı. Cevnpur 26%, Bengal 21% çevre. Rohtasgarh, Rajagriha sahipsiz. [KAYNAK-1104 (tam): Bihar 1394-1479 Jaunpur Şarkîlerinin elindeydi (Bengal'in değil); Delhi (Lodî) Jaunpur'u 1483'te, Bihar'ı 1495'te aldı. — "conquest of Jaunpur 1483 and of Bihar 1495 by Delhi" · YAPAY-c teyitli: Patna/Gayâ 'delhi-sultanligi 1281 → 1497' yanlış. Düzeltme: Patna/Gayâ cavnpur-sultanligi 1394 → (Hüseyin Şah Şarkî'nin Bihar'daki son yılları) 1495, delhi-sultanligi 1495 → (sonraki); 'bengal-sultanligi 1497' ucu kaynakla sınansın.]
  - önerilen düzeltme: Patna/Gayâ 1394-1497 sahibi Cevnpur/Bengal (kaynakla gün).
  - kaynak: Dynasties of the World (2. bs.), "Jaunpur, Kingdom of"; Oxford Encyclopedia of the Islamic World, "Delhi Sultanate" — EMRELİC okuması (Oxford Reference) · önceki: veri ölçümü (kayit.py Patna, Gayâ)

### K086 · Kiev Rus'u (Kiev Büyük Knezliği) (`kiev-rusu`) · 1136-01-01 → 1224-01-01 · 81.062 km²

- nokta [58.135, 25.263], en büyük kesit 1136-01-01 · kesit sayısı 6 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: novgorod 14%, polotsk-knezligi 13%
- koridor: 344.7 km · polotsk-knezligi 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (9, s.eksklav 0): Abrene (Pıtalovo) (sahipsiz); Pskov (sahipsiz); Petseri (Peçori) (sahipsiz); Yam (Yamburg, Kingisepp) (sahipsiz); Narva (sahipsiz); Cēsis (Wenden) (sahipsiz); Tartu (Dorpat) (kiev-rusu); Pärnu (sahipsiz) … +1
- koridor yerleşimleri: Daugavpils (Dünaburg) (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Pskov, Narva, Petseri, Yam, Cēsis, Pärnu, Abrene 1136-1224 sahipsiz (Pskov 1281'de başlıyor, Narva 1281 danimarka); yalnız Tartu kiev-rusu (1060-1224). Tek noktalı Kiev Rus' parçası Estonya'da, çevre Novgorod/Polotsk peteklerine emiliyor. Yapı K017 ile aynı.
  - önerilen düzeltme: Pskov, Narva, Pärnu, Cēsis vb. için 1136-1224 sahibi (Pskov: novgorod; kaynak Encyclopedia of Ukraine/Baltık kaynakları).
  - kaynak: veri ölçümü (kayit.py Pskov, Narva, Tartu)

### K087 · Wiçita (`wicita`) · 1750-01-01 → 1849-01-01 · 80.417 km²

- nokta [38.375, -98.218], en büyük kesit 1805-01-01 · kesit sayısı 6 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: ponka 30%, pavni 12%
- koridor: 184.1 km · ponka 6/9, DENIZ/BOS 3/9
- içindeki yerleşimler (2, s.eksklav 0): Quivira (Wiçita, Büyük Bükülme) (wicita); Fort Riley (Kansas Irmağı) (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. Wiçita (t=1859-01-01) Kansas (Quivira) kesiti, Kızıl Irmak Wiçita'sından Ponka toprağı ile ayrı. Wiçita grupları tarihsel olarak birbirinden uzak köylerde yaşardı; model tercihi. Fort Riley sahipsiz (1853'te kuruldu). [KAYNAK-1104 (celiski): Coronado 1541'de Kansas'ta 'Quivira' halkini gordu (Wichita). 1719'a gelindiginde grup Oklahoma'ya inmisti; Red River koyleri 1750-1810; 1858 Rush Springs koyu yikildi, 1859 Washita. — "By 1719 the group had moved south" · Kansas'ta 1750-1849 Wichita varligi (Quivira) bu kaynakta yok; 1719'da Oklahoma'ya inmis deniyor. Wichita'nin Kansas'a donusu iç savas (1860'lar). Hukum: 'model tercihi'.] [hüküm GERCEK/GERCEK → YAPAY/YAPAY-c, kaynak üzerine]
  - önerilen düzeltme: Quivira/Kansas wicita noktası 1719 sonrası dönemi kaldırılsın ya da kaynakla yeniden kurulsun (Handbook of Texas: 1719'a dek grup Oklahoma'ya indi).
  - kaynak: Handbook of Texas, Wichita Indians, https://tshaonline.org/handbook/entries/wichita-indians

### K088 · İngiliz Kuzey Amerikası (`ingiliz-kuzey-amerika`) · 1763-02-10 → 1786-01-01 · 80.298 km²

- nokta [48.585, -94.618], en büyük kesit 1777-01-01 · kesit sayısı 8 · sınıf sayımı {'KARA-EKSKLAV': 3}
- çevre: ingiltere 11%
- koridor: 95.4 km · ingiltere 9/9
- içindeki yerleşimler (1, s.eksklav 0): Fort St. Pierre (Rainy Lake) (ingiliz-kuzey-amerika)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-k` · güven `OLCUM`
  - gerekçe: Ölçüldü: Fort St. Pierre (Rainy Lake) 'ingiliz-kuzey-amerika' 1763-02-10 -> 1867; koridor 95 km 'ingiltere' 9/9 (La Baye ve Üst Göller 'ingiltere' 1763-1783). Aynı İngiliz Kuzey Amerikası iki kimlikte (K056 ile aynı çift).
  - önerilen düzeltme: K056.
  - kaynak: veri ölçümü (kayit.py)

### K089 · Kanem-Bornu İmparatorluğu (`kanem-bornu`) · 1893-01-01 → 1900-04-22 · 80.180 km²

- nokta [14.155, 15.624], en büyük kesit 1893-01-01 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: kanem-tubu 33%, bagirmi 16%, rabih 15%
- koridor: 243.4 km · kanem-tubu 9/9
- içindeki yerleşimler (1, s.eksklav 0): Mao (Kanem) (kanem-bornu)
- koridor yerleşimleri: N'Gazargamu (sahipsiz)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. Mao (Kanem) kanem-bornu 1281 -> 1902; Rabih (f=1893, t=1900-04-22) Bornu'yu 1893'te aldı. 1893-1900 Kanem'de kanem-bornu adı, Rabih zamanında sorgulanabilir; koridor 243 km kanem-tubu. N'Gazargamu sahipsiz. [KAYNAK-1104 (kismen): Rabih Aralik 1893'te Kuka'ya girdi (Sultan Ahsem kacti), baskenti Dikwa'ya tasidi; 1900'de Kussuri'de (Shari asagisi) oldurulduse Fransiz kuvvetlerince. — "Rabah was killed at Kussuri" · Kanem/Mao uzerinde Rabih hakimiyeti bu kaynakta tarif edilmiyor; 22 Nisan 1900 gunu yok. 1911 kaynak.]
  - önerilen düzeltme: Mao 1893-1900 sahibi (Rabih/Kanem-Bornu) kaynakla.
  - kaynak: Encyclopaedia Britannica 11. baski (1911, ESKI), Wikisource transkripsiyonu, Bornu, https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Bornu · önceki: veri ölçümü (kayit.py Mao)

### K090 · Maratha Konfederasyonu (`maratha`) · 1761-01-14 → 1803-10-17 · 79.066 km²

- nokta [28.608, 77.651], en büyük kesit 1788-01-01 · kesit sayısı 12 · sınıf sayımı {'KARA-EKSKLAV': 9}
- çevre: babur-imparatorlugu 55%, bharatpur-cat 31%, avad 26%
- koridor: 252.8 km · gvalyar 6/9, DENIZ/BOS 3/9
- içindeki yerleşimler (6, s.eksklav 1): Agra (maratha); Mathura (maratha); Koil (Aligarh) (maratha); Delhi (maratha); Mîrat (Meerut) (maratha); Pânipat (maratha)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Ölçüldü: Agra maratha f=1761-01-14 (Panipat Savaşı günü; Marathalar o savaşı kaybetti, tarihsel iddia), Delhi maratha f=1788-01-01. Mathura, Koil, Meerut, Panipat de maratha. Agra/Delhi Maratha denetimi 1771-1784/1788'de başlar (Mahadji Sindhia). Koridor 253 km gvalyar (f=1731) Maratha'ya ait mi ayrı mı belirsiz (gvalyar ayrı kimlik).
  - önerilen düzeltme: Agra/Mathura/Koil/Meerut/Panipat maratha f ucu kaynakla (1761 değil); gvalyar-maratha ilişkisi.
  - kaynak: veri ölçümü (kayit.py Agra, Delhi)

### K091 · Wiçita (`wicita`) · 1450-01-01 → 1682-04-09 · 78.727 km²

- nokta [35.231, -94.701], en büyük kesit 1450-01-01 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: ponka 20%
- koridor: 173.2 km · ponka 9/9
- içindeki yerleşimler (2, s.eksklav 0): Spiro (wicita); Fort Smith (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. Spiro (Oklahoma) 1450 tek kesit; Spiro Höyükleri Caddo kültürü, Wiçita atfı sorgulu. Fort Smith sahipsiz (1817). [KAYNAK-1104 (kismen): Spiro 850-1450 arasinda Caddo dilli onderler icin kuruldu; 1450 donemin sonu. — "Caddoan-speaking leadership" · Wichita atfi bu sayfada YOK (yalniz Caddoan). Hukumdeki 'Wichita atfi sorgulu' dogrulaniyor, Wichita sahipligi teyit edilmedi.]
  - önerilen düzeltme: Spiro 1450-1682 sahibi kaynakla.
  - kaynak: Encyclopedia of Oklahoma History and Culture, Spiro Mounds, https://www.okhistory.org/publications/enc/entry?entry=SP012

### K092 · Hârizmşahlar (Anuştegin hânedanı) (`harizmsah`) · 1187-03-13 → 1200-07-04 · 77.257 km²

- nokta [35.425, 58.366], en büyük kesit 1193-01-07 · kesit sayısı 3 · sınıf sayımı {'ADA': 1, 'KARA-EKSKLAV': 1}
- çevre: gurlu 16%
- koridor: 56.4 km · gurlu 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (4, s.eksklav 0): Turşiz (Kâşmer) (sahipsiz); Turbet-i Haydariye (sahipsiz); Nîşâbur (harizmsah); Sebzevâr (sahipsiz)
- koridor yerleşimleri: Turbet-i Câm (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: Ölçüldü: Nîşâbur harizmsah ama Turşiz (Kâşmer), Turbet-i Haydariye, Sebzevâr, Turbet-i Câm sahipsiz; Horasan çekirdeği noktasız -> Gurlu peteğine emiliyor (koridor 56 km gurlu 8/9). K035 ile aynı bölge.
  - önerilen düzeltme: Kâşmer, Sebzevâr, Turbet-i Haydariye, Tûs, Merv 1187-1208 sahibi (TDV).
  - kaynak: veri ölçümü

### K093 · Hârizmşahlar (Anuştegin hânedanı) (`harizmsah`) · 1202-01-01 → 1208-01-01 · 77.257 km²

- nokta [35.425, 58.366], en büyük kesit 1204-01-01 · kesit sayısı 5 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: gurlu 16%
- koridor: 56.4 km · gurlu 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (4, s.eksklav 0): Turşiz (Kâşmer) (sahipsiz); Turbet-i Haydariye (sahipsiz); Nîşâbur (harizmsah); Sebzevâr (sahipsiz)
- koridor yerleşimleri: Turbet-i Câm (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: K092'nin 1202-1208 devamı: aynı nokta ve sahipsiz Horasan noktaları.
  - önerilen düzeltme: K092.
  - kaynak: veri ölçümü

### K094 · Büyük Selçuklu Devleti (`buyuk-selcuklu`) · 1041-01-01 → 1064-01-01 · 77.248 km²

- nokta [35.425, 58.366], en büyük kesit 1063-01-04 · kesit sayısı 11 · sınıf sayımı {'KARA-EKSKLAV': 5}
- çevre: gazneli 16%
- koridor: 56.4 km · gazneli 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (4, s.eksklav 0): Turşiz (Kâşmer) (sahipsiz); Turbet-i Haydariye (sahipsiz); Nîşâbur (buyuk-selcuklu); Sebzevâr (sahipsiz)
- koridor yerleşimleri: Turbet-i Câm (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: K035/K092 ile aynı Horasan bölgesi, 1041-1064 Selçuklu: Nîşâbur dışında 3 nokta sahipsiz, Gazneli peteğine emilme (koridor 56 km gazneli 8/9).
  - önerilen düzeltme: K035.
  - kaynak: veri ölçümü

### K095 · Büyük Selçuklu Devleti (`buyuk-selcuklu`) · 1038-05-09 → 1040-05-23 · 77.248 km²

- nokta [35.425, 58.366], en büyük kesit 1040-01-01 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: gazneli 16%
- koridor: 56.4 km · gazneli 8/9, DENIZ/BOS 1/9
- içindeki yerleşimler (4, s.eksklav 0): Turşiz (Kâşmer) (sahipsiz); Turbet-i Haydariye (sahipsiz); Nîşâbur (buyuk-selcuklu); Sebzevâr (sahipsiz)
- koridor yerleşimleri: Turbet-i Câm (sahipsiz)
- **HÜKÜM: YAPAY** · kova `YAPAY-a` · güven `OLCUM`
  - gerekçe: K094'ün 1038-05-09 -> 1040-05-23 kesiti (Dandanakan öncesi): aynı sahipsiz Horasan noktaları. Ayrıca Gazneli Horasan'ı hâlâ elinde tutuyor olabilir (tarihsel iddia).
  - önerilen düzeltme: K035.
  - kaynak: veri ölçümü

### K096 · Bâbürlü (Timurlu-Hint) İmparatorluğu (`babur-imparatorlugu`) · 1724-10-11 → 1751-05-17 · 76.116 km²

- nokta [20.997, 85.916], en büyük kesit 1750-09-11 · kesit sayısı 11 · sınıf sayımı {'KARA-EKSKLAV': 9}
- çevre: bengal-nevabligi 14%, haydarabad-nizam 8%
- koridor: 698.5 km · nagpur-bhonsle 5/9, DENIZ/BOS 4/9
- içindeki yerleşimler (5, s.eksklav 0): Banapur (sahipsiz); Puri (babur-imparatorlugu); Kattak (Cuttack) (babur-imparatorlugu); Jajpur (sahipsiz); Bâlâsor (Balasore) (babur-imparatorlugu)
- koridor yerleşimleri: —
- **HÜKÜM: YAPAY** · kova `YAPAY-c` · güven `KAYNAK-GEREK`
  - gerekçe: Ölçüldü: Kattak (Cuttack) babur-imparatorlugu 1592 -> 1751-05-17; Patna ve Gayâ aynı dönemde bengal-nevabligi (1717-1757). Orissa, Bengal Nevâb'ının subesine bağlıydı (tarihsel iddia); Orissa 17 Mayıs 1751 Nagpur Bhonsle'ye devredildi (atlas maratha f=1751-05-17 ile uyumlu). Orissa noktaları Babür kalmış, Bihar Nevâb'a geçmiş: tutarsız.
  - önerilen düzeltme: Kattak, Puri, Bâlâsor 1717-1751 bengal-nevabligi (kaynakla); Banapur, Jajpur sahipsiz.
  - kaynak: veri ölçümü (kayit.py Kattak, Patna)

### K097 · Wiçita (`wicita`) · 1849-01-01 → 1853-01-01 · 72.661 km²

- nokta [34.117, -97.734], en büyük kesit 1849-01-01 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: abd 47%, ponka 18%
- koridor: 186.3 km · ponka 9/9
- içindeki yerleşimler (2, s.eksklav 0): Taovaya (İspanyol Kalesi, Kızıl Irmak) (wicita); Fort Sill (Wiçita Dağları) (sahipsiz)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Düşük güven. Taovaya (Kızıl Irmak) Wiçita köyü, Wiçita'nın öteki parçalarından ABD (%47) ve Ponka ile ayrı; parça 1849-1853. Fort Sill sahipsiz (1869). [KAYNAK-1104 (kismen): Wichita Red River koyleri 1750'lerden; koyler aralikli olarak 1850'lere dek; 1858'de Rush Springs koyu ABD gucleriyle yikildi. · 'Taovaya' adi gecmiyor; 1849-1853 penceresi yok.]
  - önerilen düzeltme: Yok.
  - kaynak: Handbook of Texas, Wichita Indians, https://tshaonline.org/handbook/entries/wichita-indians

### K098 · Timurlu valiliği (`timurlu`) · 1500-01-01 → 1504-01-01 · 72.211 km²

- nokta [40.654, 71.98], en büyük kesit 1500-01-01 · kesit sayısı 1 · sınıf sayımı {'KARA-EKSKLAV': 1}
- çevre: mogulistan 14%, buhara 12%
- koridor: 346.3 km · buhara 9/9
- içindeki yerleşimler (6, s.eksklav 0): Hucend (timurlu); Oş (timurlu); Hokand (timurlu); Fergana (sahipsiz); Andican (timurlu); Özkent (Uzgen) (sahipsiz)
- koridor yerleşimleri: Bactria (sahipsiz)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAKLI`
  - gerekçe: Ferğana (Babür'ün Timurlu payı, 1494-1504) Herat gövdesinden Şeybanî'nin Semerkand-Buhara toprağı ile ayrı (koridor 346 km). Fergana, Özkent sahipsiz: aslında yerler o devirde var (merdiven ④/⑤). [KAYNAK-1104 (kismen): Bâbür 9 Haziran 1494'te Fergana hükümdarı oldu; siyasî hayatı Fergana (1494-1504), Kâbil (1504-1526), Hindistan (1526-1530) devrelerine ayrılır. — "Fergana hâkimiyeti (1494-1504), Kâbil hâkimiyeti (1504-1526)" · 1500-1504 Fergana'da Timurlu (Bâbür) payı teyitli: GERCEK. Ara kayıplar (Semerkant 1500-01, Fergana'nın Tanbal'a geçişi) TDV özetinde ayrıntısız.]
  - önerilen düzeltme: Fergana, Özkent için sahip dönemi.
  - kaynak: TDV İslâm Ansiklopedisi, "Bâbür" (Enver Konukçu), https://islamansiklopedisi.org.tr/babur

### K099 · Bâbürlü (Timurlu-Hint) İmparatorluğu (`babur-imparatorlugu`) · 1572-11-18 → 1573-02-26 · 71.908 km²

- nokta [23.441, 72.244], en büyük kesit 1572-11-20 · kesit sayısı 2 · sınıf sayımı {'KARA-EKSKLAV': 2}
- çevre: gucerat-sultanligi 43%, racput 38%, portekiz 2%
- koridor: 91.7 km · racput 5/9, DENIZ/BOS 3/9, gucerat-sultanligi 1/9
- içindeki yerleşimler (5, s.eksklav 0): Lothal (sahipsiz); Wadhwan (Vardhamana) (babur-imparatorlugu); Dholka (babur-imparatorlugu); Ahmedâbâd (babur-imparatorlugu); Patan (Anhilvâda) (babur-imparatorlugu)
- koridor yerleşimleri: —
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Akbar Ahmedâbâd'a Kasım 1572'de girdi, Sûrat Şubat 1573'te düştü (Sûrat babur f=1573-02-26 ölçüldü); arada Gucerat Sultanlığı (t=1573-01-01) ve Racput çevrede (koridor 92 km). Gerçek geçiş eksklavı.
  - önerilen düzeltme: gucerat-sultanligi t künyesi 1573-01-01 ile Sûrat 1573-02-26 uyumu kaynakla.
  - kaynak: veri ölçümü (kayit.py Sûrat)

### K100 · Milliyetçi İspanya (Franco, Burgos) (`ispanya-milliyetci`) · 1936-07-19 → 1939-03-28 · 71.686 km²

- nokta [39.058, -6.424], en büyük kesit 1938-01-07 · kesit sayısı 11 · sınıf sayımı {'KARA-EKSKLAV': 6}
- çevre: ispanya 74%, portekiz 31%
- koridor: 53.4 km · ispanya 9/9
- içindeki yerleşimler (4, s.eksklav 0): Sevilla (ispanya-milliyetci); Ilipa (Alcalá del Río) (sahipsiz); Badajoz (ispanya-milliyetci); Salamanca (ispanya-milliyetci)
- koridor yerleşimleri: Simancas (ispanya); Valladolid (ispanya-milliyetci)
- **HÜKÜM: GERCEK** · kova `GERCEK` · güven `KAYNAK-GEREK`
  - gerekçe: Temmuz-Ağustos 1936'da Sevilla-Granada kesiti Burgos gövdesinden kopuktu (Badajoz 14 Ağustos'ta alındı, tarihsel iddia). 1938-01-07 kesiti Ekstremadura güneyi (La Serena cebi) Cumhuriyetçi elinde; koridor 53 km 'ispanya' 9/9. Ilipa sahipsiz.
  - önerilen düzeltme: Yok.
  - kaynak: bulunamadı

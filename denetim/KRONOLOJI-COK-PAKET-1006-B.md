# KRONOLOJI-COK-PAKET-1006-B — 55 "ÇÖZÜLMEDİ" kaleminin ikinci turu

Ağaç: `C:\atlas-p84-kcp1006b` (`origin/makine/umit` `b2d4c2ff`, ilk turun COK-ODAK diff'i bu tabanda UYGULANMIŞ:
`bebc58ae`). Yalnız ölçüm + öneri; hiçbir veri dosyası değiştirilmedi (diff'ler uygulanıp ölçüldü, geri alındı,
`git status data/` boş). Ölçüm günü: **6 Ekim 2026**.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı
- Tanım okundu: 55'in tamamının ilk-tur sebebi **"o gün künyenin haritada <2 yerleşimi var"** (`odak_kimlik`
  kırık atıf olurdu). Bu bir KAYNAK eksikliği değil, ATLAS yoğunluğu/kimlik ekseni sorusudur.
- **Sayı:** 55'ten **~10-14'ü** "çözülür" (= kaynakla desteklenen, vekil olmayan bir odak ya da kaynakla
  desteklenen bir atlas dönem düzeltmesi önerisi çıkar). ~17'si (1281 öncesi) ② kovada kalır.
- **Mekanizma (üç ayrı tahmin):**
  - M1: Maddenin KENDİ metni bir yer adlandırıyor ve o yer atlasta var ⇒ `odak_yer`.
  - M2: Karadağ/Zeta/Dulkadir gibi tâbi künyeler `v:` ile çiziliyor; ilk tur yalnız `s:d` saydıysa ③.
  - M3: Aydın 1419/1425 · Dulkadir 1515-21 · Yemen 1889/95: madde tarihi künyenin harita ömrü dışında.

### Öngörü ↔ ölçüm
| | öngörü | ölçüm | hüküm |
|---|---|---|---|
| sayı | 10-14 | **11** çözüldü (diff'li, kapı aletiyle ölçüldü) + **8** şartlı (yeni yerleşim ister) | ✓ |
| M1 | maddenin kendi metnindeki yer | yalnız **1** (Tarsus). Asıl kazanç **TDV'nin adlandırdığı yerden** geldi (Silifke, Ermenek, Niğbolu, San‘a — 4) | ✗ mekanizma kaydı |
| M2 | `v:` sayılmıyor | ✗ — sayaç `v:`yi SAYIYOR (`SUZGEC.sahipKimlikte`). Ama Dulkadir'in `v:` dönemi **`kid`siz** ve `k` adı künye çekirdeğiyle başlamıyor ⇒ eşleşmiyor. Yakın varyant ✓ | kısmen |
| M3 | ömür dışı tarih | Aydın 1425 ✓ (TDV ile tarih çelişkisi), Yemen ✓ (imamlığın o gün toprağı yok), Dulkadir ✗ (ömür içinde, sebep M2) | kısmen |
| 1281 öncesi | ~17 ② | 17 — ama kovası ② değil **③** (aşağıda) | sayı ✓, kova ✗ |

## 1. ÖLÇÜM — sayaç ne diyor (gerçek çözücü, `denetim/ARAC-KCP-1006B-OLC.py`, SALT OKUR)
Alet `arac/odak_cozum.js`i ③ bölümüne KADAR koşturur (tarayıcı evreni, app.js'ten kesilen gerçek işlevler) ve kapının
sorduğu sayıyı (`odakKimlikSayisi`) birebir sorar. 55'in hepsinde n<2 YENİDEN ölçüldü (ilk turla birebir).

Künyelerin haritada n≥1/n≥2 olduğu yıllar (yıllık ızgara, `YYYY-07-01`):
| künye | künye f–t | n≥2 | n=1 | 55'teki kalem |
|---|---|---|---|---|
| karaman | 1256–1487 | 1281–1470 | 1471–72 (Silifke) | 1277 · 1474 · 1483 |
| selcuklu | 1075–1308 | 1281–1307 | — | 1080·1140·1202·1216·1223·1240 |
| dulkadir | 1337–1522 | 1337–**1514** | — | 1515·1516·1517·1519·1521 |
| aydin | 1308–1425-06-01 | 1308–89 · 1403–14 · 1422–24 | 1390–1402 | 1419 · 1425 |
| kilikya-ermeni | 1199–1375 | 1281–1351 | — | 9 kalem, hepsi 1219–1270 |
| yemen-zeydi | 897–1962 | 1281–1871 · 1919–23 | 1905 | 1889 · 1895 |
| zeta | 1356–1514 | — | 1356–86 (Leş) · 1482–98 (Cetinje) | 1421·1451·1465 (n=0) · 1482·1490·1496 (n=1) |
| karadag | 1516–1918 | 1879–1918 | 1697–1878 (yalnız Cetinje) | 5 kalem n=0 (1528–1688) · 14 kalem n=1 |
| bulgar-carligi | 1185–1396 | 1281–1394 | 1395–96 | 1277 |
| evfat | 1285–1415 | — | — (**hiçbir yılda yerleşimi yok**, `harita` yok) | 1350 · 1372 |

Atlas penceresi `BASLANGIC` = **1281-01-01** (ölçüldü). app.js `maddeOdakKutusu` `o.gi = gunIdx(m.t)` ile **ham**
maddenin gününü sayar, kıstırmaz (`app.js:15109`, `:15133`) ⇒ 1281 öncesi her madde tanım gereği n=0.

## 2. KOVA DAĞILIMI — 55
| kova | sayı | kalemler |
|---|---|---|
| **① yeni yol var** | **21** | dulkadir 5 · karaman 1474, 1483 · aydin 1419, 1425 · yemen-zeydi 1889, 1895 · kilikya 1226-06-01 · evfat 1372 · zeta 1482, 1490, 1496 · karadag 1859, 1862, 1876-06-30, 1876-07-18, 1878-03-03 |
| **② yol yok, kaynak/yerleşim yoklukta** | **13** | evfat 1350 · zeta 1421, 1451, 1465 · karadag 1711, 1718, 1785, 1795, 1838, 1847, 1852, 1853, 1856 |
| **③ soru yanlış kurulmuş** | **21** | 1281 öncesi 16 (selcuklu 6 · kilikya 8 · karaman 1277 · bulgar 1277) · karadag 1528, 1530, 1614, 1683, 1688 |

**③'ün iki sınıfı:**
- **1281 öncesi 16:** atlasta 1281'den önce HİÇ yerleşim dönemi yok (pencere). Hiçbir kaynak bunu çözemez; madde
  zaman çubuğunda zaten 1281'e kıstırılır. Soru "hangi kaynak" değil, **"kapı haritanın hiç göstermediği bir günü mü
  saymalı"**dır. Seçenek (karar koordinatör/Emre, `app.js` + `odak_cozum.js` aynı commit): `gi < BASLANGIC` ise
  sayım `BASLANGIC`ta yapılsın. Ölçülen etkisi: selcuklu 26 · kilikya 2 (Adana, Tarsus) · karaman ≥2 · bulgar 2
  (Vidin, Niğbolu) ⇒ **16'nın 16'sı** kutu kurar. ⚠️ Bedeli: 1080 Selçuklu'su için kamera 1281 Selçuklu toprağına
  bakar — sekmenin (a) yolu zaten bunu yapıyor, ama içerik olarak kaba. Önermiyorum da reddetmiyorum: kapsam kararı.
- **Karadağ 1528–1688 (5):** bu dönemde Karadağ bir OSMANLI SANCAĞI; atlasta Cetinje `d:` (osmanli) — **ATLAS DOĞRU.**
  TDV `karadag`: "Çetine vladikasına bağlı olarak Karadağ’da beş nahiye bulunuyordu." · "Karadağlılar savaş sırasında
  1688’de Venedik’in himayesi altına girdiler. 1692’de Osmanlı kuvvetleri Çetine’yi tahrip etti." ⇒ `taraflar:
  ["karadag"]` henüz haritada ayrı varlığı olmayan bir yapıyı adlandırıyor; `odak_kimlik` burada hiçbir zaman ≥2
  olamaz. Çare `odak_yer:["Cetinje"]` olabilir ama D257 süzmesinden geçmeli (bölge çapında olayda tek şehir vekil mi?)
  — YAZMADIM.

**Yan bulgu (③ ile aynı aile, 17 kalem):** zeta n=1 (3) + karadag n=1 (14) — künyenin o gün **tek** yerleşimi var.
`≥2` şartı tek noktalı künyede yapısal olarak hiç tutmaz. `app.js`'e "n=1 ise o noktanın çevresine sabit kutu" dalı
bu 17'yi tek seferde çözer, yeni coğrafî iddia üretmeden. Karar koordinatörde; ben ① yolunu (yoğunluk) yürüdüm.

## 3. ① KOVASININ YÜRÜYÜŞÜ — kalem kalem
İlk turun denediği: **yalnız `odak_kimlik:[taraf]`** (tek yol; kaynak araştırması yapılmadı — tanım dosyası §①).

### 3.1 ✅ Dulkadir 1515-06-13 · 1516-08-24 · 1517-01-22 · 1519-01-01 · 1521-01-27 (5) — ÇÖZÜLDÜ
- **Ölçüm:** o günlerde Maraş/Elbistan vb. anahtarı `tabi:` (kid BOŞ). Atlas tâbiyeti ZATEN biliyor ve TDV ile:
  6 kayıtta `v:[{f:"1515-06-13",t:"1522-01-01",k:"Osmanlı'ya tâbi Dulkadır beyliği — Şehsuvaroğlu Ali Bey (TDV
  dulkadirogullari)"}]` — ama **`kid` yok**; `sahipKimlikte` kid'siz dönemde `k` adının künye çekirdeğiyle
  ("dulkadiroğulları") BAŞLAMASINI ister, bu ad "Osmanlı'ya tâbi…" ile başlıyor ⇒ eşleşme yok.
- **Denediğim:** yeni kaynak gerekmedi — kayıttaki TDV alıntısı (`d:` dönemi kaynağı): "1515-06-13 Turnadağ sonrası
  İLHAK DEĞİL TÂBİYETTİR: 'Alâüddevle Bey'den sonra Dulkadıroğulları Beyliği'nin başına Yavuz Sultan Selim tarafından
  Şehsuvaroğlu Ali Bey getirildi.'" (atlas kaydındaki alıntı; TDV gövdesine bu turda yeniden GET yapılmadı).
- **Çare:** 6 `v:` dönemine `kid:"dulkadir"` → `denetim/KRONOLOJI-COK-PAKET-1006-B-DULKADIR-KOORD.diff`
  (yerleşim dosyaları — KOORDİNATÖR) + 5 maddeye `odak_kimlik:["dulkadir"]` →
  `…-DULKADIR-ODAK.diff`. **İKİSİ AYNI COMMIT'TE** (ayrılırsa ODAK diff'i tek başına 5 kırık atıf üretir).
- **Ölçülen:** n **0 → 6** (Maraş, Elbistan, Darende, Zamantı, Göksun, Gürün), beş günün beşinde.
- **Motor öngörüsü:** `uret_petek.py:7270` `kid`i yalnız `himaye:true` dönemde gruplar; bu dönemlerde `himaye` yok ⇒
  **boyama değişmez** (öngörü, koşulmadı). `durum_tablosu` "tâbi-çizili (yalnız `v:kid`)" kovasına dulkadir girebilir.

### 3.2 ✅ Karaman 1474-01-01 "Osmanlı seferi dağlık ve kıyı bölgeleri…" — ÇÖZÜLDÜ (`odak_yer:["Ermenek","Silifke"]`)
- TDV `gedik-ahmed-pasa` (200): "Gedik Ahmed Paşa, 1474’te idam edilen Mahmud Paşa’nın yerine vezîriâzam oldu; Karaman
  ve İçel’deki askerî faaliyetlerini Ermenek, Manyan ve Silifke hisarlarını tekrar alarak sürdürdü."
- TDV `karamanogullari` (200): "…İç İl sahillerine yönelik Osmanlı seferi 1474’te başarıyla sonuçlandı ve Karaman
  Beyliği tam anlamıyla kontrol altına alındı."
- Manyan'ın AD_KONUM'da olup olmadığı ÖLÇÜLMEDİ; Ermenek ✓ Silifke ✓ (ölçüldü).

### 3.3 ✅ Karaman 1483-01-01 "Kasım Bey öldü…" — ÇÖZÜLDÜ (`odak_yer:["Silifke"]`)
- TDV `silifke` (200): "…Karamanoğlu Kasım Bey’e Silifke merkez olmak üzere Mut yakınlarındaki Hucendi Beli’nden
  Akdeniz’e kadar olan topraklar iktâ edildi. Bir yıl sonra Kasım Bey’in ölümüyle Silifke ve çevresi kesin biçimde
  Osmanlı idaresine girmiş oldu."
- 🔴 **YAN BULGU — atlas dönemi TDV ile çelişiyor (iki kaynak: TDV silifke + TDV gedik-ahmed-pasa):** atlasta Silifke
  `s:karaman` **1473-01-01**'de, Ermenek **1468-01-01**'de bitiyor (ikisi de kaynaksız dönem). TDV silifke: 1472'de
  Gedik Ahmed teslim aldı, "Fakat Karamanoğlu Kasım Bey, aynı yıl … Silifke Kalesi’ni geri almayı başardı"; 1473
  Otlukbeli sonrası sefer "Ermenek ve Manyan kalelerini alıp Silifke’ye yöneldi". ⇒ Silifke ve Ermenek'in karaman
  dönemi ~1474'e uzamalı (yıl hassasiyeti). **DİFF YAZMADIM:** Ermenek için 1468-1474 arası iki yönlü ölçülmedi
  (§3.5 ters yön), ve 1474 sonu kesin gün değil. Koordinatöre ayrı kalem olarak öneriyorum.

### 3.4 ✅ Aydın 1419-01-01 "Cüneyd Bey'in Düzmece Mustafa isyanına katılması" — ÇÖZÜLDÜ (`odak_yer:["Niğbolu"]`)
- TDV `cuneyd-bey` (200): "…kendisine itaat etmek mecburiyetinde kalan Cüneyd’i Niğbolu sancak beyliğine tayin ederek
  memleketinden uzaklaştırdı (1414-1415). Cüneyd burada da boş durmadı, Eflak’ta ortaya çıkan Düzmece Mustafa
  hadisesine karıştı (1419)…"
- **NEGATİF BULGU — atlas doğru:** 1419'da Aydın beyliği yok (Cüneyd Osmanlı sancakbeyi); harita 1415–21 aralığında
  aydin göstermiyor. `taraflar:["aydin"]` bir HANEDAN etiketi, o gün haritası olan bir devlet değil.

### 3.5 ❌ Aydın 1425-06-01 "Cüneyd Bey'in yakalanıp idam edilmesi, kesin Osmanlı ilhakı" — ÇÖZÜLMEDİ, ÇELİŞKİ
- **Ölçüm:** 1425-05-31'de n=**8**; 1425-06-01'de n=0. Madde günü = künye `t` = yerleşimlerin bitiş günü (`f ≤ gs < t`).
  "Son" maddesi tanım gereği ömrün DIŞINA düşüyor.
- **Kaynak (iki TDV maddesi):** TDV `aydinogullari`: "…onu yakalattı ve ailesiyle birlikte idam ettirdi (829/1425-26)."
  · TDV `cuneyd-bey`: "…teslim olmak zorunda kaldı, bir süre sonra da bütün soyu sopu ile birlikte yok edildi (1426)."
- **Çelişki:** madde/künye/atlas **1425-06-01**; TDV hicrî **829**. (Türetilen sayı, alıntı değil: 829'un ilk günü
  ≈ 13 Kasım 1425 ⇒ Haziran 1425 hicrî 828'dir.) Madde kaydının `kaynak:` alanı bu turda okunmadı.
- **İstediğim:** koordinatör künye `t`, madde `t` ve 8 yerleşimin bitişini TDV'ye göre yeniden yazsın (yıl
  hassasiyeti: TDV ikisi "1425-26" ve "1426" diyor ⇒ D210'a göre en kaba güvenli düzey). ⚠️ Gün değişse de "son"
  maddesi yine bitiş gününe düşer ⇒ kalıcı çare `odak_yer` (İpsili'nin AD_KONUM'da olup olmadığı ÖLÇÜLMEDİ) ya da app'te "n<2 ise bir önceki gün" dalı. Ölçülen kazanç bu 55 içinde yalnız **1**.

### 3.6 ✅ Yemen-Zeydî 1889-01-01 "Zeydîler isyan etti" — ÇÖZÜLDÜ (`odak_yer:["Sana"]`)
- TDV `yemen` (200): "…1889’da Yemen’i kendi imamlarının yönetmesini isteyen Zeydîler isyan etti. İsyanı bastırmakla
  görevlendirilen Hicaz Valisi Ahmed Feyzi Paşa Hudeyde’ye geldi ve kısa sürede San‘a’ya giderek isyancıları dağıttı,
  Taiz’i ele geçirip Yemen’e hâkim oldu."
- **NEGATİF BULGU — atlas doğru:** 1889'da San‘a, Sa'de, Şehâre `osmanli` (ölçüldü); imamlık toprak tutan bir devlet
  değil, Osmanlı toprağında isyan.

### 3.7 ❌ Yemen-Zeydî 1895-01-01 "Hüseyin Hilmi Paşa isyanı bastırdı" — BULUNAMADI
- TDV `yemen` (200): "1895’te başlayan ve iki yıl süren ayaklanmayı Hüseyin Hilmi Paşa bastırdı." — yer adı YOK.
- Denenmeyen sonraki yol: TDV `huseyin-hilmi-pasa` (slug denenmedi), TDV araması (bu turda arama motoru KULLANILMADI).

### 3.8 ✅ Kilikya 1226-06-01 "Sis ve Tarsus darphaneleri…" — ÇÖZÜLDÜ (`odak_yer:["Tarsus"]`)
- Maddenin kendi metni; Tarsus AD_KONUM ✓, Sis ✗ (ölçüldü). Kaynak araştırması gerekmedi.

### 3.9 ✅ Evfât 1372-01-01 "Nevaya Krestos Memlük kervanlarına Habeş sınırını kapattı" — ÇÖZÜLDÜ (`odak_kimlik:["habesistan"]`)
- Maddenin kendi `kaynak:` alanı (TDV `etiyopya`): "1372-1382 yıllarında hüküm süren Nevaya Krestos Mısır kafilelerini
  Etiyopya sınırlarından içeri sokmamıştır". Olayın öznesi Habeş kralı; habesistan n=**43** (ölçüldü).
- ③ niteliği: `taraflar:["evfat"]` olayın öznesi değil. Evfât'ın atlasta hiç yerleşimi yok.

### 3.10 ⏸ Zeta 1482-06-01 · 1490-01-01 · 1496-01-01 (n=1, Cetinje) — ŞARTLI (yeni yerleşim: Obod)
- Hrvatska enciklopedija `crnojevici` (200): "Budući da je Donja Zeta sa Žabljakom ostala i dalje pod osman. vlašću,
  Ivan je prebacio središte svoje države na Obod, a poslije na Cetinje…"
- ⇒ Obod (Rijeka Crnojevića) 1481 sonrası Zeta merkezi; atlasa `s:zeta` ile eklenirse n=2. **Yerleşim dosyası
  KOORDİNATÖR + koordinat atlas dışından doğrulanmalı (D207) ⇒ diff yazmadım.** Bitiş: Cetinje'nin zeta dönemiyle
  aynı (`1498`/`1499` — HE: Stefan "(1496–99) … osman. eksponent").

### 3.11 ⏸ Karadağ 1859-01-01 · 1862-04-01 · 1876-06-30 · 1876-07-18 · 1878-03-03 (n=1) — ŞARTLI (yeni yerleşim: Grahovo)
- TDV `karadag` (200): "1838’de iki taraf arasında imzalanan antlaşmayla Hersek-Dalmaçya sınırı yakınındaki Grahova
  arazisi tarafsız hale getirildi." · "1859’da İstanbul’da toplanan elçiler tarafsız arazi olan Grahova’nın ve
  yakınındaki toprakların Karadağ prensliğine verilmesini kabul etti."
- Grahova AD_KONUM'da YOK (ölçüldü). `s:karadag` 1859 (yıl) ile eklenirse bu 5 kalem n=2. Koordinat + 1838–59
  "tarafsız" döneminin kimliği (sahipsizlik değişmezi!) koordinatörün kararı.

## 4. ② KOVASI — denenen ve tükenen yollar (ADIYLA)
- **Evfât 1350** — TDV `evfat` (200, gövde okundu): bölge "Şüve (Shoa) adı verilen sahanın doğu kısmını teşkil eder";
  merkez şehir ADI geçmiyor (aranan: "başşehr", "şehri", "Ankober", "Velel" — 0). `ifat` slug **302**. Kalan yol:
  akademik (Encyclopaedia Aethiopica "Ifat") — denenmedi.
- **Zeta 1421 · 1451 · 1465 (n=0)** — 1421'de Podgorica `s:sirbistan` (ölçüldü) ⇒ "Zeta Sırp despotuna miras" maddesiyle
  atlas TUTARLI. 1451/1465 için HE `crnojevici`: "Stefan Crnojević (spominje se 1451–65) postaje 1452. mlet. vazal,
  dobivši naslov vojvode Gornje Zete." Yukarı Zeta'nın hiçbir yerleşimi atlasta yok. TDV `zeta` **302**. HE `zabljak`
  (200) **YANLIŞ MADDE** (Durmitor'daki Žabljak kasabası, Žabljak Crnojevića değil — TDV tuzağı ②'nin HE karşılığı).
- **Karadağ 1711–1856 (9, n=1)** — 1859 öncesi ikinci bir Karadağ yerleşimi için TDV `karadag`ta yer adı yok
  (Grahova 1838'de "tarafsız", Karadağ'ın değil). Britannica `place/Grahovo` **403**. Kalan yol: Njeguši / Rijeka
  Crnojevića için HE ya da Enciklopedija Jugoslavije — denenmedi.

## 5. TUZAKLAR (sonraki tura sermaye)
- 🔴 **AD_KONUM'da "Bar" Karadağ'daki Bar DEĞİL:** 1421 ve 1451'de `s:polonya-erken` (ölçüldü) ⇒ Podolya'daki Bar.
  Karadağ kıyısı için `odak_yer:["Bar"]` yazmak kamerayı Ukrayna'ya uçurur.
- `odak_kimlik` sayacı `v:`yi sayar; ama **kid'siz `v:`de `k` adının künye çekirdeğiyle başlaması** gerekir. Açıklayıcı
  `k` metni ("Osmanlı'ya tâbi …") eşleşmeyi sessizce öldürür. Aynı desen başka künyelerde de olabilir — taranmadı.
- "Son" maddesi (künye bitiş günü) `f ≤ gs < t` kuralıyla HER ZAMAN n=0 verir.
- TDV araması bu turda **kullanılmadı** — bütün slug'lar doğrudan GET ile denendi. Bir "bulunamadı" arama motorunun
  hükmü değildir.

## 6. KAPI ÖLÇÜMÜ (diff'ler uygulanmış ağaçta, sonra geri alındı)
`py arac/odak_olc.py`, önce → sonra (üç diff birlikte):
- **BEYANLI→yabancı 312 → 301 (−11)** · KUTULU 704 → 715 (+11) · ODAKSIZ 3732 → 3732
- dosya: anadolu 25 → 16 · arabistan 2 → 1 · dogu_afrika 2 → 1
- sekme: KUTU 14 → 19 · SESSİZ 53 → 43
- **ÇÖZÜLMEYEN ODAK ATFI: 0** (öncesi de 0)
- ⚠️ Bu tabanın sayısı (312) ilk turun raporundaki 563 ile karşılaştırılamaz — farklı taban/ağaç.
- **TAVAN ÖNERİSİ (§3.4 — koordinatör yazar, yazmadan hemen ÖNCE yeniden ölçerek):** `ODAK-TAVAN.json`
  `beyanli_yabanci` −11 (yalnız `…-B.diff` inerse −6), diff'le AYNI commit'te.

`py arac/denetle.py`: önce **çıkış 2** · sonra **çıkış 2** — fark yalnız bir sıralama satırı (`katalan`). Çıkış 2'nin
sebebi ikisinde de aynı: "Değişmez 8 — devletler_harita.js YOK (üretilmiş + gitignore'lu çıktı)". Yeni ihlal 0;
D8 bu ağaçta ÖLÇÜLEMEDİ.

## 7. DOSYALAR
- `denetim/KRONOLOJI-COK-PAKET-1006-B.md` — bu rapor
- `denetim/KRONOLOJI-COK-PAKET-1006-B.diff` — 6 madde (`kronoloji_anadolu` 4 · `arabistan` 1 · `dogu_afrika` 1),
  bağımsız iner
- `denetim/KRONOLOJI-COK-PAKET-1006-B-DULKADIR-KOORD.diff` — 6 `v:` dönemine `kid` (yerleşim — KOORDİNATÖR)
- `denetim/KRONOLOJI-COK-PAKET-1006-B-DULKADIR-ODAK.diff` — 5 madde; **KOORD ile AYNI commit**
- `denetim/ARAC-KCP-1006B-OLC.py` — salt okur ölçüm aleti
- Hepsi `git apply --check` temiz (`origin/makine/umit` `b2d4c2ff`), CR 0.

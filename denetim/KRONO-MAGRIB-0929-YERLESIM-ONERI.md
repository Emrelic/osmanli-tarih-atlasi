# KRONO-MAGRIB-0929 — yerleşim (`s:`/`d:`/`v:`/`isg:`) ÖNERİLERİ

> ORTAK §1 (b): tarihte değişim var, haritada yok (ya da yanlış günde) → `yerlesimler*.js`e
> DOKUNMADIM. Her öneri: dosya · yerleşim · bugünkü pencere · önerilen · TDV dayanağı.
> **Uygulama kararı ve sırası koordinatörün; Y1-Y3 ise hüküm değil SORUDUR (Emre).**
> Ölçüm anı 29 Eylül 2026 (girdi.yukle, 92 dosya). TDV alıntıları bu oturumda çekilen
> gövdelerde birebir arandı.

---

## Y1 — ÜÇ OCAĞIN GÖRSEL KADEMESİ (SORU — hüküm Emre'de)
Şartname: *"hukuken Osmanlı, fiilen özerk"* — harita koyu (doğrudan `d:`) mu, açık (tâbi `v:`) mı?

### Bugün harita ne çiziyor (ölçüldü, 4 ülke × 11 tarih kesiti)
| Ocak | doğrudan `d:` | tâbi `v:` | `v.kid` |
|---|---|---|---|
| Cezayir | 1519-09-01 → 1671-01-01 | 1671-01-01 → 1830-07-05 (40 yerleşim) | `cezayir-ocagi` ✓ |
| Tunus | 1574-08-25 → 1705-07-17 | 1705-07-17 → **1923-10-29** (35 yerleşim) | 🔴 **YOK** |
| Trablusgarp | 1551-08-15 → 1711-07-29 · 1835-05-26 → 1912-10-18 | 1711-07-29 → 1835-05-26 (37 yerleşim) | `trablusgarp-ocagi` ✓ |
Yani harita üçünde de aynı ilkeyi uyguluyor: **irsî/seçilmiş yerel iktidar başlayınca tâbi**
(dayı 1671 · Hüseynî 1705 · Karamanlı 1711). İlke tutarlı; eşikler TDV'ye göre tartışmalı:

### TDV ne diyor
- **Trablusgarp — harita TDV ile BİREBİR örtüşüyor.** TDV `trablusgarp` dört dönem sayar ve
  "yarı bağımsız" ifadesini YALNIZ Karamanlılar için kullanır: *"kendi başına buyruk yöneticiler
  kabul edilen dayılar dönemi (yeniçeriler), yarı bağımsız eyalet konumuna geldiği Karamanlı
  hânedanı dönemi"*; dayılar için ayrıca *"Osmanlı hâkimiyetinin devamı sağlandı"*. ⇒ öneri YOK.
- **Cezayir — TDV fiilî kopuşu 1659'a koyuyor, 1671'e değil.** TDV `cezayir`: *"Halil Ağa onu
  maiyetiyle beraber bir kalyonla İzmir'e gönderdi; böylece ağalar devri başladı"* · *"İstanbul da
  artık bu durumu kabullendi"*. 1671 TDV'de ağalardan dayılara geçiştir. Ayrıca TDV doğrudan
  idareyi **1534**'ten başlatır: *"Cezayir doğrudan doğruya bir Osmanlı beylerbeyiliği haline
  geldi (1534)"*; 1519-1534 arasında Hızır Reis kendi adına sultan unvanı taşır (Nisan 1520
  kitabesi: *"es-Sultânü'l-mücâhid mevlânâ Hayreddin"*).
- **Tunus — TDV fiilî özerkliği 1631'e (en geç 1673'e) koyuyor, 1705'e değil.** TDV `tunus`:
  *"Tunus'ta 1631'de Murâdî, 1705'te Hüseynî ailesi eyalet yönetiminde yetki sahibi olunca
  beylerbeyi tayininde aksamalar görüldü"* — iki aile AYNI cümlede eşit tutulur. TDV `muradiler`:
  *"Murad Bey paşa rütbesiyle Tunus beylerbeyi oldu (1041/1631)"*; Ocak 1677'de İstanbul'un
  atadığı bey şehre sokulmadı (*"(Zilkade 1087 / Ocak 1677)"*). Dayılık 1591'de başlar.

### Seçenekler (öneri sırası benim; karar Emre'nin)
| | Cezayir | Tunus | Trablusgarp |
|---|---|---|---|
| **A — bugünkü ilke, TDV eşikleri** | tâbi 1659 | tâbi 1631 | değişmez |
| B — bugünkü haliyle bırak, kronoloji eşikleri anlatsın | 1671 | 1705 | değişmez |
| C — yalnız Cezayir'in 1519-1534'ü de tâbi | + 1519-1534 tâbi | — | — |
📌 B seçilirse de kronoloji eşikleri artık görünür: `kronoloji_cok_cezayir.js` 1659 ağalar
maddesi, `kronoloji_cok_tunus.js` 1591 dayılık + 1631 Murâdî + 1677 maddeleri, `_libya.js` 1603.

---

## Y2 — Tunus `v:` pencerelerinde `kid` YOK (35 yerleşim) — 🔴 senkron kusuru
Cezayir ve Trablusgarp tâbi pencereleri künyeye bağlı (`kid`), Tunus'unki değil. Sonuç:
tâbi Tunus bölgesi dizindeki `tunus-ocagi` künyesine bağlanmıyor; ayrıca pencere
1923-10-29'a kadar sürüyor, künye `tunus-ocagi` 1881-05-12'de bitiyor (1881 sonrası
`isg: fransa-cumhuriyet` üstüne biniyor).
**Öneri (uygulanabilir):** Tunus bölgesindeki 35 yerleşimin (`yerlesimler.js` Tunus, Kayrevan,
Gabes, Sfaks, Cerbe, Kerkene … · `yerlesimler_afrika.js` Halkulvâdî, Sûse, Munastır, Mehdiye,
Benzert … — liste: `v:[{f:"1705-07-17",t:"1923-10-29",statu:"vassal"}]` taşıyan ve Tunus
kutusundaki bütün kayıtlar) `v:` penceresi:
```
şimdi   : v:[{f:"1705-07-17", t:"1923-10-29", statu:"vassal"}]
önerilen: v:[{f:"1705-07-12", t:"1881-05-12", statu:"vassal", k:"Tunus Ocaklığı (Hüseynîler)", kid:"tunus-ocagi"},
             {f:"1881-05-12", t:"1923-10-29", statu:"vassal", k:"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)", kid:"tunus-beyligi-fransiz"}]
```
(`isg:` aynen kalır.) 1705-07-12 için Y4-b'ye bak. 1881 sonrası ikinci pencere de bir
SORUdur: TDV `huseyniler` *"Osmanlı Devleti Tunus'ta Fransız işgalini ve idaresini hiçbir
zaman kabul etmedi"*, TDV `tunus` *"salnâmelerinde “eyâlet-i mümtâze” diye yer aldı"* —
yani bugünkü "Osmanlı tâbi + Fransız işgal" çizimi TDV'yle uyumlu; yalnız künye bağı eksik.

## Y3 — Fas 1912: haritada HİÇBİR değişiklik yok (SORU)
Tunus 1881 Bardo `isg: fransa-cumhuriyet` ile çiziliyor; Fas 1912 Fes Antlaşması sonrası 32
Fas yerleşimi 1923'e dek `s: fas` (yalnız 1901/1903 Beni Abbas + Beşşâr Fransız). TDV:
- *"Sultan Abdülhafîz, 30 Mart 1912 tarihinde Fransa'nın ülkesi üzerindeki himayesini kabul eden
  antlaşmayı imzalamak zorunda kaldı."* (`fas`)
- *"Himaye antlaşmasıyla sultanın içerideki hâkimiyeti kabul ediliyor"* · *"sultan kukla durumuna
  düştü ve gerçek iktidar Fransız genel valisi ile İspanyol yüksek komiserinin eline geçti"* (`fas`)
- *"kuzey, güneybatı ve İfni bölgeleri İspanya'nın, diğer kısımları Fransa'nın hâkimiyetinde"* (`fas`)
- İspanyol himayesinin tarihi: *"ayrı bir antlaşma ile"* — **TDV tarih vermiyor (bulunamadı)**.
- Tanca: *"1912'de anlaşmayla özel bir statü verilen Tanca, 1923'te … ülkelerarası bir bölge"* (`tanca`)
**Öneri (karar Emre'nin):** Tunus deseni: Fransız bölgesi yerleşimlerine
`isg:[{f:"1912-03-30", t:"1923-10-29", d:"fransa-cumhuriyet", kaynak:"TDV fas: 30 Mart 1912"}]`.
İspanyol bölgesi (Tıtvân, el-Arâiş, Kasrülkebîr, Şefşâven, el-Hüseyme, Îfnî …) için başlangıç
günü TDV-dışı akademik kaynaktan alınmalı — ben yazmıyorum. 1907-1912 yerel fiilî işgaller de
TDV'de günlü ve kronolojide madde olarak VAR (Vecde Mart 1907 · Dârülbeyzâ 30 Temmuz 1907 ·
Fas/Miknâs Nisan 1911 · Rabat 19 Temmuz 1911 · Merakeş 7 Eylül 1912 · Tıtvân 1913); harita
isterse bunlar da ayrı `isg:` olabilir — maddeleri yazıldı, 2t (kırılmasız madde) hesabına
gireceklerini bildiriyorum (bkz. rapor §5).

---

## Y4 — TDV günlü GÜN DÜZELTMELERİ (harita kırılması ile kaynak arasında)
Hepsi ±30 gün içinde ya da dışında; Değişmez 2 bugün TEMİZ, bunlar kaynak doğruluğudur.
| # | dosya · yerleşim | bugün | önerilen | TDV |
|---|---|---|---|---|
| a | `yerlesimler.js` Tunus (+ Tunus kutusundaki 33 yerleşimin 1574-08-25 kırılması) | 1574-08-25 | Tunus şehri **1574-09-12**; Halkulvâdî (`yerlesimler_afrika.js`) **1574-08-24** | `tunus` *"altı günlük bir muhasaranın ardından 12 Eylül 1574'te Tunus'u geri aldı"* · *"6 Cemâziyelevvel 982'de (24 Ağustos 1574) … [Halkulvâdî] ele geçirildi"* · `kilic-ali-pasa` *"(25 Cemâziyelevvel / 12 Eylül)"* — 25 Ağustos TDV'de yok |
| b | Tunus kutusu 34 yerleşim `d.t`/`v.f` | 1705-07-17 | **1705-07-12** | `huseyin-pasa-tunus-beyi` *"20 Rebîülevvel 1117 (12 Temmuz 1705) tarihinde … Hüseyin'i de bey seçti"* |
| c | `yerlesimler.js` Tilimsan `d.f` (+ Muaskar vb. 1552 grubu) | 1552-01-01 | **1553-01-01** (yıl) | `tilimsan` *"960'ta (1553) … Sâlih Reis kumandasındaki Osmanlı ordusu tarafından kesin biçimde ele geçirildi"* (TDV iç çelişkisi: `abdulvadiler` 1550, `hasan-pasa` 1552 — DÜZELTME B5) |
| d | `yerlesimler.js` Tilimsan 1830-07-05 → `fransa-cumhuriyet` | 1830 | 1830-1833 Osmanlı muhafızları (tâbi `v:`), **1833 → `abdulkadir`**, **1842 → `fransa-cumhuriyet`** (yıl) | `tilimsan` *"1833 yılına kadar devam etti"* · *"Emîr Abdülkādir el-Cezâirî 1833'te Tilimsân'ı alarak"* · *"Ancak 1842'de antlaşmayı yok sayıp ikinci işgal dönemini başlattılar"* |
| e | `yerlesimler.js` Oran + `yerlesimler_ek3.js` Mersa'l-Kebîr | 1792-02-12 | **1792-09-12** | `vehran` *"12 Eylül 1792 tarihinde … Vehrân'ı İspanyollar'dan geri almayı başardı"* (çekirdek madde `olaylar_ek5.js` 1792-02-12 de aynı kaymada — DÜZELTME) |
| f | `yerlesimler_afrika.js` Muaskar | 1841-01-01 | **1841-05-30** | `muasker` *"30 Mayıs 1841'de Fransızlar Muasker'i yeniden işgal ettiler"* |
| g | `yerlesimler.js` Annaba | 1534 öncesi `zeyyani`; 1534-09-22 → Osmanlı kesintisiz | öncesi **`hafsi`**; **1535-1540 `ispanya`** (garnizon); 1540 → Osmanlı | `bune` *"Hafsîler'in eline geçti"* · *"kalesine 600 kişilik bir garnizon yerleştirdi"* · *"beş yıllık bir direnişten (1535-1540) sonra İspanyollar kaleyi boşaltmak zorunda kaldılar"* |
| h | `yerlesimler.js` Konstantin | 1519 → Osmanlı kesintisiz | **1526-1527 `hafsi`** arası (yıl) | `kostantine` *"Hafsîler'in 1526'da geri aldığı şehir bir yıl sonra tekrar Osmanlılar'ın eline geçtiyse de"* |
| i | `yerlesimler_ek3.js` Safi (Asfi) + Azemmûr | 1541 → `merini` | 1541 → **`sadi`** | `sadiler` *"1541'de Agādîr'i ele geçirdi. Aynı yıl Safî Kalesi'ni kuşatarak Portekizliler'i Safî ve Azemmûr'u terketmeye"* (özne Sâdî Muhammed eş-Şeyh) — TDV ay vermez |
| j | `yerlesimler_h2_kuzeyafrika.js` Tıtvân | 1860-1862 yok | **`isg:` ispanya 1860-02-05 → 1862** (yıl) | `sebte` *"5 Şubat 1860'ta Tıtvân'ı (Tetuan) işgal eden İspanya"* · `titvan` *"1862 yılında yapılan antlaşmayla şehri boşalttılar"* |
| k | Tunus güneyi: `yerlesimler.js` Kayrevan, Sfaks · `yerlesimler_afrika.js` Sûse, Munastır, Mehdiye | 1574'e dek `hafsi` | 1551 → Osmanlı (Trablusgarp eyaleti); Sfaks 1549 | `tunus` *"Sûs, Manastır ve Kayrevan 1551'den sonra Trablusgarp'ın bir parçası haline geldi"* · `sefakus` *"956'da (1549) Turgut Reis'e tâbi olan Sefâkus"* — ⚠️ `tunus` Kayrevan'ın 1586'da Tunus'a alındığını da yazar; ayrıntı taslak `ic_not_d`de |
| l | `yerlesimler_afrika.js` Benzert | 1574'e dek `hafsi` | **1557 → Osmanlı** | `benzert` *"1557'de Kaptanıderyâ Piyâle Paşa tarafından tekrar Osmanlı hâkimiyetine dahil edilmiştir"* |
| m | `yerlesimler_afrika.js` Gât | 1577 → Osmanlı | **1875 → Osmanlı** (öncesi TDV'ye göre Osmanlı değil) | `libya` *"1875'te … Gāt'a Türk bayrağını çekti"* · `fizan` *"Gāt'ın 1875'te Osmanlı topraklarına katılarak"* |
| n | `yerlesimler.js` Murzuk (Fizan) (+ Fizan grubu) | 1912-10-18 → `italya` | 1912-1914 İtalyan DEĞİL; Ağustos 1914'te kısa İtalyan girişi | `fizan` *"Fizan'a ancak Ağustos 1914'te girebildiler; fakat … geri çekilmek zorunda kaldılar"* — sonrası için TDV sahip vermez (Senûsî) → karar gerekli |
| o | `yerlesimler_afrika.js` Sellûm | 1914-12-18 → Mısır/İngiliz | **Kasım 1915 → 1916-03-24** Osmanlı-Senûsî eli (`isg:`) | `senusi-ahmed-serif` *"1915 Kasımında Sellûm ele geçirildi. Ancak İngilizler 24 Mart 1916'da Sellûm'u geri aldılar"* |
| p | `yerlesimler.js` Tanca | 1684-02-05 | TDV yalnız yıl: **1684-01-01** ya da kaynağı yazılsın | `tanca` *"yeniden müslümanların eline geçti (1095/1684)"* (`filaliler` 1678 — iç çelişki); madde 1684-01-01 yazıldı, 35 gün fark |
| r | `yerlesimler_h2_kuzeyafrika.js` Tıtvân | kuruluş 1484-01-01 | 1483 ya da 1484 — TDV ikisine de izin veriyor | `titvan` *"888 veya 889 (1483 veya 1484) yılında"*; madde 1483 yazıldı |
| s | `yerlesimler.js` Cezayir (+ 1519-09-01 grubu, 24 yerleşim) | 1519-09-01 | en erken **Ekim 1519** (gün yok) | `cezayir` *"Cezayir halkının Ekim 1519 tarihli arîzasıyla Yavuz Sultan Selim'e"* — Eylül 1519 TDV'de YOK (Y1-C ile birlikte düşünülmeli) |

### Bulunamadı (öneri YOK)
Mustaganem 1833 · Cicel 1839 · 1844-03-04 yedi yerleşim · Ağvât/Gardâye/Cilfe 1852 · Vargla
1854 · Sûvayra 1764 · Mazagan 1769 · Şefşâven 1471 · Cabo Juby 1916 · Fas'ın Sudan paşalığının
sonu (Timbuktu/Gao/Cenne) · Vecde'nin Cezayir Türklerine geçiş yılı · Arzila'nın ara İspanyol
dönemi — TDV bu yerlerin maddelerini taşımıyor (302) ya da tarih vermiyor. Akademik kaynakla
kapatılabilirler; bu paket yalnız TDV kullandı.

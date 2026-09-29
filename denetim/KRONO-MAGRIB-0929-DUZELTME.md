# KRONO-MAGRIB-0929 — mevcut maddelerdeki kusurlar (DÜZELTME önerileri)

> ORTAK §5.3: hüküm vermiyorum, veri silmiyorum. Her kalem: ne ölçtüm · kaynak · öneri.
> Silme/değiştirme kararı koordinatörün. Ölçüm anı 29 Eylül 2026.
> TDV metinleri bu oturumda çekildi (HTTP 200) ve düz metinden aranarak okundu.

---

## A. `data/kronoloji_kuzeyafrika.js` (83 madde) — yapısal kusurlar

### A1 — `kaynak:` alanındaki "alıntılar" TDV'de BİREBİR GEÇMİYOR (64/83)
Her maddenin `kaynak:` alanı `TDV \`slug\`: "..."` biçiminde, yani doğrudan alıntı gibi
görünüyor. Tırnak içindeki metin TDV gövdesinde aranınca **83 maddenin 64'ünde bulunamadı**
(boşluk, kesme işareti ve tırnak normalleştirildikten sonra). Metinler özet/yeniden ifade.
Olgular incelediğim örneklerde DOĞRU:
- madde 1 (1216 Tâze): kayıt `"613/1216'da 20.000 kişilik Muvahhid ordusunu yenilgiye uğrattı"`
  · TDV `meriniler` gerçekte: *"613 (1216) yılında üzerlerine gönderilen 20.000 kişilik Muvahhid
  ordusunu yenip Tâze'yi (Tâzâ) ele geçirdiler"*.
- madde 6 (1275 İsticce): TDV'de gün var ve doğru (*"15 Rebîülevvel 674 / 8 Eylül 1275"*).
**Öneri:** tırnaklı ifade, TDV'nin birebir cümlesiyle değiştirilsin ya da `TDV \`slug\` (özet)`
biçimine çevrilsin. Alıntı gibi görünen bir özet, `§4` ⑧ tuzağını (rakamın hangi cümlede
geçtiği) denetlenemez kılıyor.

### A2 — `kapsam_genis:true` + `yer_id:""` — 5 madde (kamera Osmanlı sınırına uçar)
ORTAK §2: *"kapsam_genis:true + odak YOK → kamera O GÜNÜN OSMANLI SINIRINA uçar
(app.js:11835) — yabancı kronolojide bu ODAKSIZLIKTAN KÖTÜDÜR."*
| # | t | başlık |
|---|---|---|
| 23 | 1511-01-01 | Muhammed b. Abdurrahman es-Sa'dî Sûs'ta cihad emîri ilân edildi |
| 40 | 1610-01-01 | Ülke Fas ve Merakeş emirlikleri olarak fiilen ikiye bölündü |
| 42 | 1580-01-01 | Osmanlı ordu teşkilâtı örnek alınarak reform |
| 44 | 1595-01-01 | Fransa, İngiltere, Hollanda ile ticarî ilişkiler kuruldu |
| 81 | 1911-12-01 | Enver Bey direniş karargâhını üstlendi |
Bugün dosya hiçbir künyeye bağlı olmadığı için etkisiz; **KRONO-BAGLAMA bağladığı gün
etkinleşir.** **Öneri:** `kapsam_genis` kaldırılsın; 40 → `yer_id:"Merakeş"`, 42/44 →
`yer_id:"Merakeş"` (Sâdî başşehri), 23 → `yer_id:"Tarûdant"` (Sûs bölgesinin şehri; TDV
`sadiler` "Sûs bölgesi" der, şehir adı vermez — yer_id ancak bölge temsili olur, istenmezse boş kalsın).

### A3 — dört maddede aynı nesnede İKİ `yer_id` anahtarı
Maddeler 1 (1216), 2 (1255), 4 (1270 Merakeş), 5 (1274 Tanca) önce `yer_id:""`, sonra
`yer_id:"<yer>"` taşıyor. JS son anahtarı kullanır, bugün zararsız; ama her araç bunu aynı
okumaz (JSON'a çevrilince hata). **Öneri:** boş olan ilk anahtar silinsin.

### A4 — 65/83 maddede `t:"YYYY-01-01"` ama `gun:` alanı YOK
Yıl hassasiyeti açıklanmamış (ORTAK §2: gün bilinmiyorsa `gun:` açıklar). **Öneri:**
`gun:"<yıl> (TDV gün vermez)"` eklensin.

### A5 — dosya başlığı bayat
Başlık *"HENÜZ CANLI DEĞİL. index.html'e … bağlanmadı"* diyor; dosya `index.html:1073`e ve
`paket_12.js`e bağlı. Ama `KRONOLOJI_KUZEYAFRIKA` hiçbir künyeye eşlenmediği için
(`app.js:13519`) **83 madde sitede görünmüyor** (M-5396'daki 15 dosyadan biri).

### A6 — dosya içi mükerrer (aynı olay, iki bakış)
| Merînî bölümü | Zeyyânî bölümü | olay |
|---|---|---|
| 10 · 1337-01-01 | 60 · 1337-01-01 | Merînîler Tilimsan'ı aldı |
| 12 · 1348-01-01 | 61 · 1348-01-01 | Abdülvâdîler Tilimsan'ı geri aldı |
| 13 · 1352-01-01 | 62 · 1352-01-01 | Merînîler Tilimsan'ı ikinci kez aldı |
| 8 · 1270-01-01 "Abdülvâdîler bağımsızlaşarak Tilimsan'ı kurdu" | 56 · 1235-01-01 "Yağmurasen … hanedanını kurdu" | kuruluş — iki farklı yıl |
İki farklı künyeye (merini / zeyyani) bağlanırsa her biri kendi bakışıdır, mükerrer
değildir. Aynı künyeye bağlanırsa çift görünür. **Taşımada dikkat** (bkz. rapor §2).
Madde 8'in "Tilimsan'ı kurdu" ifadesi yanlış yönlendirici: TDV `meriniler` 1270 için
Abdülvâdîlerin **Merînîlere karşı bağımsızlığını** anlatıyor, şehrin kuruluşunu değil.

### A7 — madde 13: tarih ile alıntı çelişiyor
`t:"1352-01-01"` · başlık "Ebû İnân Tilimsan'a girdi" · alıntı *"759/1358'de Ebû İnân
Tilimsân'a girdi"*. TDV `meriniler` gerçekte: *"752'de (1351) Tilimsân'a girdi ve
Abdülvâdîler'in kısa süren ikinci hükümranlığına son verdi"*. 1358 Ebû İnân'ın ölüm yılıdır.
**Öneri:** alıntı TDV cümlesiyle değiştirilsin; `t` TDV'ye göre 1351. (Harita Tilimsan'ı
1352-01-01'de çeviriyor ve kaydında "iç ayrışma, ihtiyatlı 1352" beyanı var — harita bilinçli.)

---

## B. Aynı olay, farklı günler — dosyalar arası (ORTAK §5 "üç ayrı gün" sınıfı)

### B1 — Tunus'un kesin fethi 1574: DÖRT farklı gün
```
kronoloji_kuzeyafrika.js #55   1574-08-24  "Sinan Paşa ve Kılıç Ali Paşa Tunus'u kesin olarak fethetti"
olaylar_ek.js                  1574-08-25  "Tunus'un kesin fethi"
kronoloji_ispanya.js           1574-08-25  "Osmanlı Tunus'u kesin olarak geri aldı"
devletler.js#hafsi             1574-09-13  "Sinan Paşa Tunus'u kesin olarak fethetti…"
harita (33 Tunus yerleşimi)    1574-08-25
```
TDV `tunus` İKİ gün veriyor ve ikisi farklı yerleri tarihliyor:
*"altı günlük bir muhasaranın ardından 12 Eylül 1574'te Tunus'u geri aldı"* ·
*"Halkulvâdî Kalesi de otuz üç gün direndiyse de 6 Cemâziyelevvel 982'de (24 Ağustos 1574)
yapılan büyük hücum sonunda ele geçirildi"*.
⇒ 24 Ağustos = **Halkulvâdî (La Goulette)**, 12 Eylül = **Tunus**. Kayıtlardaki 08-24/25
Tunus'u değil Halkulvâdî'yi tarihliyor; 09-13 TDV'den bir gün sapıyor.
⚠️ TDV'nin iki cümlesi kendi içinde gerilimli (33 gün direnen Halkulvâdî, 12 Eylül'den önce
düşmüş oluyor) — `§4` ⑥: bildiriyorum, hüküm vermiyorum. **Öneri:** Tunus şehri maddeleri
TDV'nin 12 Eylül'üne, Halkulvâdî ayrı madde/yerleşim olarak 24 Ağustos'a bağlansın; harita
önerisi YERLESIM-ONERI Y4'te.

### B2 — Barbaros'un Tunus'u alışı 1534: iki gün, TDV gün vermiyor
```
kronoloji_kuzeyafrika.js #53   1534-08-16
olaylar_ek5.js · kronoloji_ispanya.js · harita   1534-09-22
devletler.js#hafsi             1534-01-01
```
TDV `tunus`: yalnız *"(1534)"*. TDV `barbaros-hayreddin-pasa`: *"1534 Ağustosunda seksen gemi
ile İstanbul'dan ayrılan Hayreddin Paşa Reggio, Sperlonga, Fondi … vurduktan sonra Tunus'a
yöneldi"* — yani 16 Ağustos'ta henüz İtalya kıyısındadır; **1534-08-16 TDV ile uyuşmuyor**.
09-22'nin kaynağını TDV'de bulamadım (bulunamadı). **Öneri:** #53 ya 1534-09-22'ye (öteki iki
kayıtla hizalı) ya da `1534-01-01 + gun:"1534 (TDV gün vermez)"`e çekilsin.

### B3 — Karamanlı hanedanının kuruluşu: 1711-01-01 vs 1711-07-29
```
kronoloji_kuzeyafrika.js #73 · devletler.js#trablusgarp-ocagi   1711-01-01
olaylar_ek5.js · harita (37 Libya yerleşimi)                      1711-07-29
```
TDV `karamanli`: *"Trablusgarp eyaletinin idaresini ele geçirdi (29 Temmuz 1711)"*.
**Öneri:** #73 ve künye maddesi 1711-07-29'a çekilsin (harita ve çekirdek zaten doğru).

### B4 — Karamanlıların sonu: 1835-01-01 vs 1835-05-26
```
kronoloji_kuzeyafrika.js #76 · devletler.js#trablusgarp-ocagi   1835-01-01
olaylar_ek5.js · harita                                           1835-05-26
```
TDV `karamanli`: *"1835 yılının Şubat ayında hükümet Mustafa Necib Paşa kumandasında
Trablusgarp'a bir donanma ve birlikler gönderdi. Bunlar 27 Mayıs'ta Trablusgarp'ta karaya
çıktılar."* **Öneri:** #76 ve künye maddesi 1835-05-27'ye (TDV) ya da 05-26'ya (çekirdek)
hizalansın; 01-01 hiçbir kaynağa dayanmıyor. Çekirdek/harita 05-26 ile TDV 05-27 arasında 1
günlük fark var — ölçüt içinde, yalnız bildiriyorum.

### B5 — Tilimsan'ın kesin fethi: 1552 · 1553 · 1554
```
olaylar_ek17.js · harita (Tilimsan d: 1552-01-01)   1552
kronoloji_kuzeyafrika.js #70 · devletler.js#zeyyani (t: 1554-01-01)   1554
```
TDV `tilimsan`: *"960'ta (1553) Cezayir'den büyük bir ordu sevkedilince Tilimsân şehri
Sâlih Reis kumandasındaki Osmanlı ordusu tarafından kesin biçimde ele geçirildi. Böylece üç
asırdan fazla süren Zeyyânî hâkimiyeti sona ermiş"*. Hicrî 960 = Aralık 1552 – Aralık 1553.
**Öneri:** üç kaydın hepsi TDV `tilimsan`ın 1553'üne hizalansın (harita önerisi Y5). Künye
`zeyyani.t` 1554 → 1553 önerisi künye paketinin (KUNYE-DUNYA) işi.

### B6 — Hüseynî beyliğinin kuruluşu: üç gün
`devletler.js#tunus-ocagi` 1705-01-01 · `olaylar_ek5.js` + harita 1705-07-17.
TDV `huseyin-pasa-tunus-beyi`: *"20 Rebîülevvel 1117 (12 Temmuz 1705) tarihinde Muhammed
Hoca'yı dayı, Hüseyin'i de bey seçti."* — 17 Temmuz TDV'de yok. **Öneri:** üçü 1705-07-12.

### B7 — Tanca Antlaşması 1844: TDV'nin kendi içinde iki gün (bu paketin iki dosyası)
`kronoloji_cok_cezayir.js` 1844-09-10 (TDV `cezayir`: *"Tanca Antlaşması'yla (10 Eylül 1844)"*)
· `kronoloji_cok_fas.js` 1844-10-26 (TDV `abdurrahman-b-hisam`: *"26 Ekim 1844'te Tanca
Antlaşması'nı imzalayarak"*) · TDV `abdulkadir-el-cezairi`: *"1844 Ekiminde imzalanan"*.
İki madde iki künyede (Cezayir bakışı / Fas bakışı), ikisinde de `celiski:` beyanlı. Hüküm
vermedim; hangi gün seçilirse öteki dosyanın `t`si ona çekilmeli.

---

## C. Mevcut kayıtlarda TDV'nin GÜN verdiği ama kaydın tutmadığı yerler
(taslak ajanlarımın ölçümü, her alıntı TDV gövdesinde birebir arandı)
| kayıt | bugün | TDV | alıntı |
|---|---|---|---|
| `kronoloji_kuzeyafrika.js` 1360 "Abdülvâdîler kalıcı bağımsızlığını kazandı" | 1360-01-01 | 1359 (harita da 1359) | `abdulvadiler` *"1359'da yeniden bağımsızlıklarını kazanan Abdülvâdîler"* |
| `kronoloji_kuzeyafrika.js` 1229 "Ebû Zekeriyyâ Tunus'u fethetti, Hafsî hanedanı kuruldu" | 1229-01-01 | iki olay: 1228-06-29 giriş · Aralık 1229 bağımsızlık | `hafsiler` *"24 Receb 625 (29 Haziran 1228) tarihinde şehre girip"* · *"627 yılı başında (Aralık 1229)"* |
| `olaylar_ek13.js` 1569 Uluç Ali Tunus | 1569-01-01 | TDV iç çelişkisi: `kilic-ali-pasa` Mart 1570, üç madde 1569 | `kilic-ali-pasa` *"Şevval 977'de (Mart 1570) Tunus'u aldı"* |
| `olaylar_ek5.js` 1519-09-01 Cezayir'in bağlanması | 1519-09-01 | Ekim 1519 arîza (Eylül yok) | `cezayir` *"Cezayir halkının Ekim 1519 tarihli arîzasıyla"* |
| `olaylar_ek5.js` 1792-02-12 Vehrân | 1792-02-12 | 1792-09-12 | `vehran` *"12 Eylül 1792 tarihinde"* |
| `devletler.js#abdulkadir` 1839-11-01 cihad | 1839-11-01 | 1839-11-19 | `abdulkadir-el-cezairi` *"19 Kasımda “cihâd-ı mukaddes” ilân eden Abdülkādir"* |
| `olaylar_ek9.js` 1841 Muaskar işgali | 1841-01-01 | 1841-05-30 | `muasker` *"30 Mayıs 1841'de Fransızlar Muasker'i yeniden işgal ettiler"* |
| `kronoloji_kuzeyafrika.js` 1805-06-10 "Barbary Savaşı Trablus lehine sona erdi" | 1805-06-10 | 3 ya da 4 Haziran (TDV iç çelişkisi); "lehine" TDV ile uyuşmuyor | `trablusgarp` *"3 Haziran 1805'te iki taraf anlaştı"* · `derne` *"4 Haziran 1805'te … muahedesi imzalamak zorunda kaldı"* |
| `devletler.js#fas` 1664 Mevlây Reşîd | 1664-01-01 | 1664-08-02 | `mevlay-resid` *"(9 Muharrem 1075 / 2 Ağustos 1664)"* |
| `devletler.js#fas` 1672 Mevlây İsmâil | 1672-01-01 | 1672-04-13 (biat) | `mevlay-ismail` *"15 Zilhicce 1082 (13 Nisan 1672) tarihinde tamamlanan merasimde"* |
| `kronoloji_kuzeyafrika.js` 1603 Ahmed el-Mansûr'un ölümü | 1603-01-01 | 1603-08-19 | `ahmed-el-mansur` *"(11 Rebîülevvel 1012 / 19 Ağustos 1603)"* |
| `kronoloji_kuzeyafrika.js` + 3 künye, 1549 Fas'a giriş | 1549-01-01 | 1549-01-31 | `vattasiler` *"(2 Muharrem 956 / 31 Ocak 1549)"* |
| `kronoloji_kuzeyafrika.js` 1554 Ebû Hassûn | 1554-01-01 | 1554-01-08 | `fas` *"8 Ocak 1554 günü de beraberlerinde Ebû Hassûn el-Vattâsî olduğu halde"* |
| `kronoloji_kuzeyafrika.js` 1557 Muhammed eş-Şeyh | 1557-01-01 | 1557-10-23 | `fas` *"23 Ekim 1557'de öldürüldü"* |
| `kronoloji_kuzeyafrika.js` 1576 Abdülmelik Fas'a girdi | 1576-01-01 | 1576-03-08 | `fas` *"(8 Mart 1576)"* |
| `kronoloji_ispanya.js` 1921-07-22 Annual | 1921-07-22 | TDV iki maddede 22 HAZİRAN | `fas` *"22 Haziran 1921 günü Annoual'da"* — TDV ay hatası ihtimali; akademik kaynakla karar verilmeli, dokunmadım |
| `devletler.js#rif-cumhuriyeti` f: 1921-09-18 · kuruluş maddesi 1923-02-01 (Britannica) | — | 1921-09-19 | `fas` *"bağımsızlığını ilân etti (19 Eylül 1921)"* · `abdulkerim-el-hattabi` aynı gün |
| `olaylar_ek13.js` 1541-10-01 Safi/Azemmûr boşaltılması | 1541-10-01 | TDV ay vermez | `sadiler` *"Aynı yıl Safî Kalesi'ni kuşatarak"* — Ekim'in kaynağı gösterilmeli |
| `olaylar_ek6.js` 1832-03-01 · `devletler.js#konstantin-beyligi` 1832-03-27 Bône | iki gün | TDV yalnız 1832 | `bune` *"iki yıl sonra da Bûne'yi ele geçirdiler"* — hangisi doğru TDV'den ayrılamıyor |
| `olaylar_ek5.js` 1835-05-26 Trablusgarp merkeze | 1835-05-26 | 27 Mayıs çıkarma / 28 Mayıs tutuklama | `karamanli` *"Bunlar 27 Mayıs'ta Trablusgarp'ta karaya çıktılar. Ertesi gün … tutuklandı"* |

TDV'nin kendi içindeki başka çelişkiler (madde yazılmadı ya da `celiski:` alanında): 1530/1523
şövalyeler (`trablusgarp`↔`libya`) · 1 Eylül / 29 Eylül 1911 savaş ilânı (`trablusgarp` tek
başına 1 Eylül; korpus 29 Eylül DOĞRU) · Uşi 18/19 Ekim (`fizan` tek başına 19) · 1610/1613
Fas'ın bölünmesi · 1631/1637 Murâdî başlangıcı · 1671/1681 Cezayir dayıları (`garp-ocaklari`↔
`tunus`) · 1705 İngilizlerin Tanca'yı alışı (`mevlay-ismail`; öteki maddelerde yok — atlas
için KULLANILMAMALI).

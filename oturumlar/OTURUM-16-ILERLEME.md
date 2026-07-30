# Oturum 16 — motor · ilerleme

**Dosyalarım:** `arac/uret_petek.py` · `arac/renkler.py` · `arac/girdi.py`
**Petek kilidi bende.** Bu pencerede **üretim koşulmadı** (merkez oturumun
talimatı: pencere 30+ dakikalık koşuya yetmiyor). Aşağıdaki her sayı, motorun
geometri boru hattı (`uret_petek.py` 1-561) çıktı yazmadan koşturularak ölçüldü;
dönem döngüsü hiç çalışmadı.

---

## 1. Madde 17 — çöl sınırları: cetvel mi, nokta yokluğu mu?

**Cevap: nokta yokluğu. Motor kusuru değil, §2 sınıfı.** Kullanıcının sorusu
"sancakların petek alanları bunu mu gösteriyor, yoksa mecburiyetten mi böyle?"
idi — cevap **mecburiyetten**, ve mecburiyetin sebebi ölçülebilir.

| bölge | nokta | kara km² | km²/nokta | ort. kenar | köşe/1000 km |
|---|---|---|---|---|---|
| Libya içi (Fizan+Sirte) | **8** | 1.540.913 | **192.614** | 55,17 km | **18,1** |
| Sahra geneli | **10** | 3.954.299 | **395.430** | 66,15 km | **15,1** |
| Rub'ul Hâlî / Necid | 19 | 1.362.856 | 71.729 | 12,38 km | 80,8 |
| Batı Anadolu (sağlıklı) | 104 | 194.276 | **1.868** | 8,47 km | **118,1** |
| Rumeli/Trakya (sağlıklı) | 53 | 202.024 | 3.812 | 8,72 km | 114,7 |
| Suriye-Filistin (sağlıklı) | 17 | 229.745 | 13.514 | 14,96 km | 66,8 |

**Libya'da nokta başına düşen alan Batı Anadolu'nun 103 katı.** "Cetvel"
görüntüsünün doğrudan ölçüsü son sütunda: sağlıklı bölgede sınırın her 1000
km'sinde ~115 köşe var, çölde **18**. Yani sınır gerçekten 6,5 kat daha az
kırılıyor — kullanıcı var olmayan bir şey görmüyor.

Libya'daki sekiz noktanın peteklerinden üçü tek başına dev: Sirte iç çölü
288.368 km², Fizan güneyi 286.722 km², Gât 270.008 km². Haritanın en büyük
peteği Timbuktu — **2.742.531 km²**, Ndjamena 1.905.638 km², Agadez 1.222.205 km².

**Motorda yapılacak bir şey yok; bu bir veri işidir.** Bir peteğin çevresi
komşularının konumuyla belirlenir — sekiz nokta arasındaki orta dikmeler
gerçekten düz çizgidir. Çözüm: Sahra'ya vaha/kervan yolu noktası eklemek
(Gadâmis, Mürzük, Küfra, Evcile, Siva, Bilma, Ayn Sâlih, Tamanrasset zaten var).
⚠️ Ama tarihen doğru olan da budur: Osmanlı'nın Trablusgarp'taki hâkimiyeti
kıyı şeridi + vahalardı, çölün kendisi kimsenin idaresinde değildi. Nokta
eklemek sınırı yumuşatır ama **çöle sahiplik atamak yanlış olur** — eklenecek
noktaların çoğu sahipsiz kalmalı (§ Değişmez 1'in "34 kasten sahipsiz" kümesi).

---

## 2. Madde 40 — Mısır'ın ortasındaki boşluk

**Cevap: boşluk BİLİNEN kusur sınıfı DEĞİL — içinde iki nokta var ve ikisi de
kasten sahipsiz.**

```
1840 · 1870 · 1885 · 1900 — dördünde de aynı:
  kutuda 61 sahipli nokta,  2 SAHİPSİZ nokta,  boşluk 489.869 km²
     Batı çölü (Mısır)   423.525 km²   (26.50 K, 27.00 D)
     Nûbe çölü            66.344 km²   (20.50 K, 33.50 D)
```

Yani motor doğru davranıyor: iki noktanın hiçbir `d:`/`v:`/`s:` dönemi yok,
petekleri de boş boyanıyor. Bunlar Sahra dolgu noktalarının aynısı — çölün
komşu peteğe emilip Osmanlı boyanmasını engellemek için konmuşlar.

**Ama 1800'lerde bu muhtemelen YANLIŞ.** Aynı ölçümde şu çıktı:

```
Cağbûb  (29.74 K, 24.52 D)  171.638 km²  1885 = OSMANLI
Batı çölü (Mısır)           423.525 km²  1885 = (sahipsiz)
```

Cağbûb Libya tarafında Osmanlı, hemen doğusundaki Mısır batı çölü boş. Görsel
sonuç tam olarak kullanıcının şikâyeti: **Osmanlı/Mısır gövdesinin ortasında
kocaman bir delik.** Mehmed Ali 1820'de Siva'yı ilhak etti ve vahalar
(Bahriye, Farâfira, Dâhile, Hârice) Kahire'den idare edildi; dolayısıyla
1820 sonrası "Batı çölü (Mısır)" noktasına Mısır tâbiiyeti (`v:`) yazılması
gerekiyor olabilir.

🔴 **Bu bir VERİ kararıdır, motor kararı değil — `yerlesimler.js`'e ben
yazmıyorum.** Merkez oturuma / Oturum 14'e havale: `Batı çölü (Mısır)` ve
`Nûbe çölü` kayıtlarına 19. yüzyıl dönemi eklenecek mi, hangi tarihten
itibaren, hangi TDV maddesine dayanarak (`vahat`, `siva`, `misir`).

---

## 3. Madde 29'un geometri kısmı — Boğdan

**Cevap: Boğdan'ın sorunu nokta seyrekliği DEĞİL.** Ölçüm bunu net söylüyor:

| | nokta | km²/nokta | ort. kenar | köşe/1000 km |
|---|---|---|---|---|
| Boğdan+Eflak | 16 | 15.618 | 9,83 km | **101,7** |
| Batı Anadolu (sağlıklı) | 104 | 1.868 | 8,47 km | 118,1 |
| Rumeli/Trakya (sağlıklı) | 53 | 3.812 | 8,72 km | 114,7 |

101,7 köşe/1000 km, sağlıklı bölgelerin (115-118) çok az altında ve Libya'nın
(18,1) beş katı. **Boğdan cetvelle çizilmiş değil.**

Sorun başka yerde: **sınır nehri izlemiyor.** Hücre iç sınırlarının nehir
yatağına yaslanan payı:

```
Roman %0 · Kili %0 · Suçava %5 · Birlad %6 · Bükreş %8 · Silistre %9
Niğbolu %10 · Bender %11 · Çernovitz %14 · Yaş %20 · İbrail %21
```

Nehir verisi yüklü (Prut, Dniester, Dnipro, Danube, Southern Bug hepsi
`NEHIR_HAT`'ta) ama Boğdan hücreleri onlara yaslanmıyor.

⚠️ **Ölçümün sınırı — kendi ölçüm birimim yanlıştı, bunu açıkça söylüyorum.**
Yukarıdaki sayı **hücre** sınırlarını ölçüyor. Kullanıcının gördüğü şey
hücre sınırı değil, **gövde** sınırı: Boğdan gövdesi 8-10 hücrenin birleşimidir
ve iç kenarları haritada hiç görünmez. Görünen tek şey Boğdan ile komşularının
(Eflak, Lehistan, Osmanlı, Erdel) arasındaki dış kenardır. Doğru ölçüm
"Boğdan hücrelerinin birleşiminin dış sınırı Prut/Dniester'e ne kadar
yaslanıyor" olmalı ve bunu **bu pencerede ölçmedim**. Sonraki koşuda ilk iş.

Şimdiden söylenebilecek olan: yaslama yarıçapı 0,30° ≈ 33 km. Prut ile Dniester
arası yer yer 150 km; iki nehir arasındaki orta dikme hiçbir nehre yaklaşamaz,
dolayısıyla yaslanamaz. **Bu bölgede sınırı nehre oturtmanın tek yolu nehir
kenarına nokta koymaktır** (Hotin, Soroka, Orhei, Tighina/Bender, Reni) —
yine veri işi. Bender ve Hotin zaten var; Soroka/Orhei yok.

---

## 4. KORUMA_PAYI = 0.06 sonrası sıfır alanlı hücre — TAM TARAMA

**Cevap: yok edilmiş hücre kalmadı.** Estergon ve Solnok listeden düştü.

Mevcut ölçütle (ham = petek ∩ TÜM KARA) 18 vaka görünüyor ama **17'si yanlış
alarm**: Venedik %0,1 (22/36.825), Abu Dabi %1, Masira %1, Kemeran %2, Kiş %3,
Brakya %5, Bozcaada %6, Pag %6, Ferasan %6, Mliyet %6, Vis %6, Rab %6,
Uzunada %7, Elba %7, Ağraham burnu %7, İskiathos %9, Krk %9 — **hepsi ada.**
Ham hücreleri anakaraya taşıyor, ada kuralı doğru şekilde kesiyor, oran
tabanı şişik olduğu için denetim bağırıyor.

Oran tabanı yerleşimin **kendi kara bileşenine** çevrilince: **18 → 1**.
Kalan tek vaka **Ankober %7,3** (2.887/39.671 km², Habeş yaylası, iç kara) —
sırt yaslamasının hücreyi yediği gerçek bir sinyal, görünmez değil, acil değil.

✅ **Uygulandı** (`uret_petek.py`, yedinci denetim `_oranlar` döngüsü).
Oturum 8'in (Fable) §2 raporu aynı sonucu veriyordu; merkez oturumun kuralına
uyup **bağımsız ölçtüm ve aynı 18 vakayı, aynı tek kalanı buldum** — rapora
dayanarak değil, doğrulayarak değiştirdim.

KORUMA_PAYI'nın kendi maliyeti: **92 yaslama iptal, 26 yerleşim korundu**
(Riyad, İnegöl, Mihaliç, Hotin, İbrail, Mohaç, Ordubad, Kûfe, Arta…).
Oturum 8'in ölçtüğü 92 sayısıyla birebir aynı.

---

## 5. Renk işi — 53 kimlik ölçüldü, tablo merkez oturumun beklediğinden farklı

Merkez oturum "53 kimliğin noktası var ama rengi yok, ekleyince görünür fark
olur" dedi. Ölçtüm: **renksiz kimlik sayısı 157** (53 değil — 53, ayrıca
`devletler.js` kaydı da olan alt küme). Asıl bulgu şu kırılımda:

```
★ bugün YÜKLÜ girdide (girdi.py listesinde)  :   5
○ pencere içinde ama dosyası yüklü DEĞİL     :  17
· harita penceresinin tamamen dışında        : 135
```

**135'i `box(-12, 1.5, 62, 62)` penceresinin dışında.** `qing-hanedani` (117
nokta), `babur-imparatorlugu` (109), `ming-hanedani` (73), `yuan-hanedani` (73),
`ingiliz-hindistani` (96), `delhi-sultanligi` (83) — hepsi `yerlesimler_asya.js`
içinde ve tamamı 62°D'nin doğusunda. Bunlara renk vermek **bugün haritada
hiçbir şey değiştirmez**; pencere açılmadan çizilecek bir yer yok.

17'si (`aragon`, `kastilya`, `iskocya`, `irlanda`, `belcika`, `isvicre`,
`burgonya`, `bretanya`, `navarra`, `ferrara`, `mantua`, `parma`, `piza`,
`siena`, `luksemburg`, `kazak`, `nogay`) pencere içinde ama dosyaları
(`yerlesimler_avrupa.js`, `yerlesimler_ortaasya2.js`) `girdi.py`'de kapalı.
Renk onların önündeki engel değil; **engel merge kararı.**

Geriye **5 kimlik** kalıyor ve bunlar üretimde her koşuda 12 satır
`UYARI boya: … bilinmeyen devlet kimliği` basıyordu:

✅ **Eklendi** (`renkler.py`):

| kimlik | ad | hex | en yakın komşuya bindirilmiş ΔE |
|---|---|---|---|
| `darfur` | Dârfûr Sultanlığı | `#0288d1` | 22,0 |
| `kaffa` | Kaffa Krallığı | `#8e24aa` | 24,4 |
| `cimma` | Cimma (Jimma) Krallığı | `#0097a7` | 21,2 |
| `sidamo` | Sidamo krallıkları | `#7b1fa2` | 27,5 |
| `vollayta` | Vollayta (Wolaita) Krallığı | `#5c6bc0` | 15,3 |

Beşi de soğuk ton — o köşenin bütün komşuları (habesistan, adal, somali, funj,
nube, mehdi) kahve/tan ailesinden. Doğrulama: **yüklü girdide renksiz kimlik 0.**
Görünür kazanç küçük değil: Nyala'nın peteği tek başına 885.889 km², Bonga
(Kaffa) 615.437 km², Cenîne 470.720 km².

### DSATUR — merkez oturumun sorusu

**Renk tavanı zorlanmıyor.** 1515 nokta üzerinde gerçek Voronoi komşuluğu
kurup (hücreler DEĞİYOR mu) gün bazında çakışmayla ölçtüm:

```
bugünkü 104 kimlik                    →  8 renk   (maks derece 31, ceneviz)
+ 5 yüklü                             →  7 renk
+ 5 yüklü + 17 pencere içi (126)      →  7 renk
+ renksizlerin TAMAMI (261 kimlik)    →  8 renk   (maks derece 72, ingiltere)
```

261 kimliğin hepsi eklense bile **8 renk yetiyor**, kartografik tavanın (7±2)
içinde. Sebebi: yeni kimlikler ayrı coğrafyalarda kümeleniyor, grafiği
yoğunlaştırmıyor **genişletiyor**. Kademeli gitmeye renk yüzünden gerek yok.

⚠️ Ölçüm yöntemi kritik: 400 km'lik "yakınlık" vekiliyle aynı veri **14 renk**
veriyor. Komşuluk hücrelerin değmesinden gelmeli, mesafeden değil. Bu notu
`renkler.py` başlığına yazdım ki bir dahaki sefere yanlış vekil kullanılmasın.

### Şarkî Rumeli renk kısıtı

Merkez oturumun ilettiği kısıt (Bulgaristan Prensliği ile Şarkî Rumeli
1878-1885 arası aynı anda sahnede, renk paylaşamazlar) **doğru ama bugün
uygulanamaz**: `sarki-rumeli` kimliği `yerlesimler*.js`'in hiçbirinde geçmiyor
(0 nokta-dönem). Kimlik veriye girdiği gün ayrı hex gerekecek. Kısıt kaybolmasın
diye şimdiden not ediyorum; renk atarken `bulgaristan` (#7aa06a) ve komşusu
`eflak`/`romanya` tonlarından uzak durulacak.

### Paylaşılan hex denetimi

Yeni renklerden `#5c6bc0` (vollayta) `norvec` ile aynı. Bu, dosyanın kendi
kuralınca hata değil — ama denetlenmesi gerekir, denetledim: 5 paylaşılan hex
çiftinin (`yugoslavya/hive`, `trabzon-rum/dulkadir`, `buhara/karaman`,
`vollayta/norvec`, `bosna/ahiler`) **hiçbiri tarih boyunca komşu değil, ihlal 0.**

---

## 6. `isg:` şeması — motor okumuyor, ama artık SESSİZCE değil

Merkez oturumun talebi: motor `isg:` alanını görmezden gelsin, fakat bilinmeyen
alan sessizce yutulmasın. İkisi de yapıldı, ama istenen tek satırdan biraz
fazlası olarak — çünkü asıl risk `isg:` değil.

**`isg:` motor tarafından kasten okunmuyor** ve sebebi `girdi.py`'ye yazıldı:

```
d: / v: / s:  →  DE JURE sahiplik  →  peteğin TABAN RENGİ   (motorun işi)
isg:          →  DE FACTO denetim  →  tarama katmanı        (uret_devirler.py)
```

Mısır bunu zorunlu kılıyor: İngiltere 1882'den beri fiilen orada ama Osmanlı
hükümranlığı hukuken 1914'e kadar sürüyor. İşgal bir dönem *türü* olsaydı taban
rengi değişir ve 32 yıllık hukukî durum haritadan silinirdi.

**BİLİNEN ALAN KÜTÜĞÜ** (`girdi.py`): her üst alan ve her dönem alanı, ne işe
yaradığı ve **hangi aracın okuduğu** ile birlikte kayıtlı. Tanımsız alan gören
`yukle()` uyarı basıyor. Asıl kazanç yeni alanları belgelemek değil:

> `isg:` yerine `isgal:`, `kur:` yerine `kr:` yazılırsa veri dosyada durur,
> denetim temiz raporlar, harita eski hâlinde kalır ve **kimse fark etmez.**

Bu depoda aynı sınıftan üç hata çıktı (dizi sonundaki virgül, `KeyError: 'd'`,
ek9'un yayına bağlanmaması) — üçünde de araçlar aynı veriyi farklı katılıkta
okuyordu. Mekanizmayı boş yere yazmadığımı doğrulamak için yazım hatası enjekte
edip sınadım:

```
UYARI alan: 'isgal' BILINEN_ALANLAR'da yok — 1 kayıtta (yerlesimler.js:Yenişehir)
UYARI alan: 's.dd'  BILINEN_ALANLAR'da yok — 1 kayıtta (yerlesimler.js:İnegöl)
```

Gerçek veride uyarı **0** — bugünkü 14 alanın (`ad lat lon tur g k m s d v kur
bit go isg`) hepsi kayıtlı.

📌 **Merkez oturuma not — `uret_devirler.py` gövdeye nasıl erişiyor, DEĞİŞMİYOR.**
`donemler.js`'teki `PARCALAR` havuzu + `DONEMLER` delta yapısı ve
`devletler_harita.js`'teki `DEVLET_PARCALAR` aynı kalıyor; `oku_pencere` /
`coz` / `govde` üçlüsünü değiştirmen gerekmiyor. Bu turdaki motor
değişikliklerinin hiçbiri çıktı biçimine dokunmadı — `kur:`/`bit:` epokları
petek *üyeliğini* değiştiriyor, havuz düzenini değil.
⚠️ Tek uyarı: `isg:` örtüsünün geometrisini de jure gövdeden türetirken
**`kur:` epoklarını hesaba kat.** Bir yerleşim kurulmadan önce peteği artık
komşusuna devrediliyor; işgal örtüsünü ham `PETEKLER` üzerinden kurarsan
epok düzeltmesini atlarsın ve tarama, taban renginden farklı yere düşer.

## 7. `data/goller.js` bağlandı — 67.087 km²

Yetim dosya artık motorda. Oturum 15'in poligonu, Oturum 11'in bulgusu; ölçüm
bu oturumda **bağımsız doğrulandı**:

```
Aral poligonu (tarihî)                          73.666 km²
Natural Earth'ün taşıdığı kuruma-sonrası artık   6.579 km²
   South Aral 3.392 · North Aral 2.952 · Barsakelmes 235
NET: bugün KARA sayılan, aslında su olan alan   67.087 km²
```

Ve bu alanı bugün **tek bir petek yutuyor: Küngrat**. Yani Hîve Hanlığı
haritada gölün üstüne taşıyor. Oturum 11'in tahmini ~88.000 km²'ydi; ölçülen
67.087. Aynı mertebe, ama rapora ölçülen sayı yazıldı.

Merkez oturumun sorduğu "tek sabit sınır mı, dönemli mi?" sorusunun cevabı
dosyanın kendisinde: `gecerli: {f:"1281-01-01", t:"1923-10-29"}` — atlasın tüm
ufku. Aral'ın küçülmesi 1960'lardan sonra başladığı için dönem yapısı
gerekmiyor. **Oturum 15'e sormaya gerek kalmadı**, dosya kendi kararını
gerekçesiyle yazmış.

⚠️ Ama körlemesine statik bağlamadım. `oku_goller()`, `gecerli` penceresi
ufku kapsamayan kaydı **almaz ve uyarı basar**: motorun `GOLLER` birleşimi
statiktir; dar pencereli bir gölü statik uygulamak, düzeltmeye çalıştığı
anakronizmin aynısını üretir. Zamana bağlı göl gerekirse önce `petek_epok()`
deseniyle epok desteği kurulmalı.

🔧 Yan onarım: `goller.js`'in `kaynak:` alanı JS'in `"a" + "b"` biçiminde
yazılmış, `_cevir` bunu okuyamayıp patlıyordu. Dize birleştirme desteği
eklendi (JSON dizesi kaçışsız `"` içeremediği için desen dizenin içindeki bir
artıyla eşleşemez — güvenli). **`goller.js`'e dokunmadım**, o Oturum 15'in
dosyası; okuyucuyu düzelttim.

## 7b. r138 üretimi — iki koşu, biri kasten çöpe

**Koşu 1** (21:53:33→22:29:59) motoru doğruladı ama **yayınlanmadı**: 13. dakikasında
Oturum 14 `yerlesimler_afrika.js`'e 108 satır ekledi, yani çıktı bayattı. Koşu 2
(22:33:58→23:16:54) yayına gitti. Altı ölçüt ikisinde de tuttu.

Koşu 1'in çıktısını saklamam işe yaradı: koşu2'yi r91'e değil **koşu1'e** karşı
ölçünce veri farkı izole oldu ve r91 karşılaştırmasındaki açıklanamayan
+363.000 km²'lik Osmanlı farkının **motordan değil veriden** geldiği görüldü.

⚠️ Ders: A/B temeli, karşılaştırmak istediğin değişkenin DIŞINDAKİ her şeyi sabit
tutmalı. r91 sabah 10:11'in verisiydi; aradaki 12 oturumluk düzenleme motorun
etkisini ölçülemez hâle getiriyordu.

## 7c. Bitişiklik — 313 vaka değil, 13 KONUM

Oturum 2'nin ölçütünü (kopuk bileşen: kara boşluğu mu deniz mi) yeni geometriye
uyguladım. Ham sayı yanıltıcıydı: **2511 kopuk bileşen, 313'ü %100 kara**. Ama
bunlar aynı coğrafî boşluğun 453 dönem boyunca tekrar tekrar sayılmasıydı.
Konuma göre tekilleştirince **13 ayrı yer** kalıyor:

| konum | boşluk | bileşen | dönem | aralık |
|---|---|---|---|---|
| 31,68K 7,82D (güney Tunus) | 17,52 km | **716.887 km²** | 16 | 1552→1574 |
| 28,42K 32,28D (Süveyş) | 56,00 km | 375.937 km² | 2 | 1914-11→12 |
| 45,28K 26,86D (Bucak/Dobruca) | 34,46 km | 79.893 km² | 7 | 1456→1461 |
| 16,89K 37,30D (Kızıldeniz batısı) | 15,94 km | 15.333 km² | 1 | 1884→1885 |
| 39,62K 47,87D | 53,99 km | 9.978 km² | 1 | 1725 |
| 35,03K 45,43D (Şehrizor) | 8,24 km | 5.548 km² | 23 | 1534→1554 |
| 40,74K 36,96D | 39,29 km | 5.501 km² | 2 | 1398 |
| 39,90K 27,53D | 26,07 km | 2.143 km² | 1 | 1402→1413 |
| 38,08K 30,76D | 32,07 km | 1.928 km² | 6 | 1381→1391 |
| **39,76K 29,95D (kuruluş)** | **1,28 km** | 1.903 km² | 3 | 1281→1299 |
| 30,38K 47,87D | 99,18 km | 1.900 km² | 2 | 1776→1779 |
| 36,20K 5,87D | 39,33 km | 1.564 km² | 1 | 1838→1839 |
| 30,46K 48,45D (Basra) | 91,42 km | 668 km² | **254** | 1546→1914 |

Kuruluş vakası Oturum 2'nin bağımsız olarak bulduğu şeyin aynısı (o 1,66 km dedi,
ben 1,28 — iki farklı boru hattı, aynı kusur). En büyüğü güney Tunus: **716.887 km²**
Mağrip gövdesi 17,52 km'lik bir kara boşluğuyla kopuk — Büyük Doğu Ergi'nde nokta
eksiği. Basra vakası 254 dönemle en ısrarlısı ama 668 km² ve 91 km, eşiğin sınırında.

📌 Metodoloji notu Oturum 2'ye: **dönem-vakası sayma, konum say.** 313 ile 13
arasındaki fark, denetimin "yüzlerce hata var" mı yoksa "on üç yer düzeltilecek"
mi dediğidir.

## 7d. Boğdan — borç kapandı, gövde sınırı ölçüldü

İlk turda hücre sınırı ölçmüştüm; kullanıcının gördüğü gövde sınırıydı. Tâbi
gövdenin **dış** sınırı:

```
1500  104.957 km²  iç sınır 1.578 km  147 kenar  köşe/1000km 93,1  nehre yaslanan %18
1600  127.686 km²  iç sınır 1.789 km  152 kenar  köşe/1000km 84,9  nehre yaslanan %16
1700  104.957 km²  iç sınır 1.578 km  147 kenar  köşe/1000km 93,1  nehre yaslanan %18
```

Ölçek: sağlıklı 115-118 · **Boğdan gövde 84,9-93,1** · Kırım iç sınır 32,5 · Libya 18,1.

**Boğdan cetvelle çizilmiş değil** — sağlıklının biraz altında, Kırım'ın üç katı.
Ama nehre yaslanma %16-18'de kalıyor ve teşhis ilk turdakiyle aynı: yaslama yarıçapı
33 km, Prut-Dniester arası yer yer 150 km; ortadaki sınır hiçbir nehre yaklaşamıyor.
Çözüm nehir kenarına nokta (Soroka, Orhei, Reni).

## 8. Sıradaki iş — üretim penceresi

Motorda **beş** değişiklik birikti ve **hiçbiri uçtan uca koşturulmadı**:

1. `kur:`/`bit:` varlık epokları (`b781c2c`) — 1,7 milyon km² hayalet toprak
2. Yedinci denetimin oran tabanı — 18 → 1 yanlış alarm
3. 5 yeni renk — 12 uyarı susuyor, 4 Darfur + 4 Habeş yerleşimi boyanıyor
4. Bilinen alan kütüğü + `isg:` kaydı — yazım hatası artık sessiz kalmıyor
5. Tarihî Aral — 67.087 km² Küngrat'tan alınıp göle dönüyor

Koşuda görülecek doğrulama satırları: `90 büyük göl` (89 değil) ·
`goller.js: 1 tarihî göl düzeltmesi` · `UYARI boya:` satırı **hiç olmamalı** ·
yedinci denetimde `en düşük: Ankober %7` ve altında vaka **olmamalı** ·
`{n} nokta kur:, {n} nokta bit: taşıyor`.

Üretim koşusu yeni dönemde yapılacak. Sırası: kilidi ilân et → bütün oturumlar
`data/` yazmayı bıraksın → `uret_petek.py` → `uret_devirler.py` →
`surum_damgala.py` → `denetle_yayin.py` → 1300/1500 kesitlerini r91 ile A/B →
commit + push → **"motor serbest"**.

⚠️ Kilit artık iki taraflı değil: `yerlesimler.js`'in on iki potansiyel yazarı
var. "Girdi kilitli" demek yetmiyor; koşu başlamadan önce her oturumun
"girdi sabit" demesi gerekiyor. Yedi üretim bu yüzden çöpe gitti.

---

## Dokunmadıklarım

- `data/yerlesimler.js` — merkez oturumun kuralı; madde 40 ve 29'un veri
  kısımlarını yukarıda havale ettim, kendim yazmadım.
- `arac/denetle.py` — Oturum 2'nin dosyası. Yedinci denetim motorun içinde
  olduğu için oraya dokunmam gerekmedi.
- `girdi.py`'deki `GIRDI_DOSYALARI` listesi — `yerlesimler_avrupa.js` ve
  `_asya.js` hâlâ kapalı. 17 pencere içi kimliğin rengi olmadan açılırsa
  Batı Avrupa renksiz delik olur; sıra: önce renk, sonra merge, sonra pencere.

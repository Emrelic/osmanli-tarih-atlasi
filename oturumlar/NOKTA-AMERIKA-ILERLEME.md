<!-- DURUM: DEVAM EDİYOR ¦ 2026-08-16 ¦ ikinci oturum devraldı, 1/? yeni kayıt -->
<!-- KİMLİK (13-14 Ağustos oturumu): local_0a5035a0-e065-4beb-b0a9-f7be18790ddb -->
<!-- KİMLİK (16 Ağustos devam oturumu): scratchpad UUID 0ee15e49-…, dosya yerlesimler_0ee15e.js -->

## 🟢 16 Ağustos — İKİNCİ OTURUM DEVRALDI (görev tahta M-0336/M-0345)

Bu görevi (`oturumlar/NOKTA-AMERIKA.md`) farklı bir oturum M-0336 ile aldı — 13-14
Ağustos'taki ilk oturumun kimliğiyle (`local_0a5035a0…`) İLİŞKİSİ YOK, yalnız aynı
görev adını devraldı. Bu dosyaya (aynı ilerleme günlüğü) devam ediliyor, üstüne
yazılmıyor — aşağıdaki her şey birinci oturuma ait, DOKUNULMADI.

**Zemin ölçümü:** `data/yerlesimler_amerika.js` hâlâ 134 kayıtla `girdi.py`'ye BAĞLI.
`girdi.oku_devletler()` + `import renkler` ile (kendi ayrıştırıcım değil) tarandı:
**32 künyesiz + 41 rengsiz kimlik** hâlâ AÇIK (M-0368/M-0371'de koordinatöre
bildirildi — ve koordinatörün kendi ölçümü M-0313'te bunu KAÇIRMIŞTI, "bağlı
veriyi hiç ölçmedim" diye kabul etti). 🟢 **İYİ HABER:** bu bölümdeki §③ zaten
32 künyenin TAMAMINI akademik kaynaklarla taslak hâlinde hazırlamış — isim isim
karşılaştırdım, BİREBİR örtüşüyor. Araştırma bitmiş, yalnız `devletler.js`'e
İŞLENMEMİŞ. Kimin işleyeceği koordinatörün kararı.

**Yeni bulunan boşluk — Buenos Aires:** mevcut 134 kayıtta Río de la Plata
beşlisi (Córdoba/Santa Fe/Corrientes/Mendoza/Asunción) var ama **Buenos
Aires'in kendisi yok** — muhtemelen 13 Ağustos'taki dört-ekip birleştirmesinde
düşmüş (dosya başlığı "3 mükerrer ÇÖZÜLDÜ" diyor). `grep -in "buenos\|plata"`
ile doğrulandı: yalnız yorumlarda geçiyor, gerçek kayıt yok.

Kendi dosyama (`data/yerlesimler_0ee15e.js`, ayrı — `yerlesimler_amerika.js`'e
dokunmadım) eklendi:
```
Buenos Aires  -34.6037,-58.3816  kur:1580-01-01
  kaynak: TDV "arjantin" md. II. TARİH (Rıza Kurtuluş) — 1536 Pedro de Mendoza
  kuruluşu yerli direnciyle terk edildi, 1580'de yeniden inşa.
  s: ispanya (1580→1810-05-25) → arjantin-cumhuriyeti (1810-05-25→1923-10-29)
  — mevcut 5 Río de la Plata kaydıyla AYNI kırılma tarihi ve künye kalıbı.
```
Kabul kapısı: node ile okundu (1/1 kayıt) · 3 km kuralı elle doğrulandı (en
yakın: Colonia del Sacramento, 51,6 km) · bayt_denetle.py temiz · kaynak: 1/1
· kur: dolu, sebep TDV alıntısıyla yazılı · git commit'li.

Devam: Amerika'nın geri kalanında (Kuzey/Orta/Güney) başka gerçek boşluk var mı
diye tarıyorum — 134 kayıt zaten oldukça kapsamlı, yeni ekleme sadece
DOĞRULANMIŞ boşluklar için yapılacak, mükerrer üretilmeyecek.

## 🟢 14 Ağustos İKİNCİ GÜNCELLEME — M-0047 hükmü uygulandı

Koordinatör (M-0047) benim ilk düzeltmemi (`kasitli_bosluk`+`bos:"insansiz"`) DÜZELTTİ:
"burası kasten boş" ile "şehir artık yok" AYNI ŞEY DEĞİL, aynı çare doğru veriyi bozar (§11).
`bit:` alanını yazma yetkisi bana verildi (yalnız bu 6 nokta). Uyguladım:

```
Cahokia, Mayapán, Utatlán, Iximché, Zaculeu, Caparra
  → kasitli_bosluk/bos:/neden: KALDIRILDI, yalnız bit:"<tarih>" bırakıldı
  → node.js ile doğrulandı: 6/6 nokta artık yalnız bit: taşıyor, kasitli_bosluk yok
```

Ayrıca M-0047'de OPUS HAZIR KITA 2 ile çakışma tespit edilmişti (aynı 13 nokta ikimizde de);
hüküm "IS BITTI, OPUS HAZIR KITA 2 yapti, NOKTA AMERIKA DURSUN" — ama bu SINIF A'nın
(6 nokta, bit: alanı) yazma yetkisi ayrıca bana verildi, o kısmı yaptım, gerisine dokunmadım.

# NOKTA AMERİKA — İlerleme ve teslim raporu

## 🟢 14 Ağustos GÜNCELLEME — "Değişmez 1c" açığı (M-0020[F]) kapatıldı

OPUS HAZIR KITA 2, Değişmez 1c'nin göremediği 13 nokta bildirmişti (koordinatör tahtası
M-0020, madde F): Cahokia · Mayapán · Iximché · Utatlán · Zaculeu · Caparra + İrokua beşliği
(Onondaga/Mohawk/Seneca/Cayuga/Oneida) + Taos/Acoma. Ölçtüm:

```
GERÇEK: 6 nokta hâlâ "kasitli_bosluk"sız terminating idi (Mayapán zaten koordinatör
        tarafından düzeltilmişti) — Cahokia, Utatlán, Iximché, Zaculeu, Caparra.
YANLIŞ ALARM: İrokua beşliği ve Taos/Acoma bu listede DEĞİL — onların s: zinciri
        zaten 1923'e kadar sürüyor (13 Ağustos'ta Pueblo İsyanı boşluğu kapatılmıştı).
        M-0020 muhtemelen benim düzeltmemden ÖNCEKİ bir taramaya dayanıyordu.
```

Kalan 5 noktaya (Cahokia hariç, o zaten vardı) `kasitli_bosluk:true, bos:"insansiz",
neden:"..."` + `bit:` eklendi — Cahokia'da koordinatörün kurduğu desenle TUTARLI.
Node.js ile doğrulandı: **0 "terminating" nokta kaldı** (`kasitli_bosluk` olmadan
1923'e ulaşmayan hiçbir nokta yok).

⚠️ **AÇIK KALAN GERÇEK BORÇ (bu düzeltme onu KAPATMIYOR):** `bit:` ve `kasitli_bosluk`
yalnız DENETİMİ susturuyor — motor (petek üretimi) bu alanları okumuyor, yani bu 6
noktanın peteği 1521/1524/1525/1350 sonrası hâlâ **en yakın komşuya emilecek**
(CLAUDE.md §2). Coğrafi olarak çoğu muhtemelen zararsız (yakın komşu aynı bölgede
aynı devlet) ama ÖLÇÜLMEDİ — entegrasyon koşusundan sonra kontrol edilmeli.

## Kendi kimliğim (13 Ağustos M-0015 yöntemiyle doğrulandı)
```
local_0a5035a0-e065-4beb-b0a9-f7be18790ddb
scratchpad yolu + .claude/projects/<uuid>.jsonl ile çapraz doğrulandı.
```

---

# NOKTA AMERİKA — İlk teslim raporu (13 Ağustos)

13 Ağustos 2026. Görev: `oturumlar/NOKTA-AMERIKA.md`. Durum: **134 nokta yazıldı, teslim.**

## 🟢 GÜNCELLEME — Değişmez 1b'nin bulduğu 5 iç boşluk kapatıldı

Koordinatör ilk motor koşusunda `Değişmez 1b: 5 iç boşluk — BEŞİ DE Amerika` buldu ve
"sahibine sevk edildi" dedi. Hepsi kapatıldı:

```
Taos Pueblo · Acoma Pueblo · Santa Fe(NM)   1680-08-10 → 1692-08-01
  → YENİ KİMLİK "pueblo-bagimsizligi" ile dolduruldu (kaynak KONUŞUYOR, iyi belgeli)
San Antonio                                  1836-03-02 → 1845-12-29
  → zaten önerilmiş "teksas-cumhuriyeti" ile dolduruldu (daha önce yalnız header'da
    yazılıydı, diziye HİÇ İŞLENMEMİŞTİ — kendi hatam)
New Orleans                                  1800-10-01 → 1803-04-30
  → "ispanya" dönemi birleştirilerek kapatıldı (yorumda "kapatıldı" YAZMIŞTIM ama
    diziye YAZMAMIŞTIM — kendi hatam, denetim yakaladı)
```

Node.js ile yeniden doğrulandı: **0 boşluklu/çakışmalı zincir** (önceden 5 idi — Sitka'nın
kesintisi hiçbir zaman bir "boşluk" değildi, tek sürekli "rusya" dönemi içinde bir tarihsel
nüans olarak kaldı, denetim onu hiç yakalamıyordu zaten).

⇒ **Toplam önerilen kimlik 31 → 32'ye çıktı** (`pueblo-bagimsizligi` eklendi, aşağıda).

## ① Sayı

```
data/yerlesimler_amerika.js — 134 nokta
  Mezoamerika          36  (23 mevcut kimlikle + 13 önerilen kimlikle)
  And/Güney Amerika    37
  Kuzey Amerika        36
  Karayipler + RdlP    25  (26 araştırıldı, 1 mükerrer — Santa Fe adı çakışması AYRI madde,
                            gerçek mükerrer nokta sayısı sıfır; asıl 3 mükerrer ŞEHİR —
                            Asunción/Montevideo/Córdoba — And ekibinin kopyaları ATILDI)
```
Hedef 120-180 idi, sonuç aralık içinde.

## ② Kaynak dağılımı

Kaynaksız (`bulunamadı`) **sıfır** nokta. Tamamı akademik standart kaynakla (Cambridge
History serileri, üniversite yayınları, alanın standart el kitapları) kaynaklandı; TDV'nin
`amerika` maddesi önce kontrol edildi, İnka/Aztek/Meksika/Brezilya'nın ana hatlarını
doğruladı ama şehir/nokta taneciğinde sustu (§4 taneciklik boşluğu) — akademik kaynağa
geçildi. Ayrıntılı kaynak listesi dosyanın kendi başlığında ve her nokta grubunun altında.

## ③ Künye önerisi — 🔴🔴 KRİTİK, DOSYA BAĞLANMADAN ÖNCE GEREKİR

**31 yeni devlet kimliği önerildi.** Bunlar olmadan ilgili noktalar motor tarafından
BOYANMAZ (BOYALAR sözlüğünde karşılığı yok) — sessizce, hata vermeden. Aşağıdaki taslaklar
`data/devletler.js` formatında, doğrudan kopyalanabilir hazırlıkta.

### Kuzey Amerika yerli konfederasyonları (8)

```js
{ id:"haudenosaunee", ad:"Haudenosaunee (İrokua) Konfederasyonu", tur:"konfederasyon", bolge:"kuzey-amerika",
  f:"1450-01-01", t:"1783-09-03", baskent:"Onondaga",
  ozet:"Mohawk, Oneida, Onondaga, Cayuga ve Seneca milletlerinin 'Büyük Barış Kanunu' etrafında birleştiği İrokua siyasi birliği; Amerikan Devrimi'nde bölündü.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Daniel K. Richter, 'The Ordeal of the Longhouse' (1992)" },

{ id:"powhatan", ad:"Powhatan Konfederasyonu (Tsenacomoco)", tur:"konfederasyon", bolge:"kuzey-amerika",
  f:"1281-01-01", t:"1646-10-01", baskent:"Werowocomoco → Orapax → Matchut",
  ozet:"Wahunsenacawh'ın önderliğinde Virginia kıyısında ~30 kabileyi bir araya getiren konfederasyon; III. Anglo-Powhatan Savaşı sonrası Necotowance Antlaşması'yla İngiliz tacına haraçgüzar statüye düştü.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Helen C. Rountree, 'Pocahontas's People' (1990)" },

{ id:"cahokia", ad:"Cahokia (Mississippi Kültürü)", tur:"sehir-devleti", bolge:"kuzey-amerika",
  f:"1281-01-01", t:"1350-01-01", baskent:"Cahokia",
  ozet:"Mississippi Nehri kıyısında höyük-tapınak mimarisiyle örgütlenmiş, Kuzey Amerika'nın önceleşkolomb dönemindeki en büyük şehri; XI. yy zirvesinden sonra kademeli çöküşle terk edildi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Timothy R. Pauketat, 'Cahokia' (2009)" },

{ id:"natchez", ad:"Natchez Şefliği", tur:"seflik", bolge:"kuzey-amerika",
  f:"1281-01-01", t:"1731-01-01", baskent:"Grand Village (Natchez)",
  ozet:"'Büyük Güneş' unvanlı kutsal-krallıkla yönetilen Mississippi Vadisi şefliği; 1729 isyanı sonrası Fransız misillemesiyle dağıtıldı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Charles Hudson, 'The Southeastern Indians' (1976)" },

{ id:"creek-konfederasyonu", ad:"Creek (Mvskoke) Konfederasyonu", tur:"konfederasyon", bolge:"kuzey-amerika",
  f:"1281-01-01", t:"1832-03-24", baskent:"Coweta / Tuckabatchee",
  ozet:"Chattahoochee/Tallapoosa havzasında 'Aşağı' ve 'Yukarı' kasabalar hâlinde örgütlenen gevşek Mvskoke konfederasyonu; Cusseta Antlaşması'yla ABD'ye toprak devri.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Charles Hudson, 'The Southeastern Indians' (1976)" },

{ id:"cherokee", ad:"Cherokee Ulusu", tur:"konfederasyon", bolge:"kuzey-amerika",
  f:"1281-01-01", t:"1791-07-02", baskent:"Chota (Overhill dönemi)",
  ozet:"Appalachian sıradağlarının güneyinde kasaba gruplarıyla örgütlenen Cherokee siyasi yapısı; Holston Antlaşması'yla ABD'ye toprak devri.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Tennessee Encyclopedia, 'Chota' maddesi" },

{ id:"choctaw", ad:"Choctaw Konfederasyonu", tur:"konfederasyon", bolge:"kuzey-amerika",
  f:"1281-01-01", t:"1830-09-27", baskent:"Nanih Waiya (kutsal/köken merkezi)",
  ozet:"Mississippi'de üç bölgeye ayrılan gevşek konfederasyon; Dancing Rabbit Creek Antlaşması ilk büyük sürgün antlaşması.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Patricia Galloway, 'Choctaw Genesis, 1500-1700' (1995)" },

{ id:"teksas-cumhuriyeti", ad:"Teksas Cumhuriyeti", tur:"cumhuriyet", bolge:"kuzey-amerika",
  f:"1836-03-02", t:"1845-12-29", baskent:"Columbia → Houston → Austin",
  ozet:"Meksika'dan ayrılan Anglo-Amerikan göçmen kolonisinin bağımsızlık ilanıyla kurduğu kısa ömürlü cumhuriyet; ABD'ye ilhakla sona erdi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart akademik kaynak (T.R. Fehrenbach, 'Lone Star', 1968)" },

{ id:"pueblo-bagimsizligi", ad:"Pueblo Bağımsızlığı (1680 İsyanı sonrası)", tur:"konfederasyon", bolge:"kuzey-amerika",
  f:"1680-08-10", t:"1692-08-01", baskent:"merkezi yok — Rio Grande vadisi Pueblo köyleri",
  ozet:"10 Ağustos 1680 Pueblo İsyanı (Popé önderliğinde) İspanyolları Santa Fe'den ve tüm Yeni Meksika'dan kovdu — İspanyol kolonyal döneminde yerlilerin İspanyol gücünü kalıcı olarak yendiği tek büyük ayaklanma. 12 yıl boyunca Rio Grande vadisi Pueblo köyleri fiilen bağımsız kaldı; Diego de Vargas'ın 'kansız yeniden fethi' Ağustos 1692'de sona erdi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: David J. Weber, 'The Spanish Frontier in North America' (1992)" },
```

### Mezoamerika (5)

```js
{ id:"nahua-sehir-devletleri", ad:"Bağımsız Nahua Şehir Devletleri", tur:"konfederasyon-grubu", bolge:"orta-amerika",
  f:"1281-01-01", t:"1521-08-13", baskent:"(dağınık — Tlaxcala, Cholula, Huexotzinco vb.)",
  ozet:"Aztek Üçlü İttifak'ın dışında/geç bağlanan orta Meksika Nahua şehir devletleri için şemsiye kimlik (maya-sehir-devletleri ile aynı tasarım mantığı).",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Ross Hassig, 'Aztec Warfare' (1988); Michael E. Smith, 'The Aztecs' (2012)" },

{ id:"purepecha-imparatorlugu", ad:"Purépecha (Tarasca) İmparatorluğu", tur:"imparatorluk", bolge:"orta-amerika",
  f:"1300-01-01", t:"1530-02-14", baskent:"Tzintzuntzan",
  ozet:"Aztek'in tek yenemediği komşusu; son hükümdar Tangaxuan II 1522'de savaşmadan boyun eğdi, 1530'da yakılarak idam edildi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Helen Perlstein Pollard, 'Taríacuri's Legacy' (1993)" },

{ id:"zapotek-krallik", ad:"Zaachila Zapotek Krallığı", tur:"krallik", bolge:"orta-amerika",
  f:"1281-01-01", t:"1523-01-01", baskent:"Zaachila",
  ozet:"Monte Albán'ın terkinden sonra Zapotek siyasi ağırlık merkezi Zaachila'ya kaydı; geç dönemde Mixtek etkisi altına girdi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Joyce Marcus & Kent V. Flannery, 'Zapotec Civilization' (1996)" },

{ id:"tututepec-krallik", ad:"Tututepec Mixtek Krallığı (Yucu Dzaa)", tur:"krallik", bolge:"orta-amerika",
  f:"1083-01-01", t:"1522-01-01", baskent:"Tututepec",
  ozet:"Oaxaca'nın Pasifik kıyısına hâkim en büyük/uzun ömürlü Mixtek krallığı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Codex Zouche-Nuttall; John M. D. Pohl akademik çalışmaları" },

{ id:"guatemala", ad:"Guatemala (bağımsız/Orta Amerika Federasyonu)", tur:"cumhuriyet", bolge:"orta-amerika",
  f:"1821-09-15", t:"1923-10-29", baskent:"Guatemala City",
  ozet:"15 Eylül 1821 bağımsızlığı; 1823-1841 Orta Amerika Federal Cumhuriyeti, sonra bağımsız Guatemala.",
  kaynak:"bulunamadı — genel bilinen bağımsızlık tarihi" },
```

### And/Güney Amerika — Kolomb-öncesi (6)

```js
{ id:"chimu-krallik", ad:"Chimú Krallığı (Chimor)", tur:"krallik", bolge:"guney-amerika",
  f:"900-01-01", t:"1470-01-01", baskent:"Chan Chan",
  ozet:"Peru kuzey kıyısında Moche ardılı, İnka öncesi And'ların en büyük devleti; Tupac İnka Yupanqui ~1470'te fethetti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Michael E. Moseley, 'The Incas and Their Ancestors' (2001)" },

{ id:"colla-krallik", ad:"Colla Krallığı", tur:"krallik", bolge:"guney-amerika",
  f:"1200-01-01", t:"1450-01-01", baskent:"Hatun Colla",
  ozet:"Titicaca Gölü kuzeyinde Aymara krallığı, Lupaqa'nın rakibi; Pachacuti ~1450'de fethetti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Charles Stanish, 'Ancient Titicaca' (2003)" },

{ id:"lupaqa-krallik", ad:"Lupaqa Krallığı", tur:"krallik", bolge:"guney-amerika",
  f:"1200-01-01", t:"1450-01-01", baskent:"Chucuito",
  ozet:"Titicaca Gölü güneybatısında Aymara krallığı, Colla'nın rakibi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Charles Stanish, 'Ancient Titicaca' (2003)" },

{ id:"muisca-konfederasyonu", ad:"Muisca Konfederasyonu", tur:"konfederasyon", bolge:"guney-amerika",
  f:"800-01-01", t:"1540-01-01", baskent:"Bacatá (zipazgo) / Hunza (zacazgo)",
  ozet:"Bugünkü Kolombiya Bogotá yaylasında zipa/zaque önderliğindeki iki paramount şeflik; Quesada 1537-1540 arası fethetti.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: John Hemming, 'The Search for El Dorado' (1978)" },

{ id:"mapuche-araukanya", ad:"Mapuche / Araukanya", tur:"konfederasyon", bolge:"guney-amerika",
  f:"1281-01-01", t:"1883-01-01", baskent:"merkezi yok — Bio-Bio hattı",
  ozet:"İspanya'nın 1641 Quilín Parlamentosu'nda RESMEN bağımsızlığını tanıdığı, hiç fethedilmemiş direniş konfederasyonu; 1861-1883 Şili pasifikasyonuyla ilhak edildi.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Tom D. Dillehay, 'Monuments, Empires, and Resistance' (2007)" },

{ id:"diaguita-calchaqui-konfederasyonu", ad:"Diaguita / Calchaquí Konfederasyonu", tur:"konfederasyon", bolge:"guney-amerika",
  f:"1281-01-01", t:"1667-01-02", baskent:"merkezi yok — Calchaquí Vadisi",
  ozet:"Kuzeybatı Arjantin'de, Guerras Calchaquíes'te (1560-1667) İspanya'ya en uzun direnen And-güney konfederasyonu.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: Cambridge History of the Native Peoples of the Americas, Vol. III (1999)" },
```

### Bağımsızlık-sonrası cumhuriyetler (12)

```js
{ id:"peru-cumhuriyeti", ad:"Peru Cumhuriyeti", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1824-12-09", t:"1923-10-29", baskent:"Lima",
  ozet:"Ayacucho Muharebesi ile İspanyol kolonyal egemenliğinin Güney Amerika'daki fiilen sonu.",
  kaynak:"bulunamadı — dayanak: Cambridge History of Latin America, Vol. III (Bethell, 1985)" },
{ id:"bolivya-cumhuriyeti", ad:"Bolivya Cumhuriyeti", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1825-08-06", t:"1923-10-29", baskent:"Sucre/La Paz",
  kaynak:"bulunamadı — dayanak: Cambridge History of Latin America, Vol. III" },
{ id:"sili-cumhuriyeti", ad:"Şili Cumhuriyeti", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1818-02-12", t:"1923-10-29", baskent:"Santiago",
  kaynak:"bulunamadı — dayanak: Cambridge History of Latin America, Vol. III" },
{ id:"arjantin-cumhuriyeti", ad:"Arjantin (Birleşik Río de la Plata Eyaletleri)", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1810-05-25", t:"1923-10-29", baskent:"Buenos Aires",
  ozet:"Mayıs Devrimi'yle başlayan, 1816 Tucumán Kongresi'yle resmileşen, 1861 Pavón sonrası tam birliğe ulaşan süreç.",
  kaynak:"bulunamadı — dayanak: John Lynch, 'The Spanish American Revolutions' (1986); David Rock, 'Argentina 1516-1987' (1987)" },
{ id:"paraguay-cumhuriyeti", ad:"Paraguay Cumhuriyeti", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1811-05-14", t:"1923-10-29", baskent:"Asunción",
  kaynak:"bulunamadı — dayanak: John Hoyt Williams, 'The Rise and Fall of the Paraguayan Republic' (1979)" },
{ id:"uruguay-cumhuriyeti", ad:"Uruguay (Doğu Cumhuriyeti)", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1828-08-27", t:"1923-10-29", baskent:"Montevideo",
  ozet:"Arjantin-Brezilya arası İngiliz arabuluculuğuyla kurulan tampon devlet.",
  kaynak:"bulunamadı — dayanak: John Street, 'Artigas and the Emancipation of Uruguay' (1959)" },
{ id:"venezuela-cumhuriyeti", ad:"Venezuela Cumhuriyeti", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1830-01-13", t:"1923-10-29", baskent:"Caracas",
  ozet:"Páez önderliğinde Gran Kolombiya'dan ayrılan ilk devlet.",
  kaynak:"bulunamadı — dayanak: Cambridge History of Latin America, Vol. III" },
{ id:"kolombiya-cumhuriyeti", ad:"Kolombiya Cumhuriyeti (Nueva Granada)", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1831-01-01", t:"1923-10-29", baskent:"Bogotá",
  kaynak:"bulunamadı — dayanak: Cambridge History of Latin America, Vol. III" },
{ id:"ekvador-cumhuriyeti", ad:"Ekvador Cumhuriyeti", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1830-05-13", t:"1923-10-29", baskent:"Quito",
  kaynak:"bulunamadı — dayanak: Cambridge History of Latin America, Vol. III" },
{ id:"brezilya-cumhuriyeti", ad:"Brezilya Cumhuriyeti", tur:"cumhuriyet", bolge:"guney-amerika",
  f:"1889-11-15", t:"1923-10-29", baskent:"Rio de Janeiro",
  kaynak:"bulunamadı — dayanak: Cambridge History of Latin America, Vol. III" },
{ id:"dominik-cumhuriyeti", ad:"Dominik Cumhuriyeti", tur:"cumhuriyet", bolge:"orta-amerika",
  f:"1844-02-27", t:"1923-10-29", baskent:"Santo Domingo",
  ozet:"Haiti'den ayrılan Duarte'nin Trinitarios hareketiyle kurulan; 1861-1865 arası İspanya'ya gönüllü yeniden ilhak, Restorasyon Savaşı ile geri bağımsızlık.",
  kaynak:"bulunamadı — dayanak: Frank Moya Pons, 'The Dominican Republic: A National History' (2010)" },
{ id:"kuba-cumhuriyeti", ad:"Küba Cumhuriyeti", tur:"cumhuriyet", bolge:"karayipler",
  f:"1902-05-20", t:"1923-10-29", baskent:"Havana",
  ozet:"İspanya-Amerika Savaşı sonrası ABD askeri yönetiminin ardından kurulan, Platt Değişikliği ile sınırlı egemenlik.",
  kaynak:"bulunamadı — dayanak: Louis A. Pérez Jr., 'Cuba: Between Reform and Revolution' (Oxford UP)" },
```
⚠️ **"kuba-cumhuriyeti" — id KASTEN "kuba" DEĞİL**: devletler.js'te "kuba" id'si ZATEN VAR
(Orta Afrika'daki Kuba Krallığı, ~satır 3272). Çakışma önlendi.
⚠️ **"fransa-cumhuriyet" YENİ ÖNERİ DEĞİL** — devletler.js'te zaten var (satır 780).

## ④ Bilinen açık sınırlar (veri sahibine/entegrasyona bırakılan kararlar)

1. **Cahokia 1350 sonrası** — site fiilen terk edildi, nokta 1350'de `s:` dizisini bitiriyor.
   KASTEN böyle — Değişmez 1b'nin "iç boşluk" ölçütüne girmiyor çünkü tek pencere var,
   ARASI boşluk yok (bkz. `denetle.py` yorumu: "penceresi hiç olmayan/erken biten noktalar
   kasten boş dolgu sayılır").
2. 🟢 **KAPATILDI** — Pueblo İsyanı boşluğu (Taos/Acoma/Santa Fe-NM, 1680-08-10→1692-08-01)
   artık "pueblo-bagimsizligi" (YENİ önerilen kimlik, §③'e eklendi) ile dolu.
3. **Sitka 1802-1804** (~2 yıllık Tlingit kesintisi) — veri sürekli "rusya" yazıldı, kesinti
   yalnız yorumla işaretlendi. Değişmez 1b bunu YAKALAMAZ (tek sürekli pencere, ara boşluk
   yok) — yalnız tarihsel doğruluk notu, teknik borç değil.
4. 🟢 **KAPATILDI** — San Antonio 1836-1845 artık "teksas-cumhuriyeti" ile dolu (ilk teslimde
   kimlik önerilmişti ama diziye işlenmemişti — Değişmez 1b denetiminde bulundu, düzeltildi).
5. **Rio de la Plata 1814-1817** (Colonia del Sacramento, Montevideo) — Artigas'ın Liga
   Federal'i için kimlik yok, "arjantin-cumhuriyeti" ile AŞIRI BASİTLEŞTİRİLDİ, açıkça işaretli.
   HÂLÂ AÇIK — ayrı bir kimlik gerektirir, bu turda çözülmedi.
6. **Río de la Plata 1776 öncesi** (Buenos Aires/Asunción/Córdoba/Santa Fe/Corrientes/Mendoza) —
   "ispanyol-peru" kimliği kullanıldı (coğrafi değil idari/tarihi bağ — Peru Genel Valiliği'ne bağlıydı).

## ⑤ 3 km kuralı

Dört ekip kendi listeleri İÇİNDE sınadı, hiçbiri çakışma bulmadı. Orkestratör (bu oturum)
çapraz kontролde ADI aynı iki nokta buldu (Santa Fe — New Mexico ve Arjantin, ~7000 km
uzakta, GERÇEK mükerrer DEĞİL) → "Santa Fe (Arjantin)" diye ayrıştırıldı.

## ⑥ Node.js şema doğrulaması (koştu, temiz)

```
nokta sayısı: 134
şema hatası: 0
boşluklu/çakışmalı zincir: 5  ← hepsi §④'te YUKARIDA açıkça belgelenmiş, sürpriz değil
```

## ⑦ Sonraki adım — koordinatöre/Oturum 3'e

1. Yukarıdaki 31 kimliği `data/devletler.js`'e ekle.
2. `arac/renkler.py`'nin `BOYALAR` sözlüğüne renk ata (yoksa bölge boyanmaz).
3. `arac/girdi.py`'nin `GIRDI_DOSYALARI` listesine `yerlesimler_amerika.js`'i ekle.
4. `arac/denetle.py` koştur — özellikle §④'teki 5 kasıtlı boşluğun Değişmez 1'i nasıl
   etkilediğine bak (34 bilinen kasıtlı-boşluk sayısına +5-7 eklenmesi beklenir, KASITLI).
5. `BOLGE` penceresi Amerika'yı henüz KAPSAMIYOR (§③, görev tanımı) — noktalar hazır ama
   pencere açılana kadar çizilmeyecek, bu bir kusur değil sıra meselesi.

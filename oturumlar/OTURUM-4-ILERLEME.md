# Oturum 4 — İran, Irak, Doğu Kafkasya ve Körfez yerleşim katmanı · İLERLEME

**Durum: BİTTİ.** Tek çıktı `data/yerlesimler_iran.js` — **126 yeni yerleşim**.
Görev tanımı: `oturumlar/OTURUM-4-IRAN-YERLESIM.md`.

> **Commit edilmedi. `uret_petek.py` çalıştırılmadı.** Hiçbir mevcut dosyaya
> yazılmadı; `data/yerlesimler.js`, `arac/*`, `js/app.js`, `index.html` ve kök
> `*.md` belgelerine dokunulmadı.

---

## 1. Sayılar

| | Önce | Sonra |
|---|---|---|
| Görev kutusundaki (38,5-62°D · 12-45°K) yerleşim | 91 | **217** |
| Toplam yerleşim (`yerlesimler.js` + yeni dosya) | 589 | **715** |

> `yerlesimler.js` bu oturum sürerken başka bir oturum tarafından büyütüldü
> (586 → 589; Finike, Kaş, Elmalı eklendi). Görev kutusundaki 91 sayısı
> değişmedi — yeni kayıtların üçü de Antalya'da. Toplam satırı 29 Temmuz 2026
> 20:15 itibarıyladır.

Hedef "bu kutuda 150-200 nokta" idi; 217'ye çıkıldı. Fazlalık, kutunun
Arabistan ve Doğu Anadolu kenarlarını da kapsamasından geliyor — İran + Irak +
Doğu Kafkasya + Körfez çekirdeğinde sayı hedef aralığın içindedir.

### Parti parti

| Parti | Nokta | Kullanılan kimlikler |
|---|---|---|
| 1) Batı İran ve Azerbaycan | 18 | ilhanli · iran · timurlu · karakoyunlu · akkoyunlu · safevi |
| 2) Irak | 28 | ilhanli · iran · karakoyunlu · akkoyunlu · safevi · ingiltere |
| 3) Orta İran | 21 | ilhanli · iran · timurlu · karakoyunlu · akkoyunlu · safevi |
| 4) Güney İran | 21 | ilhanli · iran · timurlu · karakoyunlu · akkoyunlu · safevi |
| 5) Kuzeydoğu İran (Horasan) | 11 | ilhanli · iran · timurlu · safevi |
| 6) Hazar kıyısı ve Doğu Kafkasya | 16 | ilhanli · iran · timurlu · karakoyunlu · akkoyunlu · safevi · rusya |
| 7) Körfez ve Doğu Arabistan | 11 | iran · benihalid · suud · sammar · umman · portekiz · ingiltere |

Tanımsız tek bir kimlik yazılmadı; kullanılan 13 kimliğin hepsi
`arac/renkler.py`'de tanımlıdır.

---

## 2. Kapsama ölçümü — önce / sonra

`denetle_kapsama.py` ile aynı yöntem (0,25° ızgara, Natural Earth kara maskesi
eksi 117 göl). Ölçüm betiği: scratchpad `kapsama_iran.py`.

| Bölge | En kötü boşluk | Ortanca uzaklık | 120 km üstü | 300 km üstü |
|---|---|---|---|---|
| **İran içi** (44-62°D, 25-40°K) | 551 → **341 km** | 141 → **71 km** | %59 → **%26** | %11,7 → **%0,5** |
| **Irak / Mezopotamya** (41-49°D, 29-38°K) | 334 → **314 km** | 110 → **55 km** | %44 → **%19** | %1,7 → **%0,1** |
| **Doğu Kafkasya** (44-51°D, 38-43°K) | 159 → **159 km** | 71 → **46 km** | %10 → **%3** | %0 → %0 |
| **Körfez / Doğu Arabistan** (45-60°D, 20-30°K) | 364 → **355 km** | 165 → **124 km** | %71 → **%52** | %4,1 → **%2,5** |
| Görev kutusu bütünü | 659 → 659 km | 157 → **112 km** | %63,6 → **%47,4** |  |

İran içi hedef 120 km'ye yaklaştı (ortanca 71 km); 300 km eşiğini aşan alan
%11,7'den %0,5'e indi.

### Kapanmayan boşluklar ve sebepleri

| Yer | Boşluk | Neden kapatılmadı |
|---|---|---|
| Türkmen sahrası, Hazar'ın doğusu (~39,9°K / 53,9°D) | 341 km | **Orta Asya fazı.** Kutu doğuya açılmadan burada nokta yoğunlaştırmak boşuna. |
| Kazak bozkırı (~44,9°K / 56-62°D) | 659 km | Aynı — bu oturumun coğrafyası değil. |
| Rub'ul Hâlî batısı (~18,7°K / 46,4°D) | 411 km | Kuzey/Batı Arabistan bu oturumun kapsamında değil. Bir dolgu noktası kapatır. |
| Bâdiyetü'ş-Şâm, batı Irak çölü (~31,4°K / 39,9°D) | 359 km | Aynı. **el-Cevf (Dûmetülcendel)** ve **Nukayb** eklenirse kapanır; bunlar Kuzey Arabistan oturumunun işi. |

---

## 3. ⚠️ Entegrasyon oturumuna: eklenmesi istenen devlet kimlikleri

Aşağıdaki hânedanların `arac/renkler.py`'de karşılığı **yok**. Hepsi bu dosyada
`iran` (genel) ile boyandı; gerçek sahip her kaydın yorumunda yazılıdır, yani
kimlik eklendiğinde ayrıştırma **mekaniktir**.

**Öncelik sırasına göre** (kaç yerleşim-yılını etkilediğine göre):

| # | Önerilen id | Devlet | Etkilediği pencere |
|---|---|---|---|
| 1 | `kacar` | Kaçar hânedanı | 1789-1923 — İran'ın tamamı |
| 2 | `afsar` | Afşarlar (Nâdir Şah) | 1736-1796 — İran'ın tamamı |
| 3 | `celayir` | Celâyirliler | 1336-1432 — Irak + Azerbaycan |
| 4 | `muzafferi` | Muzafferîler | 1314-1393 — Fars, Kirman, Yezd, Isfahan |
| 5 | `zend` | Zendler | 1751-1794 — Güney ve Batı İran |
| 6 | `sirvansah` | Şirvanşahlar | 1281-1538 — Şirvan (TDV ŞİRVAN: 1538'de Şah Tahmasb ilhak etti) |
| 7 | `kert` | Kertler | 1245-1389 — Herat ve Doğu Horasan |
| 8 | `serbedari` | Serbedârîler | 1337-1381 — Sebzevâr / Batı Horasan |
| 9 | `karkiya` | Karkiya hânedanı | 1281-1592 — Gîlân (TDV GÎLÂN: Şah Abbas 1592) |
| 10 | `marasi` | Mar'aşîler | 1359-1596 — Mâzenderan |
| 11 | `incu` | İncûlular | 1325-1357 — Fars |
| 12 | `cobanli` | Çobanlılar | 1335-1357 — Azerbaycan |
| 13 | `musasa` | Müşa'şa'lar | 1435-1924 — Havîza / Hûzistan (TDV MÜŞA'ŞA'LAR) |
| 14 | `ozbek` | Şeybânî Özbekler | 1507-1510 ve 1589-1598 — Horasan, Meşhed, Herat |
| 15 | `hotaki` | Hotakî Afganlar | 1722-1729 — Isfahan, Kirman, Fars |
| 16 | `kutlughan` | Kutluğhanlılar (Karahıtay) | 1222-1307 — Kirman |
| 17 | `baban` | Babanlar | 1694-1851 — Süleymaniye (Osmanlı tâbii, `v:` ile de verilebilir) |

**En büyük tek kazanç 1 ve 2'dir**: bugün 1736-1923 arası bütün İran tek bir
`iran` rengiyle boyanıyor; `afsar` + `zend` + `kacar` eklenirse 187 yıllık
pencere üç ayrı gövdeye ayrışır.

---

## 4. ⚠️ Bulgular — düzeltmesi entegrasyon oturumunda

### B-1 · `Şehrizor` noktası Süleymaniye'nin üstünde duruyor
`yerlesimler.js`'teki `Şehrizor` (35.560, 45.430) **Süleymaniye şehir
merkezinin ~600 m ötesinde**. Bu yüzden Süleymaniye eklenemedi: 3 km kuralı
ihlal olurdu.

TDV SÜLEYMANİYE (doğrulandı, slug `suleymaniye--irak`): *"Bağdat Valisi
Süleyman Paşa, 1197'de (1783) Baban ailesinden İbrâhim Bey'i … Baban sancağına
mutasarrıf tayin edince o da Serçınar ovası civarındaki Mâlikkendi köyünün
yerinde yeni bir kasaba kurdu"* — yani **şehir 1784'te kuruldu**, tarihî
Şehrizor ise Şehrizor ovasında, Yâsîn Tepe civarındadır (~35,28°K / 45,50°D).

**Önerilen düzeltme:** `Şehrizor` noktası gerçek Şehrizor ovasına taşınsın,
sonra Süleymaniye şu kayıtla eklensin:

```js
{ ad:"Süleymaniye", tur:"sehir", lat:35.5560, lon:45.4351, g:1, k:3,
  m:"Şehrizor", kur:"1784-01-01",
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1411-01-01", d:"iran"},
     {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"},
     {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"},
     {f:"1508-01-01", t:"1534-12-04", d:"safevi"},
     {f:"1623-11-28", t:"1638-12-25", d:"safevi"},
     {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}],
  d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
```

### B-2 · Görev tanımındaki Herat boylamı yanlış — Herat EKLENMEDİ
Görev tanımı tablosu Herat'ı "59-62°D · sınırda, ekle" diye gösteriyor. Herat'ın
gerçek boylamı **62,199°D**, yani `box(-12, 1.5, 62, 62)` penceresinin
**dışında**. Eklenmedi. Kutu doğuya açıldığında Herat, Merv, Buhara, Semerkant
ile birlikte gelecek.

Sınıra en yakın eklenen noktalar: Serahs (61,161), Zerenc (61,861),
Hâş (61,216), Çâhbahâr (60,643), Turbet-i Câm (60,624). Bunlar kenar peteklerin
doğuya yayılmasını da frenler.

### B-3 · Değişmez 1'in beklenen sahipsiz sayısı 29 → 32 olmalı
Yeni dosyada **3 nokta kasten sahipsizdir**: **Buraydâ (Kasîm)**, **Uneyze**,
**Şakrâ**. Üçü de Necid'dedir ve 1281-1744 arasında bölgede devlet yoktur;
mevcut `Riyad`, `Dir'iye`, `Necid içi` ve `Hâil` kayıtları da tam olarak bu
biçimde boş bırakılmıştır. Dosya birleştirilince `arac/denetle.py` içindeki
`BEKLENEN_SAHIPSIZ` sabiti **29'dan 32'ye** çıkarılmalıdır, yoksa denetim
yanlış alarm verir.

Yeni dosyada bunun dışında **tek bir sahipsiz nokta yoktur**; 123 kaydın hepsi
1281-01-01 … 1923-10-29 aralığını kesintisiz kapatır.

### B-4 · Mevcut İran kayıtları hâlâ tek parça `iran` — yamalı görünüm riski
`yerlesimler.js`'teki Tebriz, Isfahan, Şîraz, Meşhed, Kirman, Yezd, Kazvin,
Tahran, Kum, Reşt, Erdebil, Zencan, Urmiye, Hemedan, Kirmanşah ve
`Zagros içi` / `Tebbes` dolgu noktaları **1281-1923 boyunca tek bir
`d:"iran"` dönemiyle** yazılmış. Yeni dosya ise İlhanlı → Timurlu →
Karakoyunlu → Akkoyunlu → Safevî zincirini kuruyor.

**Sonuç:** birleştirme sonrası 1300'lü yıllarda harita, İran'ı yarı mor
(İlhanlı) yarı açık kahve (`iran`) gösterecek. Bu **görsel bir tutarsızlıktır**,
veri hatası değildir. Düzeltmesi mekaniktir: yukarıdaki 15 kaydın `s:` dizisi
yeni dosyadaki komşusunun zinciriyle değiştirilir. Hangi kaydın hangi zinciri
alacağı:

| Mevcut kayıt | Alacağı zincir | Örnek alınacak yeni kayıt |
|---|---|---|
| Tebriz, Urmiye, Erdebil, Zencan | AZ | Merâga |
| Kazvin, Tahran, Kum, Isfahan, Hemedan, Kirmanşah, Zagros içi | ACEM | Kâşân |
| Şîraz, Yezd | FARS | Kâzerûn |
| Kirman, Tebbes | KIRMAN | Sircân |
| Meşhed | HORASAN | Nîşâbur |
| Reşt | GILAN | Lâhîcan |
| Bağdat, Kerbelâ, Kerkük, Şehrizor | IRAK_BGD | Hille |
| Musul | IRAK_MSL | Telafer |
| Basra | IRAK_BSR | Kürne |
| Şamahı, Bakü, Derbend, Gence, Revan, Nahçıvan | SIRVAN / KARABAG | Kuba, Berde |

Zincirlerin tek kaynağı scratchpad'deki `uret_iran.py` içindeki `ZINCIR`
sözlüğüdür; oradan kopyalanabilir.

### B-5 · Rey ve Eski Hürmüz EKLENEMEDİ — `bit:` okunmadığı için
Görev tanımı Rey'i örnek veriyor. Rey Moğollar tarafından 1220'de yıkıldı ve
bir daha şehir olarak toparlanamadı (TDV REY, slug `rey--iran`: yıkıntının
yanında kurulan küçük yerleşim sonradan Tahran'ın mahallesi oldu). Aynı şekilde
**Eski Hürmüz** ~1300'de terk edilip şehir Cerûn adasına taşındı.

İkisi de zaman penceresinin (**1281-1923**) neredeyse tamamında ölüdür. Motor
`bit:` alanını okumadığı için bunları eklemek, Değişmez 1'de **iki yeni
beklenmeyen sahipsiz nokta** demek olurdu. Bu yüzden:
* Rey **eklenmedi** (zaten Tahran'a 12 km).
* Eski Hürmüz yerine bugün de yaşayan **Mînâb** eklendi.

Zaman dilimli Voronoi yapıldığında ikisi de eklenmelidir; koordinatlar
Rey 35,593 / 51,435 ve Eski Hürmüz 27,146 / 57,080.

### B-6 · Kıyı noktaları kara maskesine göre 1-2 km içeri çekildi
Natural Earth 10 m kara maskesi Basra körfezi ve Umman kıyısında kabadır;
**Bender Abbas, Bender Rîg, Katîf, Cübeyl ve Sûr** gerçek merkez
koordinatlarıyla denizde kalıyordu (0,4-1,3 km). Beşi de maskenin içine
alındı. Sapma en fazla ~2 km'dir ve petek geometrisini etkilemez, ama
**koordinatların şehir merkezleri olmadığı bilinmelidir**.

### B-7 · `index.html` ve `js/app.js` kaydı gerekiyor
Bu dosya `window.YERLESIMLER_IRAN` adında ayrı bir dizidir. Ya
`yerlesimler.js`'e birleştirilmeli, ya da `index.html`'e `<script>` satırı ve
`js/app.js`'e birleştirme noktası eklenmelidir (VERI-YAPISI.md giriş notu).
**Bugünkü hâliyle dosya yüklenmez ve hiçbir etkisi yoktur.**

### B-8 · Dosya adı: `yerlesimler_iran.js` mi, `yerlesimler_ek.js` mi?
İki belge çelişiyor:
* `CLAUDE.md` §7 tablosu: *"4 Yerleşim araştırma → yeni `data/yerlesimler_ek.js`"*
* `oturumlar/OTURUM-4-IRAN-YERLESIM.md`: *"Yazabileceğin tek dosya:
  **`data/yerlesimler_iran.js`**"*

Bu oturuma özel görev tanımı daha dar kapsamlı olduğu için **onun adı
kullanıldı** (`data/yerlesimler_iran.js`, dizi adı `window.YERLESIMLER_IRAN`).
Oturum 8 bunu §7'ye aykırı buldu ve sordu. Karar entegrasyon oturumunun:
ad değişecekse `git mv` + dosya içindeki tek `window.YERLESIMLER_IRAN` satırı
yeter. `CLAUDE.md` §7 ile görev tanımının hangisinin güncelleneceğine de
karar verilmeli — belgeler arası bu çelişki yeniden çıkar.

### B-9 · `yerlesimler.js` bozuk DEĞİL (Oturum 8 uyarısına cevap)
Oturum 8, dosyanın Erciş kaydından sonra erken `]` ile kapandığını ve
~30 dakikadır bozuk durduğunu bildirdi. **Ölçüldü, dosya sağlam:**
* `node -e "eval(...)"` temiz parse ediyor, **589 kayıt**.
* Tek `];` dosyanın gerçek sonunda, **1028. satırda**. Erciş 1016. satırda ve
  ardından Finike, Kaş, Elmalı kayıtları geliyor.
* `git status data/yerlesimler.js` boş — bu oturum dosyaya **hiç dokunmadı**.

Görülen şey Oturum 0'ın **yazma anına denk gelmiş geçici bir durum**: dosya bu
oturum sürerken 586'dan 589 kayda çıktı (bir dakika arayla iki ölçümde
yakalandı). Ayrıca not: dizi literalinde son elemandan sonra virgül bırakmak
JavaScript'te **geçerlidir**, tek başına parse hatası vermez.

---

## 5. Tarih sahnesine çıkan ve silinen yerleşimler

Kullanıcının özellikle istediği alanlar. **Motor ikisini de bugün okumuyor**
(`MIMARI.md` §3.1); veri sonrası için hazırlandı.

### `kur:` — 10 kayıt

| Yerleşim | Tarih | Dayanak |
|---|---|---|
| Sultâniye | 1305 | Olcaytu'nun Kongur Öleng yaylasında kurdurduğu İlhanlı başşehri. **TDV'de müstakil madde YOK** (`sultaniye` ölü slug, arama da boş) — İlhanlı literatürü. |
| Ferahâbâd | 1611 | I. Şah Abbas'ın Tecen ağzında kurdurduğu yazlık başşehir ve liman |
| Bender Abbas (Gamrûn) | 1622 | TDV BENDERABBAS: Gamrûn iskelesi 1622'de I. Şah Abbas'ın eline geçti, şehir bu tarihten sonra doğdu |
| Senendec (Sine) | 1636 | Erdelân hâkimi Süleyman Han'ın kurdurduğu yeni merkez |
| Buşehr | 1734 | Nâdir Şah'ın donanma üssü |
| Şuşa | 1752 | Penâh Ali Han'ın kurdurduğu Karabağ hanlığı merkezi |
| Erâk (Sultânâbâd) | 1808 | Yûsuf Han Gürcî'nin kale-kasabası |
| Muhammere | 1812 | Benî Kâ'b şeyhleri; bugün Hürremşehr |
| Ramâdi | 1869 | Midhat Paşa'nın Dülaym aşiretini iskân için kurdurduğu kasaba |
| Nâsıriye | 1869 | Muntefik mutasarrıfı Nâsır Paşa es-Sa'dûn |

### `bit:` — 2 kayıt

| Yerleşim | Tarih | Dayanak |
|---|---|---|
| Zerenc (Sîstan) | 1383 | TDV SÎSTAN: Timur 785 (1383) seferinde üç gün yağmalattı, sulama düzeni yıkılınca şehir toparlanamadı |
| Tûs | 1389 | Mîrân Şah'ın tahribinden sonra nüfus 22 km ötedeki Meşhed'e taşındı |

⚠️ İki kayıtta da `s:` zinciri 1923'e kadar **tam bırakıldı**; kısaltılsaydı
Değişmez 1 ihlal edilirdi. `bit:` okunmaya başlayınca zincirler kısaltılabilir.

### Yazılmayan `bit:`'ler — sebep
* **Nîşâbur** — TDV NÎŞÂBUR: 10 Nisan 1221 Moğol istilâsı ve 23 Kasım 1405
  depremi şehri iki kez harap etti, ama **her ikisinde de yeniden kuruldu**
  (1405 sonrası bugünkü yerinde). Yerleşim hiç kesilmedi.
* **Sâmerrâ** — TDV SÂMERRÂ: 892'den sonra "harap bir köy", ama XVIII. yüzyılda
  ~2000 nüfus, 1867'de kaymakamlık. Kesinti yok.
* **Kûfe** — TDV KÛFE: XI. yüzyıldan sonra çöktü, nüfus Hille ve Necef'e kaydı;
  cami çevresinde yerleşim sürdü.
* **Vâsıt** — TDV VÂSIT: 1440'larda Müşa'şa'lar tahrip etti, halk dönüp
  harabenin batısında ikinci şehri kurdu; Dicle mecrası değişince köye döndü.
  **Kesin terk tarihi verilmiyor** — tarih bulunmadan `bit:` yazılmadı.

---

## 6. Kaynak ve yöntem notları

* **TDV birincil kaynak olarak kullanıldı.** Doğrulanan maddeler:
  `suleymaniye--irak`, `benderabbas`, `esterabad`, `sirvan`, `gilan`, `fars`,
  `kirman`, `sistan`, `suster`, `erbil`, `nisabur--iran`, `rey--iran`, `vasit`,
  `samerra`, `kufe`, `tikrit`, `ahvaz`, `musasalar`, `kuba--azerbaycan`,
  `talis-hanligi`, `hille`, `necef`, `mazenderan`, `tus`, `kum`, `kasan`.
* **Ölü slug tuzağına iki kez düşüldü ve `<title>` kontrolüyle yakalandı:**
  `sultaniye` ve `nisabur` maddeleri **YOKTUR** — ikisi de HTTP 200 döndürüp
  "Arama - TDV İslâm Ansiklopedisi" başlığı veriyor. Nîşâbur'un gerçek slug'ı
  **`nisabur--iran`**, Rey'inki **`rey--iran`**. Sultâniye'nin maddesi hiç yok.
  Sâve, Sebzevâr, Damgan, Semnân, Bistâm için de madde bulunamadı.
* TDV'nin arama sayfası `href` değerlerini **tırnaksız** yazıyor
  (`<a href=/nisabur--iran>`); slug avlarken bunu hesaba katmak gerekiyor.
* `s:` dönem değişimleri Değişmez 2 tarafından denetlenmiyor (denetim yalnız
  `d:` ve `v:` bakıyor). Buna rağmen **bütün Osmanlı `d:` kırılmaları
  `yerlesimler.js`'te zaten maddesi olan tarihlere hizalandı** — yeni tek bir
  kronoloji maddesi gerekmiyor. Hizalama gerekçeleri kayıtların yorumundadır
  (Erbil 1535→1534-12-04, 28 gün; Fâv 1914-11-06→1914-11-22, 16 gün).

## 7. Öz denetim — hepsi temiz

`denetle_iran.py` (scratchpad), 7 kontrol:

| Kontrol | Sonuç |
|---|---|
| 1) Noktalar karada mı (kara maskesi eksi göller) | ✓ 126/126 |
| 2) 3 km içinde mükerrer (mevcut 586 kayıtla birlikte) | ✓ yok; en yakın çift Kûfe↔Necef 8,93 km |
| 3) Değişmez 1 — sahipsizlik | ✓ 3 kasten (bkz. B-3), beklenmeyen 0 |
| 3b) Ters / sıfır uzunluk / çakışan dönem, kapsama boşluğu | ✓ yok; her kayıt 1281-01-01 … 1923-10-29'u tam kapatıyor |
| 4) Değişmez 2 — `d:`/`v:` kırılmalarının maddesi | ✓ AÇIK = 0 |
| 5) `m:` alanı var olan bir yerleşime işaret ediyor mu | ✓ 31 kayıt, hepsi eşleşiyor |
| 6) Devlet kimlikleri `renkler.py`'de tanımlı mı | ✓ 13 kimlik, hepsi tanımlı |
| 7) Ad benzersizliği (dosya içi + mevcutla) | ✓ çakışma yok |

Üretim ve denetim betikleri:
`…\scratchpad\uret_iran.py` · `denetle_iran.py` · `kapsama_iran.py`.
`yerlesimler_iran.js` **elle düzenlenmemeli**, `uret_iran.py` üzerinden
yeniden üretilmelidir — zincirler orada tek yerde tanımlıdır.

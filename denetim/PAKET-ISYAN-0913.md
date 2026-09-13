# PAKET-ISYAN · Eflak · Boğdan · Erdel 1594-1606 isyan taraması — teslim raporu

> PAKET-ISYAN · 13 Eylül 2026 · 1.MURAT sevki · Emre'nin kararı: *"Üç voyvodalık için C2 şıkkını onaylıyorum, üstüne isyan taraması eklensin."*
> Yazılan: `data/isyan_tarama.js` (YENİ, `window.ISYAN_TARAMA`) · `index.html` · `js/app.js` · `js/suzgec.js` · `css/style.css` · `denetim/ARAC-ISY-*-0913.js` · bu rapor.
> **Commit YOK.** `olaylar*` · `kronoloji*` · `ekokuma*` · `savaslar.js` · yerleşim dosyaları · `arac/*` · `devletler.js` · üretilmiş dosyalar: **dokunulmadı** (koşu 10).
> `node --check` her düzenlemeden sonra: `js/app.js` · `js/suzgec.js` · `data/isyan_tarama.js` temiz.
> 🟡 **GÖRSEL DOĞRULAMA YAPILMADI.** `atlas` sunucusu açıldı, sayfa yüklendi, ama Browser pane gizliydi ve harita (`haritaHazir`) hazır olmadı (D118, PAKET-UI2 ile aynı durum). Desen, lejant ve katman **gözle görülmedi.** Yapılan: tarayıcıda gerçek sayfa kodu + gerçek veriyle seçici, tembel geometri ve madde kutusu sınaması (§5).
> ⚠️ Sürüm damgası basılmadı (koşu zinciri basacak). `suzgec.js` önbellekten eski gelirse tarama çizilmez ve konsola *"js/suzgec.js eski sürüm (önbellek)"* yazılır, sessiz değil.

## 1 · Pencereler (kaynaklı)

Kural: tâbi zemin rengi **korunur**, üstüne ayrı tarama biner. `f` dahil, `t` hariç (atlas dönem kuralı). Ay kesinliği ayın 1'ine kodlanır ve `kesinlik_f/t` alanında beyan edilir.

| id | kimlik | tür | f | t | kesinlik f/t | dayanak |
|---|---|---|---|---|---|---|
| `isy-eflak-1594` | eflak | isyan | 1594-11-01 | 1600-11-15 | ay / gün | TDV `eflak` (Mihai 1593-1601 isyan, 1601 ölüm, sonra tâbi) · HoT 118: Kasım 1594 Osmanlı'ya karşı döndü · 15 Kasım 1600 Argeş yenilgisi |
| `isy-bogdan-1594` | bogdan | isyan | 1594-11-01 | 1595-11-01 | ay / ay | TDV `bogdan` (Aron 1594 ittifak, 1594 sonu Yaş katli, Razvan'ı Lehliler öldürdü) · HoT 118: Aron "promptly" katıldı · Razvan Giurgiu dönüşü öldürüldü, Movilă voyvoda · TDV `yergogu`: baskın Ekim 1595 |
| `isy-bogdan-1600` | bogdan | isyan | 1600-05-01 | 1601-01-12 | ay / gün (üst sınır) | TDV `bogdan` (Mihai 1600 Boğdan hâkimi, ertesi yıl ayrıldı) · HoT 118: Mayıs 1600 Boğdan baskını · 12 Ocak 1601 Prag'a vardı |
| `isy-erdel-1594` | erdel | isyan | 1594-08-28 | 1601-08-03 | gün / gün | TDV `erdel` (Zsigmond Türklere karşı döndü, geçici Habsburg/Mihal tâbiliği) · HoT 118: 28 Ağustos 1594 muhalefet tutuklandı · 3 Ağustos 1601 Goroszló |
| `isy-erdel-1601-habsburg` | erdel | habsburg | 1601-08-03 | 1605-09-14 | gün / gün | TDV `erdel` (1601-1602 Habsburg idaresi) · TDV `zitvatorok-antlasmasi` (Bocskay 1604 Kasım) · HoT 119: 14 Eylül 1605 Medgyes diyeti Bocskai'yi Erdel prensi tanıdı |

**Kaynaklar**
- **TDV** (HTTP 200, gövdeleri okundu): `eflak` · `bogdan` · `erdel` · `koca-sinan-pasa` · `mehmed-iii` · `zitvatorok-antlasmasi` · `yergogu`.
- **TDV ölü (302):** `mihal-voyvoda` · `mihail-voyvoda` · `bathori` · `batori` · `bocskay-istvan` · `basta` · `hacova` · `hacova-meydan-muharebesi` · `kalugeran` · `calugareni` · `sigismund-bathory` · `zsigmond-bathory` · `razvan` · `aron-voyvoda` · `movila` · `ieremia-movila` · `yanok-muharebesi` · `uzun-savas`.
- **HoT** = *History of Transylvania*, Vol. I, ed. Béla Köpeczi, Macar Bilimler Akademisi Tarih Enstitüsü. Bölüm IV.3, sayfa 118 ve 119 (`mek.oszk.hu/03400/03407/html/`).
  - Ham HTML indirildi ve cümleler **kendim** okundu. WebFetch özeti yalnız yön için kullanıldı.
  - Bölüm yazarı sayfada **gösterilmiyor**. Tarihler Macar tarih yazımınınkidir (Gregoryen).
- **Okunmadı:** Kármán & Kunčević 2013 · Panaite · Stevens 2024 (önceki araştırmacı okumuştu, ben okumadım).
- Britannica ve Vikipedi yalnız arama sonucu olarak göründü, **dayanak alınmadı.**

**Çelişki mi, ayrıştırma mı? (hüküm verilmedi, bildirilir)**
1. **Eflak t:** TDV sınırı 1601 (ölüm), HoT'de fiilî kayıp 15 Kasım 1600.
   - TDV'nin *"bundan sonra tâbi"* cümlesi ölüm **sonrasını** anlatıyor, arayı hükme bağlamıyor ⇒ çelişki ilan edilmedi.
2. **Boğdan 1600 t:** Boğdan'ın Mihai'den çıkış günü/ayı **bulunamadı**.
   - 1601-01-12 bir **üst sınır**. Tarama gerçeğinden fazla gösterebilir.
3. **Boğdan 1595 t:** Razvan'ın öldürülme ayı **bulunamadı**. Giurgiu (Ekim 1595) en erken sınır.
   - t = Kasım başı olduğu için tarama gerçeğinden **az** gösterebilir, fazla göstermez.
4. **Erdel Habsburg idaresi:**
   - TDV `(1601-1602)` diyor. Bu parantez, Zsigmond'un ikinci hükümdarlık yıllarıyla aynı.
   - HoT'ye göre Habsburg otoritesi Tövis (2 Temmuz 1602) ve Basta'nın 1604 başına dek kalışıyla Bocskai'ye kadar sürüyor.
   - TDV'yi dar okumak 1602-1605'i Osmanlı'ya verirdi; bunu hiçbir kaynak söylemiyor.
5. **Bocskai başlangıcı:** TDV `zitvatorok` "1604 Kasımında" diyor; HoT gece 15 Ekim 1604 Álmosd diyor (11 Kasım Kassa girişi).
   - Pencere sınırı bu değil (Erdel için 14 Eylül 1605), yalnız not.
6. **Mevcut maddelerin günleri sınanmadı** (kronoloji işçisinin dosyası):
   - 1594-10-05 "5 Ekim": okuduğum kaynaklarda bu gün yok.
   - 1594-11-13 "13 Kasım": HoT yalnız "November" veriyor.
   - Atlas dayanak alınmadı: Eflak f = Kasım 1594 ay kesinliğinde.

**Pencere içinde çizilmeyen iç kırılmalar** (kaynakta var, ayrı tarama yapılmadı — hepsi kaydın `not:` alanında):
- **Eflak:** Ağustos-Ekim 1595 Sinan Paşa Bükreş/Tırgovişte'de · 1598 Osmanlı barışı ve 9 Haziran 1598 Prag (Habsburg vasallığı).
- **Erdel:**
  - Nisan 1598 imparator komiserleri · 20 Ağustos 1598 Zsigmond dönüşü
  - **17 Mart 1599 András Báthori (Leh nüfuz alanı, Krakov ve Movilă İstanbul nezdinde aracı)**
  - 1 Kasım 1599 Mihai · 18 Eylül 1600 Mirăslău · Şubat 1601 Zsigmond
  - 8 Mayıs-17 Temmuz 1603 Mózes Székely (Osmanlı destekli)
- **1601-1606 Eflak (Radu Şerban):** HoT 118/119'da **bulunamadı**. TDV'ye göre tâbi ⇒ pencere yok.

## 2 · Geometri seçici (atlas yalnız SEÇİCİ, kaynak değil)

`js/suzgec.js:580` `isyanSecim`: o gün pencerenin kimliğine **tâbi** görünen yerleşimleri seçer.
- Tâbi sayılan: v: `kid`, ya da kid'siz v:'nin `k` adı künye çekirdeğiyle başlıyorsa (PAKET-UI2 `sahipKimlikte` aynen).
- `d:` (İbrail, Yergöğü gibi doğrudan Osmanlı noktaları) ve `s:` **seçilmez.**

**Ölçülen boşluk ve çaresi**
- Atlasın tamamında 1594-1606'ya değen, v: döneminde **ne `kid` ne `k`** olan 4 kayıt var: `Erdel Belgradı (Gyulafehérvár)` · `Brassó (Braşov)` · `Segesvár (Sighişoara)` (üçü `yerlesimler_ek29.js`) · `Debrecen` (`yerlesimler_kdmacar.js`).
- Bu hâliyle Erdel'in merkezi taranmayacaktı.
- Mesafe kuralı **denenmedi**: en yakın kimlikli nokta Brassó'yu Eflak'a (Tırgovişte) verirdi (D121).
- Çare: `ISYAN_TARAMA.kimliksiz_uye.erdel`. Kaynaklı liste: TDV `erdel`'in *"belli başlı şehirleri"* (Alba Julia, Sighişoara) ve *"en önemli şehri Braşov"* cümleleri.
  - Yalnız kimliksiz kayda uygulanır, atlas kimliğini **asla ezmez.**
  - Debrecen kaynakta Erdel şehri olarak anılmıyor ⇒ **taranmaz.**
- 🔵 **Veri kalemi (yerleşim sahibine, koşu 10 sonrası):** üç kaydın v: `1541-08-29→1687-08-12` dönemine `k:"Erdel Prensliği"`. İnince liste boşa düşer.
  - PAKET-UI2'nin `odak_kimlik` kutusu da aynı sebeple bu üçünü görmüyor (UI2 raporundaki "Erdel 3").

**Seçilen yerleşimler** (`node denetim/ARAC-ISY-OLCUM-0913.js`, `*` = kaynaklı üye)
```
1594-10-05  Erdel 6                          (Eflak/Boğdan henüz başlamadı)
1594-12-01  27 = Eflak 11 · Boğdan 10 · Erdel 6
1595-11-01  17 = Eflak 11 · Erdel 6          (Boğdan 1595 penceresi bitti)
1600-06-01  27 = Eflak 11 · Boğdan 10 · Erdel 6
1601-10-01   6 = Erdel 6 (Habsburg idaresi)
1605-01-01   6 = Erdel 6 (Habsburg idaresi)
1606-01-01   0
peteksiz (PETEK_GOVDE geometrisi yok): hepsinde 0
Eflak  Bükreş · Tırgovişte · Piteşti · Slatina · Buzău · Rimnik-i Sârat · Krayova · Tırgu Jiu · Rimnik · Turnu Severin · Kımpulung
Boğdan Yaş · Suçava · Çernovitz · Roman · Birlad · Kalas · Hotin · Soroka · Orhei · Kahul
Erdel  Erdel (Kaloşvar) · Varad · Yanova · Erdel Belgradı* · Brassó* · Segesvár*
```
- Şema sınaması: 5 pencere, sorun 0 (künye penceresi · kaynak alanları · ay kodu · kimlik içi örtüşme).
- Bağlı 5 maddenin 5'i veride bulundu.

## 3 · Arayüz

| yer | ne |
|---|---|
| `index.html:1327` | `<script src="data/isyan_tarama.js?v=r7487">`, `suzgec.js`ten önce |
| `js/suzgec.js:564` · `:573` · `:580` · `:615` | `isyanAktif` · `_isyanKimliksizMi` · `isyanSecim` · dışa aktarım. DOM'suz, node'da da koşar |
| `js/app.js:1782` | `isyanDesenleriKur()` + `isyan` kaynağı + `isyan-dolgu` katmanı. İşgalin üstünde, antlaşma farkının altında. Çizgi katmanı **bilerek yok**: petek başına kenar çizgisi voyvodalığın içine hücre sınırı çizerdi |
| `js/app.js:3461-3481` | `ISYAN` durumu, renk, 10×10 desen. **Şeffaf zemin** ⇒ tâbi rengi alttan görünür. Sağa yatık (x+y) ince çizgi: isyan koyu kahve `#2a1608`, Habsburg `_DEVLET_RENK.avusturya` (yoksa `#bdab3f`). İşgal deseni sola yatık ve zemini dolu ⇒ ayırt edilir |
| `js/app.js:3483` | `isyanGuncelle(t)`: kare başına yalnız 5 pencerelik anahtar karşılaştırması; seçim + `setData` **yalnız aktif pencere kümesi değişince** |
| `js/app.js:3501` | İlk girişte `data/petek_govde.js` tembel iner (PAKET-UI2 `_petekGovdeYukle`); bayrakla kuyruğa ikinci çağrı eklenmez; gelince o anki gün yeniden çizilir |
| `js/app.js:3530` | `isyanLejanti`: sol alt yığında **"İsyan"** kutusu (tür + ülke adları, peteksiz sayısı) |
| `js/app.js:3562` · `:7684` | `isyanMaddeKutusu`: bağlı maddede kutu açılır, beş pencere tarih/kaynak/durum ile listelenir. Satır ipucunda `not:` görünür. Siyasî katman kapalıysa bunu söyler |
| `js/app.js:3609` | `LEJANT_YIGIN`e `isyan-lejant` |
| `js/app.js:7009` | gün zinciri: `isgalGuncelle`den hemen sonra (kırpmada da çizilir) |
| `js/app.js:11522` | katman seçici "Siyasî" kovasına `isyan-` |
| `css/style.css:2287-2292` | lejant ve madde kutusu stilleri |

**Madde bağlantısı (3. adım).**
- Tarama **tarihe** bağlıdır: madde açılınca harita o güne gider ve o gün aktif pencereler kendiliğinden çizilir.
- Ayrı bir aç/kapa yok. İşgal taraması gibi "Siyasî" katmanıyla birlikte açılıp kapanır.
- Bağlı maddeler (`ISYAN_TARAMA.maddeler`, tarih + başlık öneki birlikte eşleşir):
  - 1594-10-05 Üç voyvodalık → o gün yalnız Erdel taralı (Eflak/Boğdan Kasım'da başlıyor, kutu bunu "henüz başlamadı" diye yazar)
  - 1594-11-13 Bükreş → üçü taralı
  - 1595-01-01 Mihail'in Tuna akınları → üçü taralı
  - 1595-08-23 Kalûgerân → üçü taralı
  - 1595-10-01 Yergöğü → üçü taralı
- Siyasî katman kapalıysa kutu *"tarama şu an görünmüyor"* der, katmanı zorla açmaz.
- Kapsam dışı: `KRONOLOJI_*` sekmesindeki (Macaristan 1604-10-15 Bocskai, 1606-06-23 Viyana) maddelerde kutu yok.

**Bütçe (ölçüm)**
- 1590-1610 günlük yürüyüş (7306 gün): anahtar hesabı toplam 10-15 ms, **setData 9 kez**, seçim azami 5 ms (ilk koşuda 30 ms).
- Pencere içinde seçim kümesi değişen örnek gün (30 günde bir): **0**. Anahtar değişmeden yeniden seçmemek bugünkü veride kayıpsız.

### 🔴 Kendi hatam — yakalandı, düzeltildi
- İlk yama geometriyi `PETEKLER[i].g`den okuyordu. Tarayıcıda ölçüldü: `PETEKLER` **yalnız ad taşıyor** (`{a:"Bükreş"}`, g'li 0/3808). Tarama **hiç çizilmeyecekti.**
- node ölçüm aletim yalnız ad eşleşmesini sınadığı için *"peteksiz 0"* diyordu.
- Düzeltme: `denetim/ARAC-ISY-YAMA-APP2-0913.js` (PAKET-UI2'nin tembel `petek_govde.js` yolu). Alet artık app.js'in okuduğu **aynı** yolu sınıyor (`PETEK_GOVDE[pi]` + parçalar).
- İlk yamada `katman` çapası da `\r\n` yüzünden 0 eşleşmişti; betik o yüzden **hiçbir şey yazmadan** çıktı, sonra EOL uyumlu hâli uygulandı.

## 4 · Doğrulama

**node (gerçek veri, index.html birleştirmesi):** yukarıdaki §1-§3 sayıları.

**Tarayıcı (gerçek sayfa kodu, harita hazır DEĞİL):**
```
petek_govde.js tembel yükleme: yüklendi
1594-12-01 seçilen 27 · kaynaklı 3 · geometrili 27 · poligon 28
1595-11-01 17/17 · 1600-06-01 27/27 · 1601-10-01 6/6 · 1605-01-01 6/6
1594-10-05 madde kutusu: aktif satır "Erdel Prensliği · isyan · 28 Ağustos 1594 → 3 Ağustos 1601"
ilgisiz madde (1699-01-26) kutu: 0 · LEJANT_YIGIN: isyan-lejant var · Siyasî kalıbı "isyan-dolgu"yu tutuyor
```

**`py arac/denetle_yayin.py`**
- ✓ **yetim veri dosyası 0/331** ⇒ `isyan_tarama.js` bağlı.
- ✗ *"diskte var ama GIT'TE İZLENMİYOR: data/isyan_tarama.js — yayında 404"* ⇒ **commit'te `git add` şart** (koordinatör). Dosya eklenmeden yayınlanırsa `|| []` koruması yok ama `window.ISYAN_TARAMA` yoksa kod sessizce çıkar; tarama görünmez.
- ✗ çalışma ağacı: 3 kod dosyası değişmiş, damga r7487 (bu paket).
- Öteki ✗'ler (damga geçmişi, yayın bayat) bu paketten önce de vardı.

**`py arac/denetle.py`:** çıkış 0, girdilerine dokunulmadı. Değişmez 1 ✓ 3818/324 · 2 ✓ 528/0 · 2s ✓ 101 açık · 2i ✓ 3 · 2t ✓ 15.

## 5 · Emre'nin bakacağı yer
1. **1594-11-13 Bükreş maddesi.** Eflak · Boğdan · Erdel tâbi renginde kalmalı ve üstünde ince koyu çapraz tarama olmalı. Sol altta **"İsyan"** lejantı, panelde "🗺 İsyan taraması" kutusu görünmeli. İbrail/Yergöğü (doğrudan Osmanlı) taranmamalı.
2. **1594-10-05 Üç voyvodalık maddesi.** Yalnız Erdel taralı olmalı: kaynaklara göre Zsigmond 28 Ağustos'ta döndü, Eflak/Boğdan Kasım'da. Bu doğru mu, yoksa madde kutusu yeterli mi?
3. **1595-11-01 ve 1600-06-01 arası kaydırma.** Boğdan 1595 sonunda taramadan çıkmalı (Movilă), Mayıs 1600'de geri girmeli.
4. **1601-10-01 ile 1605-01-01.** Erdel'de **farklı renkte (Habsburg sarısı)** tarama, lejantta "Habsburg idaresi".
5. **Karar isteyen iç kırılmalar:**
   - 1599 András Báthori dönemi (Mart-Ekim) taramadan çıkarılmalı mı?
   - Eflak'ın 1598 Osmanlı barışı?
   - Boğdan 1600 bitişi (üst sınır 12 Ocak 1601)?
6. **Desen yoğunluğu ve renk** gözle ayarlanacak (ölçülmedi): isyan `#2a1608`, 10 pikselde 2, opaklık 215/255.

## 6 · Başka oturumlara giden kalemler (yazılmadı)
- **Koordinatör:**
  - `git add data/isyan_tarama.js` (+ `denetim/ARAC-ISY-*-0913.js`, bu rapor)
  - sürüm damgası
- **Yerleşim sahibi (koşu 10 sonrası):** Erdel Belgradı · Brassó · Segesvár v: dönemine `k:"Erdel Prensliği"`. Debrecen'in 1541-1660 v: kimliği kaynaktan sorulmalı.
- **Kronoloji işçisi (`olaylar_ek10.js`):** 1595-10-01 maddesinin `ic_not_d` cümlesi *"Haritada … hâlâ tâbi renkte görünüyor — … henüz veriye işlenmedi"* artık **bayat**, tarama geldi. 1594-10-05 "5 Ekim" ve 1594-11-13 "13 Kasım" günlerinin dayanağı okuduğum kaynaklarda **bulunamadı.**

## Aletler
```
node denetim/ARAC-ISY-OLCUM-0913.js       şema · örnek günler · geometri · bütçe · pencere içi kararlılık · bağlı maddeler (salt okuma)
node denetim/ARAC-ISY-SONDA-0913.js       kutu içi d/v/s/isg dökümü, v: kid|k sayımı (salt okuma)
node denetim/ARAC-ISY-YAMA-APP-0913.js    (UYGULANDI — tekrar koşulursa "zaten uygulanmış" der)
node denetim/ARAC-ISY-YAMA-APP2-0913.js   (UYGULANDI — aynı)
```

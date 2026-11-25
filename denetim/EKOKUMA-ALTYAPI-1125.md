# Öteki devletler için ek okuma: altyapı ölçümü ve planı (KASA, 25 Kasım 2026)

**Ölçülen ağaç:** `D:\atlas\.claude\worktrees\kasa19-kapi` (dal `worktree-kasa19-kapi`, HEAD `ba268233c`). Salt okur; depoya dosya yazılmadı. Şartname: `origin/ekokuma-sartname-1125:denetim/EKOKUMA-DEVLETLER-SARTNAME-1125.md`.

**Yöntem:** arayüz davranışlarının hepsi **koddan okundu, tarayıcıda sınanmadı** (aşağıda `[KOD]`). Sayılar node betikleriyle ölçüldü (`[ÖLÇÜM]`; betikler bu klasörde `olc.js`, `olc2.js`). Satır numaraları, ayrıca belirtilmedikçe `js/app.js`'indir.

---

## 0. Hemen bildirilmesi gereken: şartnamedeki ad, kartları görünmez yapar

- Şartname dosya değişkenini `window.EKOKUMA_DEV_<DEVLET>_<PARTI>` diye tarif ediyor.
- Toplayıcının deseni `^EKOKUMA(_[A-Z0-9]+)?$` (`:14234`). Yalnız **tek** alt çizgili parçaya izin veriyor.
- `[ÖLÇÜM]` `EKOKUMA_DEV_IRAN_1` → eşleşmiyor; `EKOKUMA_DEV_IRAN` → eşleşmiyor; `EKOKUMA_DEVIRAN1` → eşleşiyor.
- Sonuç `[KOD]`: dosya yüklenir, konsol "yüklendi" sayar, yetim denetimi de geçer, **hiçbir kart çıkmaz ve hata verilmez**. `:14171` yorumu aynı tuzağı not etmiş. `_merakHavuz` da `_ekHavuz`'u kullandığı için (`:14253`) aynı durumda.
- **Çare (öneri):** deseni `^EKOKUMA(_[A-Z0-9]+)*$` yapmak (tek satır). `EKOKUMA_DURUM` ve `EKOKUMA_TUR` nesne olduğu için `Array.isArray` süzgecine takılır. İçerik makineleri adlarını değiştirmek zorunda kalmaz. Bu satır `main`e inmeden hiçbir yeni kart görünmez.
- `origin`de adında "ekokuma" geçen dallar yalnız şartname dalı ve eski `emrelic-1101-ekokuma-makam`. Başka adlı dallar taranmadı.

---

## 1. Osmanlı dışı bir devletin kronolojisinde bugün ne görünüyor

İki ayrı kart yolu var. Osmanlı maddesi `obGoster(o)` (`:13001-13122`) ile, devlet maddesi `maddeAc(d, m)` (`:19638-19884`) ile açılır. `maddeAc` **`obGoster`'i çağırmaz**.

| Parça | Devlet maddesinde bugün | Kanıt `[KOD]` |
|---|---|---|
| Tarih, başlık, üst bilgi, açıklama | Görünür | `:19662-19697` |
| Madde görseli (`GORSEL_MADDE`) | Gün bağı tutarsa görünür | `:19689`, `:13959-14020` |
| Portre (kartın sol görseli) | **Yok**; yalnız ⚔ / 📜 / ☾ rozeti. `vefat_id` olsa da portre basılmaz | `:19677-19678`; Osmanlı yolu `:13026-13063` |
| Ek okuma akordeonu | **Var**, Osmanlı ile aynı fonksiyon | `:19707-19708`, `:14436-14477` |
| Kaynakça, derin pencere düğmesi | Aynı fonksiyondan çağrılıyor | `:14438-14439` |
| Kişi satırları (`m.kisiler`) | Var, yalnız `window.KISILER`'den | `:14462`, `:12940-12964` |
| Künye / nasıl bilirdiniz (`vefat_id`) | Mekanizma var; `PADISAHLAR` ve `KISILER` dışını okumaz | `:12829-12835`, `:12879-12936` |
| Hükümdar paneli | **Yok** (bkz. 1.2) | `:19561-19569` |
| Muharebe kutusu (`SAVASLAR`) | **Yok** | yalnız `:13078-13087` |
| Savaş künyesi akordeon satırı | Gün `savas_t` ile tutarsa var | `:14427-14433` |
| Antlaşma hükmü kutusu | Kutu **yok**; `ANTLASMALAR` kaydı akordeonda gün bağıyla çıkar | `:13088-13091`, `:14360-14366` |
| Antlaşma öncesi/sonrası farkı, "bu maddenin haritadaki karşılığı", isyan kutusu, el değiştirme sahnesi | **Yok** | yalnız `:13094-13109` |
| Antlaşma haritası düğmesi, antlaşma oynatıcısı, albüm düğmesi | **Yok**: üçü de `window.obGoster`'i sarıyor | `js/antlasma_harita.js:368-383`, `js/antlasma_oynatici.js:366-393`, `js/album.js:110-133` |

### 1.1 Ek okuma akordeonu

- `[KOD]` Panel Osmanlı'ya sabit değil. Bağ yalnız gün ve isteğe bağlı başlık parçasıyla kuruluyor (`:14289-14317`). Devlet kimliği hiç sorulmuyor.
- `[ÖLÇÜM]` Bugünkü kartlar da beş devletin maddelerine düşüyor:

| Devlet (sayılan künyeler) | Madde | Osmanlı maddesiyle aynı güne düşen | `kisiler` alanı | Nokta yeri | Bağlanan mevcut kart / madde | `ANTLASMALAR` gün bağı (çift) |
|---|---|---|---|---|---|---|
| İran (safevi, afsar, zend, kacar, iran) | 281 | 132 | 8 | 213 | 39 / 47 | 9 |
| Rusya (moskova, rusya) | 421 | 138 | 23 | 362 | 98 / 54 | 12 |
| Avusturya (habsburg ve iki cumhuriyet) | 244 | 89 | 10 | 171 | 95 / 49 | 11 |
| Lehistan (polonya-erken, lehistan, polonya) | 238 | 83 | 21 | 210 | 40 / 24 | 4 |
| Venedik | 135 | 72 | 21 | 113 | 54 / 29 | 5 |

  Hiçbirinde `vefat_id` ya da `sefer_id` yok. Sayım `app.js`'in kendi bağlama bloklarıyla yapıldı. `OLAY_TARAF` eklemesi ve güvensiz kaynak gizlemesi uygulanmadı, 147 data betiğinin 1'i hata verdi (hangisi olduğuna bakılmadı). Bu yüzden sayılar yaklaşıktır.
- `[ÖLÇÜM]` **Yanlış bağ örnekleri:** Moskova'nın 1453-05-29 "İstanbul'un fethi haberi Moskova'ya ulaştı" maddesine `zimmi-cizye-millet-duzeni` (ayırt edici "İstanbul" tutuyor), `topkapi-sarayi-insasi` (ayırt edicisiz gün bağı) ve `dunya-ipek-yolu-tarihi` düşüyor.
- `[ÖLÇÜM]` 293 kartın en az bir ayırt edicisiz `olay` bağı var. 107, 39, 98 gibi toplamların ne kadarının yanlış olduğu **elle sınıflanmadı**.
- Yeni kartlar için ters yön de geçerli: aynı gündeki Osmanlı maddesine düşmemeli. Ayırt edici "İstanbul", "Savaşı", "Antlaşması" gibi genel bir kelime olmamalı.
- `[KOD]` `ANTLASMALAR` kayıtlarının `tur`u yok; `olay` ya da `t` ile güne bağlanıyorlar (`:14308-14315`).
- `[KOD]` Tanımsız `tur` sessizce düşer (`:14463-14471`). Geçerli türler `EKOKUMA_TUR`'dadır (`:14318-14434`).
- `[KOD]` Tembel dosyalar dinamik `<script>` ile hep birlikte ekleniyor, `async=false` yazılmamış (`:14216-14222`). Havuz sırası `Object.keys(window)` olduğundan aynı türdeki kartların sırası yüklemeden yüklemeye değişebilir (çıkarım).
- `[KOD]` Ayrı pencerede zincir bağlantısı yalnız `window.EKOKUMA`'da arıyor (`:14945`); akordeondaki ise bütün havuzda arıyor (`:14743`). Yeni dosyalarda ikinci tıklama boşa düşer.

### 1.2 Hükümdar paneli

- `[KOD]` `padisahGuncelle` yalnız `window.PADISAHLAR`'ı okur (`:8568-8609`). 1922 sonrasında `CUMHURBASKANLARI`, öncesinde "Osmanlı hanedanından önce" yazar (`:8590-8591`, `:8613-8634`).
- `[KOD]` Devlet odaktayken sarmalayıcı `kartCiz(ODAK)` çağırır (`:19944-19949`). Kartta devlet adının ilk harfi, devlet adı, `f – t` ve başkent var (`:19562-19569`). Hükümdar adı, portre ve tarihle değişim yok.
- `[KOD]` `HUKUMDAR_*` adını `js/` ve `arac/` altında **hiçbir şey okumuyor**. Yalnız dosyayı yazmak görünür bir sonuç vermez.
- **Kusur A** `[KOD]`: `kartCiz` `_aktifPadisah`'ı sıfırlamıyor. Devlet kartındaki harfe ya da ada tıklayınca en son görülen **Osmanlı padişahının** albümü açılır (`:8574`, `:8680-8685`, `:19562`).
- **Kusur B** `[KOD]`: `kartCiz` `sonPadisahId`'yi de sıfırlamıyor. Osmanlı'ya dönüşte padişah aynıysa `:8597` erken dönüyor. Ad ve saltanat yılı yazılır, portre kutusunda devletin harfi kalır (`:19895-19901`, `:8595-8599`).
- `[KOD]` `PADISAHLAR` şemasında devlet alanı yok. `[ÖLÇÜM]` Alanlar: `id, ad, from, to, dogum, olum, baba, anne, tahta, saltanat_yil, lakap, esler, cocuk, ovgu, yergi, tartisma, tarihciler, skandal, kaynak, ozel, *_yer, ic_not_*`. **İçerik makinelerine şimdi söylenmeli:** her hükümdar kaydına `devlet: "<künye id>"` (ör. `safevi`, `moskova`, `rusya`, `habsburg`, `lehistan`, `venedik`), devlet önekli benzersiz `id`, gün hassasiyetli `from`/`to`.
- `[KOD]` Portre yolu `assets/portreler/<id>.jpg` (`:8602`). Klasörde 38 dosya var. Dosya yoksa ad harfi basılır (`:8604-8607`).

### 1.3 Kişi kartları (`kisiler.js`)

- `[ÖLÇÜM]` `KISILER` 288 kayıt; 169'u `yabanci-hukumdar`, 12'si `yabanci-komutan`. Beş devletin bir kısım kişisi zaten olabilir; ad ad eşleştirme yapılmadı.
- `[KOD]` Tek dizi okunuyor: `:12678` (ad eşleme), `:12833` (`vefat_id`), `:11436` ve `:11692-11698` (Dizin). `KISILER_<X>` adlı bir dizi okunmaz. Yeni dosya ya `window.KISILER = (window.KISILER||[]).concat([...])` yapmalı ve `kisiler.js`'ten **sonra, `app.js`'ten önce** yüklenmeli, ya da kod bir `_kisiHavuz()` toplayıcısı kazanmalı. Tembel yüklenirse Dizin ve ilk açılan kart kaydı görmez.
- `[KOD]` Maddede ilk 4 ad alınır. Ayraç virgül ya da noktalı virgül. Bir ad Osmanlı padişahına eşleşirse atlanır (`:12944-12945`). Bu eşleme devlete bakmaz; yalnız unvan, sıra sayısı ve tarih koruması var (`:12783-12813`).
- **Risk** `[KOD]`: `kisiBul` bulanık eşleştirir (`:12675-12756`) ve kodun kendi notları yanlış eşleşme vakaları anlatır. Yüzlerce yabancı ad eklemek **Osmanlı maddelerinde** de yeni yanlış kart üretebilir. Zaman koruması yalnız `f`/`t` 3-4 haneli yılsa çalışır (`:12952-12956`). Yeni kişilerde `f` ve `t` zorunlu olmalı; önce/sonra eşleşme farkı ölçülmeli.
- `[KOD]` Satırda yalnız `ad`, `donem`, `not` basılır (`:12959-12960`). Zengin alanlar (`ovgu`, `yergi`, `tartisma`) yalnız `vefat_id` yolunda görünür. Devlet kronolojilerinde `vefat_id` sayısı 0.
- `[KOD]` Dizin'in "kartvizitler" sekmesindeki K1-K5 grupları Osmanlı'ya göre (`:11688-11698`); K1 yalnız `PADISAHLAR`.

### 1.4 Savaş künyesi ve savaş kayıtları

- `[KOD]` **Savaş künyesi** akordeonda yalnız `SAVAS_KUNYE_1`, `_2`, `_3` adlarını sabit okuyor (`:14430`). `SAVAS_KUNYE_4` ya da devletli bir ad **sessizce görünmez**. `[ÖLÇÜM]` 204 künyenin 9'unun günü beş devletin bir maddesiyle çakışıyor (yalnız gün sayımı). Bağ `savas_t` / `savas_t_ek`; ayırt edici yazılabilir. Gösterim taraf bağımsız (`:14796-14813`).
- `[KOD]` **`SAVASLAR`** `SAVASLAR(_X)?` desenini topluyor; deseni X içinde alt çizgiye izin verir (`:5550-5588`). İşaretler tarih penceresiyle, **odak devletten bağımsız** çizilir (`:5664-5674`). Pencere **Osmanlı** `olaylar`'ına göre hesaplanır (`:5612-5627`).
- Osmanlı'ya sabit yerler `[KOD]`:
  - `sonuc` Osmanlı gözünden: muharebe kutusu "Osmanlı zaferi / yenilgisi" yazar (`:13085`).
  - `sonuc:"yenilgi"` işarete başarısızlık çarpısı koyar (`:5654` civarı).
  - `karsiTaraf` `osmanli`'yı listeden düşürür (`:171-178`).
- `[ÖLÇÜM]` `SAVASLAR`'ın 168 kaydının 6'sında `taraf` dizisi `osmanli` içermiyor; 83'ünde `galip` alanı var. `[KOD]` `.galip` `js/` içinde okunmuyor. Osmanlı'sız savaş bugün muharebe kutusuna düşerse sonuç yanlış okunur.
- `[KOD]` `savasIsaretiParlat(o.gi)` devlet yolunda çalışmaz: `maddeAc`, `haritayiOlayaGotur`'a `gi`'siz ham `m`'yi veriyor (`:19758`, `:17163-17180`).

### 1.5 Antlaşma haritası ve haritada fark

- `[ÖLÇÜM]` `ANTLASMALAR` 42, `ANTLASMA_HARITALARI` 70, `ANTLASMA_MADDELERI` (oynatıcı) 54 kayıt.
- `[KOD]` Eşleşme genel: ad `b` içinde ve ±60 gün (`js/antlasma_harita.js:50-55`), ya da `antlasma_id` / `anahtarlar[]` (`js/antlasma_eslesme.js:30-49`). Devlet sorulmuyor. **Tek engel tetik:** `maddeAc` bu sarmalayıcılardan geçmiyor.
- **Bayat durum riski** `[KOD]`: `maddeAc` `_ahTemizle()`, `ANTLASMA_OYNATICI.kapat()` ve `antlasmaFarkiTemizle()` çağırmıyor. Osmanlı maddesinde açılan antlaşma katmanı ya da oynatıcı, devlet maddesine geçince kalabilir. `#ob-ozel` siliniyor (`:19675-19676`), harita katmanı silinmiyor. Antlaşma farkı ancak tarih penceresi dışına çıkınca temizlenir (`:12254-12255`, `guncelle` içindeki kural).
- **Osmanlı'ya sabit** `[KOD]`: `antlasmaTaraflari` her zaman `{osmanli:true}` ile başlıyor (`js/suzgec.js:547-548`). Bu kutu olduğu gibi devlet maddesine bağlanırsa Osmanlı'sız bir antlaşmaya aynı dönemdeki Osmanlı toprak değişimi mal edilebilir. `antlasmaMaddesiMi` de `o.k`'ye bakıyor (`:13159-13163`); devlet maddeleri çoğunlukla `tur` kullanıyor.
- `[KOD]` `_sahipRengi` içinde `osmanli` ve tâbi renkleri sabit (`:13185-13200`). Bu gösterimdir, engel değil.

### 1.6 Sefer oku

- `[KOD]` `SEFERLER(_X)?` toplanır (`:6657-6712`) ve **tarih penceresiyle** çizilir; odak devlete bakılmaz. Beklenen davranış: devlet maddesinin gününde varsa ok görünür.
- `[KOD]` Pencere kırpması yalnız Osmanlı `olaylar`'ına göre (`_fiKirpik`, `_tiKirpik`; `seferGuncelle` `:7174` sonrası). Yabancı sefer bir **Osmanlı** maddesine göre kırpılır.
- `[KOD]` `sefer_id` bağı yalnız `olaylar`'dan kuruluyor (`:7154-7172`). Devlet maddesine yazılan `sefer_id` etkisizdir.
- `[KOD]` `devlet`, `taraf` ve veri rengi yoksa ok **Osmanlı sayılıp kırmızıya** boyanır (`:6874-6885`). `[ÖLÇÜM]` 302 seferin 222'sinde `devlet` de `taraf` da yok (kaçında veri rengi olduğu ölçülmedi). Yeni seferlerde `devlet:` zorunlu olmalı. Varsayılan taraf adları `dusman` / `osmanli` de Osmanlı eksenlidir.
- `[KOD]` Mükerrer ok elemesi `taraf` ve `devlet` ayrımını koruyor (`:7202-7215`).

### 1.7 Devlet tıklamasında ek bulgu: ham madde `gi`'siz ve `k`'siz

- `[KOD]` Nokta yeri olan maddede `haritayiOlayaGotur(m, true)` ham `m` ile çağrılıyor (`:19756-19758`). Yanındaki `mo = kopyaMaddesi(d, m)` (`gi` ekliyor, `:19415-19421`) kullanılmıyor.
- Etkisi: savaş işareti parlamaz; `maddeyeDarKirp` `o.gi == null` ile hemen döner (`:17292-17293`) ve `oncesiSonrasiKirp(undefined)`'a düşer (`:17358-17364`). Öncesi/sonrası kırpmasının fiilen hiç oynamadığını **tahmin ediyorum**; sınanmadı. `olayMuharebeTuru` `o.k` okuduğu için savaş glifi de çoğunlukla çıkmaz (`:4818-4829`).
- `mo`'ya geçmek tek satır görünür ama antlaşma ve kırpma mantığını devlet maddelerine açar. Ayrı adımda ve tarayıcıda sınanarak yapılmalı.

---

## 2. Yeni data dosyası siteye nasıl girer

### 2.1 İki yol

| | A. Tembel liste | B. `index.html` `<script>` |
|---|---|---|
| Kime uygun | Ek okuma kartları, `GORSEL_MADDE` | `HUKUMDAR_*`, `KISILER` eki, `SAVASLAR_*`, `SEFERLER_*`, antlaşma verisi (açılışta ya da haritada gerekir) |
| Nasıl | `_EKOKUMA_DOSYA_ADLARI`'na ad (`:14056-14182`). Ad yalnız `[a-z0-9_]` | Satır, bağımlı olduğu verinin sonrasına, `app.js`'ten önce. `antlasma_madde_*` oynatıcıdan önce |
| İlk yük | 0 bayt; ilk madde kartında iner (`:14444-14446`) | İlk yüke eklenir, istek +1 |
| Önbellek | `?v=window.SURUM` (`:14200`, `:14218`): **genel damga değişince bütün liste yeniden iner** | Dosya içeriğinden damga (`arac/surum_damgala.py:32-76`) |

- `[KOD]` `arac/girdi.py` motor girdisi listesidir. Bu dosyalar oraya **girmez**; `girdi.py` önbellek tuzudur, dokunulmamalı (CLAUDE.md). `grep` sonucunda `girdi.py`'de bu aileler için liste girdisi görmedim.
- **Paket:** `paketle.py topla` ardışık küçük (< 2 MB) etiketleri paketler, `ekle <no> <dosya>` var olan pakete katar (`arac/paketle.py:394-500`, `:614`). Yükleme sırası korunmalı. Tembel dosyalar paketlenmiyor. Kaynak değişirse `paketle.py yenile` ve `sina` gerekir.
- **İnceltme** `[KOD]`: paket yalnız `yerlesimler*` ve `olaylar*` / `kronoloji*` iç notlarını ayıklıyor (`arac/paketle.py` `_INCELT_KURAL`). Yeni dosyalardaki `ic_not` tarayıcıya **iner**; ek okuma kartında ekrana basılmaz (`:14514-14524`, `:14756`).

### 2.2 Yayın kapısı (`arac/denetle_yayin.py`) `[KOD]`

| Denetim | Yeni dosyaya etkisi | Satır |
|---|---|---|
| Yetim veri dosyası | `data/*.js` ne `index.html`/pakette, ne `girdi.py`'de, ne tembel listede ise yayın durur. İçerik dalı tek başına `main`e inerse **kapı düşer**; liste ya da script satırı aynı birleşmede gelmeli | `:1106-1130`, `:1484-1510`, `:1596-1660`, `:2183` |
| İstenen ama olmayan / izlenmeyen dosya | Script satırı yazılıp dosya commit edilmezse durur | `:2183` (`yoklar`, `izlenmeyenler`) |
| Dosya başına damga | `index.html`'e dokununca `surum_damgala.py` | `:1678-1702` |
| Genel damga artışı | js ya da data değişince genel damga artmalı; push kapısı yazıyor | `:1704-1720` |
| Çeviri tavanı | Aşağıda | `:2155-2169` |
| Antlaşma veri sözleşmesi | Yeni `antlasma_madde_*.js` `antlasma_dogrula.py`'den geçmeli | `:2173-2181` |

- Yetim denetimi **dosyayı** görür, değişken adını görmez. 0. bölümdeki ad tuzağını, tanımsız `tur`u, yanlış bağı ve çakışan `id`yi yakalayan bir ek okuma denetimi okuduğum kapı bölümlerinde ve `grep` çıktısında görünmüyor (dosyanın tamamı okunmadı).
- Tembel dosyada sözdizimi hatası `onerror`'a düşmeyebilir ve "yüklendi" sayılabilir (tarayıcı davranışı, sınanmadı). Her dosyaya `node --check` şart.

### 2.3 Çeviri kapsamı

- `[KOD]` Sayılan: `OLAYLAR*` ve tek bir `KRONOLOJI_COK_ARABISTAN2` maddeleri, `DEVLETLER.ad`, `index.html` ve `js/*.js` arayüz dizgileri (`arac/ceviri_cikar.js:25-82`).
- Ek okuma, `KISILER`, `HUKUMDAR_*` verisi çeviri tavanına **girmez**. Yabancı dil kullanıcısı Türkçe görür.
- `[KOD]` `BEKLENEN_CEVIRI_EKSIK` tablosunda **18 dil** var; okuduğum bölümde `arayuz` tavanı 0 (`arac/ceviri.py:129-148`). Bellek notundaki "7 dil" bayat. `js/` içine yazılacak her yeni Türkçe etiket (ör. "Hükümdar", "Tahtta") 18 dilde çeviri ister, yoksa kapı düşer. Bu yüzden planda yeni etiket olabildiğince az; var olan dizgiler kullanılmalı.
- Yeni `devletler.js` adı ya da `OLAYLAR*` maddesi eklenirse o da tavana girer.

---

## 3. Boyut ve ilk yükleme

`[ÖLÇÜM]` Satır sonu LF'e indirildi, gzip seviye 6. GitHub Pages'in gerçek aktarım boyutu ve tarayıcı süresi **ölçülmedi**.

| Kalem | Dosya | Ham | gzip |
|---|---|---|---|
| `index.html` | 1 | 0,17 MB | 0,06 MB |
| `index.html`'deki yerel script (data + js) | 172 | **45,51 MB** | **11,44 MB** |
| bunun içinde `data/paket_NN.js` | 42 | 30,48 MB | 7,74 MB |
| bunun içinde `js/` | 24 | 1,74 MB | 0,63 MB |
| `app.js` tek başına | 1 | 1,21 MB | 0,44 MB |
| CSS (style, telefon, auth) | 3 | 0,25 MB | 0,08 MB |
| **Tembel ek okuma listesi** (`gorsel_madde` dahil) | 88 | **4,31 MB** | **1,58 MB** |
| `ekokuma*.js` (öneri dosyaları hariç) | 83 | 4,16 MB | 1,52 MB |

Toplama girmeyenler: sonradan inen geometri parçaları, CDN kütüphaneleri, görseller, çeviri dosyaları. Script sayımı `index.html` üstünde düz regex ile yapıldı (174 etiket, 172'si yerel).

Karşılaştırma için bulunduğu paketler: `padisahlar.js` paket_01'de (0,97 MB / 0,28 MB); `kisiler.js` ve `savaslar.js` paket_12'de (1,97 / 0,58); `devletler.js` paket_05'te (6,61 / 1,86); künye 1 paket_26'da (0,56 / 0,16); antlaşma haritaları paket_29'da (0,16 / 0,05).

**Birim maliyet** (dosya boyutu bölü kayıt; yorumlar dahil):

| Birim | Ham | gzip |
|---|---|---|
| Ek okuma kartı (1.094 kart; `metin` ortancası 1.603 karakter) | 3,80 KB | 1,39 KB |
| Hükümdar kaydı (41) | 2,24 KB | 0,71 KB |
| Kişi kaydı (288) | 1,33 KB | 0,48 KB |

**Tahmin yöntemi:** `ek boyut = kart × 3,8 + hükümdar × 2,24 + kişi × 1,33` (KB, ham); gzip için `1,39 / 0,71 / 0,48`. Her partide gerçek dosya ölçülüp katsayı güncellenmeli.

Aşağıdaki adetler **varsayımdır**:

| Senaryo | Kart | Ham | gzip |
|---|---|---|---|
| 1. kademe, 5 devlet × 40 | 200 | 0,76 MB | 0,28 MB |
| 1. kademe, 5 × 100 | 500 | 1,90 MB | 0,70 MB |
| 4 kademe, 19 devlet × 100 | 1.900 | 7,2 MB | 2,65 MB |
| Ek: 150 hükümdar ve 200 kişi (5 devlet) | yok | 0,60 MB | 0,20 MB |

- Kartlar tembel listedeyse ilk açılışa etkisi 0'dır. İlk madde kartındaki indirme 1. kademe sonunda 1,58'den yaklaşık 2,3 MB gzip'e (+%44) çıkar; dört kademede yaklaşık 4,2 MB olur. İstek sayısı da dosya sayısı kadar artar (bugün 88).
- Hükümdar ve kişi dosyaları statik olursa ilk yüke yaklaşık +0,2 MB gzip (+%1,8).
- **Öneri:** devlet başına parti dosyaları kalsın (git çatışması olmaz). 1. kademe bitince ya devlet başına tembel yükleme (`_EKOKUMA_DEVLET = {iran:[...]}`; Osmanlı maddesine de bağlanan kart varsa çekirdek listede kalır) ya da yayın öncesi birleştirme yapılsın. Şimdi gerekmiyor.

---

## 4. Uygulama planı (en az değişiklik, öncelik sırasıyla)

Altyapıyı **tek el** yazar (`js/app.js`, `index.html`); içerik dalları dokunmaz.

| # | İş | Değişiklik | Yeni arayüz metni | Risk |
|---|---|---|---|---|
| **P0** | Ad deseni | `:14234` → `^EKOKUMA(_[A-Z0-9]+)*$` | Yok | Düşük. Önce/sonra kart sayısı aynı (1.094) kalmalı |
| **P0** | İçerik makinelerine bildirim | Hükümdara `devlet`, `id` öneki, gün hassasiyeti; kişiye `f`/`t`; sefere `devlet`; savaş künyesine yeni ad bildirimi | Yok | Geç kalırsa yazılanlar elden geçer |
| **P0** | Bağlama sınaması | Yeni `arac/ekokuma_sina.py` ya da `.js`: `ekKartBagliMi`'yi **`app.js`'ten kesip** çalıştır (`olc2.js` bunu yapıyor, kopya mantık yok). Kontrol: değişken deseni, tanımlı `tur`, benzersiz `id`, hiç bağlanmayan kart, birden çok maddeye düşen kart, devlet kartının Osmanlı maddesine düşmesi, `node --check`. Çıkış 0/1/2 | Yok | İki yönde sınanmalı (bilerek bozuk kartla). `OLAY_TARAF` ve güvensiz kaynak gizlemesi de uygulanmalı |
| **P1** | Yükleyiciye yeni dosyalar | Parti `main`e inerken `_EKOKUMA_DOSYA_ADLARI`'na satır; aynı birleşmede | Yok | İçerik ayrı inerse yetim denetimi yayını durdurur. `app.js` değişir: damga |
| **P1** | Kusur A ve B | `kartCiz` içinde `_aktifPadisah = null; sonPadisahId = null;` (2 satır) | Yok | Düşük; Osmanlı → devlet → Osmanlı tarayıcı sınaması |
| **P1** | Bayat antlaşma katmanı | `maddeAc` başında `antlasmaFarkiTemizle()`, `_ahTemizle()`, `ANTLASMA_OYNATICI.kapat()` (varlık kontrolüyle). Oynatıcı tarih değiştirirken kendi kilidi var (`js/antlasma_oynatici.js:371-387`) | Yok | Orta; oynatıcı çalışırken devlet listesinde sınanmalı |
| **P2** | Hükümdar paneli | `_hukumdarHavuz()` (`^HUKUMDAR_[A-Z0-9_]+$`); `kartCiz(d, t)` içinde `devlet===d.id && from<=t<to`. Bulunursa ad, saltanat yılları, portre ya da harf; bulunmazsa bugünkü künye kartı. `render()` çağrılarında `t=suanki`. `vefatKisiBul` bu havuza da baksın (künye satırları kendiliğinden çalışır). Dosyalar B yolu | Devlet adı veriden gelirse 0 | Orta. Aynı güne iki hükümdar, ortak hükümdarlık, boşluk; `moskova`/`rusya` ayrımı |
| **P2** | Kişi eki | `_kisiHavuz()` ya da dosyada `concat`; B yolu | Yok (yeni `tur` değeri eklenmezse) | **Yüksek:** `kisiBul` yanlış eşleşmesi. Bütün kronolojide önce/sonra eşleşme farkı ölçülmeden birleştirme |
| **P2** | Savaş künyesi toplayıcısı | `:14430` sabit üç ad yerine `^SAVAS_KUNYE_[A-Z0-9_]+$` | Yok | Düşük; sıra için adları sırala. Kapıdaki yetim kuralı yine geçerli |
| **P3** | Antlaşma haritası ve oynatıcı | `maddeAc` sonunda ortak bir kanca (ör. `window.maddeKartiAcildi(mo)`); üç sarmalayıcı kaydolur. `mo`'da `gi` var. Kancada yalnız harita, oynatıcı ve albüm çalışır | Yok (düğme metinleri var) | Orta. Oynatıcı tarih değiştirince devlet odağındaki kartla etkileşimi sınanmalı |
| **P3** | `SAVASLAR` Osmanlı ekseni | `taraf` dizisi `osmanli` içermiyorsa "Osmanlı zaferi" yazma ve çarpı koyma; `galip` göster | "galip" etiketi gerekirse 18 dil | Orta; `taraf` her kayıtta dizi değil |
| **P4** | `mo` ile kamera ve sahne | `:19758` → `haritayiOlayaGotur(mo, true)` | Yok | **Yüksek:** kırpma, fark, kardeş maskesi, ittifak yolları açılır. Tarayıcıda madde madde sınama |
| **P4** | Muharebe/antlaşma kutusu, haritada fark, `sefer_id` | `antlasmaTaraflari`'nda `osmanli` koşullu olsun; `tur` → `k` eşlemesi; `_seferBagTazele` odak listesini de tanısın | Olası | **Yüksek:** Osmanlı değişimini yabancı antlaşmaya mal etme; Osmanlı davranışında gerileme |
| **P5** | Küçük kusurlar ve yük | `:14945` → `_ekHavuz()`; dinamik script'e `async=false`; devlet başına tembel yükleme | Yok | `async=false` indirmeyi değil yalnız çalışma sırasını sıralar; yine de ölçülmeli |

**Her adımın kabulü:** `py arac/denetle.py` çıkış 0; `paketle.py yenile` ve `surum_damgala.py`; `denetle_yayin.py` çıkış 0 (push kapısı); tarayıcıda beş devletten birer madde ve Osmanlı'ya dönüş.

**Önerilen paketleme:** P0 + P1 tek küçük commit (kartlar görünür, iki panel kusuru kapanır). P2 örnek 8 kart onayıyla birlikte. P3 ve P4 ayrı, tarayıcılı işler. İçerik yazımı bunları beklemez; yalnız P0'daki ad ve şema bildirimi acildir.

---

## 5. Ölçülemeyenler

1. Hiçbir arayüz davranışı tarayıcıda sınanmadı (kusur A ve B, bayat katman, kırpma, sefer penceresi, mobil görünüm dahil).
2. `denetle.py`, `denetle_yayin.py`, `paketle.py sina`, `ceviri.py denetim` koşturulmadı; kapının bugünkü sonucu bilinmiyor.
3. Beş devletteki mevcut kart bağlarının kaçının yanlış olduğu (yalnız örnek verildi).
4. Yeni yabancı kişilerin `kisiBul` eşleşmelerine etkisi (veri henüz yok); mevcut devlet `kisiler` adlarının kaçının karta eşleştiği.
5. Gerçek ağ aktarımı, indirme ve ayrıştırma süresi, bellek.
6. Devlet madde sayıları yaklaşık (bkz. 1.1). İran, Avusturya ve Lehistan için hangi künyelerin sayılacağı benim seçimim.
7. Statik sayfa üreticisinin (`arac/statik_sayfa.js:346-376`, `PADISAHLAR` ve `KISILER` okuyor) yeni verilerle davranışı.

# DOĞU 500–1281 İŞÇİ ŞARTNAMESİ (tüm kümeler için ortak)

Sen Osmanlı Tarih Atlası'nın **doğu yarıküre 500–1281 veri** işçisisin. Çalışma dizinin: `C:\atlas\.claude\worktrees\dogu`
(Windows; Bash = Git Bash, Python `py`, Node var). **Git'e DOKUNMA** (commit/branch/stash yok). **Ortak dosyalara YAZMA**:
`data/devletler.js`, `index.html`, `arac/*`, `data/yerlesimler*.js` (mevcut), `arac/renkler.py` — bunlara yalnız OKU. Tüm çıktıların
`denetim/dogu/<küme>/` altına gider (küme adı sana verilecek). Başka kümenin dizinine yazma.

## Amaç (Emre)
Harita MÖ12000–MS2000'de 1281–1923 kalitesiyle dolsun: her yerleşim kuruluş/ilk anılış tarihinde sahneye girer, sahibi bir devlettir,
bölge devletin rengiyle boyanır; her devletin **künyesi ve TAM kronolojisi** olur; kronoloji ↔ harita birbirini doğrular
(kronolojide okunan her toprak değişimi haritada görünür; haritadaki her sahip değişimi için ±30 gün içinde kronoloji maddesi vardır —
Değişmez 2). **UYDURMA YOK.** Doğrulanamayanı yazma; "bulunamadı" yaz.

## Girdi
`denetim/dogu/girdi_<küme>.json` — senin polity listen (id, ad, f, t, tur, bolge, baskent, `durum`, mevcut kronoloji/yerleşim sayısı).
`durum` üç değer:
- `KUNYE_YOK` → künyeyi SEN yaz (aşağıda biçim).
- `KUNYE_MS1_DALINDA` → künye + kuruluş/son maddesi başka oturumun (henüz main'e inmemiş) dalında HAZIR: künye YAZMA; yalnız kronoloji + yerleşim.
- `KUNYE_MAIN_DA` → künye var. Yanlış f/t/başkent görürsen **düzeltme ÖNER** (rapor), dosyaya yazma.
Pencere: **MS 500 – 1281** (devlet daha erken başlıyor/geç bitiyorsa künyenin f/t'si tam kalır; kronoloji/yerleşim bu pencere için şart,
dışına taşan kaynaklı madde de yazılabilir).

## Üç çıktı (her polity için)

### 1) Künye (yalnız KUNYE_YOK) → `denetim/dogu/<küme>/kunye_yeni.js`
`window.DOGU_KUNYE_<KÜME> = [ ... ];` içinde `data/devletler.js` biçiminde nesneler:
```js
{ id:"...", ad:"...", tur:"krallik", bolge:"dogu-asya", f:"0907-01-01", t:"0960-01-01", baskent:"...",
  ozet:"1-2 cümle.", kaynak:"tam künye ya da TDV slug + alıntı", kesinlik:{f:"yil",t:"yil"},
  boya_gerekli:true, ic_not:"çelişki/beyan", kronoloji:[ /* kuruluş + son (+ varsa kısa iskelet) */ ] }
```
`id` küçük harf+tire, ASCII; girdideki `id`'yi AYNEN kullan. `bolge` KAPALI sözlük (`dogu-asya`, `guneydogu-asya`, `guney-asya`, `orta-asya`,
`sibirya-bozkir`, `kuzey-afrika`, `bati-afrika`, `dogu-afrika`, `misir-sudan`, `orta-amerika`, `guney-amerika`, `kuzey-amerika`, `okyanusya`, …
— `VERI-YAPISI.md` devletler bölümüne bak). `tur` listesi VERI-YAPISI'nda (yetmezse yeni tür eklenebilir, raporda bildir).
**Devlet ömrü kuralı:** `f<t`, sıfır uzunluk yok; devlet öldüyse dönemi KISALT; aynı polity sürüyorsa künyeyi genişlet.

### 2) Kronoloji → `denetim/dogu/<küme>/kronoloji_cok_dogu_<küme>.js`
`window.KRONOLOJI_COK_DOGU_<KÜME> = [ ... ];` (app.js bu önekli global'leri otomatik toplar; biçim örneği:
`data/kronoloji_cok_once1281_dogu_asya.js` ilk 80 satır):
```js
{ t:"0907-06-01", b:"kısa başlık (tek satır)", tur:"kurulus", onem:4, dunya:2, kapsam:"ic",
  etiket:["konu-siyasi"], yer:"Kaifeng", taraflar:["id1","id2"], d:"2-4 cümle anlatım.",
  kaynak:"yazar, eser, yıl, sayfa/URL — ya da TDV slug + birebir alıntı",
  gun:"insan okunur (kaynağın söylediği biçim)", kesinlik:"gun|ay|yil|onyil|yuzyil", ic_not:"çelişki/beyan" }
```
- `tur` ∈ `kurulus | hukumdar | toprak-kazanc | toprak-kayip | savas | antlasma | bolunme | birlesme | ittifak | isyan | isgal | son`.
- **Toprak değişimi maddeleri** (`toprak-kazanc`/`toprak-kayip`): `yer` alanında adı geçen şehrin atlasta **yerleşim kaydı** olmalı
  (mevcut ya da senin yeni yerleşimin) ve `taraflar` ilk eleman kazanan. Bu madde, yerleşimin `s:` kırılma günüyle ±30 gün içinde olmalı.
- Kapsam: her polity için kuruluş, hükümdar/hanedan değişimleri (önemliyse), yayılma, kaybedilen/kazanılan topraklar (şehir adıyla),
  büyük savaşlar/antlaşmalar, bölünme/birleşme, gerileme, sona erme. Hedef: polity başına **en az 6–8 kaynaklı madde** (kısa ömürlüyse 3–4);
  mevcut kronolojiyi (girdide sayısı var; `window.DEVLETLER` / `data/kronoloji_cok_*.js`) TEKRARLAMA — önce mevcutu oku, eksiği ekle.
- **Takvim:** ay-güneş/hicrî/Jülyen tarihlerini `VERI-YAPISI.md` TAKVİM bölümüne göre çevir; çevrilemezse yıl/ay hassasiyeti
  (`YYYY-01-01` + `kesinlik:"yil"` + `ic_not`). **Gün yoksa `YYYY-01-01`; yıl bilinmiyorsa yıl YAZMA (maddeyi yazma).** `"1526-08"` biçimi YASAK.
  Üç haneli yıl dolgulu: `0907-…`. MÖ: astronomik yıl (MÖ n → −(n−1)).

### 3) Yerleşim → `denetim/dogu/<küme>/yerlesimler_dogu_<küme>.js`
`window.YERLESIMLER_DOGU_<KÜME> = [ ... ];` Şema `VERI-YAPISI.md` "yerlesimler.js" bölümü; örnek zincirli kayıt: `git show claude/gracious-elion-fa847a:data/yerlesimler_ms1_1281_yeni.js | head -40`.
```js
{ ad:"Kaifeng (Bianzhou)", tur:"sehir", lat:34.797, lon:114.307, g:1, k:2, kur:"0781-01-01", kesinlik:"yil",
  s:[ {f:"0781-01-01", t:"0907-04-01", d:"tang", kesinlik:"yil", kaynak:"..."}, {f:"0907-04-01", t:"0960-01-01", d:"ilk-liang", kesinlik:"gun", kaynak:"..."} ],
  not:"kur: KURULUŞ DEĞİL, İLK YAZILI TANIK — görünme için ALT SINIR (+kaynak)", kaynak:"koordinat: Pleiades <id> + GeoNames <id>" }
```
- **Seçim:** her polity için başkent(ler) + en önemli şehirler (atlasta k≤3 olacak düzey: eyalet/vilayet merkezi, büyük liman/ticaret kenti;
  polity başına ~3–12; küçük/kısa ömürlü polity'de başkent yeter). Önce **mevcut mü?** → `py denetim/dogu/yer_ara.py ad "<ad>"` ve
  `py denetim/dogu/yer_ara.py yakin <lat> <lon> 3` (normalleştirilmiş ad + 3 km). Mevcutsa YENİ KAYIT AÇMA: ad+mevcut zincirin başı
  (`yer_ara.py` çıktısı) ile raporda "YAMA GEREKLİ: <ad> — şu s: önekini ekle" listesine yaz (dosyaya yazma; yama aracı ayrı iş).
- **Koordinat çift tanık:** Pleiades (`C:\Users\user\AppData\Local\Temp\claude\C--atlas\2e265d3a-21c7-47e9-ac13-c26e0cabd3c6\scratchpad\gaz-pleiades\pleiades-places-latest.csv`,
  `…-names-latest.csv`) + GeoNames (`…\gaz-geonames1000\cities1000.txt`, TSV: geonameid, name, asciiname, alternatenames, lat, lon, …, population).
  İkisi birbirinden 5 km içinde olmalı; yoksa kayıt YAZMA (rapora "koordinat doğrulanamadı"). Salt oku; o dizinlere yazma.
- **`s:` zinciri:** yerleşimin var olduğu her dönemde sahibi bir devlet kimliği (`d:`). Kimlik **gerçek `id:`** olmalı:
  `data/devletler.js`'te VAR, ya da senin `kunye_yeni.js`'inde VAR, ya da KUNYE_MS1_DALINDA durumundaki girdi listesinde var.
  Dönemler çakışmaz/ters olmaz/sıfır uzunlukta olmaz. Her dönemin `kaynak:`ı o devir değişimini kanıtlayan kaynak + alıntı.
  `kesinlik` yazılır (`yil` yaygındır; gün biliniyorsa `gun`). Yerleşimin 1281'de başlayan mevcut zincirine bağlanmasın diye son dönemin
  `t`si ya 1281-01-01 (mevcut epok sınırı) ya da gerçek devir günü olsun; **1281 sonrasını YAZMA** (var olan atlas zinciri ona ait).
  Ama yerleşim zaten başka dosyada varsa (yama) yukarıdaki kural geçerli.
- **Sahibi bulunamayan dilim:** boş bırakma — sırayla: ① TDV ② akademik kaynaklar ③ komşu büyük devletlerin ve yerel devletlerin kaynakları
  ④ yerleşim o devirde VAR mıydı? yoksa dönemi kırp; varsa ⑤ bağlı olduğu **abi merkez**in akıbetini izle ve `kaynak:`a
  "ABİ MERKEZ: <merkez> — <bağı gösteren kaynak>" + BEYANLI YAKLAŞIKLIK yaz. Hiçbiri olmuyorsa `d:"__BOSLUK__"` + "BOŞLUK BEYANI: arandı, bulunamadı: …".
  **Beyansız yaklaşıklık, beyanlı boşluktan kötüdür.**
- `kur:` o yerin ilk TARİHLİ yazılı tanığı ya da kuruluşu (kaynaklı); "ilk tanık" ise `not:`ta öyle yaz. Yıl bilinmiyorsa `kur` YAZMA.
- Yerleşim noktası olmayan bölge en yakın peteğe emilir → bir polity'nin merkez noktası yoksa bölgesi boyanmaz. Bu yüzden başkent MUTLAKA yerleşim olarak yazılmalı.

## Kaynak kuralı (CLAUDE.md "Kaynak kuralı" — kısaltılmış, bağlayıcı)
- **Vikipedi tek dayanak olamaz.** Forum/blog/YZ metni/popüler tarih sitesi/YouTube yok.
- Sıra: ① TDV İslâm Ansiklopedisi (`https://islamansiklopedisi.org.tr/arama/?q=<kelime>`; "yok" demeden ara; ölü slug/yanlış madde tuzağına dikkat)
  ② İSAM ③ TTK/Belleten ④ DergiPark/TR Dizin hakemli dergiler ⑤ YÖK tez ⑥ akademik yayınevi monografileri ⑦ **komşu/yabancı akademik kaynak**
  (Çin/Kore/Japon/Hint/Bozkır/Afrika/Amerika için asıl kaynaklar BURADA: Cambridge History of China/Japan/Inner Asia/Africa, Twitchett, Mote, Hucker,
  Coedès, Majumdar, Sircar, Bosworth, Golden, Grousset, Beckwith, Ebrey; ansiklopediler: Oxford Reference, Britannica yalnız yardımcı;
  CrossRef/archive.org/JSTOR özetleri; dergi: T'oung Pao, JAOS, Journal of Asian Studies, Monumenta Nipponica, Journal of African History) ⑧ yayımlanmış belge neşirleri.
- **Alıntıyı birebir sına:** kaynakta okuduğun cümleyi tırnak içinde `kaynak:`a yaz; açmadığın kaynağı "okundu" diye yazma
  (`"atıf; açılmadı"` de). Çelişkide iki kaynağı `ic_not`ta beyan et; TDV esastır (İslâm dünyası için).
- Araçlar: `curl -sL -A "Mozilla/5.0" <url>`, WebFetch, WebSearch (varsa). Çekilemedi ≠ yok. Zaman aşımı → bir kez daha dene, sonra "bulunamadı".
- **Tarih uydurma YASAK.** Emin olmadığın günü `YYYY-01-01`+`kesinlik:"yil"` yap; yıl bile belirsizse maddeyi yazma, raporda "bulunamadı".
- Atlas referans değildir: mevcut dönemler/künye günleri dayanak sayılmaz; çelişirse atlas düzelir (raporla).

## Kendi kendine sınav (bitirmeden ÇALIŞTIR)
1. Üç dosya da `node -e "require('vm')…"` ile yüklenmeli (sözdizimi). Örnek:
   `node -e "const vm=require('vm'),fs=require('fs');const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(process.argv[1],'utf8'),sb);console.log(Object.keys(sb.window))" <dosya>`
2. Her yerleşimde: `s:` dönemleri sıralı, çakışmasız, `f<t`, `d:` kimlikleri geçerli (devletler.js ∪ kunye_yeni ∪ girdi listesi ∪ `__BOSLUK__`).
3. Her `toprak-kazanc/kayip` maddesinin `yer`ı için yerleşim kaydı ve ±30 gün içinde eşleşen `s:` kırılma günü var (ya da raporda neden yok diye açıkla).
4. Hiçbir `YYYY-MM` (gün eksik) tarih yok; üç haneli yıllar `0YYY`.

## Rapor → `denetim/dogu/<küme>/RAPOR.md` (kısa, SAYILARLA)
① ölçülen: polity sayısı / yazılan künye / kronoloji maddesi (polity başına dağılım) / yerleşim (yeni, mevcutla çakışıp atlanan) / `s:` dilimi /
`__BOSLUK__` dilimi / çift tanıklı koordinat sayısı · ② bulamadığın / doğrulayamadığın (polity+konu+denenen kaynaklar) ·
③ kararlar: künye düzeltme önerileri (KUNYE_MAIN_DA), YAMA GEREKLİ listesi, **boya ihtiyacı** (yeni `d:` kimliklerinden `arac/renkler.py BOYALAR`'da olmayanlar —
`py -c "import re;…"` ile ya da dosyada grep'le kontrol et), yeni tür/bölge değeri önerileri.
Rapor SAYI vermeli; "çoğu", "birçok" yazma. Yazmadığın şeyi yazdım deme.

## EK-2 (tur 1 sonrası kararlar — BAĞLAYICI)
1. **Koordinat tanığı:** Pleiades Asya/Afrika/Amerika'yı çoğunlukla kapsamıyor. Çift tanık = iki BAĞIMSIZ kaynak, 5 km içinde: Pleiades / GeoNames
   (`cities1000.txt`) / **Wikidata P625** (`https://www.wikidata.org/wiki/Special:EntityData/<Q>.json`) / **OSM Nominatim**
   (`https://nominatim.openstreetmap.org/search?q=<ad>&format=json`, User-Agent şart, saniyede ≤1 istek) / CHGIS (Çin). Her tanığı `kaynak:`ta
   adıyla ve koordinatıyla yaz. Antik şehrin bugünkü şehirle aynı yer olduğu kaynaklıysa modern şehir merkezi kabul; kazı yeri farklıysa kazı koordinatı.
   Tek tanıkta kalan yer YAZILMAZ (rapora "tek tanık" diye ekle).
2. **Pencere dışı polity:** f..t tümüyle MS 500'den önce ya da 1281'den sonra ise (girdide `tarihsiz` gelenler çoğu böyle) künye/kronoloji/yerleşim YAZMA;
   RAPOR.md'de "pencere dışı: id" listesine koy. Boşuna zaman harcama.
3. **Yama kaydı biçimi (mevcut yerleşime s: öneki):** `denetim/dogu/<küme>/yama_<küme>.js`, `window.YAMA_DOGU_<KÜME> = [{ ad:"<mevcut yerleşim adı AYNEN>", mevcut_zincir_basi:"<devlet> <f>",
   s_onek:[{f,t,d,kesinlik,kaynak}, ...] }]`. Dönemler sıralı, çakışmasız; ilk dilimin `f`i 0500-01-01 (UFUK SINIR İŞARETİ, `kaynak:`ta söyle) ya da gerçek kuruluş; son dilimin `t`si mevcut zincirin
   ilk dönemi `f`ine EŞİT olmalı — eşit değilse (ör. 907→1281 arası başka kümenin işi) `devam_gerekli:"<f> → <t>"` alanı yaz. Aynı yerleşim için başka küme de yama yazabilir; ayrı tut.
4. **Öncelik:** DELIK-ONCELIK.md'deki yerleşimler → k≤3 şehirlerin sahibi polity'ler → büyük hanedanlar → küçük polity'ler. Yeni yerleşimden çok **mevcut yerleşimin zincirini geriye uzatmak** (yama) haritayı doldurur.
5. Sınır maddesi (devir günü) her `s:` kırılması için ±30 gün içinde `kronoloji_sinir_dogu_<küme>.js`'te olmalı (yama dilimleri dahil); `devlet`/`taraflar` kazananı yazar, `yer_id` yerleşimin AYNEN adı.
6. Takvim (ganzhi/ay-güneş → Jülyen): çevirdiysen `ic_not_takvim:` zorunlu; çeviri tutmuyorsa yıl hassasiyeti.
7. Kronoloji `tur` sözlüğüne `siyaset` ve `baskent` da kabul (mevcut dosyalarda kullanılıyor).
8. **YENİ yerleşimin zinciri 1281'de BİTMEZ** (Değişmez 1: var olduğu her günde sahibi olmalı; 1281'de biten zincir 1281 sonrasını DELİK bırakır).
   YENİ yerleşim için `s:` zinciri `kur:`dan **2000-12-31'e kadar** sürekli olmalı (1923-10-29 sonrası `turkiye-cumhuriyeti` gibi gerçek ardıl devlet kimlikleri; atlas
   `data/devletler.js`teki kimliklerle). 1281→2000 kısmı için kaynak/ardıl zinciri zor ise ayrı bir "kuyruk" işçisi yazacak: bu durumda yerleşim kaydına
   `kuyruk_gerekli:"<son t> → 2000-12-31"` alanı yaz (dogrula.js bunu 'beyanlı kuyruk' sayar, ihlal değil); ya da 1281 sonrası kaynaklı biliyorsan zinciri sen tamamla.
   Şehir terk edilip bir daha yerleşilmediyse `bit:"<gün>"` (kaynaklı) yaz. MEVCUT yerleşime yama yazarken bu kural geçerli değil (mevcut zincir 1281'den devam eder).

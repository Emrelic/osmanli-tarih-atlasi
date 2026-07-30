# Oturum 9 — Kimlik sözlüğü: ölçülmüş 4-kümeli fark + Oturum 12/13 birleşik listesi

Bu belge, merkez oturumun "DENETİM + DEVAM GÖREVİ" isteği üzerine üretildi.
`data/kimlikler.js` (devlet ekseni) bu ölçümün üzerine kuruldu.

## 0. Kanonik kimlik kararı — neden DEVLETLER.id, neden harita/BOYALAR id değil

`ETIKETLEME.md §5`'teki örnek harita kimliğini (`avusturya`) kanonik seçiyor.
Ben **DEVLETLER.id'yi** kanonik seçtim (`habsburg` gibi). Gerekçe ölçüldü:

- Bir harita/BOYALAR kimliği **birden fazla DEVLETLER kaydı tarafından
  paylaşılabiliyor** (aynı coğrafya/renk, farklı dönem): `suud` ← 3 kayıt
  (I/II/III. Suûdî), `iran` ← 2 kayıt (afsar, kacar), `sirbistan` ← 2 kayıt
  (sirp-despotlugu, sirbistan-prensligi), `bulgaristan` ← 2 kayıt
  (bulgar-carligi, bulgaristan-prensligi).
- Harita kimliğini kanonik seçmek bu durumlarda `f`/`t` aralığını **tek bir
  dönemde donduracaktı** — tam olarak `ETIKETLEME.md §7`'nin 2. denetiminin
  (anakronizm) önlemeye çalıştığı hata sınıfı. DEVLETLER.id, aksine, projenin
  zaten "DEĞİŞTİRİLMEZ" ilan ettiği tek eksendir ve 213 kaydın hepsinde
  benzersiz.
- Harita kimliği bu yüzden ayrı bir `harita:` alanında tutuldu (devletler.js
  zaten bunu yapıyordu), `kimlikler.js` onu tekrarlıyor + `esad` dizisine de
  ekliyor ki hem "id ile ara" hem "harita kimliğiyle ara" ikisi de aynı kaydı
  bulsun.

Bu, merkez oturumun ETIKETLEME örneğinden bir sapmadır — **bilerek** ve
gerekçesiyle. Merkez oturum ters düşünürse `kimlikler.js`'in üretim betiği
(bu partide elle yazıldı, otomatik değil) kolayca yeniden üretilebilir.

## 1. Dört kümenin ölçülmüş büyüklüğü

```
A. DEVLETLER.id (data/devletler.js)         : 213
B. renkler.py BOYALAR kimliği                : 104
C. ANTLASMALAR.taraf (data/savaslar.js)      : 21 (benzersiz)
D. yerlesimler*.js s:[{d:"..."}] (4 dosya)   : 254 (benzersiz)
```

## 2. Gerçek tutarsızlıklar (canlı veride) — ölçüldü

**H (DEVLETLER.harita) − B (BOYALAR): 0 kırık link.** `devletler.js`'teki
`harita:` alanlarının **hepsi** `renkler.py`'de tanımlı — kırık crosswalk yok.

**B − H: `buhara`, `cagatay`, `hive`, `turkmen`.** İlk üçü DEVLETLER kaydı
VARDI ama `harita:` alanları eksikti — **bu partide düzeltildi**
(`data/devletler.js`, bkz. OTURUM-9-ILERLEME.md). `turkmen` kasıtlı olarak
devletsiz bir dolgu kimliği (`renkler.py` yorumu: "Türkmen boyları çoğu zaman
devletsizdi") — DEVLETLER kaydı açılmaması doğru.

**Canlı `data/yerlesimler.js`'in `d:` kimlikleri (104 benzersiz) → `renkler.py`
ile %100 örtüşüyor.** Sıfır kırık boya referansı. **"108 devlet haritada yok"**
gözlemi (`DURUM.md`) DEVLETLER→BOYALAR yönünde doğru (108 DEVLETLER kaydının
harita karşılığı yok — bunların çoğu zaten dünya kapsamının pencere-dışı
kısımları, Hindistan/Çin/Amerika/Afrika iç kesimleri) ama **BOYALAR→canlı
harita yönünde hiç kırık yok.**

**ANTLASMALAR.taraf (C) → DEVLETLER.id (A): yalnız `osmanli` eşleşmiyor**, ve
bu **kasıtlı** bir tasarım boşluğu (Osmanlı bu ikincil dizinde hiç yok, ana
padişah/dönem akışında tutuluyor — `OTURUM-3-ILERLEME.md`). Görünürde
"habsburg/avusturya" gibi bir *id* uyuşmazlığı **yoktu** — `habsburg`
zaten DEVLETLER.id olarak var. Gerçek tuzak şudur: **`habsburg` (ANTLASMALAR/
DEVLETLER ekseni) renkler.py'de `avusturya` adıyla durur** — biri diğerinden
DEVLETLER.harita crosswalk'ı OLMADAN gidilirse (yani gelecekte biri
`ANTLASMALAR.taraf`'ı doğrudan `renkler.py`'ye karşı arayan bir betik yazarsa)
kayıp yaşanır. `data/kimlikler.js`'in `esad` alanı bunu artık **tek sorguda**
kapatıyor.

**Diğer aynı-yapıdaki çiftler** (hepsi `esad` ile kimlikler.js'e işlendi):
`cenova→ceneviz`, `bosna-kralligi→bosna`, `sirp-despotlugu→sirbistan`,
`sirbistan-prensligi→sirbistan`, `bulgar-carligi→bulgaristan`,
`bulgaristan-prensligi→bulgaristan`, `suud-birinci/ikinci/ucuncu→suud`,
`afsar/kacar→iran`, `milano-dukaligi→milanoduka`,
`sardinya-piyemonte→sardinya`, `atina-dukaligi→atinadukaligi`,
`kibris-krallik→lusignan`, `arnavutluk-iskenderbey→arnavutluk`,
`rodos-sovalyeleri→sovalye`, dört Fetret şehzadeliği (`fetret-*→*-celebi`).

**D (yerleşim `d:`) − B (BOYALAR): 154 kimlik**, ama bunların **tamamı**
arşivdeki/birleştirilmemiş `yerlesimler_avrupa.js` + `yerlesimler_asya.js` +
`yerlesimler_afrika.js`'ten geliyor — canlı `yerlesimler.js`'te SIFIR. Bu,
**Oturum 12 ve Oturum 13'ün kendi ilerleme raporlarında zaten bildirdiği,
bilinen bekleyen iştir**, yeni bir hata değil.

## 3. Oturum 12 + Oturum 13'ün bekleyen kimlik talepleri — birleşik liste

Ölçülen 154'ün dökümü, iki oturumun kendi raporlarıyla çapraz doğrulandı —
**tam örtüşüyor** (üçüncü bağımsız ölçüm, tutarlılık teyidi):

### Oturum 12 (Batı/Kuzey Avrupa, 228 nokta) — 15 kimlik
**Birinci öncelik (9, geniş alan/uzun süre):** `iskocya`, `irlanda`,
`bretanya`, `burgonya`, `kastilya`, `aragon`, `navarra`, `isvicre`, `belcika`.
**İkinci öncelik (6, küçük alan):** `siena`, `ferrara`, `mantua`, `parma`,
`piza`, `luksemburg`.

### Oturum 13 (Hindistan/Çin/Japonya/GD Asya, 344 nokta) — 37 + 98 kimlik
**B — devletler.js'te VAR, renkler.py'de YOK (37):** `abd`,
`ace-sultanligi`, `ayutthaya`, `babur-imparatorlugu`, `behmeni`,
`brunei-sultanligi`, `cungar`, `delhi-sultanligi`, `edo-bakufu`, `goryeo`,
`hollanda-dogu-hint`, `ingiliz-hindistani`, `ingiliz-malaya`, `joseon`,
`kamakura`, `kamboc-kralligi`, `konbaung`, `le-hanedani`, `majapahit`,
`malaka-sultanligi`, `maratha`, `mataram-sultanligi`, `meiji-japonya`,
`meysur`, `ming-hanedani`, `muromachi`, `nguyen-hanedani`, `qing-hanedani`,
`ryukyu`, `sih-imparatorlugu`, `siyam-chakri`, `sulu-sultanligi`,
`tibet-ganden-phodrang`, `toungoo`, `vijayanagara`, `yakub-beg`,
`yuan-hanedani` — **doğrulandı: bu 37'si zaten `data/devletler.js`'te DEVLETLER
kaydı olarak var**, yalnızca `harita:` eksik (bu partide dokunmadım — bunlar
haritanın pencere dışı kaldığı için şu an aciliyeti yok, `CLAUDE.md §6`).
**C — hiçbir yerde yok, YENİ öneri (98):** Hindistan alt kıtası (Sûr, Bengal,
Gucerât, Racput, Dekken beşlisi…), Çin/İç Asya (Kuzey/Güney Ming, Taiping,
Kuzey Yuan…), Japonya/Kore ek dönemleri, GD Asya/Vietnam/takımada devletleri —
tam liste `oturumlar/OTURUM-13-ILERLEME.md`'de.

**Çakışma yok.** İki listenin coğrafyası ayrık (Avrupa / Asya); hiçbir kimlik
her ikisinde birden geçmiyor. Merkez oturumun mesajındaki "Kastilya hem sende
hem Oturum 12'de" örneği **bugün gerçekleşmiş bir çakışma değil** —
`kastilya` ne benim `data/devletler.js`'imde ne başka bir oturumun dosyasında
DEVLETLER kaydı olarak mevcut (ölçüldü: `false`). Bu turda böyle bir kayıt
açmadım — Batı Avrupa'nın ~150 bekleyen kimliği için DEVLETLER kaydı açmak
`yerlesimler_avrupa.js`/`_asya.js`'yi birleştirecek oturumun işidir
(`CLAUDE.md §6`: pencere/parti sırası bozulmadan yeni kayıt açmak erken).

## 4. `data/kimlikler.js` — ne yapıldı, ne yapılmadı

- **213 DEVLETLER kaydının hepsi** `KIMLIKLER.devlet`'te bir girdiye sahip:
  `ad`, `f`, `t`, `bolge`, `harita` (BOYALAR karşılığı varsa), `esad` (yukarıda
  ölçülen alternatif kimlikler).
- **Yalnız `devlet` ekseni dolu.** `cografya`, `kisi`, `devir` eksenleri
  `ETIKETLEME.md §6`'nın sıralamasına göre başka oturumların işi, bu dosyada
  yok — boş obje olarak bile stub'lanmadı (yanlış "hazır" izlenimi vermemek
  için).
- **`index.html`'e bağlanmadı.** Henüz hiçbir tüketici (`js/app.js`) yok;
  `yerlesimler_avrupa/asya/afrika.js` ile aynı durumda — veri hazır, kablo
  entegrasyon oturumunun işi.
- 3 gerçek kırık link (`buhara`, `cagatay`, `hive` → `harita:` eksikti)
  `data/devletler.js`'te düzeltildi, `oturumlar/OTURUM-9-ILERLEME.md`'de
  ayrıca not edildi.

## 5. Sonraki oturuma öneri

1. `arac/renkler.py`'ye Oturum 12'nin 9+6 kimliği eklensin (bu, Avrupa
   partisinin haritaya girmesinin önkoşulu).
2. Oturum 13'ün 37 kimliği için yalnız `renkler.py`'ye satır eklemek yeterli
   (DEVLETLER kaydı zaten var); 98 yeni öneri için önce `data/devletler.js`'e
   kayıt açılmalı (id/ad/f/t/bolge/ozet), sonra `renkler.py`.
3. `data/kimlikler.js`'in `cografya` ekseni için `ETIKETLEME.md §3`'teki ağaç
   yazılabilir — bu, coğrafya kimliklerinin de aynı "çakışma" riskini taşıyıp
   taşımadığını (`kirim` tuzağı gibi) ölçmek için iyi bir sonraki adım.

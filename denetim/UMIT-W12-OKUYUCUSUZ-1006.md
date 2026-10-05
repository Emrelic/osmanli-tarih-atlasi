# UMIT-W12-OKUYUCUSUZ-1006 — okuyucusuz üç veri (SK · IT · O6)

Ağaç: `C:\atlas-w12` (origin/main `8552686e`, detached) · yalnız ölçüm.

## 0. Mühürlü öngörü (ölçümden ÖNCE yazıldı)
- SK: `index.html` yüklüyor; `app.js`te `SAVAS_KUNYE_1` geçişi 0; genel savaş toplayıcısı `SAVASLAR*` önekiyle süzdüğü için düşmüyor.
- IT: yüklü; `ITTIFAK` geçişi app.js'te 0; dinamik toplayıcı da yakalamıyor.
- O6: eşleme `KRONOLOJI_` önekinden sonraki adı küçük harfe çevirip devletler.js id'si ile birebir karşılaştırıyor; tutmayınca "eşlenemedi" basıyor. 16 değişkenin çoğu bölge adı (künye değil) → ≥ 8'i düşük güven.

**Öngörü sınavı:** SK ✓ · IT ✓ · O6 mekanizması ✓. Öngörüde OLMAYAN asıl bulgu: 15 değişkenin 15'inde maddeler `taraflar[]` ile künyelere ZATEN bağlı (§3.3).

**Yöntem:** `index.html`in HTML yorumları atıldı, etkin 70 `data/*.js` betiği node `vm` içinde yüklendi. Yalnız `acilis_siluet.js` `document` istediği için yüklenmedi; bu dosya KRONOLOJI/SAVAS/ITTIFAK değişkeni tanımlamıyor. Eşleme `app.js:14251-14299` birebir kopyalanarak çalıştırıldı.
**Tarayıcı: GÖZLENMEDİ.** Uygulama içi tarayıcı `file://` sayfada konsol okumuyor; sunucu açmak `C:\atlas\.claude\launch.json`a yazmayı gerektirirdi, o da yasak. "eşlenemedi" satırları sayılmadı; benzetimle ölçüldü.

## 1. SK — `data/savas_kunye_1.js` (`window.SAVAS_KUNYE_1`, 20 kayıt)
- **Yükleniyor mu: EVET, paket içinde.** `index.html:1670`deki satır bir `<!-- … -->` dizin yorumunun içinde; içerik `data/paket_26.js`e paketlenmiş. Benzetimde değişken tanımlı çıktı.
- **Okuyan: 0.**
  - `js/*.js` (10 dosya) içinde `SAVAS_KUNYE` geçişi 0.
  - Bütün depoda (`*.js/*.py/*.html`, `denetim` hariç) yalnız kendi dosyası, `paket_26.js` ve `index.html` yorumu geçiyor.
  - `js/*.js`teki bütün `/^…/.test(` desenleri `SAVAS_KUNYE_1` ve `ITTIFAKLAR` adlarına karşı denendi: eşleşme 0. `d_katman.js:245/525` sabit ad listesi okuyor, bu adlar o listede yok.
  - `savasKayitlariniTopla` (`app.js:4390`) yalnız `^SAVASLAR(_…)?$` desenini alıyor. `SAVAS_KUNYE_1` "benzeyen" uyarısına da düşmüyor, çünkü `SAVASLAR` önekiyle başlamıyor. Konsolda iz yok.
- **Bağlansaydı ne görünürdü:**
  - Şemanın bağ alanları `savas_ad`+`savas_t`; bunlar `SAVASLAR` kaydının `ad`+`t` değerleriyle birebir eşleşmek üzere yazılmış.
  - En yakın okuyucu detay kartının **"Muharebe" kutusu** (`app.js:10351-10359`). Kayıt `savaslar` dizisinden bulunuyor; kutuda "karşı taraf · sonuç · dizi" yazıyor.
  - Bağlansaydı bu kutu genişler ya da yanına "Kuvvetler" kutusu gelirdi: taraf başına komutan · mevcut · piyade/süvari/top/tüfek/gemi · kayıp · not.
  - Savaş işareti (`app.js:4467-4485`) yalnız `t, ad, tur, lat, lon, sonuc, sure` okuyor; künyenin bunlarla ilgisi yok.
  - ⚠️ **Tuzak:** dosyayı sadece `SAVASLAR_KUNYE_1` diye adlandırmak YANLIŞ olur. Toplayıcı künyeleri savaş kaydı sanar; künyede `ad`/`lat` yok. İşaret süzgeci onları sessizce eler, `app.js:10352`deki `s.ad.split(" (")` ise TypeError atar. Ayrı bir okuyucu gerekir.
- **Bağ sağlığı:**
  - 19/20 künye tam 1 `SAVASLAR` kaydına bağlanıyor (bütün `SAVASLAR*` toplandı, 175 kayıt).
  - **`kunye-kamanice-1672` 0 kayda bağlanıyor:** `SAVASLAR`ta Kamaniçe kaydı hiç yok.
  - Dosya başlığındaki "SAVASLAR 205 kayıt" sayısı bayat.
- **Eksik `devlet_id`: 7 değil 14 taraf.**
  - `osmanli` künye değil, uygulamanın uzlaşım kimliği (`app.js:85,1001`); kusur sayılmadı.
  - Tasnifteki "7" muhtemelen tek künyeli adaylardır (tablonun ilk 7 satırı).

| künye | taraf | aday (`devletler.js`) | güven |
|---|---|---|---|
| ankara-1402 | Timur'un ordusu | `timurlu` (1370–1507) | yüksek |
| caldiran-1514 | Safevî ordusu | `safevi` (1501–1736) | yüksek |
| mercidabik-1516 | Memlük ordusu | `memluk` (1250–1517-04-13) | yüksek |
| ridaniye-1517 | Memlük ordusu | `memluk` (pencere 04-13'e dek açık) | yüksek |
| kosova2-1448 | Macar ordusu | `macaristan` (1000–1526-08-29) | yüksek |
| mohac-1526 | Macar Krallığı ordusu | `macaristan`, ama pencere sorunu var (aşağıda) | hüküm ister |
| cirmen-1371 | Sırp despotluğu ve krallığı | `sirbistan-nemanjic` (1166–1402); `sirp-despotlugu` 1402'de başlıyor, aday değil | orta |
| nigbolu-1396 · varna-1444 · kosova1-1389 · preveze-1538 · cerbe-1560 · inebahti-1571 · ii-viyana-1683 | koalisyonlar | tek künye **bulunamadı**; çok değerli `devlet_id` şema değişikliği olur | — |

- **Mohaç künye ucu** (yalnız tarif):
  - `macaristan` künyesi `t:"1526-08-29"` ile bitiyor. Ardılları `macaristan-habsburg` ve `dogu-macar-kralligi` `f:"1526-08-29"` ile başlıyor.
  - Pencereler yarı açık: `f <= gün < t` (`app.js:9032/9035/9043`). Yani **savaş gününde `macaristan` YOK, ardılları VAR.**
  - `devlet_id:"macaristan"` yazılırsa taraf künye penceresinin dışında kalır. Ardıl id yazılırsa anakronizm olur: Layoş Habsburg değildi; Ferdinand 1526-12-17'de, Zapolya 1526-11-10'da seçildi (ardıl künyelerin kendi kronolojileri de böyle diyor).
  - Kök neden D206 sınıfı: savaş günü ≠ künye bitişi. `dogu-macar-kralligi`nin `ic_not_f` alanı "gün komşudan: macaristan" diyor, yani uç zincirleme devralınmış.
  - Seçenekler: ① ucu kaynaklı güne taşımak · ② künye bağında ucu kapsayan (`<=`) istisna · ③ Mohaç tarafını `devlet_id`siz bırakmak. Hüküm koordinatörde.

## 2. IT — `data/ittifaklar.js` (`window.ITTIFAKLAR`, 2 kayıt)
- **Yükleniyor mu: EVET, paket içinde.** `index.html:1414` yorum içinde; içerik `data/paket_15.js`te. Dosya başlığındaki "index.html'e bağlanmadı" notu bayat.
- **Okuyan: 0.** `ITTIFAK` geçişleri yalnız metin: `app.js:7096` emoji açıklaması, `suzgec.js:37,266` etiket sözlüğü. Dinamik desen eşleşmesi 0.
- **Şema:** `id, ad, hedef[], f, t, kesinlik{f,t}, t_damga, yer, yer_kon, madde{t,b}, uyeler[{devlet, rol:uye|hami, f, t, kesinlik, kaynak, not}], kaynak, celiski[], not`.
  - `kutsal-ittifak-1594`: 5 üye · `t:null` + `t_damga` "bulunamadı" · 2 çelişki.
  - `kutsal-ittifak-1684`: 5 üye · 1684-03 → 1699-01-26 · 3 çelişki.
- **İçerik sağlığı:**
  - Üye kimliklerinin 10/10'u künyede var; pencere aşımı 0.
  - ⚠️ İlk taramam 3 sahte "aşım" verdi: dizgi karşılaştırmasını `pad()` olmadan yapmıştım (`"756-…" > "1594-…"`, D205 tuzağı). Doldurmalı karşılaştırmayla aşım 0.
  - Tetik maddeleri kronolojide var: `1594-08-28` (`olaylar_ek10.js:248`) · `1684-03-05` (`olaylar_ek3.js:34`, ayrıca habsburg/lehistan/venedik).
- **Bağlansaydı ne görünürdü:** başlığın tarifi: Osmanlı'yı dolanan ip + rozet + tek seferlik animasyon (P14). Tetik `madde.t` olurdu; üye renkleri `uyeler[].devlet`ten, giriş/çıkış `uyeler[].f/t`den gelirdi (1594: Erdel 02-01, Boğdan 08-16). Benzer bir çizim okuyucusu **bulunamadı**; en yakın desen `SEFERLER` ok katmanı (`app.js:5227`).

## 3. O6 — eşlenemeyen `KRONOLOJI_*`
### 3.1 Mekanizma
- **`derinKronolojiBindir`** (`app.js:14251-14299`):
  - `window`daki `KRONOLOJI_` önekli anahtarları tarıyor; `KRONOLOJI_(SINIR|COK)_*` hariç.
  - Aday id: `KRONOLOJI_ID_OZEL[anahtar]` (bugün boş, `app.js:14250`), yoksa önekten sonrası küçük harfle. Alt çizgi varsa `_`→`-` çevrilmiş hâli ikinci aday.
  - `DEVLETLER`de birebir `id` aranıyor. Bulunursa künyenin `.kronoloji` alanı `=` ile **değiştiriliyor**.
  - Bulunamazsa `eslenmeyen` listesine giriyor. **Konsol satırı `app.js:14298`deki `console.warn`dan geliyor:** `Atlas: KRONOLOJI_* eşlenemedi — <ANAHTAR> → "<aday>" (DEVLETLER'de böyle id yok)`.
- **`cokTarafliKronolojiEkle`** (`app.js:14306-`):
  - Yalnız `KRONOLOJI_(SINIR|COK)_*` desenini alıyor.
  - Maddeyi `taraflar[]` (yoksa `devletler[]`, o da yoksa `devlet`) listesindeki her künyeye **EKLİYOR**; ezmiyor, aynı t+b'yi atlıyor.
  - Taraflarsız madde (`ids=[]`) sessizce geçiyor.

### 3.2 Sayım: 15 değişken · 2084 madde (tasnif 16 · 2059 diyordu)
- Benzetimde **15 değişken, 2084 madde** eşlenmiyor; değişken içinde t+b ikizi 0.
- Fark: kaynak rapor (`ODAK-OLC-KOR-NOKTA-1005 §3b`) başka bir commit'te ölçüldü ve 102 t+b ikizini ayıkladı. Bugünkü main'de (`8552686e`) sayılar büyümüş (ANADOLU 273→281, DOGU_AFRIKA 217→218 …).
- **16. değişken bu ağaçta bulunamadı.**

### 3.3 Asıl bulgu: maddeler künyeye zaten bağlı
- 15 değişkenin 15'inde maddeler `taraflar[]` taşıyor. `taraflar`ı dolu madde **1698/2084**; **taraflarsız 386**.
- Kırık taraf kimliği **0**.
- Madde tarihi, tarafının künye penceresinde (doldurmalı karşılaştırma): **1698/1698**.
- Hedef künye **86**; 86'sının da kendi kronolojisi dolu. Tek-künye `=` bindirmesi onları EZERDİ.

### 3.4 Aday tablosu
Tek künye adayı = `derinKronolojiBindir`in istediği birebir id. Zorla eşleme yapılmadı.

| değişken | madde | paket | taraflı | baskın taraflar (farklı id) | tek künye adayı | gerekçe | güven |
|---|---|---|---|---|---|---|---|
| `KRONOLOJI_ANADOLU` | 281 | 12 | 253 | selcuklu 83 · karaman 45 · artuklu 41 · dulkadir 33 (6) | **bulunamadı** | bölge adı | — |
| `KRONOLOJI_DOGU_AFRIKA` | 218 | 12 | 190 | habesistan 76 · adal 28 · svahili-sehirleri 28 · somali 28 (7) | **bulunamadı** | bölge; habesistan %35 | düşük |
| `KRONOLOJI_ORTA_ASYA` | 205 | 12 | 136 | kazak-hanligi 43 · kazan 28 · sibir-hanligi 19 · nogay 12 (10) | **bulunamadı** | bölge | — |
| `KRONOLOJI_ITALYA_SEHIR` | 186 | 12 | 170 | cenova 111 · ferrara 36 · siena 23 (3) | **bulunamadı** (cenova %60) | üç şehir devleti | düşük |
| `KRONOLOJI_BALKAN` | 177 | 12 | 125 | yunanistan 48 · karadag 32 · bosna-kralligi 16 · zeta 11 (7) | **bulunamadı** | bölge | — |
| `KRONOLOJI_IRAN_ARDILLARI` | 155 | 12 | 108 | ilhanli 41 · serbedariler 20 · celayirli 17 · muzafferi 14 (8) | **bulunamadı** | ardıllar kümesi; `iran` künyesi 1925 sonrası | — |
| `KRONOLOJI_GUNEY_ASYA` | 153 | 12 | 133 | racput 33 · sind 28 · nepal 28 · travankur 18 (9) | **bulunamadı** | bölge | — |
| `KRONOLOJI_CIN` | 136 | 09 | 124 | qing-hanedani 64 · ming-hanedani 42 · yuan-hanedani 11 · cin-cumhuriyeti 8 (4) | **bulunamadı** | hanedan zinciri; `cin` id yok | — |
| `KRONOLOJI_HINDISTAN` | 131 | 09 | 101 | babur-imparatorlugu 56 · delhi-sultanligi 22 · maratha 4 · meysur 4 (13) | **bulunamadı** (babur %43) | bölge | düşük |
| `KRONOLOJI_MISIR` | 120 | 11 | 111 | misir-kavalali 83 · misir-eyaleti 27 · misir-sultanligi 1 | `misir-kavalali` | %69 baskın, ama 27 madde 1805 öncesi ve onun penceresine sığmıyor | orta |
| `KRONOLOJI_KUZEYAFRIKA` | 83 | 12 | 65 | merini 20 · sadi 18 · zeyyani 12 · hafsi 9 (5) | **bulunamadı** | bölge | — |
| `KRONOLOJI_OZBEK` | 73 | 11 | 61 | buhara 34 · hive 16 · hokand 11 | **bulunamadı** | üç hanlık; `ozbek` id yok | — |
| `KRONOLOJI_JAPONYA` | 71 | 11 | 62 | meiji-japonya 25 · edo-bakufu 19 · muromachi 8 · azuchi-momoyama 8 (5) | **bulunamadı** | dönem zinciri; `japonya` id yok | — |
| `KRONOLOJI_ARABISTAN` | 60 | 12 | 43 | yemen-zeydi 24 · umman 19 | **bulunamadı** | iki devlet | — |
| `KRONOLOJI_SIRBISTAN` | 35 | 12 | 16 | sirbistan-prensligi 7 · sirbistan-eyaleti 4 · sirp-despotlugu 2 · sirbistan-kralligi 2 (5) | **bulunamadı** | Sırp künyeleri 5 parçalı, `sirbistan` id yok; 19 madde taraflarsız | — |

Özet: tek künyeye meşru birebir eşleme 0/15. En yakın aday `MISIR`, orta güvenle.

### 3.5 Bağlama modeli seçenekleri (ÖNERİ; seçim koordinatörde/Emre'de)
- **(a) Çok taraflı ekleme:** desen genişletilir ya da değişken `KRONOLOJI_COK_<…>` diye adlandırılır.
  - Kazanç: 1698 madde, kendi künyelerine ezmeden eklenir. Veri hazır (kırık 0, pencere 1698/1698).
  - Kalan: **386 taraflarsız madde** yine görünmez; ekleyici onları sessiz geçiyor, sayaç gerekir.
  - Yan etki: 86 künyenin kronolojisi büyür. Ölçülmedi, adı konuyor: §9 odak kapısının tavanları oynayabilir.
- **(b) Bölge sekmesi:** "anadolu" gibi künye olmayan adlar için ayrı bölge listesi.
  - Kazanç: 386 dahil hiçbir madde kaybolmaz.
  - Bedel: yeni arayüz bileşeni; aynı madde iki yerde görünür.
- **(c) En yakın künyeye `KRONOLOJI_ID_OZEL`:** önerilmez. Meşru tek künye 0/15 ve `=` bindirmesi 86/86 dolu kronolojiyi ezer.
- **(d) Hiçbiri:** beyanlı borç olarak bırakmak. `odak_olc`un bunları "temiz" sayması ayrıca O3'ün işi.
- **Önerim (seçim değil):** (a), taraflarsız 386 madde için sayaçla birlikte. (b) ancak bölge anlatısı kapsam kararıyla istenirse.

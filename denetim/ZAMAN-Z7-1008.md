# ZAMAN-Z7-1008 — KRONO-DIZIN: 1281 öncesi + 1923 sonrası kronoloji maddeleri ve dizin kartları

Oturum: ZAMAN-Z7-KRONO-DIZIN-1008 (UMIT) · 8 Ekim 2026 · görev: UMIT İRTİBAT · ağaç `C:\atlas-z7` @ `origin/makine/umit` e28edfdc

## ① ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE yazıldı (bu bölüm sonra değiştirilmedi)
- 7 `kronoloji_cok_once1281_*` dosyası: toplam ~1.200-1.800 madde; 8 dosyanın 8'i index.html'de yüklü.
- Taraf kimliği eşlenemeyen: ~0-30 (kampanya kapısı vardı ama künye önerileri devletler.js'e kısmen indi).
- 🔴 Ana risk PENCERE SINAVI (`app.js cokTarafliKronolojiEkle` ②): künyenin `f`i geri çekilmediyse 1281 öncesi madde o künyeye İNMEZ.
  Öngörü: once1281 madde×künye çiftlerinin %15-35'i pencere dışı; HİÇBİR künyeye inmeyen (görünmez) madde %5-20.
- `kronoloji_cok_1923_1945` (500): eşlenemeyen 0, pencere dışı çift %3-10 (künye `t` 1923'te kesik kalanlar), görünmez madde ≤ 15.
- Değişmez 2 evreni: `denetle.py` bu 8 dosyayı evrene ALMIYOR (evren olaylar* + kronoloji_sinir*). SONRA1923-KAPI-EVREN-1004 alınırsa 2t +67 / mükerrer +88 ölçmüştü — bugün aynısı ±5.
- Odak (`odak_olc.py`): 1923_1945 500/500 konumlu (1004 ölçümü); once1281 dosyaları ODAKSIZ ~%10-30.
- Eksik büyük olaylar: Malazgirt, Miryokefalon, Kösedağ, Bağdat 1258, Ayn Câlût VAR (anadolu/ortadoğu dosyaları); Haçlı seferlerinin bir kısmı VAR; Montrö/Hatay 1939 VAR; Lozan VAR (çekirdek olaylar*'da). Eksik çıkacaklar: II. Dünya cephe ayrıntıları azınlık.
- Dizin: `app.js` dizin penceresi `BASLANGIC/BITIS` (1281/1923) ile kırpılıyorsa 1281 öncesi tarih SEÇİLEMEZ ⇒ kartlar hiç test edilemez (Z2 işi).

### Öngörü değerlendirmesi (ölçümden sonra)
- Madde sayısı 963 (once1281) + 16 (500_1000) + 500 → öngörünün altında (~1.200-1.800 demiştim; 7 dosya 963).
- Eşlenemeyen 0 ✓ (aralığın alt ucu).
- 🔴 Pencere dışı %15-35 → **%0,07 (2/2682)** — ÇÖKTÜ, lehte: künye `f`leri kampanyada geri çekilmiş. Görünmez %5-20 → **1/963**.
- 1923_1945 pencere dışı %3-10 → **0** ✗ (künye `t`leri 1945'e uzatılmış).
- Evren dışı ✓ · 2t +67 ✓ (birebir) · mükerrer +88 → +84 ✓.
- Odak ODAKSIZ %10-30 → **%32,4** (312/963) — üst sınırın biraz üstü.
- Eksik olay: "II. Dünya azınlık" ✓ (3 cephe/kurum olayı), ama öngörmediğim Türkiye çekirdeğinde 1 (Şeyh Said) ve komşuda 2 (İran 1941, Irak 1932) YOK çıktı.
- Dizin: kırpma ✓ — ama ufuk açılmadan da ÖLÇÜLEBİLDİ (kod okumasıyla), "test edilemez" hükmü fazla karamsardı.

## §0 Önceki ölçümler — Z7 kalemine dair söyledikleri (mükerrer kapısı)
- `KRONO-BOSLUK-0930`: 15 bölgesel `KRONOLOJI_<BÖLGE>` dosyasında 2.084 madde yüklü ama künyeye bağsızdı → 6 Ekim `KRONOLOJI-COK-1006` ile `derinKronolojiBindir` eşleyemediğini çok taraflı yola yönlendiriyor (app.js 14779-14920). Bugün bu sınıf KAPALI.
- `ONCE1281-KAMPANYA-ORTAK §1-2`: künye önce, sonra `KRONOLOJI_COK_ONCE1281_*` + `taraflar[]`; 7 dosya o kampanyanın ürünü.
- `KRONO-1923-1945-0930`: 500 madde · eşlenemeyen taraf 0 · 106 künye · gün/yıl 459/41 · 140 "bulunamadı" kalemi (gün veren kaynak yok).
- `SONRA1923-SAYIM-1004`: 1923_1945 dosyası index.html'de YÜKLÜ; odak 500/500 konumlu.
- `SONRA1923-KAPI-EVREN-1004`: 1923_1945 Değişmez 2 evrenine alınırsa 2/2s/2i KAPANAN 0 · 2t +67 · mükerrer +88; iki kör nokta: 2t'nin `isg:` aynası yok, 2t d/v/s havuzu YERSİZ.
- `ONCE1281-2I-MADDE-1005`: 2s TARAF kolu başlıkta geçen devlet adıyla sahte kapanış üretebiliyor (Lviv↔Gdańsk) — yeni madde yazarken başlıkta alakasız devlet adı geçmemeli.
- Bugünden farkı aşağıda ölçüldü; 1923_1945 için 1004 ölçümü bugünkü veride yeniden sayıldı (tutuyor: 2t +67, mükerrer +84).

## ② NE ÖLÇTÜM (ağaç e28edfdc · araçlar scratchpad'de: bag.js · kalite.js · evren.js · dizin.js · evren2.py · olay.js)

### A. Bağlanma — app.js `cokTarafliKronolojiEkle` mantığı birebir (pencere sınavı dahil), gerçek devletler.js (896 künye)
```
dosya                         madde  index.html  inen  GÖRÜNMEZ  taraf-çifti  pencere-dışı  künyesiz-taraf  künye
1923_1945                       500   ✓ yüklü     500      0        1115           0              0          106
once1281_afrika                  52   ✓            52      0          68           0              0           14
once1281_anadolu                175   ✓           174      1         322           1              0           49
once1281_avrupa                 272   ✓           272      0         435           0              0           55
once1281_dogu_asya               73   ✓            73      0         103           0              0           24
once1281_hint_amerika            51   ✓            51      0          68           0              0           26
once1281_iran                   169   ✓           169      0         269           1              0           41
once1281_ortadogu               171   ✓           171      0         302           0              0           45
TOPLAM                         1463              1462      1        2682           2              0
```
- **Görünmez 1:** `1205-01-01 Marco Sanudo Nakşa adasını ve çevresini ele geçirdi` → tek tarafı `naksa-dukaligi`, künye `f:1207-01-01` ⇒ İNMEZ. Z3'e: künye `f` mi geri çekilmeli, madde mi (sınıflandırma §3.5 — bu oturum karar vermedi).
- **Pencere dışı çift 2:** yukarıdaki + iran dosyasında `1218-01-01` maddesinin `karahitay` tarafı (künye `t:1211-01-01`) — madde öteki tarafına iniyor; Karahitay'a inmemesi doğru olabilir (1211 Küçlüg gaspı). Bilgi.
- Ek bulunan dosya: `kronoloji_cok_500_1000.js` (16 madde, hepsi 1281 öncesi, yüklü, odak 16/16) — görevde sayılmamıştı, evren kararına dahil edilmeli.
- Ufuk dışı madde taşıyan BÜTÜN dosyalar (`evren.js`, 34 dosya): **1281 öncesi 1.202 madde · 1923-10-29 sonrası 509 madde**; ayrıca künye-içi `kronoloji[]` 521 / 139.

### B. Kalite
```
                       gün tam   YYYY-01-01   kuşak dışı   TDV kaynaklı   Vikipedi  kaynaksız  tur/onem/dunya  3-haneli t
1923_1945               500/500      50            0          93/500         0         0         500/500           0
once1281_afrika          52/52       46            1 (900)    50             0         0          52               1 🔴
once1281_anadolu        175/175     154            0         158             0         0         175               0
once1281_avrupa         272/272     192            0          57             0         0         272               0
once1281_dogu_asya       73/73       72            1 (981)    12             0         0          73               1 🔴
once1281_hint_amerika    51/51       51            4          7              0         0          51               0
once1281_iran           169/169     146            0         169             0         0           0 ⚠️            0
once1281_ortadogu       171/171     114            0         171             0         0         171               0
```
- 🔴 **3 haneli yıl (pad yok) 2 madde:** `900-01-01` (afrika, Mapungubwe) · `981-01-01` (dogu_asya, Bạch Đằng). Sonuçları ÖLÇÜLDÜ:
  ① `denetle.py gun_no()` **ÇÖKÜYOR** (`ValueError: int('900-')`) — dosyalar Değişmez 2 evrenine alındığı an `denetle.py` koşamaz (evren2.py ilk koşusu tam bunu verdi).
  ② `app.js listeCiz` ve `cokTarafliKronolojiEkle` sonrası sıralama dizgi karşılaştırması ⇒ bu iki madde künye listesinde 1xxx'lerin SONUNA düşer.
  Çare veride: `0900-01-01` · `0981-01-01` → `ZAMAN-Z7-1008-PAD.diff`. Ayrıca künye-içi kronolojide 47 madde ve 64 künyenin `f`i 3 hanelidir (`bizans:330-05-11` …) — Z3 / Z1'e (gun_no `pad`siz).
- Kuşak dışı: hint_amerika'da `1767-01-01` ve `1815-01-01` (Tahiti) — 1281 öncesi dosyasında 1767/1815 maddesi YANLIŞ DOSYADA (künyeye iniyor; yalnız dosya adı yanlış). `0985`/`0988`/`900`/`981` 1000'den önce: ufuk 1000'den başlarsa bu 4 madde ufuk DIŞINDA kalır (Z1'e bilgi).
- ⚠️ `once1281_iran` 169 maddenin HİÇBİRİNDE `tur/onem/dunya/kapsam` yok (`k:` var). EK sekmesinde varsayılan eşik 4 (`index.html:479`), puansız madde 3 sayılır (app.js:15339) ⇒ iran dosyası EK olarak varsayılanda HİÇ görünmez. (Eşik 4'te görünür: 1923_1945 74/500, once1281 toplam 21/963 — öteki dosyalarda bu bir tasarım sonucu, iranda puan YOKLUĞU.) Puan editoryal karardır, uydurmadım — öneri §④.
- Odak (`py arac/odak_olc.py`, tarayıcı evreni 314 betik): 1923_1945 500/500 konumlu ✓ · 500_1000 16/16 ✓ · once1281 **ODAKSIZ 312/963**: anadolu 74 · avrupa 91 · ortadogu 52 · hint_amerika 45 · iran 32 · dogu_asya 18 · afrika 0. →yabancı 0. ⚠️ odak_olc'un kendi notu: 1281 öncesi madde kamera için 1281'e kıstırılır — ODAKSIZ sayısı ufuk açılınca değişebilir; tavan kararı ufuk açıldıktan sonra (§3.4 ⓪: yazıldığı anda ölçülür).

### C. Değişmez 2 evreni — `denetle.py`nin GERÇEK işlevleri (import; main() çağrılmadı; dosya yazılmadı)
- `olaylari_yukle()` (denetle.py:1153) evreni = `olaylar*.js` + `kronoloji_sinir*.js`. **8 dosyanın HİÇBİRİ evrende DEĞİL.** O iki glob'da 1281 öncesi madde **0**, 1923 sonrası **1**.
- Ufuk sabitleri `degismez2` içinde ÇIPLAK DİZGİ: `denetle.py:1849` (`d <= "1281-01-01" or d >= "1923-10-29"`), ayrıca `:3655`, `:3662` (D8) ve `ATLAS_SONU:2629` · `ATLAS_BASI:2706`. (Z1'in kalemi.)
```
                                O     D2 kır/açık  2s kır/AÇIK  2s kapsam-dışı/yıl  2i kır/açık   2t          mükerrer
UFUK BUGÜN  evren bugün       2207    624/0       1722/185        791/165          171/1        13          95
UFUK BUGÜN  +1923_1945        2707    624/0       1722/185        791/165          171/1        80 (+67)    179 (+84)
UFUK BUGÜN  +once1281(+500)   3186    624/0       1722/185        791/165          171/1       352 (+339)   133 (+38)
UFUK BUGÜN  +ikisi            3686    624/0       1722/185        791/165          171/1       419 (+406)   217 (+122)
UFUK AÇIK*  evren bugün       2207    626/0       1725/186        791/167          172/1        13          95
UFUK AÇIK*  +ikisi            3686    626/0       1725/186        791/167          172/1       416 (+403)   217
* AÇIK = yalnız :1849 dizgileri 1000-01-01 / 1945-09-02 yapıldı (Z1 simülasyonu, kaynak metni bellekte).
  once1281 satırlarında 2 madde bellekte 0900/0981'e pad'lendi — aksi hâlde gun_no çöküyor.
```
Okuma:
1. **Bugün evrene almak hiçbir AÇIK kapatmaz ve açmaz** — ufuk içinde bu maddelerin karşısında kırılma yok. Yük AYNADA: 2t +406 (339'u 1281 öncesi toprak etiketli madde), mükerrer +122.
2. **Ufuk açılınca kırılma havuzu neredeyse BOŞ:** D2 +2 · 2s +3 · 2i +1 kırılma; bunların 1'i 1281 öncesi, 0'ı 1923-10-29'dan sonra ⇒ geri kalanlar TAM `1281-01-01` / `1923-10-29` günleridir (`kir` güne göre anahtarlı; bugün `<=`/`>=` ile dışarıda). Yani **pencere uçları kırılma sayılmaya başlıyor**; 2s AÇIK 185→186'nın +1'i de bunlardan biri olmalı (çıkarım — anahtar listesini basmadım). ⇒ Z1'e: eski uç günler (1281-01-01 · 1923-10-29) SINIR İŞARETİDİR (§4, D210); ufuk açılırken bu iki gün evrenden muaf tutulmalı ya da üzerlerindeki uç dönemler birleştirilmeli, yoksa 1923-10-29'daki 3.632 noktalık uç (app.js:97 yorumu) dev bir sahte "kırılma" olur.
3. **±30 gün kuralı yeni maddeler için çalışır MI:** işlevsel olarak EVET (gun_no pad'den sonra), ama bugün sınayacağı kırılma YOK — 1281 öncesi/1923 sonrası `s:`/`isg:` kırılmalarını Z5/Z6 yazdıkça doğacak. **Evren bu dosyalarla kırılmalardan ÖNCE genişlemeli**, yoksa her yeni kırılma 2s'te AÇIK doğar (SONRA1923-KAPI-EVREN §2'nin hükmü, şimdi iki yön için).
4. 2t +339 (1281 öncesi) "borç" değil, Z6 kırılmalarının BEKLEME LİSTESİDİR. Tavan beyanı yapılırsa LİSTE olarak (`KIRILMASIZ-DEFTERI` biçimi) — sayı değil (§3.4 ⑤).
5. SONRA1923-KAPI-EVREN'in iki kör noktası (2t `isg:` aynası yok · 2t d/v/s havuzu yersiz) bugün de duruyor — 1281 öncesinde de aynı şekilde ısırır (yersiz havuz: Z6'nın Bizans kırılması bir Çin maddesini kapatır).

### D. Eksik büyük olaylar (madde metni + tarih penceresiyle; bütün kronoloji*/olaylar* + künye-içi; şüpheliler ±5 günle yeniden aranıp kesinleştirildi)
VAR: Dandanakan · Hastings · Malazgirt · Toledo 1085 · I. Haçlı (İznik 1097, Antakya 1098, Kudüs 1099) · Zengî'nin Urfa'yı alışı 1144 · II. Haçlı (1147) · Katvân 1141 · Miryokefalon · Hıttîn · Kudüs 1187-10-02 · Akkâ 1191 · IV. Haçlı 1204 · Las Navas · Magna Carta · Cengiz 1206 · Moğol-Harezm · Yassıçemen · Babaî 1240 · Kiev 1240 · Muhi 1241 · Kösedağ · Memlûk 1250 · Bağdat 1258 · Ayn Câlût · İstanbul 1261 · Cumhuriyet · Hilâfet 1924 · Ankara Antl. 1926 · Mançurya · Suudi 1932 · Balkan Antantı · Habeşistan · Montrö · İspanya İç Savaşı · Sâdâbâd · Marco Polo · Anschluss · Hatay 1938-09-02 ve 1939-06-23 · Münih · Atatürk'ün vefatı · Çek işgali · Arnavutluk 1939 · Molotov-Ribbentrop · Polonya · Üçlü İttifak 1939-10-19 · Kış Savaşı · Compiègne · Yunanistan 1941 · Türk-Alman Paktı · Barbarossa · Pearl Harbor · Stalingrad · Lübnan 1943 · Normandiya · Yalta · Türkiye'nin savaş ilânı · Almanya'nın teslimi · Hiroşima · Japonya'nın teslimi.

**YOK (9 + 1 kapsam dışı):**
| öncelik | olay | gün | künye |
|---|---|---|---|
| 1 Türkiye | Şeyh Said İsyanı | 1925-02-13 | `turkiye-cumhuriyeti` |
| 2 komşu | İran'ın İngiliz-Sovyet işgali | 1941-08-25 | `iran` · `ingiltere` · `sovyet-rusya` |
| 2 komşu | Irak'ın Milletler Cemiyeti'ne girişi (mandanın sonu) | 1932-10-03 | `irak-kralligi` |
| 3 İslâm dünyası | Gazneli Mahmud'un Somnat seferi | 1026 | `gazneli` |
| ~~3~~ | ~~Celâleddin Hârizmşah'ın ölümü~~ — **VAR** (künye-içi, yıl hassasiyetli; §②b düzeltmesi) | 1231 | `harizmsah` |
| 4 dünya | Doğu-Batı kiliselerinin ayrılığı | 1054-07-16 | `bizans` · `papalik` |
| 4 dünya | Midway | 1942-06-04 | `meiji-japonya` · `abd` |
| 4 dünya | II. El Alameyn | 1942-10/11 | `ingiltere` · `italya` · `almanya` |
| 4 dünya | BM Antlaşması | 1945-06-26 | çok taraflı |
| — | Ankara'nın başkent oluşu | 1923-10-13 | ufuk İÇİ (Osmanlı çekirdeği `olaylar*`) — Z7 kapsamı dışı, koordinatöre bilgi |

### E. Dizin (index) kartları — app.js kod okuması (Z2'ye bulgu olarak iletildi; arayüze dokunulmadı)
1. 🔴 `tarihAyarla` (app.js:10287) `[BASLANGIC, BITIS]`e SESSİZCE KIRPAR. Devlet dizini satırı `tarihAyarla(gunIdx(d.f))` (app.js:9660): **137 künye tamamen 1281 öncesi** → tık 1281-01-01'e götürür (devlet o gün YOK) · **141 künye** 1281 öncesi başlayıp sarkıyor → kuruluşu değil 1281'i gösterir · **17 künye f > 1923-10-29** → tık 1923-10-29'a (devlet henüz YOK). Kullanıcıya kırpma söylenmiyor.
2. Kronoloji paneli `gezGit` (app.js:15376) aynı kırpma: 1.202 + 521 madde 1281'e, 509 + 139 madde 1923-10-29'a uçar; `birlesikGuncelle` bu maddeleri hep "geçmiş" boyar.
3. `kartCiz` (devlet kartı) `(d.f||"").slice(0,4)`: 3 haneli `f` taşıyan **64 künyede** "330- – 1453" gibi bozuk yazı.
4. `listeCiz` (tek devlet listesi) `localeCompare` dizgi sırası, `cokTarafliKronolojiEkle` de dizgi sırası ⇒ 3 haneli `t` (künye-içi 47 + dosya 2) yanlış sırada; `odakSirali` ⏭/⏮ ve vurgu `gi` ile okunuyor ⇒ sıra monoton değilse vurgu kayar (kod okuması, tarayıcıda ölçülmedi).
5. Şehir dizini: `sehirler` sekmesi yalnız `d/v` (Osmanlı) — yeni yıllarda değişen bir şey yok. `yerlesimler` sekmesi `s/isg` dahil hepsini gösterir; `data/yerlesimler.js`te bugün f<1281 dönem 0, f>1923-10-29 dönem 0 ⇒ gösterilecek veri Z5/Z6'dan gelecek. Sıralama `a.f < b.f` dizgi — 3 haneli yıl yazılırsa aynı kusur; tık yine `tarihAyarla` ile kırpılır.
6. `gunIdx` (app.js:15) `Date.UTC(+y,…)` 0-99 yıllarını 1900'e kaydırır (`kronoGun` bunu düzeltmiş, `gunIdx` düzeltmemiş). 1000+ ufkunda zararsız; ilk yüzyıla/MÖ'ye inilince kusur.

## ②b YAZILAN MADDELER — `ZAMAN-Z7-1008-MADDE.diff`
🔴 Düzeltme: §D'deki "Celâleddin Hârizmşah'ın ölümü YOK" YANLIŞTI — künye-içi `harizmsah` kronolojisinde `1231-01-01 Celâleddin Hârizmşah Âmid dağlarında öldürüldü; hânedan yıkıldı` VAR; arama penceresini 1231-08-15 ±30 gün kurmuştum, madde yıl hassasiyetli (`-01-01`) olduğu için kaçtı. Yıl hassasiyetli maddeyi gün penceresiyle aramak bu sınıfı sessizce "YOK" yapar. YOK listesi 9 → 8.

**ÖNGÖRÜ (ölçümden ÖNCE):** 4 maddeden hiçbiri toprak etiketi taşımıyor ⇒ evrene alınırsa 2t 419 → 419; D2/2s/2i ufuk içi kırılmaya ±30 gün yakın değiller (1925-02 / 1932-10 / 1941-08 — 1923 sonrası kırılma yok) ⇒ değişmez; mükerrer 217 → 217..219 (İran işgali ↔ 1941-09-16 tahttan çekilme künye-içi O evreninde değil; Faysal 1932 ↔ olası Irak maddeleri). Odak: 4/4 konumlu (3 yer_id + Somnat yer_kon), ODAKSIZ değişmez.

| t | dosya | başlık | taraflar | kaynak (TDV, birebir cümle `kaynak:` alanında) |
|---|---|---|---|---|
| 1925-02-13 | 1923_1945 | Şeyh Said isyanı başladı | turkiye-cumhuriyeti | `seyh-said` (Z. Kurşun) |
| 1932-10-03 | 1923_1945 | Irak Milletler Cemiyeti'ne kabul edildi; İngiliz mandası sona erdi | irak-kralligi | `faysal-i` |
| 1941-08-25 | 1923_1945 | İngiliz ve Sovyet birlikleri İran'ı işgal etti | iran · ingiltere · sovyet-rusya | `iran` |
| 1026-01-08 | once1281_iran | Gazneli Mahmud Somnat Kalesi'ni fethetti | gazneli | `mahmud-i-gaznevi` · `gazneliler` |
Kapılar: `node --check` 2/2 ✓ · bağlanma 4/4 iniyor, görünmez 0, künyesiz taraf 0, pencere dışı 0 · yeni küresel ad 0 (var olan dizilere eklendi) · `odak_olc`: 1923_1945 503/503 konumlu, iran ODAKSIZ 32→32 · `git apply --check` tek başına ve PAD'den sonra ✓ · CR 0.
Biçim: her madde kendi dosyasının deseninde (1923_1945 çıplak anahtar + tur/onem/dunya/kapsam; iran JSON + `k`). `onem/dunya` değerleri benim editoryal önerimdir (dosyadaki benzer maddelere göre: Hilâfet 4/4, Ankara Antl. 4/3).
Toprak etiketi KASTEN yok: Şeyh Said iç isyan · Irak statü · İran işgal (`isgal` etiketi; haritada `isg:` yok — Z5'i bekler) · Somnat akın.
Taraf disiplini: Irak maddesinde başlıkta "İngiliz" geçtiği hâlde `ingiltere` tarafı EKLENMEDİ (ONCE1281-2I-MADDE-1005'teki 2s TARAF sahte kapanış sınıfı).
Yazılmayan (öncelik 4, TDV dışı kaynak ister): 1054 kilise ayrılığı · Midway · El Alameyn · BM Antlaşması.

**ÖLÇÜM (PAD + MADDE uygulanmış, evren +ikisi, ufuk bugün, `evren2.py`):** O 3690 · D2 624/0 · 2s 1722/185 · 2i 171/1 · **2t 419 → 419** · **mükerrer 217 → 217** ⇒ öngörü ✓ (mükerrer alt ucu). Maddeler hiçbir kapıyı oynatmıyor.

## ③ NE BULAMADIM / ÖLÇMEDİM
- 2s AÇIK +1'in (ufuk açılınca) hangi gün olduğu: anahtar listesini basmadım — "uç gün" hükmü yapısal çıkarım.
- Mükerrer +122'nin kaçı sahici: triyaj yapılmadı (1004'teki +88 de yapılmamıştı).
- Dizin bulguları tarayıcıda koşturulmadı (kod okuması).
- `ic_not_*` dışındaki kaynak cümlelerinin birebirliği bu turda örneklenmedi (kampanyaların kendi kapıları vardı).

## ④ NE İSTİYORUM
1. `ZAMAN-Z7-1008-PAD.diff` uygulansın (2 madde, veri anlamı değişmez) — evren kararından ÖNCE şart, yoksa `denetle.py` çöker.
2. Evren kararı (koordinatör/Z1): `olaylari_yukle()`ye `kronoloji_cok_once1281_*` + `kronoloji_cok_500_1000` + `kronoloji_cok_1923_1945` — Z5/Z6 kırılma yazmadan ÖNCE. Bedeli ölçüldü: 2t 13→419, mükerrer 95→217 (LİSTE beyanıyla). Öneri: önce `gun_no` 3 haneli yıla dayanıklı (Z1), uç günler muaf (Z1), sonra evren.
3. iran dosyasına `tur/onem/dunya/kapsam`: öneri `k`→`tur` birebir eşleme (mekanik) + `onem/dunya` için ayrı editoryal geçiş; ya da app.js'te puansız EK maddesi için "puansız" işareti (Z2). Bu oturum puan uydurmadı.
4. Z3'e: `naksa-dukaligi` 1205 maddesi (görünmez 1).
5. `ZAMAN-Z7-1008-MADDE.diff` uygulansın (4 madde, §②b). Öncelik 4'ün 4 maddesi TDV dışı akademik kaynak ister — sonraki tur, liste §D'de.
6. Z1'e iletildi: gun_no pad, uç gün muafiyeti, çıplak ufuk dizgileri. Z2'ye iletildi: §E'nin 6 bulgusu.

## Dosya listesi (hepsi `C:\atlas-umit\denetim\`e kopyalandı; commit/push YOK)
- `denetim/ZAMAN-Z7-1008.md` — bu rapor
- `denetim/ZAMAN-Z7-1008-PAD.diff` — 2 madde, 3 haneli yıl → 4 hane (once1281_afrika, once1281_dogu_asya)
- `denetim/ZAMAN-Z7-1008-MADDE.diff` — 4 yeni madde (1923_1945 ×3, once1281_iran ×1)
- İki diff bağımsız ve sıralı `git apply --check` temiz · temel `origin/makine/umit` e28edfdc · CR 0.
- Ölçüm betikleri oturum scratchpad'inde (bag.js · kalite.js · evren.js · dizin.js · evren2.py · olay.js · ekle2.py) — depoya girmedi.

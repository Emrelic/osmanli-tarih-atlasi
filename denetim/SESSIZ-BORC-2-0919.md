# SESSIZ-BORC-2 — teslim raporu (19 Eylül 2026)

Sevk: 1.MURAT M-4612 · kararlar M-4624 · soru M-4619 · dosya beyanı M-4630.
Commit YOK (sevk "commit DENEME"); paylaşılan dosyalar koordinatörde.

## ① SAYAÇ — `arac/durum_tablosu.py` (M-4624 ile devredildi)

**Yer:** sayaç `denetle.py`de DEĞİL, `durum_tablosu.py` `renksiz_kovalari()` +
`kimlik_evreni()`de. `kul` yalnız `s:`/`isg:` içindeki `d:` kimliğini sayıyordu.
`v:` dönemleri 2 Eylül'de kimlik taşımıyordu (dosyadaki yorum), sonradan `kid:` geldi.

**Ölçüm (değişiklik öncesi):** 484 `v:` dönemi · 328'inde `kid` · 17 kimlik (17'si künyede).
58 sessiz borcun **6'sı** `v:kid` ile zaten veride: cezayir-ocagi 41 · trablusgarp-ocagi 39 ·
sarki-rumeli 3 · cebel-i-lubnan-mutasarrifligi 1 · harfusogullari 1 · lubnan-emirligi 1.
⇒ GEMINI-DOGRULA'nın "~20" iddiası **sayaç hatası olarak 6**; kalan 14 künye veride
künyeye BAĞLI DEĞİLDİ (yalnız serbest `k:` etiketi ya da hiç etiket yok).

**Düzeltme:**
- `renksiz_kovalari(…, kul_v=None)` → `(delik, sessiz, tabi)`. Üçüncü kova **tâbi-çizili**:
  künye YALNIZ `v:kid` ile bağlı ve renksiz ⇒ delik değil (app.js himaye dolgusu
  BOYALAR[kid] yoksa #b2384a), sessiz borç değil. `s:`/`isg:` kullanımı varsa `v:kid`
  delikten kurtarmaz.
- `v_kid_sayaci(Y)` — `girdi.yukle()` çıktısından (regex değil).
- `kul` DEĞİŞMEDİ ⇒ `bosluk_kovalari`, `renk_kovalari`, yayın kapısı
  (`denetle_yayin` → `kimlik_evreni()`) aynen.
- Tablo satırı: `· ⚪ N tâbi-çizili (yalnız v:kid, delik değil)` + kapsam metni.
- C13 sınaması: 4 yeni dal (10/10 🟢). **Yan kusur düzeltildi:** `renksiz_kovalari`
  dalları `--sina` çıkış koduna HİÇ girmiyordu (hepsi 🔴 olsa da exit 0). Artık giriyor;
  iki yönde sınandı (sağlam 0 · bozuk fonksiyon 1).

**Önce/sonra (AYNI veri anlık görüntüsü, AYNI denetle çıktısı, eski ve yeni modül
yan yana):** değişen tek anahtar `renksiz_sessiz` 58 → 52, yeni anahtar `renksiz_tabi`
(6). Tablonun 19 satırından yalnız "Renksiz künye" satırı değişti.

## ② BORÇ — en önemli 10 (Osmanlı komşuluğu / büyüklük)

Önce her adayın toprağında BUGÜN hangi kimliğin boyadığı ve o kimliğin künye
penceresinin tutup tutmadığı ölçüldü (`harita:` takma adı çözülerek).

| # | künye | durum | ne yapıldı / ne gerek |
|---|---|---|---|
| 1 | `hersek` | ✅ UYGULANDI | Mostar `bosna`→`hersek` 1448→1483 · Trebinye 1448→1466-06-01. Eski dilimler HAYALETTİ (`bosna`=bosna-kralligi 1463-05-01'de bitiyor, veri 1466/1483'e dek). Kaynak: TDV mostar, TDV trebinye, TDV bosna-hersek, EB1911 'Bosnia and Herzegovina' (1448 unvanı). |
| 2 | `mora-despotlugu` | ✅ UYGULANDI | Mora (Tripoliçe) `bizans`→ 1349→1460-05-29 · Balyabadra 1430→1458-05-01. TDV mora (yıl). |
| 3 | `avusturya-cumhuriyet` | ✅ UYGULANDI | Viyana, Graz 1918-11-12→1923. Eski 2. dilim `avusturya` (habsburg, t 1918-11-11) HAYALETTİ; kırılma Viyana `kd:`ı ile aynı güne (11-12) çekildi. Parlament Österreich 'Geburt der Republik'. |
| 4 | `prusya-dukaligi` | ✅ UYGULANDI | Königsberg `almanya`→ 1525-04-08→1701-01-18. NDB 'Albrecht'. |
| 5 | `bosna-isgal` | 🟡 KARAR | 10 Bosna noktası `isg:avusturya` 1878-1908 (künye tutuyor, hayalet değil). TDV bosna-hersek: "Osmanlı Devleti’nin hakları 1908’deki kati ilhaka kadar resmen sürmüştü" ⇒ bugünkü `d:`+`isg:avusturya` anlamca doğru; künye idarî birim. Önerim: DOKUNMA, künyeyi "harita dışı" say. |
| 6 | `kibris-ingiliz` | 🟡 KARAR | 6 Kıbrıs noktası `s:ingiltere` 1878-06-04→ (Osmanlı hükümranlığı 1914-11-05'e dek). Seçenek A: `s:kibris-ingiliz` 1878→1914 · B: Bosna emsali `d:`+`isg:ingiltere`. Kaynak OKUNMADI (TDV kibris). |
| 7 | `italya-napolyon` | 🔴 AYRI SEVK | Milano, Brescia, Bergamo, Verona, Padova, Venedik, Mantova `s:avusturya` 1797-1814 dilimleri çoğunlukla yanlış (Cisalpin/İtalya Krallığı); Ferrara/Ancona `papalik`. Çok gün, 1799-1800 ara dönemi (GEMINI-DOGRULA: günü bulunamadı). |
| 8 | `kasim` | 🟡 KARAR | TDV kasim-hanligi KENDİYLE ÇELİŞİYOR: "Bazı kaynaklara göre 1445’te … bazılarına göre ise 1452-1456". Bitiş net: "1681 yılında … tarihe karıştı". Hanlık Moskova'nın vasalı — yabancı tâbiyi kendi rengiyle boyamak politika kararı. |
| 9 | `bavyera` | 🟡 KARAR | Münih, Nürnberg, Regensburg, Augsburg, Würzburg `s:almanya` ("Kutsal Roma / Almanya" 962-1923). 1806-1871 arası bir "Almanya" yok; kaba boyama. |
| 10 | `bohemya` | 🟡 KARAR | Prag `s:almanya` 1281-1526 (Kutsal Roma çatısı, kaba). Künye kaynağı "bulunamadı". |

**Kronoloji:** YENİ `data/olaylar_sessiz_borc_0919.js` (`window.OLAYLAR_SESSIZBORC0919`),
5 madde: 1349 · 1430 · 1448 · 1525-04-08 · 1918-11-12. Bağlama: yalnız **index.html satırı**
(1.MURAT) — app.js:5344 `OLAYLAR_*` anahtarlarını kendisi toplar, AMA bkz. ⑥.

## ⑥ 🔴 ACİL YAN BULGU — 100 kronoloji maddesi sitede YÜKLENMİYOR, denetim onları SAYIYOR
app.js:5345 süzgeci `/^OLAYLAR(_[A-Za-z0-9]+)?$/` — TEK altçizgi segmenti. `denetle.py`
`olaylari_yukle()` ise `window\.(OLAYLAR\w*)` ile HER adı okur. İki evren ayrışıyor:
| dosya | değişken | madde | index.html |
|---|---|---|---|
| olaylar_2s_0918.js | OLAYLAR_2S_0918 | 20 | bağlı |
| olaylar_2s_0919.js | OLAYLAR_2S_0919 | 71 | bağlı |
| olaylar_cukurova_0907.js | OLAYLAR_CUKUROVA_0907 | 6 | bağlı |
| olaylar_ortadogu_0919.js | OLAYLAR_ORTADOGU_0919 | 3 | bağlı |
| olaylar_senusi_0919.js | OLAYLAR_SENUSI_0919 | 5 | henüz bağlı değil |
⇒ **Değişmez 2/2s bu 100 (+5) maddeyle kapanıyor ama okuyucu onları GÖRMÜYOR** — "kronoloji ile
harita birbirini doğrular" amacının tam tersi. Çare iki yoldan biri (app.js sahibine):
(a) süzgeç `/^OLAYLAR(_[A-Za-z0-9_]+)?$/` · (b) değişkenleri tek segmente çevir (ben kendi
dosyamda (b)'yi yaptım: `OLAYLAR_SESSIZBORC0919`). Ayrıca `denetle.py` aynı süzgeci
kullanmalı ki bir daha ayrışmasın. Ölçüm: `grep -oh "window\.OLAYLAR[A-Za-z0-9_]*" data/*.js`.

**Renk:** `arac/renkler.py` 4 kimlik (`renk_olc --oner` → `--dogrula`: "✓ 0 fark",
"eşik altı komşusu yok"): avusturya-cumhuriyet #d2d224 (ΔE 15.1) · mora-despotlugu
#e41ec0 (12.7) · hersek #24c6d8 (16.9) · prusya-dukaligi #ba24d2 (14.7).
Artefakt `denetim/oneri-20260919-090639.txt`.

### ③ `kid:` bağlama (M-4624 (3)) — 44 `v:` dönemi, 7 künye
Yalnız etiket künyeyle BİREBİR + dönem künye penceresinde (±400 gün):
mekke-serifligi 13 · konstantin-beyligi 16 · dejanovic-prensligi 5 ·
orta-macar-kralligi 6 · dubrovnik 1 · arvanid-sancagi 2 · kaheti-kralligi 1.
Her dosyada metindeki `k:"…"` sayısı ayrıştırıcı sayısına eşit olmadan yazılmadı.
Sonra: `v:kid` 328 → **372** dönem, 17 → **24** kimlik.

**YAZILMAYAN (listelendi):**
- `erdel` — "Erdel Prensliği" etiketli 5 dönemin 4'ü 1541'de başlıyor, künye 1570
  (4d açılırdı): Erdel (Kaloşvar), Varad, Yanova, Lugos 1541-1551. Künye sınıf ②
  (genişlet: 1541 Doğu Macar Krallığı/Erdel) mı, etiket mi yanlış — KARAR. Lugos
  satırı SENUSI-NOKTA'nın (M-4633: "kid: EKLEME") — dokunulmadı.
- Etiketi olmayan / `d:` olan 7 künye: sabah-emirligi · sani-emirligi · girit-devleti ·
  tunus-ocagi · misir-eyaleti · sirbistan-eyaleti · crnojevic-zetasi. `kid` yazılamaz.

### Sayaç sonucu (yeni kod, güncel veri)
Sessiz borç **58 → 41** (−17: sayaç 6 · `kid` bağlama 7 · veriye inen yeni kimlik 4) ·
tâbi-çizili **13** · delik **0**.

## ④ GEMINI KUNYESIZ-23 iddiası — ÖLÇÜLDÜ: DOĞRU, sonucu ağır

`gemini/KUNYESIZ-23-0919.json`: "23 künyesiz kimliğin 22'si `harita:` ile künyede var,
denetle 4 id'ye bakıyor."
- **Doğru.** `denetle.py` `_devletler_yukle()` yalnız `{id: (f,t)}` döndürüyor; `degismez4`
  (satır ~1904) `kim not in K` ⇒ `kunyesiz` kovası ⇒ **Değişmez 4 / 4c / 4d / 4s bu
  dönemleri HİÇ ölçmüyor.** Çıktı: "992 dönem KÜNYESİZ kimlik kullanıyor (23 ayrı kimlik)
  — ölçülemedi". 23'ün 22'si takma ad; gerçekten künyesiz yalnız `__BOSLUK__`.
- **Gizlenen ihlal (ölçtüm):** takma ad → künye pencereleri birleşimi, tolerans 400 gün:
  **40 dilim · 6 kimlik** — bosna 19 (14 ÖNCE, 5 SONRA) · avusturya 8 · milanoduka 6 ·
  sardinya 3 · arnavutluk 2 · kaffa 2. Ör.: Viyana `avusturya` 1918-11-11→1923 (bugün
  düzeltildi) · Mostar `bosna` 1463→1483 (düzeltildi) · Saraybosna/Banaluka `bosna`
  1281→1377 · Torino/Nice/Chambéry `sardinya` 1720 öncesi · Milano/Verona/Padova/Brescia
  `milanoduka` 1395 öncesi · Akçahisar/Mat `arnavutluk` 1443 öncesi.
- **Öneri (denetle.py sahibine, düzeltme ayrı sorulacak):** `_devletler_yukle` takma adı
  künye pencereleri BİRLEŞİMİNE eşlesin; önce/sonra 4/4c/4d/4s sayıları yeni tavan ister.
  Alet: `py <scratchpad>/olc5.py` mantığı (40 dilim listesi yeniden üretilebilir).

## Denetim (tam koşu, değişikliklerden sonra) — SONUÇ: temiz
D1 3916 · 299 sahipsiz · D1b 0 · D2 579 kırılma 0 açık · D2s 1415 · 13 açık (önce 11; yeni
açılan 1541 Azemmûr/Safi BENİM DEĞİL — KIRILMASIZ-9 bölgesi) · D2i 1 · D2t 3 · D4 6 · 4c 130 ·
4d 356 · 4s 5 · D5 0 · D7 667 (ara koşuda 670 görüldü; başka oturumun eşzamanlı 3 `enklav:true`
beyanıyla 667'ye döndü — `degismez7()` doğrudan çağrılıp benim 4 kimliğimin listede OLMADIĞI ölçüldü).
⚠️ Yan etki: 1349-01-01 Mankup/İnkirman 2s kırılması (önce AÇIK) şimdi "kapalı" görünüyor —
sebebi benim 1349 Mora maddesi (±30 gün, yer bakmıyor). SAHTE KAPANIŞ; Kırım maddesi hâlâ borç.

## ⑤ Yan bulgular (dokunulmadı)
- Balyabadra `bizans` 1281→1430 YANLIŞ (TDV mora: Patras 1430'a dek Frank) — Akha künyesi YOK.
- Königsberg `almanya` 1281→1525 YANLIŞ (NDB: "Ordensstaat") — Cermen tarikatı künyesi YOK.
- Mostar: TDV "Gost Radivoj tarafından kuruldu" (XV. yy ortası) ama nokta 1281'den sahipli, `kur:` yok;
  `d:` 1483 — TDV "1466-1468’de Blagaj … fethedildikten az önce Mostar da zaptedilmiş olmalıdır".
- Künye `hersek` f:1435 kaynakla desteklenmiyor (TDV "XV. yüzyıl ortaları", EB1911 1448); t:1482 < Mostar 1483.
- Suçava, Çernovitz `s:avusturya` →1918-11-28 (habsburg t 11-11; 17 gün, tolerans içi ama takma ad yüzünden görünmez).
- Herseknovi, Foça, Konjic, Memel: şehir tanecikli tanıklık bulunamadı → yazılmadı.

## Nokta gerekir
Blagaj (Hersek merkezi) · Mistra/Mezistre (despotluk merkezi; Tripoliçe temsil ediyor) ·
Linz, Salzburg, Innsbruck, Klagenfurt (avusturya-cumhuriyet gövdesi 2 nokta).

## Değişen dosyalar
arac/durum_tablosu.py · arac/renkler.py · data/yerlesimler.js · data/yerlesimler_seyrek.js ·
data/yerlesimler_afrika.js · data/yerlesimler_ek.js · data/yerlesimler_ek_macaristan.js ·
data/yerlesimler_epir.js · data/yerlesimler_h2_kuzeyafrika.js · data/yerlesimler_ok101.js ·
data/yerlesimler_ok107.js · data/yerlesimler_nokta_ortadogu_0917.js ·
YENİ data/olaylar_sessiz_borc_0919.js · YENİ denetim/oneri-20260919-090639.txt ·
YENİ denetim/SESSIZ-BORC-2-0919.md
⚠️ yerlesimler.js'te başka oturumların commitsiz değişiklikleri de var (KRONO-2S-3,
SENUSI-NOKTA, GEMINI-DOGRULA) — dosya bütün olarak commitlenirken ayrıştırılamaz.

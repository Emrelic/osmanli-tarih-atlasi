# AVRUPA-SINIR-0077 — çalışma defteri ve teslim raporu

Şartname: `oturumlar/AVRUPA-SINIR-0077.md` · koordinatör YILDIRIM BAYEZIT · 27 Eylül 2026.
🔴 GÖVDE: ilk ölçümler 22 Eyl gövdesine (koşu 6, `e1cf22ba`) karşı yapıldı; koşu 15 çıktısı
(`9ce6c942`, 25 Eyl 20:55) inince **hepsi TEKRARLANDI**. Bu belgedeki bütün sayılar KOŞU 15
gövdesinindir (`data/devletler_harita.js` + `data/donemler.js` + `data/bolgeler.js` 25 Eyl).
Aletler `denetim/AVRUPA-SINIR-0077-*.{js,py}` (node, `C:/atlas`ten koşar; `hat_tasma` ilk koşuda
`-yer_dok.py` ile `-yer.json` döker — o JSON commitlenmez): `nokta_govde.js` (nokta-içinde sorgusu, çözüm
`ARAC-D-RENK-0073-GOVDEGUN.js` ile aynı) · `hat_tasma.js` (D hattının iki yanı, 3 km adım, 5 km
örnek + 1→25 km kesintisiz taşma derinliği, taşan örneği en yakın karşı-sahipli yerleşime bağlar)
· `bolge_tasma.js` (BOLGELER × gövde) · `hat_kiyas.js` (iki hattın örtüşmesi).
⚠️ `hat_tasma` HAM gövdeyi ölçer (motor çıktısı). Tarayıcının yaslaması (`js/d_katman.js`,
hukukî görünümde yalnız **E/F**, fiilîde **D/E/F**, C hiçbir zaman) ekranda E hatlarını düzeltir;
yaslama sonrası sayı bu oturumda ÖLÇÜLMEDİ (tarayıcı koşturulmadı) — önceki kolların B9
ölçümleri yerinde anıldı.
⚠️ `hat_tasma` derinliği 25 km'de keser: "24 km" = **≥ 24 km**.

## 0. ÖNGÖRÜ — H-0069 ölçümünden ÖNCE yazıldı (27 Eyl ~11:40) ve SINAVI

Evren: `BOLGELER` (k1/k2 bölge poligonları) × o gün boyalı gövdeler. Sınav anı: `bolge_tasma.js` ilk koşusu.
Mekanizma varsayımı (görselden): bölge poligonu ZAMANDAN BAĞIMSIZ tek geometri (yalnız f/t görünürlük),
sınır ise tarihle kayıyor ⇒ taşma = poligonun sonraki/önceki bir dönemin peteklerinden kurulmuş olması.
- Ö1 · 1920-04-23 Trakya kutusunda (25,5–28,5 D · 40,5–42,5 K) en az **3** bölge Bulgaristan gövdesine taşar;
  hatta en derin taşma **≤ 20 km**.
- Ö2 · 1920-04-23 dünya genelinde taşan bölge **≥ 10**.
- Ö3 · İki yön sınaması: aynı alet 1914-01-01'de (sınır 1913 Konstantinopolis/İstanbul antlaşmasıyla
  yerleşmiş, bölgeler Osmanlı içinde) Trakya'da **≤ 1** taşan bölge vermeli; vermezse alet bölge ile
  gövdeyi ayırt etmiyor demektir.

**SINAV:**
- Ö1 **ÇÜRÜDÜ — ve yanlış katmanı hedeflemişti.** 1920-04-23'te Trakya'da görünen bölge **0**:
  `BOLGELER` Edirne `t:"1920-04-23"` (açık uç) ⇒ o gün çizilmez. Emre'nin görselindeki koyu bordo
  çizgiler `bolge-cizgi` (kesikli, kahve, %50) DEĞİL, gövde parçalarının dış hattıdır
  (`osmanli-cizgi`/`devlet-cizgi`: tek tek yerleşim peteklerinin sınırı). ⇒ H-0069'un doğru ölçümü
  §2'deki `hat_tasma`dır.
- Ö2 ölçülmedi (Ö1 çürüyünce anlamsız kaldı).
- Ö3 ✓ şekil olarak tuttu (1914'te 3 görünür bölgeden **1** taşıyor) ama o bir tanesi büyük bir
  bulgu: **Edirne k1 bölgesi 1914-01-01'de %52,5'i Bulgaristan gövdesinde — ~21.958 km²**, hatta en
  uzak nokta 156 km (1920-04-22'de aynı: 21.958 km²). Bölge poligonu 1913'te kaybedilen Batı
  Trakya'yı taşıyor. Alet iki yönde ateşledi: 2 bölge temiz, 1 kusurlu.

## 1. (a) AVUSTURYA-MACARİSTAN — nokta-içinde, koşu 15 gövdesi

| şehir | 1918-11-12 | 1920-08-10 | 1923-09-01 | olması gereken (1923) | kök |
|---|---|---|---|---|---|
| Viyana · Linz · Salzburg · Innsbruck · Graz · Klagenfurt · Feldkirch · Bregenz · Freistadt | avusturya-cumhuriyet | ✓ | ✓ | ✓ | koşu 15 `a78_avrupa`yı gördü — **ÇÖZÜLDÜ** |
| **Maribor** | avusturya-cumh. | avusturya-cumh. | **avusturya-cumh.** | yugoslavya | 40 km'de nokta 0 → **p77'ye yazıldı** |
| **Eisenstadt** | macaristan | macaristan | **macaristan** | avusturya-cumh. (1921-11-13'ten) | Burgenland'da nokta 0 → **p77'ye yazıldı** |
| **Pola** | yugoslavya | yugoslavya | **yugoslavya** | italya (Rapallo md.1) | 43 km'de nokta 0 (en yakın Cres) — YAZILMADI, onaylı listede yok |
| **Rijeka** | yugoslavya | yugoslavya | **yugoslavya** | Fiume Serbest Devleti (Rapallo md.4) | nokta 0 · künye YOK (açılmadı, M-5219) |
| **Zadar** | gövde YOK | gövde YOK | **gövde YOK** | italya (Rapallo md.2) | kayıt `yugoslavya` 1918→1923 → **yama** |
| **Opava** | almanya | almanya | **almanya** | cekoslovakya | 50 km'de nokta 0 (Çek Silezyası) — YAZILMADI |
| **Subotica** | macaristan | macaristan | **macaristan** | yugoslavya | 40 km'de nokta 0 (Kuzey Bačka) — YAZILMADI |
| Sarajevo | **sirbistan** | yugoslavya | yugoslavya | — | 1918-11-12'de SHS Devleti yerine Sırbistan (künye yok; küçük) |
| Bozen · Brixen · Trento · Trieste · Gorizia · Ljubljana · Zagreb · Prag · Brno · Bratislava · Košice · Uzhhorod · Kraków · Lviv · Cernăuți · Cluj · Timișoara · Oradea · Budapeşte · Novi Sad | ✓ | ✓ | ✓ | ✓ | — |

Rapallo metni birincil kaynaktan okundu (LNTS c.18 s.397-403; `forost.ungarisches-institut.de/pdf/19201112-1.pdf`):
md.2 *"Zara … shall be recognised as forming part of the Kingdom of Italy"* · md.4 *"… recognise the State of
Fiume as being completely free and independent"*.

**D hatları (benim dosyalarım):** at-cs, at-cs-morava, at-yu-stiriya, at-yu-karintiya, at-hu-1..4,
at-hu-sopron, hu-cs-1..3/rutenya, hu-yu ×3, hu-ro, it-at ×2, ch-at ×2 1923'te çiziliyor. Renk
oturmamasının kökü yukarıdaki gövde; D dosyalarında düzeltilecek bir şey BULUNAMADI.
Not (dokunulmadı): `d1923-it-at-1/2` `f:"1920-01-01"` — Saint-Germain yürürlüğü 1920-07-16, İtalya'nın
ilhak yasası 1920-10-10; `-01-01` biçimi yıl-temsilî görünüyor (D210 adayı), üreticisi
`ARAC-D3BATI-URET-0916.py` — "elle düzenleme" yasağı olduğu için yazılmadı.

### 1.1 Yazılan: `data/yerlesimler_p77_avrupa.js` (2 nokta)
| nokta | s: | kaynak |
|---|---|---|
| Maribor (Marburg) 46.5558, 15.6459 | almanya →1526-08-29 → avusturya →1918-11-11 → yugoslavya | GeoNames 3195506 · AEIOU *Steiermark/Geschichte* (1276/1282 + Saint-Germain) · gov.si (1 Kasım 1918 Maister) |
| Eisenstadt (Kismarton) 47.8457, 16.5233 | macaristan →1526-08-29 → avusturya →1918-11-11 → macaristan-naiplik →1921-11-13 → avusturya-cumhuriyet | GeoNames 2780190 · AEIOU *Burgenland/Geschichte* · MilAk *Das Gefecht von Kirchschlag* (13 Kasım 1921 Bundesheer girişi) |

Bildirilen sapmalar (kayıtta yazılı): Maribor kaynak günü 1918-11-01, alan 1918-11-11 (habsburg künyesi
t:); `yugoslavya` 20 gün, `macaristan-naiplik` 5 gün künye aşımı (Ljubljana/Sopron ile aynı sınıf,
D205 ②: künye genişletme adayı). Eisenstadt günü bölge günüdür. 1463/1491–1647 Habsburg rehni şehir
taneciğinde okunmadı → yazılmadı.
YAZILMAYANLAR: Oberwart, Güssing (güney Burgenland günü yalnız Vikipedi türevlerinde bulundu — §4) ·
Salzburg (koşu 15'te zaten doğru) · Rijeka (künye yok).

**Sınav:** `girdi.oku_dosya` ✓ · bilinmeyen alan 0 · bütün `d:` kimliklerinin BOYALAR karşılığı ✓ ·
3 km mükerrer 0 · `denetle.py` ✓ tümü (1: 4296 yerleşim, 314 sahipsiz · 2: 0 açık · 2s: 1658
kırılma, **180 açık** — dosya listeden çıkarılıp tekrar koşuldu: **179** ⇒ dosyamın etkisi **+1 açık**
= 1921-11-13 Burgenland, ±30 günde maddesi yok).
Bağlama: `arac/girdi_listesi.py` (+2 satır, M-5234 izniyle) · `index.html:1248` (+1 satır, M-5240).
`denetle_yayin.py`: ① MOTOR VAR · TARAYICI YOK ✓ 0 ihlal; kalan "git'te izlenmiyor" commit ile kapanır.

## 2. (b) D TİPİ SINIRA RENK OTURMAMASI — ham gövde, koşu 15

| hat (dosya) | sınıf | gün | sol yan doğru | sağ yan doğru | en büyük taşmalar (petek · yan · derinlik) |
|---|---|---|---|---|---|
| d1920-tbmm-bg (d_sinirlar) | E | 1920-04-23 | BG %88 | TR **%46** | Mustafapaşa, Umur Fakih, Malko Tırnova (BG) TR'ye ≥24 km · Rezve 18 · Edirne (TR) BG'ye 20 · Lalapaşa 10 · Demirköy 9 |
| d1923-tr-bg | E | 1923-09-01 | BG %89 | TR **%43** | aynı; Edirne 12 km |
| d1923-tr-gr-1 | E | 1923-09-01 | GR %82 | TR %82 | Dimetoka (GR) TR'ye ≥24 · Havsa, Küfkaynapınarı (TR) GR'ye ≥24 · Feres, Sofulu 16 |
| d1922-mudanya-meric | **D** | 1922-11-17 | TR %75 | GR %76 | aynı küme (Dimetoka ≥24 · Küfkaynapınarı ≥24) |
| d1923-tr-ir-1 | E | 1921-03-28 = 1923-09-01 | İR %67 | TR %67 | Doğubayazıt, Çaldıran (TR) İran'a ≥24 · Mâku (İR) 7 |
| d1923-tr-ir-2 | E | aynı | İR **%17** | TR %89 | **Başkale, Bacirge (TR) İran'a ≥24 km** · Kotur 9 |
| d1923-tr-ir-3 | E | aynı | İR %55 | TR %73 | küçük (≤6 km) |
| g1-osm-ir (komsu) | E | 1920-05-27 | OSM **%0** (271/405 örnek `ingiltere`) | İR %41 | **taraf uyuşmazlığı**, aşağı |
| d1923-iq-ir (komsu) | E | 1923-09-01 | IQ %58 | İR **%41** | Kürne, Ammâre, Kût, Hânekîn, Rewândiz (IQ) İran'a ≥24 · Havîza, Kasr-ı Şîrîn, Merîvan, Bâne, Serdeşt (İR) Irak'a ≥24 |
| d1923-sscb-ir-…-aras-talis (komsu) | **C** | 1923-09-01 | İR **%40** | SSCB %81 | Astara, Lenkeran, Salyan, Şuşa, Ordubad, Nahçıvan (SSCB) İran'a ≥24 · Erdebil, Culfa (İR) ≥24 |
| d1923-bg-ro-tuna (komsu) | **C** | 1920-01-28 = 1923-09-01 | RO **%35** | BG %90 | **Vidin, Niğbolu (BG) Tuna'nın kuzeyine ≥24 · Rusçuk 22 · Plevne 10** · Krayova (RO) ≥24 |
| d1923-bg-shs-1 (komsu) | E | aynı | YU %56 | BG %49 | Köstendil (BG) ≥24 · Pirot (YU) ≥24 |
| d1923-bg-shs-2 | E | aynı | YU %40 | BG %98 | Köstendil ≥24 · Petriç 9 |
| d1923-gr-bg-dogu (komsu) | **D** | 1923-09-01 | GR %100 | BG **%4** | Çirmen, Sofulu, Gümülcine, İskeçe, Drama (GR) BG'ye ≥24 |
| d1923-be-lu (avrupa_bati) | E | 1923-07-24 | LU **%0** | BE %100 | Arlon, Bastogne, St. Vith (BE) LU'ya ≥24 |
| d1923-be-nl-1 | E | aynı | NL **%0** | BE %100 | Brugge, Gent, Anvers (BE) Zeeuws-Vlaanderen'e ≥24 |
| d1923-be-nl-2 | E | aynı | NL %59 | BE %42 | Anvers ≥24 · Maastricht, Nijmegen (NL) BE'ye ≥18 |
| d1923-nl-de | E | aynı | NL %67 | DE **%40** | Aachen, Münster (DE) NL'ye ≥24 · Maastricht, Nijmegen, Groningen (NL) DE'ye ≥24 |
| d1923-be-de | E | aynı | DE %41 | BE %64 | Aachen, St. Vith ≥24 |
| d1923-be-fr | E | aynı | FR **%12** | BE %98 | Virton, Neufchâteau, Namur, Mons, Tournai, Ypres (BE) Fransa'ya ≥24 |
| d1923-fr-de | E | aynı | FR %95 | DE **%24** | Strazburg (FR) Almanya'ya ≥24 |
| d1923-ch-de | E | aynı | DE %36 | CH %83 | Basel, Zürih (CH) Almanya'ya ≥24 · Konstanz ≥24 |
| d1923-fr-ch-1 / -2 | E | aynı | FR %0 / %46 | CH %100 / %79 | Cenevre, Lozan, Bern (CH) Fransa'ya ≥24 |
| d1923-lu-de | C | aynı | LU %54 | DE %49 | Trier ≥24 |
| d1923-fr-lu | E | aynı | — | — | 5+5 örneğin hepsi `belcika` (Esch güneyi) |

**Pozitif/negatif kontrol:** `d1923-fr-de` Fransa yanı %95 (temiz yan), aynı hattın Almanya yanı %24
(kusurlu yan) — alet iki yönde ayırt ediyor. Önceki kolların yaslama SONRASI ölçüleri
(tarayıcı): fr-de %71→%96, be-lu %45→%86 (`SINIR-D-AVRUPA-BATI-0077.md`), tr-ir-1 %69→%100,
tr-ir-2 %50→%100 (`SINIR-D-ASYA-0077.md` B9) ⇒ E hatlarında dolgu ekranda düzeliyor; ham taşma
yaslamanın kapattığı alanı gösterir.

**Nokta-içinde doğrulamalar (1923-07-24):** Lüksemburg şehri, Esch, Diekirch → luksemburg ✓ ·
**Wiltz → belcika + luksemburg (ÇAKIŞMA)** · Terneuzen, Hulst → **belcika** (Zeeuws-Vlaanderen) ·
Roermond → **almanya** (Hollanda Limburg'u) · Enschede → **almanya** (Twente) · Venlo → hollanda ·
Strasbourg → fransa ✓ · Kehl → fransa (Ren'in doğu yakası; doğruluğu ölçülmedi).

**Çift çizgi taraması (H-0015/H-0084):** aynı gün aynı yerde iki kayıt ARANDI:
tr-ir-3 ↔ iq-ir medyan 10 km ama iq-ir tam üçlü noktada (37.1419K) bitiyor ⇒ çift hat DEĞİL ·
tbmm-bg ↔ yunan-isgal-bg birebir aynı hat, 1920-07-01→1922-10-14 ikisi de etkin — `_dYaslaAdaylari`
bunu bilerek tekilleştiriyor (görünüm önceliği), kusur değil · mudanya-meric ↔ tr-gr-1 pencereleri
ardışık, çakışmıyor. ⇒ "İkinci çizgi" bir D kaydı DEĞİL; en olası açıklama ham gövde parçalarının
dış hattı (Başkale/Bacirge petekleri İran'a ≥24 km). Tarayıcıda doğrulanmadı.

## 3. H-78:4 VENEDİK

- Nokta VAR: `Venedik` (yerlesimler.js:1014) 1281→1797 `venedik` ✓. Renk sözlüğü sorunu DEĞİL.
- **① GÖVDE ÇAKIŞMASI (koşu 15'te de sürüyor):** Venedik noktası 1281-01-01 ve 1400-01-01'de
  **hem `venedik` hem `milanoduka`** gövdesinin içinde; Mestre, Treviso, Padova → milanoduka;
  1405-12-01'de hepsi venedik ✓. Çakışma 1281 → 1405-11-22 (Padova'nın milanoduka bitişi) arası
  ≈124 yıl. Motor/gövde kusuru — `kd:` düşürmez (CLAUDE.md §3). Dokunulmadı.
- **② HAYALET:** `milano-dukaligi` künyesi f:1395-05-11; 6 kayıt 1281'den milanoduka.
  Sınıflandırma `AVRUPA-SINIR-0077-yama.txt`de: Milano ② (aynı polity, künye genişletme adayı, gün
  kaynağı okunmadı) · Verona/Padova/Brescia/Bergamo/Parma = D204 "yer yanlış" (künye aşımı değil).
- Görsel 2'deki açık yeşil (Udine, Trento 1281) = `almanya` (Kutsal Roma) ✓ Emre'nin tahmini doğru.

## 4. HÜKÜMLER — 13 madde

| madde | hüküm | gerekçe (kısa) |
|---|---|---|
| **H-0048** Avusturya Cumhuriyeti görünmüyor | **kosu-bekliyor** | Koşu 15 ile Viyana-Linz-Salzburg-Tirol-Vorarlberg-Freistadt avusturya-cumhuriyet ✓ (ÇÖZÜLDÜ kısmı). Kalan Maribor/Eisenstadt p77'de, koşu bekliyor. Ek okuma yüzü benim dosyam değil (EKOKUMA kolu). |
| **H-0059** A-M'nin parçalanması haritası | **kosu-bekliyor** (kısmen **sirada**) | p77 iki nokta koşu bekliyor. Kalan boşluklar sırada: Pola/İstria (nokta 0), Opava (nokta 0), Subotica (nokta 0), Rijeka (künye yok), Zadar (yama koordinatörde). |
| **H-0077** Avusturya + Çekoslovakya haritası | **kosu-bekliyor** (Çekoslovakya **sirada**) | Avusturya batısı koşu 15'te ÇÖZÜLDÜ (Feldkirch/Bregenz/Innsbruck/Freistadt ✓, Brixen italya ✓). Çekoslovakya: Opava 1923'te almanya — Çek Silezyası'nda nokta yok. |
| **H-0003** TR-GR sınırı bozuk (1922-11-17) | **senin-kararin** | O gün çizilen hat `d1922-mudanya-meric` **D** sınıfı ⇒ hukukî görünümde yaslanmaz (kural `_D_YASLA_SINIF_HUKUKI = {E,F}`). Ham gövde: Dimetoka (GR) TR'ye ≥24 km, Küfkaynapınarı/Havsa (TR) GR'ye ≥24. Karar: bir taraf çifti için o gün E yoksa D hukukî görünümde de yaslansın mı? (`js/d_katman.js`, benim değil). |
| **H-0014** İran-Rusya kesik çizgiye renk oturmuyor | **senin-kararin** | Hat `d1923-sscb-ir-DEGISTI-aras-talis` **C** ⇒ hiçbir görünümde yaslanmaz (kural). İran yanı %40 doğru; Sovyet petekleri (Astara, Lenkeran, Nahçıvan, Ordubad, Şuşa) İran'a ≥24 km. Çare: ya kaynakla C→E (1921 Sovyet-İran antlaşması 1881 hattını tanır — okunmadı) ya C yaslaması kuralı. Dosya `d_sinirlar_komsu.js` (benim değil). |
| **H-0015** TR-İR 1923 iki çizgi | **olculecek** | Aynı yerde eşzamanlı iki D kaydı YOK (ölçüldü, §2). Ham taşma: tr-ir-2'de İran yanı %17 — Başkale ve Bacirge petekleri İran'a ≥24 km; ikinci çizgi büyük ihtimalle bu gövde kenarı. Yaslama sonrası tarayıcıda ölçülmedi (ASYA B9: 1923'te dolgu %100). Dosya `d_sinirlar.js` (benim değil). |
| **H-0084** TR-İR bozukluğu (1921-03-28) | **olculecek** | H-0015 ile aynı kök, aynı sayılar (1921-03-28'de tbmm-turkiye gövdesi var, çakışma yok). |
| **H-0070** Osmanlı-İran, İngiliz işgalinde renk oturmuyor | **senin-kararin** | Emre'nin teşhisi ölçüyle doğrulandı: 1920-05-27'de `g1-osm-ir` tarafları `osmanli`/`kacar`, ama Irak yanındaki 405 örneğin **271'i `ingiltere`**, 0'ı osmanli ⇒ yaslama Osmanlı gövdesini bulamaz, çalışamaz. 1921-08-23 sonrası `d1923-iq-ir`de de iki yön ≥24 km taşma (Irak yanı %58, İran %41). Çare iki yol: işgal dönemi için `ingiltere`-`kacar` tarafları taşıyan kayıt (komsu dosyası) ya da yaslamanın tarafı `isg:`den çözmesi (d_katman.js). İkisi de benim dosyam değil. |
| **H-0065** Bulgaristan D sınırına renk oturmuyor | **olculecek** | bg-shs-1/2 **E**; ham: Köstendil (BG) Yugoslavya'ya ≥24, Pirot (YU) BG'ye ≥24. E yaslanır; tarayıcı sonrası ölçülmedi (KOMSU B9: bg-shs-1 %54→%100). 🔴 Kayıt kusuru: bg-shs-1/2 `f:"1920-01-01"` yıl-temsilî (Neuilly 1919-11-27 imza, 1920-08-09 yürürlük) — Strumica 1920-01-28'de YU çiziliyor. Dosya komsu (benim değil). |
| **H-0066** Bulgaristan kuzey (kesik) sınırı | **senin-kararin** | Hat `d1923-bg-ro-tuna` **C** ⇒ yaslanmaz. Romanya yanı %35: Vidin, Niğbolu, Rusçuk petekleri Tuna'nın kuzeyine 22–24+ km. Kök: Romanya kıyısında nokta seyrek (Krayova ≥24 km güneye taşıyor). Çare: Tuna'nın Romen kıyısına nokta (A katmanı) ya da C→E. |
| **H-0069** şehir bölgesi ülke sınırını aşamaz | **senin-kararin** (ölçüm teslim) | Ölçüm: 1920-04-23 `d1920-tbmm-bg` (201 km, E): **10 petek** hattı aşıyor — BG→TR: Mustafapaşa ≥24, Umur Fakih ≥24, Malko Tırnova ≥24, Rezve 18, Malak Dervent 3, Ahtapolu 2, Çirmen 1 km · TR→BG: **Edirne 20, Lalapaşa 10, Demirköy 9 km**. TR yanında 67 örneğin 36'sı Bulgar gövdesinde. 1923-09-01 (`d1923-tr-bg`): 9 petek, Edirne 12 km. Ek bulgu: `BOLGELER` Edirne k1 poligonu 1914/1920'de ~21.958 km² Bulgaristan gövdesinde. Kural koordinatörün (şartname). |
| **H-0088** NL-BE-LU-CH-FR-DE sınırları | **sirada** | Benim dosyam; D hatları DOĞRU konumda (be-lu hat koordinatı sınırın üstünde, doğrulandı). Kusur A katmanında: Kuzeybatı Lüksemburg Belçika (LU yanı %0, Wiltz çakışık), Zeeuws-Vlaanderen Belçika (NL yanı %0), Hollanda Limburg'u (Roermond) ve Twente (Enschede) Almanya, Belçika'nın güney kenarı Fransa'ya ≥24 km. Çare: nokta (Terneuzen, Hulst, Roermond, Enschede, Clervaux…) — p77 dosyası onay alırsa yazarım. |
| **H-78:4** Venedik = Milano Dükalığı | **senin-kararin** | §3: nokta var; kusur ① gövde çakışması (motor, 1281–1405) ② milanoduka hayaleti (sınıflandırıldı, yama.txt). Her ikisi de M-5219 gereği koordinatörde. |

## 4b. TARAYICI ÖLÇÜMÜ — üç `olculecek` madde (M-5257, 27 Eyl)

Alet: `SINIR-D-ORTADOGU-0077-olc.js` (`SDO_YASLA`: yaslamanın KENDİ kodu `_dYaslaGuncelle`,
bölme gizli olduğu için kaynak yazımı taklitli) + `SINIR-D-ASYA-0077-olc.js` (5 km iki yan,
adım 5 km; `ham` = petek gövdesi, `son` = yaslanmış gövde). Önizleme `arac/sunucu.py`, koşu 15 verisi.

| hat | gün | ham | **son (ekran)** | yaslandı | kalan yanlış örnek |
|---|---|---|---|---|---|
| d1923-tr-ir-1 (126 km) | 1921-03-28 · 1923-09-01 | %66 | **%100** | ✓ | — |
| d1923-tr-ir-2 (52 km) | aynı | %60 | **%100** | ✓ | — |
| d1923-tr-ir-3 (31 km) | aynı | %66,7 | **%75** | ✓ | 3 örnek üçlü noktada: `ingiltere` (1921) / `irak-kralligi` (1923) + 1 `kacar` |
| d1923-bg-shs-1 (297 km) | 1920-01-28 · 1923-09-01 | %51,7 | **%99,2** | ✓ | 1 (22.374, 42.276 yugoslavya) |
| d1923-bg-shs-2 (141 km) | aynı | %67,9 | **%98,2** | ✓ | 1 (22.977, 41.314 yunanistan — üçlü nokta) |

**Yaslama süresi (bu makine, soğuk):** 1923-09-01 → **64,9 sn** (120 hat) · 1920-01-28 → **39,2 sn**
(83 hat). (1921-03-28 satırı `sn:0` döndü — imza önbelleği; sayılar 1923 koşusuyla birebir aynı
olduğu için geçerli sayıldı.)

**Hüküm:** yaslama BİTTİĞİNDE dolgu bu üç maddenin hatlarına oturuyor (tr-ir-1/2 %100, bg-shs
%98–99). Emre'nin H-0015/0084/0065 görsellerindeki taşma, ham gövdenin ölçtüğüm taşmasıyla
(Başkale/Bacirge ≥24 km, Köstendil/Pirot ≥24 km) birebir örtüşüyor ⇒ en olası açıklama
**görüntünün yaslama tamamlanmadan (40–65 sn) alınmış olması**; yani kullanıcı zaman çubuğunu her
oynattığında ilk ~bir dakika ham gövdeyi görür. Bu bir VERİ kusuru değil, BAŞARIM kusurudur
(`js/d_katman.js`, benim dosyam değil). "İkinci çizgi" = aynı ham gövdenin kenarı; yaslama bitince
kaybolması beklenir — görünür bölmede ekran görüntüsüyle DOĞRULANMADI (bölme gizliydi, MapLibre
çizmedi). tr-ir-3'ün kalan %25'i üçlü noktadaki üçüncü devlet (Irak), kusur değil.
Hükümler güncellendi: H-0015 → **zaten-dogru** (yaslama sonrası %100; gecikme ayrı kalem) ·
H-0084 → **zaten-dogru** (aynı) · H-0065 → **zaten-dogru** (%98–99; `f:"1920-01-01"` kayıt kusuru
ayrıca duruyor, dosya komsu).

## 5. Bulunamadı
- Oberwart/Güssing'in Avusturya'ya geçiş günü (yalnız Vikipedi türevleri: 25–28 Kasım 1921).
- Zadar'ın 1918 İtalyan işgal günü (Rapallo'da yok; LZMK 'zadar' 1918'i anmıyor).
- Visconti senyörlüğünün Milano'daki başlangıç günü (okunmadı).
- Yaslama SONRASI ekran oranları (tarayıcı koşturulmadı).
- Subotica için TDV maddesi (TDV 'subotica' yalnız SIRBİSTAN maddesinde nüfus/konum; 'sabatka' 0 sonuç).
